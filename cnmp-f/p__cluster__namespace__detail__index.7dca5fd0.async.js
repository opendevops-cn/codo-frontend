"use strict";(self.webpackChunkcnmp=self.webpackChunkcnmp||[]).push([[4947],{31962:function(e,n,t){var r=t(48305),a=t.n(r),s=t(31906),i=t(51142),c=t(81861),l=t(35028),o=t(59614),u=t(97628),d=t(50959),h=t(11527);n.Z=function(e){var n=e.onRefresh,t=e.onSave,r=e.defaultContent,p=e.editorHeight,f=void 0===p?300:p,m=e.disabledEdit,x=(0,d.useState)(!1),v=a()(x,2),y=v[0],j=v[1],Z=(0,d.useState)(r),k=a()(Z,2),g=k[0],b=k[1],w=(0,d.useRef)(r);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.Z,{justify:"space-between",children:y?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.Z,{beforeUpload:function(e){var n=new FileReader;return n.readAsText(e),n.onload=function(e){var n,t=null===(n=e.target)||void 0===n?void 0:n.result;t&&b(t)},!1},accept:".yaml,.yml",showUploadList:!1,children:(0,h.jsx)(l.ZP,{type:"primary",children:"导入YAML"})}),(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(l.ZP,{onClick:function(){j(!1),b(w.current)},children:"取消"}),(0,h.jsx)(l.ZP,{onClick:function(){t(g).then((function(){w.current=g,j(!1)}))},children:"确定"})]})]}):(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(l.ZP,{type:"primary",onClick:function(){j(!0)},disabled:m,children:"编辑YAML"}),(0,h.jsx)(l.ZP,{onClick:function(){navigator.clipboard.writeText(g).then((function(){u.ZP.success("复制成功")}))},children:"复制"}),(0,h.jsx)(l.ZP,{onClick:function(){null==n||n().then((function(e){b(e),u.ZP.success("刷新成功")}))},children:"刷新"})]})}),(0,h.jsx)("div",{style:{marginTop:20},children:(0,h.jsx)(s.ZP,{theme:"vs-dark",language:"yaml",value:g,onChange:function(e){b(e||"")},height:f,options:{minimap:{enabled:!1},fontSize:14,readOnly:!y,scrollBeyondLastLine:!1}})})]})}},58082:function(e,n,t){t.d(n,{J:function(){return s}});var r=t(32030),a=t(50959),s=function(){var e=(0,r.useNavigate)();return(0,a.useCallback)((function(n){n&&e(n),e("/refresh"),setTimeout((function(){e(-1)}),0)}),[e])}},43483:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(90228),a=t.n(r),s=t(87999),i=t.n(s),c=t(48305),l=t.n(c),o=t(30813),u=t(31962),d=t(44908),h=t(32030),p=t(38616),f=t(51142),m=t(97628),x=t(50959),v="block___YGY15",y="row___SZqz4",j=t(11527),Z=function(){var e=(0,h.useParams)(),n=e.clusterName,t=e.name,r=(0,x.useState)(),s=l()(r,2),c=s[0],Z=s[1];return(0,x.useEffect)((function(){(0,o.Q1)({name:t,cluster_name:n}).then((function(e){Z(e)}))}),[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.Z,{items:[{title:(0,j.jsx)(h.Link,{to:"/cluster/".concat(n,"/node"),children:"命名空间"})},{title:"命名空间详情：".concat(t)}],clusterName:n,sourceType:"namespace"}),c&&(0,j.jsx)(p.Z,{items:[{key:"basic",label:"基础信息",children:(0,j.jsxs)("div",{className:v,children:[(0,j.jsxs)(f.Z,{className:y,children:[(0,j.jsx)("div",{children:"名称"}),(0,j.jsx)("div",{children:c.name})]}),(0,j.jsxs)(f.Z,{className:y,children:[(0,j.jsx)("div",{children:"状态"}),(0,j.jsx)("div",{style:{color:"Active"===c.state?"#52C41A":""},children:c.state})]}),(0,j.jsxs)(f.Z,{className:y,children:[(0,j.jsx)("div",{children:"创建时间"}),(0,j.jsx)("div",{children:c.create_time})]}),(0,j.jsxs)(f.Z,{className:y,children:[(0,j.jsx)("div",{children:"备注"}),(0,j.jsx)("div",{children:c.description||"-"})]})]})},{key:"YAML",label:"YAML",children:(0,j.jsx)("div",{className:v,children:(0,j.jsx)(u.Z,{defaultContent:c.yaml,editorHeight:500,onRefresh:i()(a()().mark((function e(){var r;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Q1)({name:t,cluster_name:n});case 2:return r=e.sent,e.abrupt("return",r.yaml);case 4:case"end":return e.stop()}}),e)}))),onSave:function(){var e=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.wB)({yaml:t,cluster_name:n});case 2:m.ZP.success("编辑成功");case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})})}]})]})}},44908:function(e,n,t){var r=t(15558),a=t.n(r),s=t(48305),i=t.n(s),c=t(30813),l=t(58082),o=t(29882),u=t(32030),d=t(8096),h=t(33587),p=t(20811),f=t(51142),m=t(2918),x=t(30766),v=t(80699),y=t(59614),j=t(35028),Z=t(50959),k=t(84609),g=t(11527),b=p.Z.useToken;n.Z=function(e){var n=e.clusterName,t=e.items,r=e.sourceType,s=e.switchCluster,p=(0,Z.useState)(""),w=i()(p,2),L=w[0],C=w[1],S=(0,Z.useState)([]),P=i()(S,2),Y=P[0],_=P[1],B=(0,h.Z)(!1),A=i()(B,2),N=A[0],M=A[1],T=M.setFalse,U=M.setTrue,O=b().token,R=(0,l.J)(),F=(0,u.useLocation)(),q={backgroundColor:O.colorBgElevated,borderRadius:O.borderRadiusLG,boxShadow:O.boxShadowSecondary},E={boxShadow:"none"},J=(0,Z.useMemo)((function(){return Y.filter((function(e){return""===e||e.toLowerCase().indexOf(L.toLowerCase())>-1})).map((function(e){return{key:e,label:(0,g.jsx)("a",{onClick:function(){var n=F.pathname.split("/");s?(n[2]=e,R(n.join("/"))):R("/cluster/".concat(e,"/namespace"))},children:e})}}))}),[L,Y,s]);return(0,Z.useEffect)((function(){(0,c.LB)({list_all:"1"}).then((function(e){var n;_((null===(n=e.list)||void 0===n?void 0:n.map((function(e){return e.name})))||[])}))}),[]),(0,g.jsxs)("div",{className:k.Z.block,children:[(0,g.jsxs)(f.Z,{justify:"space-between",align:"center",children:[(0,g.jsx)(m.Z,{items:[{title:(0,g.jsx)(u.Link,{to:"/cluster-list",children:"集群列表"})},{title:(0,g.jsx)(x.Z,{dropdownRender:function(e){return(0,g.jsxs)("div",{style:q,children:[(0,g.jsx)("div",{style:{padding:8},children:(0,g.jsx)(v.Z,{style:{width:"100%"},placeholder:"请输入集群名称",value:L,onChange:function(e){return C(e.target.value)}})}),Z.cloneElement(e,{style:E})]})},menu:{items:J},children:(0,g.jsxs)(y.Z,{children:["集群名称: ",n,(0,g.jsx)(d.Z,{})]})})}].concat(a()(t||[]))}),(0,g.jsx)(j.ZP,{type:"primary",onClick:function(){U()},children:"YAML创建资源"})]}),N&&(0,g.jsx)(o.Z,{clusterName:n,onCancel:function(){T()},sourceType:r})]})}},29882:function(e,n,t){var r=t(48305),a=t.n(r),s=t(26068),i=t.n(s),c=t(30813),l=t(30433),o=t(31906),u=t(88934),d=t(97628),h=t(35028),p=t(81861),f=t(32699),m=t.n(f),x=t(50959),v=t(11527),y=i()({node:c.wB,namespace:c.B8,hpa:c.F_},m().mapValues(l.J,(function(e){return e.createOrUpdateByYaml})));n.Z=function(e){var n=e.onCancel,t=e.onOk,r=e.clusterName,s=e.defaultValue,i=e.readonly,c=e.sourceType,l=(0,x.useState)(s||""),f=a()(l,2),m=f[0],j=f[1];return(0,v.jsxs)(u.Z,{title:"YAML创建资源",open:!0,style:{top:20},onCancel:n,okButtonProps:i?{style:{display:"none"}}:{},onOk:function(){m?c?y[c]({yaml:m,cluster_name:r}).then((function(){null==n||n(),null==t||t(m),d.ZP.success("YAML创建资源成功")})).catch((function(e){d.ZP.error(e.reason)})):null==t||t(m):d.ZP.warning("请输入YAML")},width:"80vw",children:[(0,v.jsx)(o.ZP,{theme:"vs-dark",language:"yaml",value:m,onChange:function(e){j(e||"")},height:"75vh",options:{minimap:{enabled:!1},fontSize:14,wordWrap:"on",scrollBeyondLastLine:!1}}),(0,v.jsx)("div",{style:{position:"relative",height:0},children:i?(0,v.jsx)(h.ZP,{type:"primary",style:{position:"absolute",top:12},ghost:!0,onClick:function(){navigator.clipboard.writeText(m).then((function(){d.ZP.success("复制成功")}))},children:"复制"}):(0,v.jsx)(p.Z,{beforeUpload:function(e){var n=new FileReader;return n.readAsText(e),n.onload=function(e){var n,t=null===(n=e.target)||void 0===n?void 0:n.result;t&&j(t)},!1},accept:".yaml",showUploadList:!1,children:(0,v.jsx)(h.ZP,{type:"primary",onClick:function(){},style:{position:"absolute",top:12},children:"导入YAML"})})})]})}},30433:function(e,n,t){t.d(n,{J:function(){return a}});var r=t(30813),a={deployment:{detail:r.Ke,createOrUpdateByYaml:r.ek,replicasetList:r.hX,rollback:r.KZ,delete:r.Ax,restart:r.$l,scale:r.po,scaleStream:void 0,upgradeStrategy:void 0},"clone-set":{detail:r.iP,createOrUpdateByYaml:r.WX,replicasetList:r.qr,rollback:r.nV,delete:r.VE,restart:r.pk,scale:r.YM,scaleStream:r.kd,upgradeStrategy:r.S8},"game-server-set":{detail:r.dq,createOrUpdateByYaml:r.q4,replicasetList:r.lr,rollback:r.MC,delete:r.L5,restart:r._U,scale:r.lq,scaleStream:r.b_,upgradeStrategy:r.ZG},"stateful-set":{detail:r.dd,createOrUpdateByYaml:r.Iu,replicasetList:r.tR,rollback:r.Cq,delete:r.iU,restart:r.R,scale:r.K9,scaleStream:void 0,upgradeStrategy:void 0},"daemon-set":{detail:r.x2,createOrUpdateByYaml:r.D7,replicasetList:r.Xi,rollback:r.ti,delete:r.JY,restart:r.Bw,scale:r.Xx,scaleStream:void 0,upgradeStrategy:void 0}}},84609:function(e,n){n.Z={block:"block___a01xI"}}}]);