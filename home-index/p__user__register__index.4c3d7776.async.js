"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[907],{12980:function(ve,y,r){r.r(y),r.d(y,{default:function(){return Y}});var T=r(48305),d=r.n(T),m=r(82529),f=r(19762),C=r(98984),V=r(47698),G=r(63151),h=r(41268),$=r(25666),O=r(1193),W=r(14417),S=r(87980),P=r(50159),p=r(50959),k=r(90228),A=r.n(k),M=r(87999),L=r.n(M);function U(g){return x.apply(this,arguments)}function x(){return x=L()(A()().mark(function g(n){return A()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,m.request)("/api/register",{method:"POST",data:n}));case 1:case"end":return l.stop()}},g)})),x.apply(this,arguments)}var H=r(19383),J=(0,H.kc)(function(g){var n=g.token;return{main:{width:"368px",margin:"0 auto",h3:{marginBottom:"20px",fontSize:"16px"}},password:{marginBottom:"24px",".ant-form-item-explain":{display:"none"}},getCaptcha:{display:"block",width:"100%"},footer:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},submit:{width:"50%"},success:{transition:"color 0.3s",color:n.colorSuccess},warning:{transition:"color 0.3s",color:n.colorWarning},error:{transition:"color 0.3s",color:n.colorError},"progress-pass > .progress":{".ant-progress-bg":{backgroundColor:n.colorWarning}}}}),K=J,e=r(11527),i=f.Z.Item,Z=C.Z.Option,Q={ok:"success",pass:"normal",poor:"exception"},X=function(){var n=K(),a=n.styles,l=(0,p.useState)(0),B=d()(l,2),j=B[0],w=B[1],b=(0,p.useState)(!1),E=d()(b,2),F=E[0],N=E[1],q=(0,p.useState)("86"),z=d()(q,2),_=z[0],ee=z[1],se=(0,p.useState)(!1),R=d()(se,2),re=R[0],te=R[1],ae=!1,v,ne={ok:(0,e.jsx)("div",{className:a.success,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u5F3A"})}),pass:(0,e.jsx)("div",{className:a.warning,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u4E2D"})}),poor:(0,e.jsx)("div",{className:a.error,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u592A\u77ED"})})},oe=f.Z.useForm(),ue=d()(oe,1),u=ue[0];(0,p.useEffect)(function(){return function(){clearInterval(v)}},[v]);var ie=function(){var s=59;w(s),v=window.setInterval(function(){s-=1,w(s),s===0&&clearInterval(v)},1e3)},D=function(){var s=u.getFieldValue("password");return s&&s.length>9?"ok":s&&s.length>5?"pass":"poor"},I=(0,m.useRequest)(U,{manual:!0,onSuccess:function(s,t){s.status==="ok"&&(V.ZP.success("\u6CE8\u518C\u6210\u529F\uFF01"),m.history.push({pathname:"/user/register-result?account=".concat(t[0].email)}))}}),le=I.loading,ce=I.run,de=function(s){ce(s)},he=function(s,t){var c=Promise;return t&&t!==u.getFieldValue("password")?c.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u5339\u914D!"):c.resolve()},pe=function(s,t){var c=Promise;return t?(F||N(!!t),te(!re),t.length<6?c.reject(""):(t&&ae&&u.validateFields(["confirm"]),c.resolve())):(N(!!t),c.reject("\u8BF7\u8F93\u5165\u5BC6\u7801!"))},ge=function(s){ee(s)},me=function(){var s=u.getFieldValue("password"),t=D();return s&&s.length?(0,e.jsx)("div",{className:a["progress-".concat(t)],children:(0,e.jsx)(G.Z,{status:Q[t],strokeWidth:6,percent:s.length*10>100?100:s.length*10,showInfo:!1})}):null};return(0,e.jsxs)("div",{className:a.main,children:[(0,e.jsx)("h3",{children:"\u6CE8\u518C"}),(0,e.jsxs)(f.Z,{form:u,name:"UserRegister",onFinish:de,children:[(0,e.jsx)(i,{name:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740!"},{type:"email",message:"\u90AE\u7BB1\u5730\u5740\u683C\u5F0F\u9519\u8BEF!"}],children:(0,e.jsx)(h.Z,{size:"large",placeholder:"\u90AE\u7BB1"})}),(0,e.jsx)($.Z,{getPopupContainer:function(s){return s&&s.parentNode?s.parentNode:s},content:F&&(0,e.jsxs)("div",{style:{padding:"4px 0"},children:[ne[D()],me(),(0,e.jsx)("div",{style:{marginTop:10},children:(0,e.jsx)("span",{children:"\u8BF7\u81F3\u5C11\u8F93\u5165 6 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u4F7F\u7528\u5BB9\u6613\u88AB\u731C\u5230\u7684\u5BC6\u7801\u3002"})})]}),overlayStyle:{width:240},placement:"right",open:F,children:(0,e.jsx)(i,{name:"password",className:u.getFieldValue("password")&&u.getFieldValue("password").length>0&&a.password,rules:[{validator:pe}],children:(0,e.jsx)(h.Z,{size:"large",type:"password",placeholder:"\u81F3\u5C116\u4F4D\u5BC6\u7801\uFF0C\u533A\u5206\u5927\u5C0F\u5199"})})}),(0,e.jsx)(i,{name:"confirm",rules:[{required:!0,message:"\u786E\u8BA4\u5BC6\u7801"},{validator:he}],children:(0,e.jsx)(h.Z,{size:"large",type:"password",placeholder:"\u786E\u8BA4\u5BC6\u7801"})}),(0,e.jsx)(i,{name:"mobile",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7!"},{pattern:/^\d{11}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF!"}],children:(0,e.jsxs)(O.Z.Compact,{style:{width:"100%"},children:[(0,e.jsxs)(C.Z,{size:"large",value:_,onChange:ge,style:{width:"30%"},children:[(0,e.jsx)(Z,{value:"86",children:"+86"}),(0,e.jsx)(Z,{value:"87",children:"+87"})]}),(0,e.jsx)(h.Z,{size:"large",placeholder:"\u624B\u673A\u53F7"})]})}),(0,e.jsxs)(W.Z,{gutter:8,children:[(0,e.jsx)(S.Z,{span:16,children:(0,e.jsx)(i,{name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801!"}],children:(0,e.jsx)(h.Z,{size:"large",placeholder:"\u9A8C\u8BC1\u7801"})})}),(0,e.jsx)(S.Z,{span:8,children:(0,e.jsx)(P.ZP,{size:"large",disabled:!!j,className:a.getCaptcha,onClick:ie,children:j?"".concat(j," s"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"})})]}),(0,e.jsx)(i,{children:(0,e.jsxs)("div",{className:a.footer,children:[(0,e.jsx)(P.ZP,{size:"large",loading:le,className:a.submit,type:"primary",htmlType:"submit",children:(0,e.jsx)("span",{children:"\u6CE8\u518C"})}),(0,e.jsx)(m.Link,{to:"/user/login",children:(0,e.jsx)("span",{children:"\u4F7F\u7528\u5DF2\u6709\u8D26\u6237\u767B\u5F55"})})]})})]})]})},Y=X}}]);