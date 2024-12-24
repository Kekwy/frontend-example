import { ElMessage, TableColumnCtx } from 'element-plus';
import { i18n } from '/@/lang';
import type baTableClass from '/@/utils/baTable';
import { ftBuild, ftDeploy, ftInvoke } from '/@/api/dashboard';

/**
 * 获取单元格值
 */
export const getCellValue = (row: TableRow, field: TableColumn, column: TableColumnCtx<TableRow>, index: number) => {
    if (!field.prop) return '';

    const prop = field.prop;
    let cellValue: any = row[prop];

    // 字段 prop 带 . 比如 user.nickname
    if (prop.indexOf('.') > -1) {
        const fieldNameArr = prop.split('.');
        cellValue = row[fieldNameArr[0]];
        for (let index = 1; index < fieldNameArr.length; index++) {
            cellValue = cellValue ? cellValue[fieldNameArr[index]] ?? '' : '';
        }
        return cellValue;
    }

    // 若无值，尝试取默认值
    if (cellValue === undefined || cellValue === null) {
        cellValue = field.default;
    }

    // 渲染前格式化
    if (field.renderFormatter && typeof field.renderFormatter == 'function') {
        cellValue = field.renderFormatter(row, field, cellValue, column, index);
        console.warn('baTable.table.column.renderFormatter 即将废弃，请直接使用兼容 el-table 的 baTable.table.column.formatter 代替');
    }
    if (field.formatter && typeof field.formatter == 'function') {
        cellValue = field.formatter(row, column, cellValue, index);
    }

    return cellValue;
};

export const appOptButtons = (): OptButton[] => {
    return [
        {
            render: 'tipButton',
            name: 'edit',
            title: 'Edit',
            text: '',
            type: 'text',
            icon: 'fa fa-code',
            class: 'table-opt-button',
            disabledTip: false,
            click: async (row, field, baTable: baTableClass) => {
                // TODO: 打开编辑器
                window.open('https://www.baidu.com', '_blank');
            },
        },
        {
            render: 'tipButton',
            name: 'build',
            title: '构建',
            text: '',
            type: 'text',
            icon: 'fa fa-wrench',
            class: 'table-opt-button',
            disabledTip: false,
            click: async (row, field, baTable: baTableClass) => {
                console.log(row);
                console.log(baTable)
                row.status = 'building';
                try {
                    ElMessage.success('Project is building...');
                    const res = await ftBuild({
                        path: row.path,
                        name: row.name
                    });
                    ElMessage.success(res.data?.message)
                    row.status = 'builded';
                } catch (err: any) {
                    ElMessage.error(err?.message)
                }
            },
        },
        {
            render: 'tipButton',
            name: 'deploy',
            title: '部署',
            text: '',
            type: 'text',
            icon: 'fa fa-cloud-upload',
            class: 'table-opt-button',
            disabledTip: false,
            click: async (row, field, baTable: baTableClass) => {
                console.log(row);
                row.status = 'deploying'
                try {
                    ElMessage.success('Project is deploying...');
                    const res = await ftDeploy({
                        path: row.path,
                        name: row.name
                    });
                    row.status = 'deployed'
                    ElMessage.success(res.data?.message)
                } catch (err: any) {
                    ElMessage.error(err?.message)
                }
            },
        },
        {
            render: 'multiSelectDropdownButton',
            name: 'invoke',
            title: '调用',
            text: '',
            type: 'text',
            icon: 'fa fa-play',
            class: 'table-opt-button',
            disabledTip: false,
            multiSelectDropdownMenu: {
                async confirm(selected, row, field, baTable) {
                    // 根据 command 进行不同方式的调用
                    console.log(selected);
                    console.log(row);
                    selected.forEach(async (mode) => {
                        row.status = 'running'
                        try {
                            const res = await ftInvoke({
                                path: row.path,
                                name: row.name,
                                mode: mode
                            });
                            row.status = 'stopped'
                            ElMessage.success(res.data?.message)
                        } catch (err: any) {
                            ElMessage.error(err?.message)
                        }
                    })

                },
                items: [
                    {
                        command: 'baseline',
                        name: 'baseline',
                    },
                    {
                        command: 'spilot',
                        name: 'spilot',
                    },
                ],
            },
        },
        {
            render: 'tipButton',
            name: 'status',
            title: '状态',
            text: '',
            type: 'text',
            icon: 'fa fa-info-circle',
            class: 'table-opt-button',
            disabledTip: false,
            click(row, field, baTable: baTableClass) {
                // TODO: 根据 row.id 调用后端 API 获取对应应用的容器状态
                console.log(row.id);
                baTable.form.items = {
                    status: '从后端获取的状态信息',
                };
                baTable.toggleForm('ViewContainerStatus');
            },
        },
        {
            render: 'confirmButton',
            name: 'delete',
            title: 'Delete',
            text: '',
            type: 'text',
            icon: 'fa fa-trash',
            class: 'table-opt-button',
            popconfirm: {
                confirmButtonText: i18n.global.t('Delete'),
                cancelButtonText: i18n.global.t('Cancel'),
                confirmButtonType: 'danger',
                title: '确认要删除当前应用吗？',
            },
            disabledTip: false,
        },
    ];
};

/*
 * 默认按钮组
 */
export const defaultOptButtons = (optButType: DefaultOptButType[] = ['weigh-sort', 'edit', 'delete']): OptButton[] => {
    const optButtonsPre: Map<string, OptButton> = new Map([
        [
            'weigh-sort',
            {
                render: 'moveButton',
                name: 'weigh-sort',
                title: 'Drag sort',
                text: '',
                type: 'info',
                icon: 'fa fa-arrows',
                class: 'table-row-weigh-sort',
                disabledTip: false,
            },
        ],
        [
            'edit',
            {
                render: 'tipButton',
                name: 'edit',
                title: 'Edit',
                text: '',
                type: 'primary',
                icon: 'fa fa-pencil',
                class: 'table-row-edit',
                disabledTip: false,
            },
        ],
        [
            'delete',
            {
                render: 'confirmButton',
                name: 'delete',
                title: 'Delete',
                text: '',
                type: 'danger',
                icon: 'fa fa-trash',
                class: 'table-row-delete',
                popconfirm: {
                    confirmButtonText: i18n.global.t('Delete'),
                    cancelButtonText: i18n.global.t('Cancel'),
                    confirmButtonType: 'danger',
                    title: i18n.global.t('Are you sure to delete the selected record?'),
                },
                disabledTip: false,
            },
        ],
    ]);

    const optButtons: OptButton[] = [];
    for (const key in optButType) {
        if (optButtonsPre.has(optButType[key])) {
            optButtons.push(optButtonsPre.get(optButType[key])!);
        }
    }
    return optButtons;
};

/**
 * 将带children的数组降维，然后寻找index所在的行
 */
export const findIndexRow = (data: TableRow[], findIdx: number, keyIndex: number | TableRow = -1): number | TableRow => {
    for (const key in data) {
        if (typeof keyIndex == 'number') {
            keyIndex++;
        }

        if (keyIndex == findIdx) {
            return data[key];
        }

        if (data[key].children) {
            keyIndex = findIndexRow(data[key].children!, findIdx, keyIndex);
            if (typeof keyIndex != 'number') {
                return keyIndex;
            }
        }
    }

    return keyIndex;
};

type DefaultOptButType = 'weigh-sort' | 'edit' | 'delete';
