"use strict";(self.webpackChunkcnmp=self.webpackChunkcnmp||[]).push([[6458],{31962:function(e,n,r){var t=r(48305),a=r.n(t),l=r(31906),o=r(51142),i=r(81861),s=r(35028),c=r(59614),u=r(97628),d=r(50959),f=r(11527);n.Z=function(e){var n=e.onRefresh,r=e.onSave,t=e.defaultContent,p=e.editorHeight,m=void 0===p?300:p,h=e.disabledEdit,v=(0,d.useState)(!1),y=a()(v,2),g=y[0],b=y[1],x=(0,d.useState)(t),j=a()(x,2),O=j[0],C=j[1],k=(0,d.useRef)(t);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Z,{justify:"space-between",children:g?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.Z,{beforeUpload:function(e){var n=new FileReader;return n.readAsText(e),n.onload=function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;r&&C(r)},!1},accept:".yaml,.yml",showUploadList:!1,children:(0,f.jsx)(s.ZP,{type:"primary",children:"导入YAML"})}),(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(s.ZP,{onClick:function(){b(!1),C(k.current)},children:"取消"}),(0,f.jsx)(s.ZP,{onClick:function(){r(O).then((function(){k.current=O,b(!1)}))},children:"确定"})]})]}):(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(s.ZP,{type:"primary",onClick:function(){b(!0)},disabled:h,children:"编辑YAML"}),(0,f.jsx)(s.ZP,{onClick:function(){navigator.clipboard.writeText(O).then((function(){u.ZP.success("复制成功")}))},children:"复制"}),(0,f.jsx)(s.ZP,{onClick:function(){null==n||n().then((function(e){C(e),u.ZP.success("刷新成功")}))},children:"刷新"})]})}),(0,f.jsx)("div",{style:{marginTop:20},children:(0,f.jsx)(l.ZP,{theme:"vs-dark",language:"yaml",value:O,onChange:function(e){C(e||"")},height:m,options:{minimap:{enabled:!1},fontSize:14,readOnly:!g,scrollBeyondLastLine:!1}})})]})}},65055:function(e,n,r){r.d(n,{Z:function(){return N}});var t=r(82092),a=r.n(t),l=r(26068),o=r.n(l),i=r(90228),s=r.n(i),c=r(15558),u=r.n(c),d=r(87999),f=r.n(d),p=r(48305),m=r.n(p),h=r(56330),v=r(39703),y=r(60125),g=r(52850),b=r(35028),x=r(97628),j=r(80699),O=r(82187),C=r.n(O),k=r(32699),P=r.n(k),w=r(50959),S=r(59739),Z="editable-table___ELOJW",_=r(11527),E=function(e,n,r){return void 0===n||""===n?e:e.filter((function(e){return!r||r(e,n)}))},N=function(e){var n=e.defaultIsEdit,r=void 0!==n&&n,t=e.placeholder,l=e.columns,i=e.editTitle,c=e.searchWidth,d=e.search,p=e.onSave,O=e.hide,k=e.operationOptions,N=e.editable,$=e.recordCreatorProps,T=e.rowKey,R=void 0===T?"id":T,I=(0,g.Z)(e),M=m()(I,2),q=M[0],F=M[1],L=(0,w.useState)(""),B=m()(L,2),X=B[0],K=B[1],A=(0,w.useState)(r),H=m()(A,2),z=H[0],G=H[1],D=(0,y.T)(e.editorFormRef),Y=(0,w.useRef)(),Q=(0,w.useState)([]),W=m()(Q,2),U=W[0],V=W[1],J=(0,w.useState)([]),ee=m()(J,2),ne=ee[0],re=ee[1],te=(0,w.useMemo)((function(){return E(q,X,d)}),[q,d,X]),ae=(0,w.useState)(0),le=m()(ae,2),oe=le[0],ie=le[1];(0,w.useEffect)((function(){re(E(q||[],X,d))}),[q,d,X]),(0,w.useEffect)((function(){V(z&&(null==q?void 0:q.map((function(e){return e[R]})))||[])}),[z,q]);var se=function(){var e=f()(s()().mark((function e(){var n,r,t,a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=P().differenceBy(ne,te,R),r=P().differenceBy(te,ne,R),t=P().intersectionBy(ne,te,R),a=[].concat(u()(n),u()(q.filter((function(e){return!r.some((function(n){return e[R]===n[R]}))})).map((function(e){var n=t.findIndex((function(n){return e[R]===n[R]}));return n>-1?t[n]:e})))),!p){e.next=7;break}return e.next=7,p(a);case 7:F(a),G(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,_.jsx)(v.Z,{rowKey:R,className:C()(Z,e.className),headerTitle:z||"string"!=typeof i?(0,_.jsx)("span",{onClick:function(){z||G(!0)},children:i}):(0,_.jsx)(b.ZP,{type:"primary",onClick:function(){z||G(!0)},children:i}),toolBarRender:function(){return null!=O&&O.toolBarRender?[]:z?[(0,_.jsx)(b.ZP,{onClick:function(){re(te),G(!1),ie(oe+1)},children:"取消"},"cancel"),(0,_.jsx)(b.ZP,{type:"primary",onClick:f()(s()().mark((function e(){var n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null===(n=D.current)||void 0===n?void 0:n.validateFields();case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),x.ZP.warning("存在校验未通过项，请修改"),e.abrupt("return");case 9:se();case 10:case"end":return e.stop()}}),e,null,[[0,5]])}))),children:"确认"},"ok")]:[(0,_.jsx)(j.Z,{style:{width:null!=c?c:300},value:X,placeholder:t,onChange:function(e){K(e.target.value)},allowClear:!0,suffix:(0,_.jsx)(h.Z,{style:{color:"#918f8f"}})},"__search__input")]},editableFormRef:D,columns:[].concat(u()(l),u()(z?[{dataIndex:"operation",title:"操作",valueType:"option",width:(null==k?void 0:k.width)||250,render:function(){return null}}]:[])),recordCreatorProps:!!z&&o()({position:"top",newRecordType:"dataSource",record:function(){return a()({},R,(0,S.Z)())}},$),value:ne,onChange:function(e){re(e)},actionRef:Y,editable:o()({type:"multiple",editableKeys:U,actionRender:function(e,n,r){return[r.delete]},onValuesChange:function(n,r){var t;(re(r),null!=O&&O.toolBarRender)&&(null===(t=e.onChange)||void 0===t||t.call(e,r))},onChange:function(e){V(e)}},N)},oe)}},60125:function(e,n,r){r.d(n,{T:function(){return a}});var t=r(50959),a=function(e,n){var r=(0,t.useRef)(n);return e||r}},51790:function(e,n,r){r.r(n),r.d(n,{default:function(){return $}});var t=r(82092),a=r.n(t),l=r(26068),o=r.n(l),i=r(90228),s=r.n(i),c=r(87999),u=r.n(c),d=r(48305),f=r.n(d),p=r(30813),m=r(65055),h=r(31962),v=r(9522),y=r(94537),g=r(32030),b=r(47212),x=r(2918),j=r(38616),O=r(97628),C=r(59614),k=r(35028),P=r(85584),w=r(51142),S=r(50959),Z="block___qcfvE",_="row___jYTXM",E=r(11527),N=function(e,n){return!n||[e.value||"",e.key||""].some((function(e){return e.toLowerCase().indexOf(n.toLowerCase())>-1}))},$=function(){var e=(0,y.NL)(),n=(0,g.useParams)().roleId,r=void 0===n?"":n,t=(0,v.M6)({variables:{list_all:"1"}}).data,l=(0,v.o_)({variables:{list_all:"1"}}).data,i=(0,S.useState)([]),c=f()(i,2),d=c[0],$=c[1],T=(0,b.Z)((function(){return(0,p.aM)({role_id:r}).then((function(e){return e.detail}))})),R=T.data,I=T.refreshAsync;(0,S.useEffect)((function(){(0,p.r5)({list_all:"1",role_id:r}).then((function(e){$(e.list)}))}),[]);var M,q=(0,S.useMemo)((function(){var e;return Object.fromEntries((null==t||null===(e=t.list)||void 0===e?void 0:e.map((function(e){return[e.id,{text:e.name}]})))||[])}),[t]),F=(0,S.useMemo)((function(){var e;return Object.fromEntries((null==l||null===(e=l.list)||void 0===e?void 0:e.map((function(e){return[e.user_group_id,{text:e.user_group_name}]})))||[])}),[t]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("div",{className:Z,children:(0,E.jsx)(x.Z,{items:[{title:"授权管理 "},{title:(0,E.jsx)(g.Link,{to:"/user/manager",children:"角色管理"})},{title:"角色详情：".concat(null==R?void 0:R.name)}]})}),(0,E.jsx)(j.Z,{items:[{label:"授权管理",key:"auth",children:(0,E.jsx)(m.Z,{value:d,search:N,placeholder:"模糊搜索用户、集群",onSave:function(){var e=u()(s()().mark((function e(n){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.YT)({role_id:Number(r),bindings:n});case 2:O.ZP.success("编辑授权成功");case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),columns:[{dataIndex:"user_group_id",title:"用户组",valueType:"select",valueEnum:F,fieldProps:{placeholder:"请选择用户组"}},{dataIndex:"cluster_id",title:"集群",valueType:"select",valueEnum:q,formItemProps:{rules:[{required:!0,message:"此项是必填项"}]},fieldProps:function(e,n){return{placeholder:"请选择集群",onChange:(r=u()(s()().mark((function r(){return s()().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.setFieldsValue(a()({},n.entity.id,o()(o()({},e.getFieldsValue()),{},{namespace:void 0})));case 1:case"end":return r.stop()}}),r)}))),function(){return r.apply(this,arguments)})};var r}},{dataIndex:"namespace",title:"命名空间",valueType:"select",dependencies:["cluster_id"],formItemProps:{rules:[{required:!0,message:"此项是必填项"}]},fieldProps:{placeholder:"请选择命名空间",disabled:1===(null==R?void 0:R.role_type)},request:(M=u()(s()().mark((function n(r){var t,a;return s()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.fetchQuery(o()(o()({},v.gt.getFetchOptions({cluster_name:q[r.cluster_id].text})),{},{staleTime:3e5}));case 2:return a=n.sent,n.abrupt("return",[{label:"全部命名空间",value:"all"}].concat((null===(t=a.list)||void 0===t?void 0:t.map((function(e){return{label:e.name,value:e.name}})))||[]));case 4:case"end":return n.stop()}}),n)}))),function(e){return M.apply(this,arguments)})}],editTitle:(0,E.jsxs)(C.Z,{children:[(0,E.jsx)(k.ZP,{type:"primary",children:"编辑授权"}),R&&(0===(null==R?void 0:R.role_type)?(0,E.jsx)(P.Z,{color:"blue",children:"集群"}):(0,E.jsx)(P.Z,{color:"green",children:"普通"}))]})})},{key:"basic",label:"基础信息",children:R&&(0,E.jsxs)("div",{className:Z,children:[(0,E.jsxs)(w.Z,{className:_,children:[(0,E.jsx)("div",{children:"角色名"}),(0,E.jsx)("div",{children:R.name})]}),(0,E.jsxs)(w.Z,{className:_,children:[(0,E.jsx)("div",{children:"角色类型"}),(0,E.jsx)("div",{children:0===R.role_type?(0,E.jsx)(P.Z,{color:"blue",children:"集群"}):(0,E.jsx)(P.Z,{color:"green",children:"普通"})})]}),(0,E.jsxs)(w.Z,{className:_,children:[(0,E.jsx)("div",{children:"默认角色"}),(0,E.jsx)("div",{children:R.is_default?(0,E.jsx)(P.Z,{children:"是"}):(0,E.jsx)(P.Z,{color:"blue",children:"否"})})]}),(0,E.jsxs)(w.Z,{className:_,children:[(0,E.jsx)("div",{children:"最后更新人"}),(0,E.jsx)("div",{children:R.update_by})]}),(0,E.jsxs)(w.Z,{className:_,children:[(0,E.jsx)("div",{children:"最后更新时间"}),(0,E.jsx)("div",{children:R.update_time})]}),(0,E.jsxs)(w.Z,{className:_,children:[(0,E.jsx)("div",{children:"备注"}),(0,E.jsx)("div",{children:R.description})]})]})},{label:"YAML",key:"YAML",children:(0,E.jsx)(h.Z,{disabledEdit:null==R?void 0:R.is_default,onRefresh:u()(s()().mark((function e(){var n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return n=e.sent,e.abrupt("return",n.yaml);case 4:case"end":return e.stop()}}),e)}))),onSave:function(){var e=u()(s()().mark((function e(n){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.$h)({id:Number(r),yaml:n,name:R.name,description:R.description,role_type:R.role_type});case 2:O.ZP.success("编辑成功");case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),defaultContent:(null==R?void 0:R.yaml)||"",editorHeight:500})}]})]})}},9522:function(e,n,r){r.d(n,{M6:function(){return C},gt:function(){return k},tY:function(){return w},o_:function(){return P}});var t=r(30813),a=r(48305),l=r.n(a),o=(r(90228),r(87999),r(15558)),i=r.n(o),s=r(26068),c=r.n(s),u=r(67825),d=r.n(u),f=r(32699),p=r.n(f),m=r(50959),h=r(46106),v=["use"],y=h,g=!!y.useSuspenseQuery,b=function(e,n){return null==n||p().isEmpty(n)?i()(e):[].concat(i()(e),[n])};var x=function(e,n,r){var t=function(n,r){return{queryFn:r&&r===y.skipToken?y.skipToken:function(e){return n(r,e)},queryKey:b(e.queryKey,r)}};return Object.assign(function(e,n,r){return function(t,a){var o=[y.useQueryClient(g?a:t).getDefaultOptions()[r],n,t].reduce((function(e){var n=l()(e,2),r=n[0],t=n[1],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.use,s=void 0===o?[]:o,u=d()(a,v);return[[].concat(i()(r),i()(s)),c()(c()({},t),u)]}),[[]]),s=l()(o,2),u=s[0],f=s[1];return u.reduceRight((function(e,n){return n(e)}),e)(f,a)}}((function(e,a){var o=(0,m.useState)(!e.manual&&e.enabled),i=l()(o,2),s=i[0],u=i[1],d=(0,m.useCallback)((function(){e.manual&&u(!0)}),[e.manual]),f=n(c()(c()(c()({},e),t(e.fetcher,e.variables)),{},{enabled:s},r),a);return c()(c()({},f),{},{run:d})}),e,"queries"),{fetcher:e.fetcher,getKey:function(n){return b(e.queryKey,n)},getOptions:function(n){return c()(c()({},e),t(e.fetcher,n))},getFetchOptions:function(n){return c()(c()({},t(e.fetcher,n)),{},{queryKeyHashFn:e.queryKeyHashFn,getPreviousPageParam:e.getPreviousPageParam,getNextPageParam:e.getNextPageParam,initialPageParam:e.initialPageParam})}})};r(82092);var j=["queryKey","apiOptions"],O=function(e,n){var r=n||{},t=r.queryKey,a=r.apiOptions,l=d()(r,j);return function(e){return x(e,y.useQuery)}(c()({queryKey:t?[e.queryKey].concat(i()(t)):[e.queryKey],fetcher:function(n){return e(n,a)}},l))},C=O(t.LB),k=O(t.Vb),P=O(t.TJ),w=O(t.e5)},2918:function(e,n,r){r.d(n,{Z:function(){return E}});var t=r(50959),a=r(82187),l=r.n(a),o=r(40253),i=r(98808),s=r(60718),c=r(2444),u=r(8096),d=r(79588);const f=e=>{let{children:n}=e;const{getPrefixCls:r}=t.useContext(c.E_),a=r("breadcrumb");return t.createElement("li",{className:`${a}-separator`,"aria-hidden":"true"},""===n?n:n||"/")};f.__ANT_BREADCRUMB_SEPARATOR=!0;var p=f,m=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r};function h(e,n,r,a){if(null==r)return null;const{className:o,onClick:s}=n,c=m(n,["className","onClick"]),u=Object.assign(Object.assign({},(0,i.Z)(c,{data:!0,aria:!0})),{onClick:s});return void 0!==a?t.createElement("a",Object.assign({},u,{className:l()(`${e}-link`,o),href:a}),r):t.createElement("span",Object.assign({},u,{className:l()(`${e}-link`,o)}),r)}function v(e,n){return(r,t,a,l,o)=>{if(n)return n(r,t,a,l);const i=function(e,n){if(void 0===e.title||null===e.title)return null;const r=Object.keys(n).join("|");return"object"==typeof e.title?e.title:String(e.title).replace(new RegExp(`:(${r})`,"g"),((e,r)=>n[r]||e))}(r,t);return h(e,r,i,o)}}var y=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r};const g=e=>{const{prefixCls:n,separator:r="/",children:a,menu:l,overlay:o,dropdownProps:i,href:s}=e;const c=(e=>{if(l||o){const r=Object.assign({},i);if(l){const e=l||{},{items:n}=e,a=y(e,["items"]);r.menu=Object.assign(Object.assign({},a),{items:null==n?void 0:n.map(((e,n)=>{var{key:r,title:a,label:l,path:o}=e,i=y(e,["key","title","label","path"]);let c=null!=l?l:a;return o&&(c=t.createElement("a",{href:`${s}${o}`},c)),Object.assign(Object.assign({},i),{key:null!=r?r:n,label:c})}))})}else o&&(r.overlay=o);return t.createElement(d.Z,Object.assign({placement:"bottom"},r),t.createElement("span",{className:`${n}-overlay-link`},e,t.createElement(u.Z,null)))}return e})(a);return null!=c?t.createElement(t.Fragment,null,t.createElement("li",null,c),r&&t.createElement(p,null,r)):null},b=e=>{const{prefixCls:n,children:r,href:a}=e,l=y(e,["prefixCls","children","href"]),{getPrefixCls:o}=t.useContext(c.E_),i=o("breadcrumb",n);return t.createElement(g,Object.assign({},l,{prefixCls:i}),h(i,l,r,a))};b.__ANT_BREADCRUMB_ITEM=!0;var x=b,j=r(601),O=r(60926),C=r(75775),k=r(41748);var P=(0,C.I$)("Breadcrumb",(e=>(e=>{const{componentCls:n,iconCls:r,calc:t}=e;return{[n]:Object.assign(Object.assign({},(0,O.Wf)(e)),{color:e.itemColor,fontSize:e.fontSize,[r]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${(0,j.bf)(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:t(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,O.Qy)(e)),"li:last-child":{color:e.lastItemColor},[`${n}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${n}-link`]:{[`\n          > ${r} + span,\n          > ${r} + a\n        `]:{marginInlineStart:e.marginXXS}},[`${n}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${(0,j.bf)(e.paddingXXS)}`,marginInline:t(e.marginXXS).mul(-1).equal(),[`> ${r}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}})((0,k.TS)(e,{}))),(e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}))),w=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r};function S(e){const{breadcrumbName:n,children:r}=e,t=w(e,["breadcrumbName","children"]),a=Object.assign({title:n},t);return r&&(a.menu={items:r.map((e=>{var{breadcrumbName:n}=e,r=w(e,["breadcrumbName"]);return Object.assign(Object.assign({},r),{title:n})}))}),a}var Z=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r};const _=e=>{const{prefixCls:n,separator:r="/",style:a,className:u,rootClassName:d,routes:f,items:m,children:h,itemRender:y,params:b={}}=e,x=Z(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:j,direction:O,breadcrumb:C}=t.useContext(c.E_);let k;const w=j("breadcrumb",n),[_,E,N]=P(w),$=function(e,n){return(0,t.useMemo)((()=>e||(n?n.map(S):null)),[e,n])}(m,f);const T=v(w,y);if($&&$.length>0){const e=[],n=m||f;k=$.map(((a,l)=>{const{path:o,key:s,type:c,menu:u,overlay:d,onClick:f,className:m,separator:h,dropdownProps:v}=a,y=((e,n)=>{if(void 0===n)return n;let r=(n||"").replace(/^\//,"");return Object.keys(e).forEach((n=>{r=r.replace(`:${n}`,e[n])})),r})(b,o);void 0!==y&&e.push(y);const x=null!=s?s:l;if("separator"===c)return t.createElement(p,{key:x},h);const j={},O=l===$.length-1;u?j.menu=u:d&&(j.overlay=d);let{href:C}=a;return e.length&&void 0!==y&&(C=`#/${e.join("/")}`),t.createElement(g,Object.assign({key:x},j,(0,i.Z)(a,{data:!0,aria:!0}),{className:m,dropdownProps:v,href:C,separator:O?"":r,onClick:f,prefixCls:w}),T(a,b,n,e,C))}))}else if(h){const e=(0,o.Z)(h).length;k=(0,o.Z)(h).map(((n,t)=>{if(!n)return n;const a=t===e-1;return(0,s.Tm)(n,{separator:a?"":r,key:t})}))}const R=l()(w,null==C?void 0:C.className,{[`${w}-rtl`]:"rtl"===O},u,d,E,N),I=Object.assign(Object.assign({},null==C?void 0:C.style),a);return _(t.createElement("nav",Object.assign({className:R,style:I},x),t.createElement("ol",null,k)))};_.Item=x,_.Separator=p;var E=_},51142:function(e,n,r){r.d(n,{Z:function(){return C}});var t=r(50959),a=r(82187),l=r.n(a),o=r(8146),i=r(56445),s=r(2444),c=r(75775),u=r(41748);const d=["wrap","nowrap","wrap-reverse"],f=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],p=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];var m=function(e,n){return l()(Object.assign(Object.assign(Object.assign({},((e,n)=>{const r={};return d.forEach((t=>{r[`${e}-wrap-${t}`]=n.wrap===t})),r})(e,n)),((e,n)=>{const r={};return p.forEach((t=>{r[`${e}-align-${t}`]=n.align===t})),r[`${e}-align-stretch`]=!n.align&&!!n.vertical,r})(e,n)),((e,n)=>{const r={};return f.forEach((t=>{r[`${e}-justify-${t}`]=n.justify===t})),r})(e,n)))};const h=e=>{const{componentCls:n}=e;return{[n]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},v=e=>{const{componentCls:n}=e;return{[n]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},y=e=>{const{componentCls:n}=e,r={};return d.forEach((e=>{r[`${n}-wrap-${e}`]={flexWrap:e}})),r},g=e=>{const{componentCls:n}=e,r={};return p.forEach((e=>{r[`${n}-align-${e}`]={alignItems:e}})),r},b=e=>{const{componentCls:n}=e,r={};return f.forEach((e=>{r[`${n}-justify-${e}`]={justifyContent:e}})),r};var x=(0,c.I$)("Flex",(e=>{const{paddingXS:n,padding:r,paddingLG:t}=e,a=(0,u.TS)(e,{flexGapSM:n,flexGap:r,flexGapLG:t});return[h(a),v(a),y(a),g(a),b(a)]}),(()=>({})),{resetStyle:!1}),j=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r};const O=t.forwardRef(((e,n)=>{const{prefixCls:r,rootClassName:a,className:c,style:u,flex:d,gap:f,children:p,vertical:h=!1,component:v="div"}=e,y=j(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:g,direction:b,getPrefixCls:O}=t.useContext(s.E_),C=O("flex",r),[k,P,w]=x(C),S=null!=h?h:null==g?void 0:g.vertical,Z=l()(c,a,null==g?void 0:g.className,C,P,w,m(C,e),{[`${C}-rtl`]:"rtl"===b,[`${C}-gap-${f}`]:(0,i.n)(f),[`${C}-vertical`]:S}),_=Object.assign(Object.assign({},null==g?void 0:g.style),u);return d&&(_.flex=d),f&&!(0,i.n)(f)&&(_.gap=f),k(t.createElement(v,Object.assign({ref:n,className:Z,style:_},(0,o.Z)(y,["justify","wrap","align"])),p))}));var C=O}}]);