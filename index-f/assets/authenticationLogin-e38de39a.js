import{e as d,C as m,p,J as s,S as g,g as f,L as o,j as c,M as h,N as v,O as y,t as i,P as L,o as l,Q as x,R}from"./index-496ee967.js";import{k as b,l as k,i as C,j as w}from"./_plugin-vue_export-helper-24597b80.js";import{b as B,i as F,F as I}from"./FormLogin-bb39bf8f.js";const _=t=>(x("data-v-1f34f9a4"),t=t(),R(),t),M={class:"select-none"},S=["src"],q=_(()=>o("div",{class:"absolute flex-c right-5 top-3"},null,-1)),N={class:"login-container"},j={class:"img"},D={class:"login-box"},V={class:"login-form"},z=_(()=>o("h2",{class:"outline-none"},"二次认证",-1)),A={ref:"loginResize"},E=d({__name:"authenticationLogin",setup(t){const e=m({username:null,code:null,c_url:null,dynamic:""}),r=async n=>{if(e.code){const a={dynamic:n.dynamic,code:e.code,c_url:e.c_url};k(a)}else C(n)};return p(()=>{e.username=s().currentRoute.value.query.username,e.code=s().currentRoute.value.query.code,e.c_url=s().currentRoute.value.query.c_url,!e.username&&!e.code&&b()}),(n,a)=>{const u=g("Motion");return l(),f("div",M,[o("img",{src:c(B),class:"wave"},null,8,S),q,o("div",N,[o("div",j,[(l(),h(v(y(c(F)))))]),o("div",D,[o("div",V,[i(u,{delay:300},{default:L(()=>[z]),_:1}),o("div",A,[i(I,{authenticationLogin:!0,ruleForm:e,onLogin:r},null,8,["ruleForm"])],512)])])])])}}});const Q=w(E,[["__scopeId","data-v-1f34f9a4"]]);export{Q as default};