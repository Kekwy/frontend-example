import{r as c,_ as m}from"./index-BXlEqNJQ.js";import{u,g as _,r as g}from"./router-v3QM4j-8.js";import{e as f,r as p,ac as v,m as h,a6 as b,o as s,h as n,Q as w,k as x,l as R,J as k,X as C,W as N,Z as T}from"./vue-CBJ4XcuP.js";const V=["element-loading-text"],y={key:0,class:"loading-footer"},B=f({__name:"loading",setup(D){let t;const i=u(),e=p({maximumWait:1e3*6,showReload:!1}),r=()=>{c.go(0)};let a=_(i.state.tabsViewRoutes);return a&&g(a.path),t=window.setTimeout(()=>{e.showReload=!0},e.maximumWait),v(()=>{clearTimeout(t)}),(o,W)=>{const l=h("el-button"),d=b("loading");return s(),n("div",null,[w(x("div",{"element-loading-background":"var(--ba-bg-color-overlay)","element-loading-text":o.$t("utils.Loading"),class:"default-main ba-main-loading"},null,8,V),[[d,!0]]),e.showReload?(s(),n("div",y,[R(l,{onClick:r,type:"warning"},{default:k(()=>[C(N(o.$t("utils.Reload")),1)]),_:1})])):T("",!0)])}}}),I=m(B,[["__scopeId","data-v-3172f3fd"]]);export{I as default};