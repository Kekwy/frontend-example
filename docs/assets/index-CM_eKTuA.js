import{u as N,a as he,b as Y,B as ve,_ as F,c as ae,d as Ye,h as Ne,e as Ze,S as Ge,t as Qe,i as et,U as tt,f as Me,g as Re,A as ge,r as nt,j as Ie,k as be}from"./index-Ds72eYgu.js";import{c as ot,s as ke,o as Ve,g as ye,u as O,l as Ce,a as ee,r as we,b as Pe,d as at,e as st,f as lt,h as rt}from"./router-BReFx3kg.js";import{e as $,Y as W,o as p,h as R,s as e,Z as V,j as oe,W as S,I as L,_ as U,v as Te,m as h,$ as le,S as Z,J as _,l as c,k as T,a0 as ze,H as re,r as z,f as xe,D as J,a1 as pe,n as j,A as Be,Q as P,a2 as De,a3 as Se,a4 as ct,O as it,y as me,P as se,X as A,a5 as ut,d as Ue,a6 as Ae,a7 as dt,a8 as $e,a9 as mt,aa as He,ab as Oe,ac as ft,B as pt,ad as _t,U as gt,V as vt}from"./vue-CBJ4XcuP.js";import{i as kt,B as ht,u as bt,b as yt}from"./common-CDnCBioP.js";const ne={set(n,t){window.localStorage.setItem(n,JSON.stringify(t))},get(n){const t=window.localStorage.getItem(n);return JSON.parse(t)},remove(n){window.localStorage.removeItem(n)},clear(){window.localStorage.clear()}},fe={set(n,t){window.sessionStorage.setItem(n,JSON.stringify(t))},get(n){const t=window.sessionStorage.getItem(n);return JSON.parse(t)},remove(n){window.sessionStorage.removeItem(n)},clear(){window.sessionStorage.clear()}},Ct={class:"layout-logo"},wt={key:0,class:"logo-img",src:"",alt:"logo"},Tt=$({__name:"logo",setup(n){W(d=>({"0a7abc16":e(t).layout.layoutMode!="Streamline"?e(t).getColorVal("menuTopBarBackground"):"transparent"}));const t=N(),a=he(),u=function(){t.layout.shrink&&!t.layout.menuCollapse&&ot(),t.setLayout("menuCollapse",!t.layout.menuCollapse),fe.set(ve,{layoutMode:t.layout.layoutMode,menuCollapse:t.layout.menuCollapse}),setTimeout(()=>{ke()},350)};return(d,s)=>(p(),R("div",Ct,[e(t).layout.menuCollapse?V("",!0):(p(),R("img",wt)),e(t).layout.menuCollapse?V("",!0):(p(),R("div",{key:1,style:oe({color:e(t).getColorVal("menuActiveColor")}),class:"website-name"},S(e(a).siteName),5)),e(t).layout.layoutMode!="Streamline"?(p(),L(Y,{key:2,onClick:u,name:e(t).layout.menuCollapse?"fa fa-indent":"fa fa-dedent",class:U([e(t).layout.menuCollapse?"unfold":"","fold"]),color:e(t).getColorVal("menuActiveColor"),size:"18"},null,8,["name","class","color"])):V("",!0)]))}}),We=F(Tt,[["__scopeId","data-v-e10be4a4"]]),xt=$({__name:"menuTree",props:{menus:{default:()=>[]},extends:{default:()=>({level:1})}},setup(n){W(s=>({"424253da":e(a).getColorVal("menuActiveBackground")}));const{t}=Te.useI18n(),a=N(),u=n,d=s=>{var y,i;if(console.log(s),((y=u.extends)==null?void 0:y.position)=="horizontal"&&u.extends.level<=1&&((i=s.children)!=null&&i.length)){const r=ye(s.children);r?Ve(r):ze({type:"error",message:t("utils.No child menu to jump to!")})}};return(s,y)=>{const i=h("Icon"),r=h("menu-tree",!0),f=h("el-sub-menu"),x=h("el-menu-item");return p(!0),R(Z,null,le(u.menus,k=>(p(),R(Z,null,[k.children&&k.children.length>0?(p(),L(f,{onClick:m=>d(k),index:k.path,key:k.path},{title:_(()=>{var m,C,M,g;return[c(i,{color:e(a).getColorVal("menuColor"),name:(m=k.meta)!=null&&m.icon?(C=k.meta)==null?void 0:C.icon:e(a).layout.menuDefaultIcon},null,8,["color","name"]),T("span",null,S((M=k.meta)!=null&&M.title?(g=k.meta)==null?void 0:g.title:s.$t("noTitle")),1)]}),default:_(()=>[c(r,{extends:{...u.extends,level:u.extends.level+1},menus:k.children},null,8,["extends","menus"])]),_:2},1032,["onClick","index"])):(p(),L(x,{index:k.path,key:k.path,onClick:m=>e(Ve)(k)},{default:_(()=>{var m,C,M,g;return[c(i,{color:e(a).getColorVal("menuColor"),name:(m=k.meta)!=null&&m.icon?(C=k.meta)==null?void 0:C.icon:e(a).layout.menuDefaultIcon},null,8,["color","name"]),T("span",null,S((M=k.meta)!=null&&M.title?(g=k.meta)==null?void 0:g.title:s.$t("noTitle")),1)]}),_:2},1032,["index","onClick"]))],64))),256)}}}),Le=F(xt,[["__scopeId","data-v-607a9dc5"]]),St=$({__name:"menuVertical",setup(n){W(r=>({"0f0e585d":s.value,d7d5cc38:e(t).getColorVal("menuBackground"),"5836ccca":e(t).getColorVal("menuColor"),"51b956f5":e(t).getColorVal("menuActiveColor")}));const t=N(),a=O(),u=re(),d=z({defaultActive:""}),s=xe(()=>{let r=0;return t.layout.menuShowTopBar&&(r=50),t.layout.layoutMode=="Default"?"calc(100vh - "+(32+r)+"px)":"calc(100vh - "+r+"px)"}),y=r=>{const f=a.getTabsViewDataByRoute(r);f&&(d.defaultActive=f.meta.matched)},i=()=>{j(()=>{var f;let r=document.querySelector(".el-menu.layouts-menu-vertical li.is-active");if(!r)return!1;(f=ee.value)==null||f.setScrollTop(r.offsetTop)})};return J(()=>{y(u),i()}),pe(r=>{y(r)}),(r,f)=>{const x=h("el-menu"),k=h("el-scrollbar");return p(),L(k,{ref_key:"layoutMenuScrollbarRef",ref:ee,class:"vertical-menus-scrollbar"},{default:_(()=>[c(x,{class:"layouts-menu-vertical","collapse-transition":!1,"unique-opened":e(t).layout.menuUniqueOpened,"default-active":d.defaultActive,collapse:e(t).layout.menuCollapse,ref_key:"layoutMenuRef",ref:Ce},{default:_(()=>[c(Le,{menus:e(a).state.tabsViewRoutes},null,8,["menus"])]),_:1},8,["unique-opened","default-active","collapse"])]),_:1},512)}}}),Lt=$({name:"layout/aside",__name:"aside",setup(n){W(d=>({"108a8237":u.value}));const t=N(),a=O(),u=xe(()=>t.menuWidth());return(d,s)=>{const y=h("el-aside");return e(a).state.tabFullScreen?V("",!0):(p(),L(y,{key:0,class:U("layout-aside-"+e(t).layout.layoutMode+" "+(e(t).layout.shrink?"shrink":""))},{default:_(()=>[c(We),c(St)]),_:1},8,["class"]))}}}),Mt=F(Lt,[["__scopeId","data-v-bdb03c93"]]);function qe(){if(!Be())throw new Error("useCurrentInstance() can only be used inside setup() or functional components!");const{appContext:n}=Be();return{proxy:n.config.globalProperties}}const Rt={class:"el-dropdown-menu"},It=["onClick"],Vt=$({__name:"index",props:{width:{default:150},items:{default:()=>[]}},emits:["menuClick","hideContextmenu"],setup(n,{expose:t,emit:a}){const u=n,d=a,s=z({show:!1,axis:{x:0,y:0},sourceData:null,showArrow:!0,arrowAxis:10}),y=(f,x)=>{s.showArrow=!0,s.sourceData=f;const k=document.documentElement.clientHeight-x.y-(u.items.length*40+20),m=document.documentElement.clientWidth-x.x-(u.width+20);k<0&&(x.y+=k,s.showArrow=!1),m<0&&(x.x+=m,s.showArrow=!1),s.axis=x,s.show=!0},i=()=>{s.show=!1,d("hideContextmenu")},r=f=>{f.disabled||(f.sourceData=ct(s.sourceData),d("menuClick",f))};return t({onShowContextmenu:y,onHideContextmenu:i}),J(()=>{ae(document,"click",i),ae(document,"scroll",i),ae(document,"keydown",f=>{f.key==="Escape"&&i()})}),(f,x)=>{const k=h("Icon");return p(),L(Se,{name:"el-zoom-in-center"},{default:_(()=>[P((p(),R("div",{class:"el-popper is-pure is-light el-dropdown__popper ba-contextmenu",style:oe(`top: ${s.axis.y+5}px;left: ${s.axis.x-14}px;width:${u.width}px`),key:Math.random(),"aria-hidden":"false","data-popper-placement":"bottom"},[T("ul",Rt,[(p(!0),R(Z,null,le(u.items,(m,C)=>(p(),R("li",{key:C,class:U(["el-dropdown-menu__item",m.disabled?"is-disabled":""]),tabindex:"-1",onClick:M=>r(m)},[c(k,{size:"12",name:m.icon},null,8,["name"]),T("span",null,S(m.label),1)],10,It))),128))]),s.showArrow?(p(),R("span",{key:0,class:"el-popper__arrow",style:oe({left:`${s.arrowAxis}px`})},null,4)):V("",!0)],4)),[[De,s.show]])]),_:1})}}}),Bt=F(Vt,[["__scopeId","data-v-0380e8de"]]),At=["onClick","onContextmenu"],$t=$({__name:"tabs",setup(n,{expose:t}){W(o=>({dd7a0e3c:e(d).getColorVal("headerBarTabColor"),"2c6ee4fc":e(d).getColorVal("headerBarTabActiveColor"),"85bc247e":e(d).layout.layoutMode=="Default"?"none":e(d).getColorVal("headerBarBackground")}));const a=re(),u=it(),d=N(),s=O(),{proxy:y}=qe(),i=me(),r=Ye(),f=me(),x=z({contextmenuItems:[{name:"refresh",label:"重新加载",icon:"fa fa-refresh"},{name:"close",label:"关闭标签",icon:"fa fa-times"},{name:"fullScreen",label:"当前标签全屏",icon:"el-icon-FullScreen"},{name:"closeOther",label:"关闭其他标签",icon:"fa fa-minus"},{name:"closeAll",label:"关闭全部标签",icon:"fa fa-stop"}]}),k=z({width:"0",transform:"translateX(0px)"}),m=o=>{u.push(o.fullPath)},C=function(o){if(!o)return!1;k.width=o.clientWidth+"px",k.transform=`translateX(${o.offsetLeft}px)`;let l=o.offsetLeft+o.clientWidth-i.value.clientWidth;o.offsetLeft<i.value.scrollLeft?i.value.scrollTo(o.offsetLeft,0):l>i.value.scrollLeft&&i.value.scrollTo(l,0)},M=()=>{const o=s.state.tabsView.slice(-1)[0];o?u.push(o.fullPath):u.push(Ze)},g=o=>{var l;s._closeTab(o),y.eventBus.emit("onTabViewClose",o),((l=s.state.activeRoute)==null?void 0:l.fullPath)===o.fullPath?M():(s._setActiveRoute(s.state.activeRoute),j(()=>{C(r.value[s.state.activeIndex])})),f.value.onHideContextmenu()},B=o=>{var l;s._closeTabs(o),s._setActiveRoute(o),((l=s.state.activeRoute)==null?void 0:l.fullPath)!==a.fullPath&&u.push(o.fullPath)},q=o=>{var w;let l=ye(s.state.tabsViewRoutes);if(o&&l&&l.path==o.fullPath)return B(o);if(l&&l.path==((w=s.state.activeRoute)==null?void 0:w.fullPath))return B(s.state.activeRoute);s._closeTabs(!1),l&&we(l.path)},G=(o,l)=>{x.contextmenuItems[0].disabled=a.fullPath!==o.fullPath,x.contextmenuItems[4].disabled=x.contextmenuItems[3].disabled=s.state.tabsView.length==1;const{clientX:w,clientY:I}=l;f.value.onShowContextmenu(o,{x:w,y:I})},X=o=>{const{name:l,sourceData:w}=o;if(w)switch(l){case"refresh":y.eventBus.emit("onTabViewRefresh",w);break;case"close":g(w);break;case"closeOther":B(w);break;case"closeAll":q(w);break;case"fullScreen":a.fullPath!==w.fullPath&&u.push(w.fullPath),s.setFullScreen(!0);break}},H=function(o){s._addTab(o),s._setActiveRoute(o),j(()=>{C(r.value[s.state.activeIndex])})};return pe(async o=>{H(o)}),J(()=>{H(u.currentRoute.value),new Ne(i.value)}),t({closeAllTab:q,closeTabByPath:o=>{for(const l in s.state.tabsView)if(s.state.tabsView[l].fullPath==o){g(s.state.tabsView[l]);break}},updateTabTitle:(o,l)=>{s._updateTabTitle(o,l),j(()=>{C(r.value[s.state.activeIndex])})}}),(o,l)=>(p(),R("div",{class:"nav-tabs",ref_key:"tabScrollbarRef",ref:i},[(p(!0),R(Z,null,le(e(s).state.tabsView,(w,I)=>(p(),R("div",{onClick:D=>m(w),onContextmenu:se(D=>G(w,D),["prevent"]),class:U(["ba-nav-tab",e(s).state.activeIndex==I?"active":""]),ref_for:!0,ref:e(r).set,key:I},[A(S(w.meta.title)+" ",1),c(Se,{onAfterLeave:l[0]||(l[0]=D=>C(e(r)[e(s).state.activeIndex])),name:"el-fade-in"},{default:_(()=>[P(c(Y,{class:"close-icon",onClick:se(D=>g(w),["stop"]),size:"15",name:"el-icon-Close"},null,8,["onClick"]),[[De,e(s).state.tabsView.length>1]])]),_:2},1024)],42,At))),128)),T("div",{style:oe(k),class:"nav-tabs-active-box"},null,4),c(Bt,{ref_key:"contextmenuRef",ref:f,items:x.contextmenuItems,onMenuClick:X},null,8,["items"])],512))}}),je=F($t,[["__scopeId","data-v-4b262b98"]]),Fe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],K=(()=>{if(typeof document>"u")return!1;const n=Fe[0],t={};for(const a of Fe)if((a==null?void 0:a[1])in document){for(const[d,s]of a.entries())t[n[d]]=s;return t}return!1})(),Ee={change:K.fullscreenchange,error:K.fullscreenerror};let E={request(n=document.documentElement,t){return new Promise((a,u)=>{const d=()=>{E.off("change",d),a()};E.on("change",d);const s=n[K.requestFullscreen](t);s instanceof Promise&&s.then(d).catch(u)})},exit(){return new Promise((n,t)=>{if(!E.isFullscreen){n();return}const a=()=>{E.off("change",a),n()};E.on("change",a);const u=document[K.exitFullscreen]();u instanceof Promise&&u.then(a).catch(t)})},toggle(n,t){return E.isFullscreen?E.exit():E.request(n,t)},onchange(n){E.on("change",n)},onerror(n){E.on("error",n)},on(n,t){const a=Ee[n];a&&document.addEventListener(a,t,!1)},off(n,t){const a=Ee[n];a&&document.removeEventListener(a,t,!1)},raw:K};Object.defineProperties(E,{isFullscreen:{get:()=>!!document[K.fullscreenElement]},element:{enumerable:!0,get:()=>document[K.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[K.fullscreenEnabled]}});K||(E={isEnabled:!1});const ue=E,Ft=$({name:"formItem",props:{type:{type:String,required:!0,validator:n=>kt.includes(n)},modelValue:{required:!0},inputAttr:{type:Object,default:()=>{}},blockHelp:{type:String,default:""},tip:[String,Object],attr:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},placeholder:{type:String,default:""},...ut},emits:["update:modelValue"],setup(n,{emit:t,slots:a}){const u=["type","modelValue","inputAttr","attr","data","placeholder"],d=xe(()=>{const i=n.attr||{};for(const r in n){const f=n[r];!u.includes(r)&&(f||f===!1)&&(i[r]=f)}return i}),s=i=>{t("update:modelValue",i)},y={};if(y.default=()=>{let i=c(ht,{type:n.type,attr:{placeholder:n.placeholder,...n.inputAttr,...n.data},modelValue:n.modelValue,"onUpdate:modelValue":s},a);return d.value.blockHelp?[i,c("div",{class:"block-help"},d.value.blockHelp)]:i},d.value.tip){const i=()=>{const r=typeof d.value.tip=="string"?{content:d.value.tip,placement:"top"}:d.value.tip;return c(h("el-tooltip"),r,{default:()=>[c("i",{class:"fa fal fa-question-circle"})]})};y.label=()=>c("span",{class:"ba-form-item-label"},[c("span",null,d.value.label),c("span",{class:"ba-form-item-label-tip"},[i()])])}return()=>c(h("el-form-item"),{class:"ba-input-item-"+n.type,...d.value},y)}}),de=F(Ft,[["__scopeId","data-v-54bbc833"]]);var v=(n=>(n[n.Waiting=0]="Waiting",n[n.Connecting=1]="Connecting",n[n.Executing=2]="Executing",n[n.Success=3]="Success",n[n.Failed=4]="Failed",n[n.Unknown=5]="Unknown",n))(v||{});const Ke=Ue("terminal",()=>{const n=z({show:!1,showDot:!1,taskList:[],packageManager:"pnpm",showConfig:!1,automaticCleanupTask:"1",phpDevelopmentServer:!1,npmRegistry:"unknown",composerRegistry:"unknown"});function t(){for(const o in n.taskList)(n.taskList[o].status==v.Connecting||n.taskList[o].status==v.Executing)&&(n.taskList[o].status=v.Unknown)}function a(o=!n.show){n.show=o,o&&u(!1)}function u(o=!n.showDot){n.showDot=o}function d(o=!n.showConfig){a(!o),n.showConfig=o}function s(o,l){n[l=="npm"?"npmRegistry":"composerRegistry"]=o}function y(o){n.packageManager=o}function i(o){n.phpDevelopmentServer=o}function r(o){n.automaticCleanupTask=o}function f(o,l){n.taskList[o].status=l,(l==v.Failed||l==v.Unknown)&&n.taskList[o].blockOnFailure&&k(o,!0)}function x(o){if(typeof n.taskList[o].callback!="function")return;const l=n.taskList[o].status;l==v.Failed||l==v.Unknown?n.taskList[o].callback(v.Failed):l==v.Success&&n.taskList[o].callback(v.Success)}function k(o,l=!n.taskList[o].showMessage){n.taskList[o].showMessage=l}function m(o,l){n.show||u(!0),n.taskList[o].message=n.taskList[o].message.concat(l),j(()=>{te(n.taskList[o].uuid)})}function C(o,l=!0,w="",I=()=>{}){if(n.show||u(!0),n.taskList=n.taskList.concat({uuid:bt(),createTime:Qe(),status:v.Waiting,command:o,message:[],showMessage:!1,blockOnFailure:l,extend:w,callback:I}),parseInt(n.automaticCleanupTask)===1&&X(),!n.show){for(const D in n.taskList)if(n.taskList[D].status==v.Failed||n.taskList[D].status==v.Unknown){ze({type:"error",message:et.global.t("terminal.Newly added tasks will never start because they are blocked by failed tasks"),zIndex:9999});break}}B()}function M(o,l=!0,w="",I=()=>{}){C(o+"."+n.packageManager,l,w,I)}function g(o){n.taskList[o].status!=v.Connecting&&n.taskList[o].status!=v.Executing&&n.taskList.splice(o,1),B()}function B(){let o=null;for(const l in n.taskList){if(n.taskList[l].status==v.Waiting){o=parseInt(l);break}if(n.taskList[l].status==v.Connecting||n.taskList[l].status==v.Executing)break;if(n.taskList[l].status!=v.Success&&(n.taskList[l].status==v.Failed||n.taskList[l].status==v.Unknown)){if(n.taskList[l].blockOnFailure)break;continue}}o!==null&&(f(o,v.Connecting),q(o))}function q(o){window.eventSource=new EventSource(yt(n.taskList[o].command,n.taskList[o].uuid,n.taskList[o].extend)),window.eventSource.onmessage=function(l){const w=JSON.parse(l.data);if(!w||!w.data)return;const I=H(w.uuid);I!==!1&&(w.data=="command-exec-error"?(f(I,v.Failed),window.eventSource.close(),x(I),B()):w.data=="command-exec-completed"?(window.eventSource.close(),n.taskList[I].status!=v.Success&&f(I,v.Failed),x(I),B()):w.data=="command-link-success"?f(I,v.Executing):w.data=="command-exec-success"?f(I,v.Success):m(I,w.data))},window.eventSource.onerror=function(){window.eventSource.close();const l=Q(o);l!==!1&&(f(l,v.Failed),x(l))}}function G(o){n.taskList[o].message=[],f(o,v.Waiting),B()}function X(){n.taskList=n.taskList.filter(o=>o.status!=v.Success)}function H(o){for(const l in n.taskList)if(n.taskList[l].uuid==o)return parseInt(l);return!1}function Q(o){if(n.taskList[o])return o;{let l=-1;for(const w in n.taskList)(n.taskList[w].status==v.Connecting||n.taskList[w].status==v.Executing)&&(l=parseInt(w));return l===-1?!1:l}}function te(o){const l=document.querySelector(".exec-message-"+o);l&&l.scrollHeight&&(l.scrollTop=l.scrollHeight)}return{state:n,init:t,toggle:a,toggleDot:u,setTaskStatus:f,setTaskShowMessage:k,addTaskMessage:m,addTask:C,addTaskPM:M,delTask:g,startTask:B,retryTask:G,clearSuccessTask:X,toggleConfigDialog:d,changeRegistry:s,changePackageManager:y,changePHPDevelopmentServer:i,changeAutomaticCleanupTask:r}},{persist:{key:Ge,pick:["state.showDot","state.taskList","state.automaticCleanupTask","state.npmRegistry","state.composerRegistry"]}}),Et={class:"command"},Nt={class:"task-opt"},Pt=["onClick"],zt={class:"terminal-buttons"},Dt={class:"config-buttons"},Ut=$({__name:"index",setup(n){const{t}=Te.useI18n(),a=Ke(),u=me(),d=z({registryLoading:!1,registryLoadingType:"npm",packageManagerLoading:!1}),s=k=>{let m=t("terminal.unknown"),C="info";switch(k){case v.Waiting:m=t("terminal.Waiting for execution"),C="info";break;case v.Connecting:m=t("terminal.Connecting"),C="warning";break;case v.Executing:m=t("terminal.Executing"),C="warning";break;case v.Success:m=t("terminal.Successful execution"),C="success";break;case v.Failed:m=t("terminal.Execution failed"),C="danger";break;case v.Unknown:m=t("terminal.Unknown execution result"),C="danger";break}return{statusText:m,statusType:C}},y=(k,m,C=!0,M="",g=()=>{})=>{m?a.addTaskPM(k,C,M,g):a.addTask(k,C,M,g),j(()=>{u.value&&u.value.wrapRef&&u.value.setScrollTop(u.value.wrapRef.scrollHeight)})},i=()=>{$e.confirm(t("terminal.Are you sure you want to republish?"),t("Reminder"),{confirmButtonText:t("Confirm"),cancelButtonText:t("Cancel"),type:"warning"}).then(()=>{y("web-build",!0,!0,"",()=>{})})},r=k=>{d.packageManagerLoading=!0},f=(k,m)=>{const C=m=="npm"?a.state.npmRegistry:a.state.composerRegistry;a.changeRegistry(k,m),d.registryLoading=!0,d.registryLoadingType=m,a.addTask(`set-${m}-registry.${k}`,!1,"",M=>{d.registryLoading=!1,(M==v.Failed||M==v.Unknown)&&$e.confirm(t("terminal.Failed to modify the source command, Please try again manually"),t("Reminder"),{confirmButtonText:t("Confirm"),showCancelButton:!1,type:"warning"}).then(()=>{a.changeRegistry(C,m)})})},x=k=>{let m={};return k=="npm"?m={npm:"npm",taobao:"taobao",tencent:"tencent"}:k=="composer"&&(m={composer:"composer",huawei:"huawei",aliyun:"aliyun",tencent:"tencent",kkame:"kkame"}),a.state[k=="npm"?"npmRegistry":"composerRegistry"]=="unknown"&&(m.unknown=t("Unknown")),m};return J(()=>{a.init()}),(k,m)=>{const C=h("el-alert"),M=h("el-tag"),g=h("el-button"),B=h("Icon"),q=h("el-card"),G=h("el-timeline-item"),X=h("el-timeline"),H=h("el-empty"),Q=h("el-dropdown-item"),te=h("el-dropdown-menu"),o=h("el-dropdown"),l=h("el-dialog"),w=h("el-form"),I=Ae("blur"),D=Ae("loading");return p(),R("div",null,[c(l,{modelValue:e(a).state.show,"onUpdate:modelValue":m[6]||(m[6]=b=>e(a).state.show=b),title:e(t)("terminal.Terminal"),class:"ba-terminal-dialog main-dialog"},{default:_(()=>[c(e(dt),{ref_key:"terminalScrollbarRef",ref:u,"max-height":500,class:"terminal-scrollbar"},{default:_(()=>[e(a).state.phpDevelopmentServer?V("",!0):(p(),L(C,{key:0,class:"terminal-warning-alert",title:e(t)("terminal.The current terminal is not running under the installation service, and some commands may not be executed"),type:"error"},null,8,["title"])),e(a).state.taskList.length?(p(),L(X,{key:1,class:"terminal-timeline"},{default:_(()=>[(p(!0),R(Z,null,le(e(a).state.taskList,(b,ce)=>(p(),L(G,{key:ce,class:U(["task-item","task-status-"+b.status]),type:s(b.status).statusType,center:"",timestamp:b.createTime,placement:"top"},{default:_(()=>[c(q,null,{default:_(()=>[T("div",null,[c(M,{type:s(b.status).statusType},{default:_(()=>[A(S(s(b.status).statusText),1)]),_:2},1032,["type"]),(b.status==e(v).Failed||b.status==e(v).Unknown)&&b.blockOnFailure?(p(),L(M,{key:0,class:"block-on-failure-tag",type:"warning"},{default:_(()=>[A(S(e(t)("terminal.Failure to execute this command will block the execution of the queue")),1)]),_:1})):V("",!0),b.status==e(v).Executing||b.status==e(v).Connecting?(p(),L(M,{key:1,class:"block-on-failure-tag",type:"danger"},{default:_(()=>[A(S(e(t)("terminal.Do not refresh the browser")),1)]),_:1})):V("",!0),T("span",Et,S(b.command),1),T("div",Nt,[b.status==e(v).Failed||b.status==e(v).Unknown?P((p(),L(g,{key:0,title:e(t)("Retry"),size:"small",type:"warning",icon:"el-icon-RefreshRight",circle:"",onClick:ie=>e(a).retryTask(ce)},null,8,["title","onClick"])),[[I]]):V("",!0),P(c(g,{onClick:ie=>e(a).delTask(ce),title:e(t)("Delete"),size:"small",type:"danger",icon:"el-icon-Delete",circle:""},null,8,["onClick","title"]),[[I]])])]),b.status!=e(v).Waiting?(p(),R(Z,{key:0},[b.status!=e(v).Connecting&&b.status!=e(v).Executing?(p(),R("div",{key:0,onClick:ie=>e(a).setTaskShowMessage(ce),class:"toggle-message-display"},[T("span",null,S(e(t)("terminal.Command run log")),1),c(B,{name:b.showMessage?"el-icon-ArrowUp":"el-icon-ArrowDown",size:"16",color:"#909399"},null,8,["name"])],8,Pt)):V("",!0),b.status==e(v).Connecting||b.status==e(v).Executing||b.status>e(v).Executing&&b.showMessage?(p(),R("div",{key:1,class:U(["exec-message","exec-message-"+b.uuid])},[(p(!0),R(Z,null,le(b.message,(ie,Xe)=>(p(),R("pre",{key:Xe,class:"message-item"},S(ie),1))),128))],2)):V("",!0)],64)):V("",!0)]),_:2},1024)]),_:2},1032,["class","type","timestamp"]))),128))]),_:1})):(p(),L(H,{key:2,"image-size":80,description:e(t)("terminal.No mission yet")},null,8,["description"]))]),_:1},512),T("div",zt,[P((p(),L(g,{class:"terminal-menu-item",icon:"el-icon-MagicStick",onClick:m[0]||(m[0]=b=>y("test",!0,!1))},{default:_(()=>[A(S(e(t)("terminal.Test command")),1)]),_:1})),[[I]]),c(o,{class:"terminal-menu-item"},{dropdown:_(()=>[c(te,null,{default:_(()=>[e(a).state.packageManager!="none"?(p(),L(Q,{key:0,onClick:m[1]||(m[1]=b=>y("web-install",!0))},{default:_(()=>[A(S(e(a).state.packageManager)+" run install ",1)]),_:1})):V("",!0),c(Q,{onClick:m[2]||(m[2]=b=>y("composer.update",!1))},{default:_(()=>[A("composer update")]),_:1})]),_:1})]),default:_(()=>[P((p(),L(g,{icon:"el-icon-Download"},{default:_(()=>[A(S(e(t)("terminal.Install dependent packages")),1)]),_:1})),[[I]])]),_:1}),P((p(),L(g,{class:"terminal-menu-item",icon:"el-icon-Sell",onClick:m[3]||(m[3]=b=>i())},{default:_(()=>[A(S(e(t)("terminal.Republish")),1)]),_:1})),[[I]]),P((p(),L(g,{class:"terminal-menu-item",icon:"el-icon-Delete",onClick:m[4]||(m[4]=b=>e(a).clearSuccessTask())},{default:_(()=>[A(S(e(t)("terminal.Clean up task list")),1)]),_:1})),[[I]]),P((p(),L(g,{class:"terminal-menu-item",icon:"el-icon-Tools",onClick:m[5]||(m[5]=b=>e(a).toggleConfigDialog())},{default:_(()=>[A(S(e(t)("terminal.Terminal settings")),1)]),_:1})),[[I]])])]),_:1},8,["modelValue","title"]),c(l,{onClose:m[8]||(m[8]=b=>e(a).toggleConfigDialog(!1)),"model-value":e(a).state.showConfig,class:"ba-terminal-dialog",title:e(t)("terminal.Terminal settings")},{default:_(()=>[c(w,{"label-position":"left","label-width":"140"},{default:_(()=>[P((p(),L(de,{label:"NPM "+e(t)("terminal.Source"),"model-value":e(a).state.npmRegistry,key:e(a).state.npmRegistry,type:"select","input-attr":{border:!0,content:x("npm"),teleported:!1,onChange:b=>f(b,"npm")}},null,8,["label","model-value","input-attr"])),[[D,d.registryLoading&&d.registryLoadingType=="npm"]]),P((p(),L(de,{label:"Composer "+e(t)("terminal.Source"),"model-value":e(a).state.composerRegistry,key:e(a).state.composerRegistry,type:"select","input-attr":{border:!0,content:x("composer"),teleported:!1,onChange:b=>f(b,"composer")}},null,8,["label","model-value","input-attr"])),[[D,d.registryLoading&&d.registryLoadingType=="composer"]]),P(c(de,{label:e(t)("terminal.NPM package manager"),"model-value":e(a).state.packageManager,type:"select","input-attr":{border:!0,content:{npm:"NPM",cnpm:"CNPM",pnpm:"PNPM",yarn:"YARN",ni:"NI",none:e(t)("terminal.Manual execution")},teleported:!1,onChange:b=>r(b)},tip:e(t)("terminal.NPM package manager tip")},null,8,["label","model-value","input-attr","tip"]),[[D,d.packageManagerLoading]]),c(de,{label:e(t)("terminal.Clear successful task"),"model-value":e(a).state.automaticCleanupTask,type:"radio","input-attr":{border:!0,content:{0:e(t)("Disable"),1:e(t)("Enable")},onChange:e(a).changeAutomaticCleanupTask},tip:e(t)("terminal.Clear successful task tip")},null,8,["label","model-value","input-attr","tip"])]),_:1}),T("div",Dt,[c(g,{onClick:m[7]||(m[7]=b=>e(a).toggleConfigDialog(!1))},{default:_(()=>[A(S(e(t)("terminal.Back to terminal")),1)]),_:1})])]),_:1},8,["model-value","title"])])}}}),Ht=F(Ut,[["__scopeId","data-v-da109ecd"]]),Je=Ue("userInfo",{state:()=>({id:0,username:"",nickname:"",avatar:"",last_login_time:""}),actions:{dataFill(n){this.$state={...this.$state,...n}}},persist:{key:tt}}),Ot={class:"el-popover__title"},Wt={class:"reload-hot-server-content"},qt={class:"reload-hot-server-buttons"},jt={class:"nav-menu-item"},Kt={class:"admin-name"},Jt={class:"admin-info-base"},Xt={class:"admin-info-other"},Yt={class:"admin-info-name"},Zt={class:"admin-info-lasttime"},Gt={class:"admin-info-footer"},Qt=$({__name:"navMenus",setup(n){W(M=>({a28b6588:e(u).getColorVal("headerBarBackground"),"41d3aa9c":e(u).getColorVal("headerBarTabColor"),"4eba532c":e(u).getColorVal("headerBarHoverBackground")}));const{t}=Te.useI18n(),a=Je(),u=N(),d=Ke(),s=he(),y=me(),i=z({isFullScreen:!1,currentNavMenu:"",showLayoutDrawer:!1,showAdminInfoPopover:!1}),r=(M,g)=>{i.currentNavMenu=M?g:""},f=M=>{var g;M=="cancel"&&((g=y.value)==null||g.hide())},x=()=>{if(!ue.isEnabled)return mt.warning(t("layouts.Full screen is not supported")),!1;ue.toggle(),ue.onchange(()=>{i.isFullScreen=ue.isFullscreen})},k=()=>{i.showAdminInfoPopover=!1,we({name:"routine/adminInfo"})},m=()=>{ne.remove(ge),nt.go(0)},C=M=>{if(M=="storage"||M=="all"){const g=ne.get(ge),B=ne.get(Ie);if(fe.clear(),ne.clear(),ne.set(ge,g),ne.set(Ie,B),M=="storage")return}};return(M,g)=>{const B=h("el-button"),q=h("el-popover"),G=h("router-link"),X=h("el-badge"),H=h("el-dropdown-item"),Q=h("el-dropdown-menu"),te=h("el-dropdown"),o=h("el-avatar");return p(),R("div",{class:U(["nav-menus",e(u).layout.layoutMode])},[e(Me).dirtyFile?(p(),L(q,{key:0,ref_key:"reloadHotServerPopover",ref:y,onShow:g[2]||(g[2]=l=>r(!0,"reloadHotServer")),onHide:g[3]||(g[3]=l=>r(!1,"reloadHotServer")),width:360},{reference:_(()=>[T("div",{class:U(["nav-menu-item",i.currentNavMenu=="reloadHotServer"?"hover":""])},[c(Y,{color:"var(--el-color-danger)",class:"nav-menu-icon",name:"el-icon-Warning",size:"18"})],2)]),default:_(()=>[T("div",null,[T("div",Ot,S(e(t)("vite.Reload hot server title")),1),T("div",Wt,[T("p",null,[T("span",null,S(e(t)("vite.Reload hot server tips 1")),1),T("span",null,"【"+S(e(t)(`vite.Close type ${e(Me).closeType}`))+"】",1),T("span",null,S(e(t)("vite.Reload hot server tips 2")),1)]),T("p",null,S(e(t)("vite.Reload hot server tips 3")),1),T("div",qt,[c(B,{onClick:g[0]||(g[0]=l=>f("cancel"))},{default:_(()=>[A(S(e(t)("vite.Later")),1)]),_:1}),c(B,{onClick:g[1]||(g[1]=l=>f("reload")),type:"primary"},{default:_(()=>[A(S(e(t)("vite.Restart hot update")),1)]),_:1})])])])]),_:1},512)):V("",!0),c(G,{class:"h100",target:"_blank",title:e(t)("Home"),to:"/"},{default:_(()=>[T("div",jt,[c(Y,{color:e(u).getColorVal("headerBarTabColor"),class:"nav-menu-icon",name:"el-icon-Monitor",size:"18"},null,8,["color"])])]),_:1},8,["title"]),T("div",{onClick:x,class:U(["nav-menu-item",i.isFullScreen?"hover":""])},[i.isFullScreen?(p(),L(Y,{key:0,color:e(u).getColorVal("headerBarTabColor"),class:"nav-menu-icon",name:"local-full-screen-cancel",size:"18"},null,8,["color"])):(p(),L(Y,{key:1,color:e(u).getColorVal("headerBarTabColor"),class:"nav-menu-icon",name:"el-icon-FullScreen",size:"18"},null,8,["color"]))],2),T("div",{onClick:g[4]||(g[4]=l=>e(d).toggle()),class:"nav-menu-item pt2"},[c(X,{"is-dot":e(d).state.showDot},{default:_(()=>[c(Y,{color:e(u).getColorVal("headerBarTabColor"),class:"nav-menu-icon",name:"local-terminal",size:"26"},null,8,["color"])]),_:1},8,["is-dot"])]),c(te,{onVisibleChange:g[8]||(g[8]=l=>r(l,"clear")),class:"h100",size:"large","hide-timeout":50,placement:"bottom",trigger:"click","hide-on-click":!0},{dropdown:_(()=>[c(Q,{class:"dropdown-menu-box"},{default:_(()=>[c(H,{onClick:g[5]||(g[5]=l=>C("tp"))},{default:_(()=>[A(S(e(t)("utils.Clean up system cache")),1)]),_:1}),c(H,{onClick:g[6]||(g[6]=l=>C("storage"))},{default:_(()=>[A(S(e(t)("utils.Clean up browser cache")),1)]),_:1}),c(H,{onClick:g[7]||(g[7]=l=>C("all")),divided:""},{default:_(()=>[A(S(e(t)("utils.Clean up all cache")),1)]),_:1})]),_:1})]),default:_(()=>[T("div",{class:U(["nav-menu-item",i.currentNavMenu=="clear"?"hover":""])},[c(Y,{color:e(u).getColorVal("headerBarTabColor"),class:"nav-menu-icon",name:"el-icon-Delete",size:"18"},null,8,["color"])],2)]),_:1}),e(s).userInitialize?(p(),L(q,{key:1,onShow:g[9]||(g[9]=l=>r(!0,"userInfo")),onHide:g[10]||(g[10]=l=>r(!1,"userInfo")),placement:"bottom-end","hide-after":0,width:260,trigger:"click","popper-class":"admin-info-box",visible:i.showAdminInfoPopover,"onUpdate:visible":g[11]||(g[11]=l=>i.showAdminInfoPopover=l)},{reference:_(()=>[T("div",{class:U(["admin-info",i.currentNavMenu=="userInfo"?"hover":""])},[c(o,{size:25,src:e(Re)(e(a).avatar)},null,8,["src"]),T("div",Kt,S(e(a).nickname),1)],2)]),default:_(()=>[T("div",null,[T("div",Jt,[c(o,{size:70,src:e(Re)(e(a).avatar)},null,8,["src"]),T("div",Xt,[T("div",Yt,S(e(a).nickname),1),T("div",Zt,S(e(a).last_login_time),1)])]),T("div",Gt,[c(B,{onClick:k,type:"primary",plain:""},{default:_(()=>[A(S(e(t)("layouts.personal data")),1)]),_:1}),c(B,{onClick:m,type:"danger",plain:""},{default:_(()=>[A(S(e(t)("layouts.cancellation")),1)]),_:1})])])]),_:1},8,["visible"])):V("",!0),c(Ht)],2)}}}),_e=F(Qt,[["__scopeId","data-v-c28a000b"]]),en={class:"nav-bar"},tn=$({__name:"default",setup(n){W(a=>({"404a2a1e":e(t).getColorVal("headerBarTabColor"),a972606a:e(t).getColorVal("headerBarTabActiveColor"),fce57c98:e(t).getColorVal("headerBarTabActiveBackground")}));const t=N();return(a,u)=>(p(),R("div",en,[c(je,{ref_key:"layoutNavTabsRef",ref:Pe},null,512),c(_e)]))}}),nn=F(tn,[["__scopeId","data-v-00bc576e"]]),on={class:"nav-bar"},an={key:0,class:"unfold"},sn=$({__name:"classic",setup(n){W(u=>({f2c6ed84:e(t).getColorVal("headerBarBackground"),"7db8ff1e":e(t).getColorVal("headerBarTabColor"),"33be4e38":e(t).getColorVal("headerBarTabActiveColor"),"042fcba8":e(t).getColorVal("headerBarHoverBackground"),"6814bf67":e(t).getColorVal("headerBarTabActiveBackground")}));const t=N(),a=()=>{at("ba-aside-menu-shade",()=>{t.setLayout("menuCollapse",!0)}),t.setLayout("menuCollapse",!1)};return(u,d)=>{const s=h("Icon");return p(),R("div",on,[e(t).layout.shrink&&e(t).layout.menuCollapse?(p(),R("div",an,[c(s,{onClick:a,name:"fa fa-indent",color:e(t).getColorVal("menuActiveColor"),size:"18"},null,8,["color"])])):V("",!0),e(t).layout.shrink?V("",!0):(p(),L(je,{key:1,ref_key:"layoutNavTabsRef",ref:Pe},null,512)),c(_e)])}}}),ln=F(sn,[["__scopeId","data-v-f8d50a2c"]]),rn={class:"layouts-menu-horizontal"},cn={key:0,class:"menu-horizontal-logo"},un=$({__name:"menuHorizontal",setup(n){W(i=>({"944df51a":e(t).getColorVal("headerBarHoverBackground"),"726df4bc":e(t).getColorVal("menuBackground"),"23f457c3":e(t).getColorVal("menuColor"),"3e7bd71d":e(t).getColorVal("menuActiveColor"),"2551fda2":e(t).getColorVal("menuActiveBackground")}));const t=N(),a=O(),u=re(),d=z({defaultActive:""}),s=i=>{const r=a.getTabsViewDataByRoute(i);r&&(d.defaultActive=r.meta.matched)},y=()=>{j(()=>{var r;let i=document.querySelector(".el-menu.menu-horizontal li.is-active");if(!i)return!1;(r=ee.value)==null||r.setScrollTop(i.offsetTop)})};return J(()=>{s(u),y(),new Ne(ee.value.wrapRef)}),pe(i=>{s(i)}),(i,r)=>{const f=h("el-menu"),x=h("el-scrollbar");return p(),R("div",rn,[e(t).layout.menuShowTopBar?(p(),R("div",cn,[c(We)])):V("",!0),c(x,{ref_key:"layoutMenuScrollbarRef",ref:ee,class:"horizontal-menus-scrollbar"},{default:_(()=>[c(f,{ref_key:"layoutMenuRef",ref:Ce,class:"menu-horizontal",mode:"horizontal","default-active":d.defaultActive},{default:_(()=>[c(Le,{extends:{position:"horizontal",level:1},menus:e(a).state.tabsViewRoutes},null,8,["menus"])]),_:1},8,["default-active"])]),_:1},512),c(_e)])}}}),dn=F(un,[["__scopeId","data-v-ad8789c0"]]),mn={class:"layouts-menu-horizontal-double"},fn=$({__name:"double",setup(n){W(i=>({"623115f6":e(t).getColorVal("menuBackground"),"633bda49":e(t).getColorVal("menuColor"),"471cdd23":e(t).getColorVal("menuActiveColor"),bebc6948:e(t).getColorVal("menuActiveBackground")}));const t=N(),a=O(),u=re(),d=z({defaultActive:""}),s=i=>{const r=a.getTabsViewDataByRoute(i);r&&(d.defaultActive=r.meta.matched)},y=()=>{j(()=>{var r;let i=document.querySelector(".el-menu.menu-horizontal li.is-active");if(!i)return!1;(r=ee.value)==null||r.setScrollTop(i.offsetTop)})};return J(()=>{s(u),y()}),pe(i=>{s(i)}),(i,r)=>{const f=h("el-menu"),x=h("el-scrollbar");return p(),R("div",mn,[c(x,{ref_key:"layoutMenuScrollbarRef",ref:ee,class:"double-menus-scrollbar"},{default:_(()=>[c(f,{ref_key:"layoutMenuRef",ref:Ce,class:"menu-horizontal",mode:"horizontal","default-active":d.defaultActive},{default:_(()=>[c(Le,{extends:{position:"horizontal",level:1},menus:e(a).state.tabsViewRoutes},null,8,["menus"])]),_:1},8,["default-active"])]),_:1},512),c(_e)])}}}),pn=F(fn,[["__scopeId","data-v-04083155"]]),_n=$({name:"layout/header",components:{DefaultNavBar:nn,ClassicNavBar:ln,StreamlineNavBar:dn,DoubleNavBar:pn},__name:"header",setup(n){const t=N(),a=O();return(u,d)=>{const s=h("el-header");return e(a).state.tabFullScreen?V("",!0):(p(),L(s,{key:0,class:"layout-header"},{default:_(()=>[(p(),L(He(e(t).layout.layoutMode+"NavBar")))]),_:1}))}}}),gn=F(_n,[["__scopeId","data-v-76e96d22"]]),vn=$({name:"layout/main",__name:"main",setup(n){const{proxy:t}=qe(),a=re(),u=N(),d=O(),s=z({componentKey:a.fullPath,keepAliveComponentNameList:[]}),y=function(r){if(r){if(s.keepAliveComponentNameList.find(x=>x===r))return;s.keepAliveComponentNameList.push(r)}},i=()=>{var r;if(d.state.activeRoute){const f=d.getTabsViewDataByRoute(d.state.activeRoute);f&&typeof((r=f.meta)==null?void 0:r.keepalive)=="string"&&y(f.meta.keepalive)}};return Oe(()=>{t.eventBus.on("onTabViewRefresh",r=>{s.keepAliveComponentNameList=s.keepAliveComponentNameList.filter(f=>r.meta.keepalive!==f),s.componentKey="",j(()=>{s.componentKey=r.fullPath,y(r.meta.keepalive)})}),t.eventBus.on("onTabViewClose",r=>{s.keepAliveComponentNameList=s.keepAliveComponentNameList.filter(f=>r.meta.keepalive!==f)})}),ft(()=>{t.eventBus.off("onTabViewRefresh"),t.eventBus.off("onTabViewClose")}),J(()=>{i()}),pt(()=>a.fullPath,()=>{s.componentKey=a.fullPath,i()}),(r,f)=>{const x=h("router-view"),k=h("el-scrollbar"),m=h("el-main");return p(),L(m,{class:"layout-main"},{default:_(()=>[c(k,{class:"layout-main-scrollbar",style:oe(e(st)),ref_key:"layoutMainScrollbarRef",ref:lt},{default:_(()=>[c(x,null,{default:_(({Component:C})=>[c(Se,{name:e(u).layout.mainAnimation,mode:"out-in"},{default:_(()=>[(p(),L(_t,{include:s.keepAliveComponentNameList},[(p(),L(He(C),{key:s.componentKey}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})]),_:1},8,["style"])]),_:1})}}}),kn=F(vn,[["__scopeId","data-v-717c31c4"]]),hn=n=>(gt("data-v-dd83461b"),n=n(),vt(),n),bn=["title"],yn=hn(()=>T("div",{class:"close-full-screen-on"},null,-1)),Cn=$({__name:"closeFullScreen",setup(n){const t=O(),a=z({closeBoxTop:20});J(()=>{setTimeout(()=>{a.closeBoxTop=-30},300)});const u=()=>{a.closeBoxTop=20},d=()=>{a.closeBoxTop=-30},s=()=>{t.setFullScreen(!1)};return(y,i)=>{const r=h("Icon");return p(),R("div",{title:y.$t("layouts.Exit full screen"),onMouseover:se(u,["stop"]),onMouseout:se(d,["stop"])},[T("div",{onClick:se(s,["stop"]),class:"close-full-screen",style:oe({top:a.closeBoxTop+"px"})},[c(r,{name:"el-icon-Close"})],4),yn],40,bn)}}}),wn=F(Cn,[["__scopeId","data-v-dd83461b"]]),Tn=$({__name:"default",setup(n){const t=O();return(a,u)=>{const d=h("el-container");return p(),R(Z,null,[c(d,{class:"layout-container"},{default:_(()=>[c(Mt),c(d,{class:"content-wrapper"},{default:_(()=>[c(gn),c(kn)]),_:1})]),_:1}),e(t).state.tabFullScreen?(p(),L(wn,{key:0})):V("",!0)],64)}}}),xn=F(Tn,[["__scopeId","data-v-d4e38ac8"]]);function Sn(){return be({url:"/data/home/routes.json",method:"get"})}function Ln(){return be({url:"/data/home/site-config.json",method:"get"})}function Mn(){return be({url:"/data/home/user-info.json",method:"get"})}const An=$({__name:"index",setup(n){const t=O(),a=N(),u=he(),d=Je(),s=z({autoMenuCollapseLock:!1});J(()=>{y(),ke(),ae(window,"resize",ke)}),Oe(()=>{i(),ae(window,"resize",i)});const y=async()=>{const r={routes:(await Sn()).data,siteConfig:(await Ln()).data,userInfo:(await Mn()).data};u.dataFill(r.siteConfig),u.setInitialize(!0),d.dataFill(r.userInfo),u.setUserInitialize(!0),rt(r.routes);let f=ye(t.state.tabsViewRoutes);f&&await we(f.path)},i=()=>{let r={layoutMode:a.layout.layoutMode,menuCollapse:a.layout.menuCollapse},f=fe.get(ve);if(f||fe.set(ve,r),document.body.clientWidth<1024)s.autoMenuCollapseLock||(s.autoMenuCollapseLock=!0,a.setLayout("menuCollapse",!0)),a.setLayout("shrink",!0),a.setLayoutMode("Classic");else{s.autoMenuCollapseLock=!1;let k=f||r;a.setLayout("menuCollapse",k.menuCollapse),a.setLayout("shrink",!1),a.setLayoutMode(k.layoutMode)}};return(r,f)=>(p(),L(xn))}});export{An as default};
