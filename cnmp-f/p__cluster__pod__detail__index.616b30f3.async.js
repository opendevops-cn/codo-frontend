"use strict";(self.webpackChunkcnmp=self.webpackChunkcnmp||[]).push([[7402],{60396:function(e,t,n){var a=n(48305),r=n.n(a),l=n(16639),o=n(50959),s=n(11527);t.Z=function(e){var t=e.children,n=e.modalRender,a=(0,o.useState)(!1),c=r()(a,2),i=c[0],u=c[1],d=l.Z.useForm(),p=r()(d,1)[0];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{onClick:function(){u(!0)},children:t}),i&&(null==n?void 0:n((function(){u(!1)}),p))]})}},69346:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(15558),r=n.n(a),l=n(26068),o=n.n(l),s=n(48305),c=n.n(s),i=n(56330),u=n(79179),d=n(60125),p=n(10534),f=n(65460),m=n(80699),v=n(82187),g=n.n(v),h=n(50959),y="no-left-title___t8LWq",x=n(11527),w=function(e){var t=e.placeholder,n=e.request,a=e.columns,l=e.leftTitle,s=e.tableProps,v=e.showSearch,w=void 0===v||v,b=e.dataSource,j=e.searchWidth,C=e.rightTitle,Z=void 0===C?[]:C,S=e.refreshDeps,O=e.actionRef,$=e.hideTitle,k=(0,d.T)(O),L=(0,h.useState)(""),P=c()(L,2),_=P[0],B=P[1],Y=(0,h.useRef)(""),R=(0,p.Z)((function(){var e,t;null===(e=k.current)||void 0===e||null===(t=e.reloadAndRest)||void 0===t||t.call(e)}),{wait:500}).run;return(0,f.Z)((function(){var e;null===(e=k.current)||void 0===e||e.reload()}),S||[]),(0,x.jsx)(u.Z,o()({className:g()((""===l||void 0===l)&&y),actionRef:k,headerTitle:l,dataSource:b,search:!1,columns:a,request:n&&function(e){return n(o()(o()({},e),{},{keyword:Y.current}))},pagination:{showSizeChanger:!0},options:{reload:!!n},toolBarRender:!$&&function(){return[].concat(r()(Z),r()(w?[(0,x.jsx)(m.Z,{style:{width:null!=j?j:300},value:_,placeholder:t,onChange:function(e){B(e.target.value),Y.current=e.target.value,R()},allowClear:!0,suffix:(0,x.jsx)(i.Z,{style:{color:"#918f8f"}})},"__search__input")]:[]))}},s))}},60125:function(e,t,n){n.d(t,{T:function(){return r}});var a=n(50959),r=function(e,t){var n=(0,a.useRef)(t);return e||n}},58082:function(e,t,n){n.d(t,{J:function(){return l}});var a=n(32030),r=n(50959),l=function(){var e=(0,a.useNavigate)();return(0,r.useCallback)((function(t){t&&e(t),e("/refresh"),setTimeout((function(){e(-1)}),0)}),[e])}},92059:function(e,t,n){n.r(t);var a=n(30813),r=n(86631),l=n(32030),o=n(47212),s=n(11527);t.default=function(){var e,t=(0,l.useParams)(),n=t.name,c=void 0===n?"":n,i=t.clusterName,u=void 0===i?"":i,d=t.namespace,p=void 0===d?"":d,f=(0,o.Z)((function(){return(0,a.j0)({pod_name:c,cluster_name:u,namespace:p})})).data;return(0,s.jsx)(s.Fragment,{children:f&&(0,s.jsx)(r.Z,{data:f.detail,type:(e=f.detail.workload_type,""===e?e:e.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),showBelong:!0})})}},29882:function(e,t,n){var a=n(48305),r=n.n(a),l=n(26068),o=n.n(l),s=n(30813),c=n(30433),i=n(31906),u=n(88934),d=n(97628),p=n(35028),f=n(81861),m=n(32699),v=n.n(m),g=n(50959),h=n(11527),y=o()({node:s.wB,namespace:s.B8,hpa:s.F_},v().mapValues(c.J,(function(e){return e.createOrUpdateByYaml})));t.Z=function(e){var t=e.onCancel,n=e.onOk,a=e.clusterName,l=e.defaultValue,o=e.readonly,s=e.sourceType,c=(0,g.useState)(l||""),m=r()(c,2),v=m[0],x=m[1];return(0,h.jsxs)(u.Z,{title:"YAML创建资源",open:!0,style:{top:20},onCancel:t,okButtonProps:o?{style:{display:"none"}}:{},onOk:function(){v?s?y[s]({yaml:v,cluster_name:a}).then((function(){null==t||t(),null==n||n(v),d.ZP.success("YAML创建资源成功")})).catch((function(e){d.ZP.error(e.reason)})):null==n||n(v):d.ZP.warning("请输入YAML")},width:"80vw",children:[(0,h.jsx)(i.ZP,{theme:"vs-dark",language:"yaml",value:v,onChange:function(e){x(e||"")},height:"75vh",options:{minimap:{enabled:!1},fontSize:14,wordWrap:"on",scrollBeyondLastLine:!1}}),(0,h.jsx)("div",{style:{position:"relative",height:0},children:o?(0,h.jsx)(p.ZP,{type:"primary",style:{position:"absolute",top:12},ghost:!0,onClick:function(){navigator.clipboard.writeText(v).then((function(){d.ZP.success("复制成功")}))},children:"复制"}):(0,h.jsx)(f.Z,{beforeUpload:function(e){var t=new FileReader;return t.readAsText(e),t.onload=function(e){var t,n=null===(t=e.target)||void 0===t?void 0:t.result;n&&x(n)},!1},accept:".yaml",showUploadList:!1,children:(0,h.jsx)(p.ZP,{type:"primary",onClick:function(){},style:{position:"absolute",top:12},children:"导入YAML"})})})]})}},30433:function(e,t,n){n.d(t,{J:function(){return r}});var a=n(30813),r={deployment:{detail:a.Ke,createOrUpdateByYaml:a.ek,replicasetList:a.hX,rollback:a.KZ,delete:a.Ax,restart:a.$l,scale:a.po,scaleStream:void 0,upgradeStrategy:void 0},"clone-set":{detail:a.iP,createOrUpdateByYaml:a.WX,replicasetList:a.qr,rollback:a.nV,delete:a.VE,restart:a.pk,scale:a.YM,scaleStream:a.kd,upgradeStrategy:a.S8},"game-server-set":{detail:a.dq,createOrUpdateByYaml:a.q4,replicasetList:a.lr,rollback:a.MC,delete:a.L5,restart:a._U,scale:a.lq,scaleStream:a.b_,upgradeStrategy:a.ZG},"stateful-set":{detail:a.dd,createOrUpdateByYaml:a.Iu,replicasetList:a.tR,rollback:a.Cq,delete:a.iU,restart:a.R,scale:a.K9,scaleStream:void 0,upgradeStrategy:void 0},"daemon-set":{detail:a.x2,createOrUpdateByYaml:a.D7,replicasetList:a.Xi,rollback:a.ti,delete:a.JY,restart:a.Bw,scale:a.Xx,scaleStream:void 0,upgradeStrategy:void 0}}},51142:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(50959),r=n(82187),l=n.n(r),o=n(8146),s=n(56445),c=n(2444),i=n(75775),u=n(41748);const d=["wrap","nowrap","wrap-reverse"],p=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],f=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];var m=function(e,t){return l()(Object.assign(Object.assign(Object.assign({},((e,t)=>{const n={};return d.forEach((a=>{n[`${e}-wrap-${a}`]=t.wrap===a})),n})(e,t)),((e,t)=>{const n={};return f.forEach((a=>{n[`${e}-align-${a}`]=t.align===a})),n[`${e}-align-stretch`]=!t.align&&!!t.vertical,n})(e,t)),((e,t)=>{const n={};return p.forEach((a=>{n[`${e}-justify-${a}`]=t.justify===a})),n})(e,t)))};const v=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},g=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},h=e=>{const{componentCls:t}=e,n={};return d.forEach((e=>{n[`${t}-wrap-${e}`]={flexWrap:e}})),n},y=e=>{const{componentCls:t}=e,n={};return f.forEach((e=>{n[`${t}-align-${e}`]={alignItems:e}})),n},x=e=>{const{componentCls:t}=e,n={};return p.forEach((e=>{n[`${t}-justify-${e}`]={justifyContent:e}})),n};var w=(0,i.I$)("Flex",(e=>{const{paddingXS:t,padding:n,paddingLG:a}=e,r=(0,u.TS)(e,{flexGapSM:t,flexGap:n,flexGapLG:a});return[v(r),g(r),h(r),y(r),x(r)]}),(()=>({})),{resetStyle:!1}),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const j=a.forwardRef(((e,t)=>{const{prefixCls:n,rootClassName:r,className:i,style:u,flex:d,gap:p,children:f,vertical:v=!1,component:g="div"}=e,h=b(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:y,direction:x,getPrefixCls:j}=a.useContext(c.E_),C=j("flex",n),[Z,S,O]=w(C),$=null!=v?v:null==y?void 0:y.vertical,k=l()(i,r,null==y?void 0:y.className,C,S,O,m(C,e),{[`${C}-rtl`]:"rtl"===x,[`${C}-gap-${p}`]:(0,s.n)(p),[`${C}-vertical`]:$}),L=Object.assign(Object.assign({},null==y?void 0:y.style),u);return d&&(L.flex=d),p&&!(0,s.n)(p)&&(L.gap=p),Z(a.createElement(g,Object.assign({ref:t,className:k,style:L},(0,o.Z)(h,["justify","wrap","align"])),f))}));var C=j}}]);