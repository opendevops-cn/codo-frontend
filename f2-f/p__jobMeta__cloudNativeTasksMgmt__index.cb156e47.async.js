"use strict";(self.webpackChunkf2=self.webpackChunkf2||[]).push([[7423],{1743:function(q,p,u){u.d(p,{V2:function(){return O}});var y=15,c=[10,15,20,50,100],O={defaultPageSize:y,showSizeChanger:!0,pageSizeOptions:c}},67254:function(q,p,u){var y=u(26068),c=u.n(y),O=u(67825),w=u.n(O),r=u(53649),s=u.n(r),B=u(99503),t=u(77777),S=u(88230),D=u(75271),d=u(52676),o=["children","extra","ghost","title"],W,b,M=(0,S.kc)(function(P){var N=P.css;return{pageContainer:{"& .ant-page-header-heading":N(W||(W=s()([`
      margin-bottom: -50px;
    `]))),"& .ant-page-header-heading-extra":N(b||(b=s()([`
      position: absolute;
      top: 17px;
      right: 20px;
    `])))}}}),I=function(N){var $=N.children,V=N.extra,G=V===void 0?(0,d.jsx)(B.er,{}):V,uu=N.ghost,Cu=uu===void 0?!1:uu,cu=N.title,du=cu===void 0?!1:cu,Au=w()(N,o),Fu=M(),Du=Fu.styles;return(0,d.jsx)(t._z,c()(c()({ghost:Cu,extra:G,className:Du.pageContainer,title:du},Au),{},{children:$}))};p.Z=I},78474:function(q,p,u){u.d(p,{j:function(){return O},t:function(){return w}});var y=u(54388),c=u(87300);function O(r,s,B,t,S,D){var d=S!=null?S:c.ZP,o=(0,y.useRequest)(r(s,B),{manual:!0,onSuccess:function(I){if(I.code!==0?d.error(I.msg):d.success(I.msg),D)D();else{var P;t==null||(P=t.current)===null||P===void 0||P.reload(!1)}},onError:function(){d.error("\u64CD\u4F5C\u5931\u8D25")}}),W=o.run,b=o.loading;return{runOpt:W,loading:b}}function w(r){var s=r.optMethod,B=r.optType,t=r.method,S=r.actionRef,D=r.messageApi,d=r.onSuccessCallback,o=r.showSuccessMessage,W=o===void 0?!0:o,b=D!=null?D:c.ZP,M=(0,y.useRequest)(s(B,t),{manual:!0,onSuccess:function($){var V=typeof $.msg=="string"?$.msg:JSON.stringify($.msg);if($.code!==0)b.error(V);else if(d)d($);else{var G;W&&b.success(V),S==null||(G=S.current)===null||G===void 0||G.reload(!1)}},onError:function(){b.error("\u64CD\u4F5C\u5931\u8D25")}}),I=M.run,P=M.loading;return{runOpt:I,loading:P}}},30168:function(q,p,u){u.d(p,{OV:function(){return c}});var y=u(60164),c=function(r,s){var B=(0,y.ac)({minWidth:s||1700}),t=B?r.wide:r.small;return{isWideScreen:B,width:t}},O=function(r){var s=useMediaQuery({minWidth:1700}),B=useMediaQuery({maxWidth:1699});return s?{type:"wide",width:r.wide}:B?{type:"small",width:r.small}:{type:"small",width:r.small}};p.ZP=c},15684:function(q,p,u){u.r(p),u.d(p,{default:function(){return ue}});var y=u(67825),c=u.n(y),O=u(36075),w=u.n(O),r=u(26068),s=u.n(r),B=u(90228),t=u.n(B),S=u(87999),D=u.n(S),d=u(48305),o=u.n(d),W=u(1743),b=u(67254),M=u(78474),I=u(30168),P=u(19048),N=u(2115),$=u(65496),V=u(90254),G=u(84297),uu=u(54388),Cu=u(37665),cu=u(67870),du=u(84249),Au=u(87300),Fu=u(38902),Du=u(64085),ku=u(80921),mu=u(41901),_u=u(28061),k=u(75271),xu=u(76283),Ou=u(62130),Mu=u(58564),Nu=u(99503),Tu=u(36903),ju=u(14443),wu=u(82715),Iu=u(1544),Lu=u(66130),fu=u(44725),Ru=u(95812),eu=u(23261);function Uu(){return(0,eu.Jl)("/api/job/v1/executive/cloudnativetask/")}function Wu(T){return(0,eu.dT)("/api/job/v1/executive/cloudnativetask/",T)}function he(T){return commonGetList("/api/job/v1/meta/cloud-native-task/info/",T)}function Zu(T,v){return(0,eu.S_)("/api/job/v1/executive/cloudnativetask/",v)}function $u(){return(0,eu.S_)("/api/job/v1/executive/cloudnativetask/","DELETE")}function Ku(T){return pu.apply(this,arguments)}function pu(){return pu=D()(t()().mark(function T(v){return t()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",(0,eu.dT)("/api/job/v1/meta/voucher/",v));case 1:case"end":return j.stop()}},T)})),pu.apply(this,arguments)}function Vu(T){return(0,eu.W8)("/api/job/v1/resource/cloud_native_associate/",T)}var e=u(52676),zu=function(v){var _=v.drawerData,j=v.taskData,Y=v.onVisibleChange,Q=v.onSubmit,ou=fu.Z.useForm(),K=o()(ou,1),Z=K[0],z=Au.ZP.useMessage(),au=o()(z,2),nu=au[1],su=(0,k.useState)([]),L=o()(su,2),m=L[0],J=L[1],H={task_data:Tu.H0},x=function(){var h=D()(t()().mark(function i(){var C;return t()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,E.next=3,Ku({page:1,limit:300});case 3:C=E.sent,C.code===0&&J(C.data||[]),E.next=10;break;case 7:E.prev=7,E.t0=E.catch(0),console.error("\u83B7\u53D6\u51ED\u8BC1\u5217\u8868\u5931\u8D25",E.t0);case 10:case"end":return E.stop()}},i,null,[[0,7]])}));return function(){return h.apply(this,arguments)}}();(0,k.useEffect)(function(){_.show&&(x(),j?Z.setFieldsValue(j):Z.resetFields())},[j,Z,_.show]);var hu=function(i){var C=/^[a-zA-Z0-9_-]+$/g;return C.test(i.trim())?Promise.resolve():Promise.reject("\u3010".concat(i,"\u3011\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF0C\u53EA\u80FD\u4F7F\u7528\u82F1\u6587\u3001\u6570\u5B57\u3001_ \u548C -"))},vu=function(i){i.editor.onDidCreateModel(function(C){if(C.getLanguageId()==="yaml"){var ru=setInterval(function(){for(var E=C.getValue(),R=[],tu=E.split(`
`),U=0;U<tu.length;U++){var g=tu[U],gu=(g.match(/'/g)||[]).length,Eu=(g.match(/"/g)||[]).length;if(gu%2!==0&&R.push({severity:i.MarkerSeverity.Error,message:"\u672A\u95ED\u5408\u7684\u5355\u5F15\u53F7",startLineNumber:U+1,startColumn:1,endLineNumber:U+1,endColumn:g.length+1}),Eu%2!==0&&R.push({severity:i.MarkerSeverity.Error,message:"\u672A\u95ED\u5408\u7684\u53CC\u5F15\u53F7",startLineNumber:U+1,startColumn:1,endLineNumber:U+1,endColumn:g.length+1}),g.includes(":")&&!g.includes(": ")&&!g.endsWith(":")){var X=g.indexOf(":");X+1<g.length&&g[X+1]!==""&&g[X+1]!==`
`&&R.push({severity:i.MarkerSeverity.Warning,message:"\u5192\u53F7\u540E\u5E94\u6709\u7A7A\u683C",startLineNumber:U+1,startColumn:X+1,endLineNumber:U+1,endColumn:X+2})}}i.editor.setModelMarkers(C,"yaml-validator",R)},500);C.onWillDispose(function(){clearInterval(ru)})}})};return(0,e.jsxs)(ju.a,{form:Z,title:_.title,open:_.show,onOpenChange:Y,width:"60%",initialValues:H,layout:"horizontal",labelCol:{flex:"100px"},drawerProps:{maskClosable:!1,destroyOnClose:!0},onFinish:function(){var h=D()(t()().mark(function i(C){return t()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Q(C);case 2:return E.abrupt("return",!0);case 3:case"end":return E.stop()}},i)}));return function(i){return h.apply(this,arguments)}}(),children:[nu,(0,e.jsx)(wu.Z,{name:"task_name",label:"\u58F0\u660E\u540D\u79F0",rules:[{required:!0,message:"\u58F0\u660E\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"},{validator:function(i,C){return hu(C)}}],fieldProps:{maxLength:35}}),(0,e.jsx)(fu.Z.Item,{name:"task_data",label:"\u58F0\u660E\u5185\u5BB9",rules:[{required:!0,message:"\u58F0\u660E\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(Iu.Z,{name:"task_data",noStyle:!0,children:(0,e.jsx)(Nu.ML,{height:"600px",showFullScreenButton:!0,value:Z.getFieldValue("task_data"),language:"yaml",theme:"vs-dark",onChange:function(i){return Z.setFieldValue("task_data",i||"")},beforeMount:vu,options:{scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!0},lineNumbers:"on"}})})}),(0,e.jsx)(Ru.Z,{name:"voucher_info",label:"\u51ED\u8BC1\u4FE1\u606F",alertMessage:"\u77ED\u5B57\u7B26\uFF1A\u4F7F\u7528\u53D8\u91CF\u65B9\u5F0F\u63D0\u4F9B\u51ED\u8BC1\uFF0C\u8D26\u53F7\u5BC6\u7801\u5C5E\u4E8E\u77ED\u5B57\u7B26\u8BF7\u81EA\u884C\u5904\u7406\uFF1B\u957F\u6587\u672C\uFF1A\u5199\u5165\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u63D0\u4F9B\u8BFB\u53D6\u7684\u6587\u4EF6\u8DEF\u5F84\u3002",children:(0,e.jsx)(Lu.Z,{name:"voucher_info",fieldProps:{mode:"multiple",allowClear:!0,showSearch:!0,optionFilterProp:"label",options:m.map(function(h){return{label:h.v_key,value:"".concat(h.tenantid,"___").concat(h.v_key,"___").concat(h.v_type)}})},noStyle:!0})})]})},Hu=zu,Gu=u.p+"static/image1.e9d6fa46.png",Yu=u.p+"static/image2.34d11a06.png",Qu=u.p+"static/image3.cdbf893d.png",Ju=["className","children"],Xu=function(v){var _=v.id,j=(0,k.useState)(""),Y=o()(j,2),Q=Y[0],ou=Y[1],K=(0,Cu.Z)(Q,{wait:300}),Z=(0,uu.useRequest)(function(){return Vu({id:_})},{refreshDeps:[_],formatResult:function(m){return m.data.items||[]}}),z=Z.data,au=z===void 0?[]:z,nu=au.filter(function(L){var m,J,H,x;return!K||((m=L.id)===null||m===void 0||(m=m.toString())===null||m===void 0?void 0:m.toLowerCase().includes(K.toLowerCase()))||((J=L.name)===null||J===void 0?void 0:J.toLowerCase().includes(K.toLowerCase()))||((H=L.resource_group)===null||H===void 0?void 0:H.toLowerCase().includes(K.toLowerCase()))||((x=L.flow_version_id)===null||x===void 0||(x=x.toString())===null||x===void 0?void 0:x.toLowerCase().includes(K.toLowerCase()))}),su=[{title:"ID",dataIndex:"id",width:60},{title:"\u540D\u79F0",dataIndex:"name",ellipsis:!0,width:200},{title:"\u53D1\u5E03ID",dataIndex:"flow_version_id",width:80,ellipsis:!0},{title:"\u7C7B\u578B",dataIndex:"flow_type",width:80,ellipsis:!0},{title:"\u4E1A\u52A1",dataIndex:"resource_group",width:110},{title:"\u66F4\u65B0\u4EBA",dataIndex:"reviser",width:100},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"update_time",width:150}];return(0,e.jsx)(V.Z,{rowKey:"id",search:!1,defaultSize:"small",options:!1,dataSource:nu,columns:su,toolbar:{title:(0,e.jsx)(cu.Z,{children:(0,e.jsx)(du.Z,{prefix:(0,e.jsx)(P.Z,{}),style:{width:300},placeholder:"\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22",allowClear:!0,value:Q,onChange:function(m){return ou(m.target.value)}})})},pagination:{showSizeChanger:!0,defaultPageSize:10}})},qu=function(){var v,_=(0,k.useRef)(),j=(0,k.useState)(""),Y=o()(j,2),Q=Y[0],ou=Y[1],K=(0,Cu.Z)(Q,{wait:300}),Z=(0,uu.useModel)("@@initialState"),z=Z.initialState,au=(v=z==null?void 0:z.currentBizId)!==null&&v!==void 0?v:"",nu=au==="500",su=(0,uu.useSearchParams)(),L=o()(su,1),m=L[0],J=Au.ZP.useMessage(),H=o()(J,2),x=H[0],hu=H[1],vu=(0,k.useState)(!1),h=o()(vu,2),i=h[0],C=h[1],ru=(0,k.useState)(),E=o()(ru,2),R=E[0],tu=E[1],U=(0,k.useState)(!1),g=o()(U,2),gu=g[0],Eu=g[1],X=`## \u80CC\u666F

\u76EE\u524D\u4E91\u539F\u751F\u4EFB\u52A1\u4F53\u7CFB, \u5DF2\u7ECF\u9010\u6E10\u6210\u719F, \u6240\u4EE5\u7ED9\u5230\u4E00\u4EFD\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u7684\u6700\u4F73\u5B9E\u8DF5, \u7528\u4E8E\u6307\u5F15\u63A5\u5165.

## \u4E91\u539F\u751F\u4EFB\u52A1\u673A\u5236

\u5728\u4E91\u539F\u751F\u4EFB\u52A1\u7684\u6982\u5FF5\u4E2D, \u6211\u4EEC\u5C06 \`\u73AF\u5883\` \u548C \`\u81EA\u52A8\u5316\u5DE5\u5177\` \u8FDB\u884C\u4E86\u6258\u7BA1, \u4ECE\u800C\u6784\u9020\u51FA\u4E00\u4E2A \`\u955C\u50CF\`

\u7528\u6237\u5C42\u9762\u53EA\u9700\u8981\u5173\u6CE8\u5728\u811A\u672C\u4E2D\u53BB\u5C06\u5916\u754C\u7684\u53C2\u6570, \u8F6C\u5316\u4E3A**\u955C\u50CF**\u4E2D**\u81EA\u52A8\u5316\u5DE5\u5177**\u6240\u9700\u8981\u7684\u53C2\u6570.

\u5728\u56FA\u5B9A\u7684\u73AF\u5883 + \u56FA\u5B9A\u7684\u8F93\u5165\u4E0B, \u8F6F\u4EF6\u7684\u8F93\u51FA\u5E94\u8BE5\u662F\u56FA\u5B9A\u7684. \u4ECE\u800C\u6700\u5927\u5316\u4FDD\u8BC1\u4E86\u4EFB\u52A1\u7684\u4E1A\u52A1\u6210\u529F\u7387.

![img](`.concat(Gu,`)

## \u672F\u8BED\u89E3\u91CA

### \u4EFB\u52A1\u539F\u5B50

\u4EFB\u52A1\u539F\u5B50\u6E90\u4E8E CODO-FLOW \u7684\u5B9A\u4E49\u4E00\u4E2A\u4E91\u539F\u751F\u4EFB\u52A1, \u53EF\u4EE5\u4F5C\u4E3A codo \u7684\u4E00\u4E2A\u4EFB\u52A1\u539F\u5B50.

\u5728 k8s \u4E2D, \u4E00\u4E2A\u4E91\u539F\u751F\u4EFB\u52A1 \u5C31\u662F\u4E00\u4E2A pod

![img](`).concat(Yu,`)

### Step

\u5728\u4E91\u539F\u751F\u4EFB\u52A1\u4E2D\u6709\u591A\u4E2A step, \u4ED6\u4EEC\u5728 k8s \u89C6\u89D2\u4E2D\u662F \u591A\u4E2A container.

\u7531\u4E8E\u4ED6\u4EEC\u662F\u540C\u4E00\u4E2A pod \u4E2D\u7684 container. \u6240\u4EE5\u53EF\u4EE5\u5B9E\u73B0 \u5B58\u50A8\u5171\u4EAB + \u7F51\u7EDC\u7A7A\u95F4\u5171\u4EAB

![img](`).concat(Qu,`)

### Task\u7EA7\u516C\u5171\u5B58\u50A8

- **/workspace:** step \u4E4B\u95F4\u516C\u5171\u7684\u5DE5\u4F5C\u7A7A\u95F4(\u5EFA\u8BAE\u4EE3\u7801\u9ED8\u8BA4\u8FD0\u884C\u5728\u8FD9\u91CC, \u5982\u679C\u6709step\u95F4\u5171\u4EAB\u7684\u521D\u59CB\u5316\u5185\u5BB9, \u53EF\u4EE5\u5B58\u653E\u5728\u8FD9\u91CC)
- **/codo/artifacts:** step\u7684\u7ED3\u679C or \u4EA7\u7269(\u9700\u8981 step \u95F4\u4F20\u9012\u7684\u5185\u5BB9, \u53EF\u4EE5\u653E\u5728\u8FD9\u91CC)
- **/codo/scripts:** \u4E91\u539F\u751F\u4EFB\u52A1\u6BCF\u4E00\u4E2A step \u7684\u811A\u672C, \u4F1A\u5B58\u50A8\u5728\u8FD9\u91CC(\u7528\u6237\u4E0D\u9700\u8981\u7279\u522B\u5173\u5FC3)
- **/codo/run:** \u4EFB\u52A1\u7684\u8FD0\u884C\u7ED3\u679C\u4F1A\u5B58\u50A8\u5728\u8FD9\u91CC(\u7528\u6237\u4E0D\u9700\u8981\u7279\u522B\u5173\u5FC3)

### Step\u7EA7\u79C1\u6709\u5B58\u50A8

- **/codo/creds:** codo\u7684\u957F\u6587\u672C\u51ED\u8BC1\u4F1A\u5B58\u50A8\u5728\u8FD9\u91CC(\u9ED8\u8BA4\u6743\u9650644)

## \u6700\u4F73\u5B9E\u8DF5\u793A\u4F8B

### \u6784\u9020\u4E1A\u52A1\u955C\u50CF

\u5728\u4E91\u539F\u751F\u4EFB\u52A1\u4E2D, \u7531\u4E8E\u4E00\u5207\u57FA\u4E8E\u955C\u50CF, \u6240\u4EE5\u53EF\u4EE5\u6784\u9020\u8F83\u91CD\u7684\u4E1A\u52A1\u955C\u50CF, \u7528\u4E8E\u5B8C\u6210\u4E1A\u52A1\u9700\u6C42.

\u955C\u50CF\u6210\u4EFD\u53EF\u4EE5\u5F88\u590D\u6742, \u6BD4\u5982\u4E0B\u4F8B, \u6211\u5199\u4E86 shell + go \u8FDB\u884C\u4E1A\u52A1\u5904\u7406

#### \u4E1A\u52A1\u9AA8\u67B6

\`\`\`Bash
.
\u251C\u2500\u2500 Dockerfile # \u955C\u50CF\u6587\u4EF6
\u251C\u2500\u2500 Makefile # \u5FEB\u901F\u6784\u5EFA\u547D\u4EE4\u77ED\u8BED
\u251C\u2500\u2500 cloud-task-4-open_server.json # \u4E91\u539F\u751F\u4EFB\u52A1\u53C2\u6570
\u251C\u2500\u2500 cloud-task-4-open_server.yaml # \u4E91\u539F\u751F\u4EFB\u52A1\u5B9A\u4E49
\u251C\u2500\u2500 cloud-task-4-upgrade_cbb.json # \u4E91\u539F\u751F\u4EFB\u52A1\u53C2\u6570
\u251C\u2500\u2500 cloud-task-4-upgrade_cbb.yaml # \u4E91\u539F\u751F\u4EFB\u52A1\u5B9A\u4E49
\u251C\u2500\u2500 cloud-task-4-upgrade_rometa.json # \u4E91\u539F\u751F\u4EFB\u52A1\u53C2\u6570
\u251C\u2500\u2500 cloud-task-4-upgrade_rometa.yaml # \u4E91\u539F\u751F\u4EFB\u52A1\u5B9A\u4E49
\u251C\u2500\u2500 hot_upgrade # \u4EFB\u52A1\u903B\u8F91
\u2502   \u2514\u2500\u2500 README.md
\u251C\u2500\u2500 open_server # \u5F00\u670D\u903B\u8F91
\u2502   \u251C\u2500\u2500 README.md
\u2502   \u251C\u2500\u2500 go.mod
\u2502   \u251C\u2500\u2500 go.sum
\u2502   \u2514\u2500\u2500 main.go
\u2514\u2500\u2500 upgrade # \u505C\u670D\u66F4\u65B0\u903B\u8F91
    \u251C\u2500\u2500 README.md
    \u251C\u2500\u2500 upgrade_cbb.sh
    \u2514\u2500\u2500 upgrade_rometa.sh
\`\`\`

#### Dockerfile

\`\`\`Dockerfile
FROM golang:1.22 AS builder

WORKDIR /app/open_server

COPY ./open_server/go.mod ./
COPY ./open_server/go.sum ./

RUN go mod download

COPY ./open_server .

RUN go build -o ./bin/open_server .

WORKDIR /app

COPY . .

FROM harbor.123u.com/ops-public/deploy-runtime:latest AS runtime


WORKDIR /app
COPY --from=builder /app/upgrade/upgrade_cbb.sh ./
COPY --from=builder /app/upgrade/upgrade_rometa.sh ./
COPY --from=builder /app/open_server/bin/open_server ./

RUN chmod +x ./upgrade_cbb.sh
RUN chmod +x ./upgrade_rometa.sh
RUN chmod +x ./open_server

CMD [ "echo", "hello world" ]
\`\`\`

### \u4E0D\u5728\u811A\u672C\u4E2D\u8FDB\u884C\u4E1A\u52A1\u903B\u8F91\u64CD\u4F5C, \u53EA\u505A\u6570\u636E\u8F6C\u5316

\`\`\`YAML
require:
  fields:
    - "cluster"
    - "namespace"
    - "spec_svr"
  vouchers:
    - "tc_xy_gitlab_ci"
    - "rometa_kr_kubeconfig"
    - "rometa_sea_kubeconfig"
    - "rometa_sh_kubeconfig"

# [\u53EF\u9009] pod \u7684\u8D44\u6E90\u9650\u5236
# \u7528\u6237\u53EF\u4EE5\u9009\u62E9\u5728\u4EFB\u52A1\u7EA7\u6307\u5B9A\u8D44\u6E90\u9700\u6C42\uFF0C\u800C\u4E0D\u662F\u5728\u6BCF\u4E2A Step \u4E0A\u6307\u5B9A\u8D44\u6E90\u9700\u6C42\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u4EFB\u52A1\u7EA7\u8D44\u6E90\u8981\u6C42\uFF0C
# \u5B83\u5C06\u786E\u4FDD kubelet \u53EA\u4E3A\u6267\u884C Task \u7684 Steps \u4FDD\u7559\u8BE5\u6570\u91CF\u7684\u8D44\u6E90\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u4EFB\u52A1\u7EA7\u8D44\u6E90\u9650\u5236\uFF0C\u5219\u4EFB\u4F55 Step \u90FD\u4E0D\u80FD\u4F7F\u7528\u8D85\u8FC7\u8BE5\u6570\u91CF\u7684\u8D44\u6E90\u3002
computeResources:
  requests:
    memory: "64Mi" # \u7533\u8BF7 512 MB \u7684\u5185\u5B58
    cpu: "30m" # \u7533\u8BF7 1 Core \u7684 CPU
  limits:
    memory: "64Mi" # \u7533\u8BF7 512 MB \u7684\u5185\u5B58
    cpu: "30m" # \u7533\u8BF7 1 Core \u7684 CPU
# [\u5FC5\u9009] \u4EFB\u52A1\u5B9A\u4E49
taskSpec:
  # [\u5FC5\u9009] \u4EFB\u52A1\u5C55\u793A\u540D\u79F0
  displayName: "cc-test"
  # [\u53EF\u9009] \u63CF\u8FF0
  description: "\u8FD9\u662F\u4E00\u4EFD\u63CF\u8FF0"
  # [\u5FC5\u9009] \u4EFB\u52A1\u6B65\u9AA4\u5B9A\u4E49
  # \u4EFB\u52A1\u6709\u4E24\u79CD\u6A21\u5F0F(\u53EA\u80FD\u9009\u5176\u4E00)
  # - script \u6A21\u5F0F:
  # - command \u6A21\u5F0F:
  steps:
    # [\u5FC5\u9009] \u6B65\u9AA4\u540D\u79F0
    - name: "checkout code"
      # [\u53EF\u9009] \u5F53 step \u51FA\u9519\u65F6\u7684\u5904\u7406\u65B9\u5F0F
      # [ continue | stopAndFail  | waitUntilTimeout ]
      onError: waitUntilTimeout
      # [\u53EF\u9009] \u8D85\u65F6\u65F6\u95F4(\u9ED8\u8BA460\u5206\u949F)
      # \u6301\u7EED\u65F6\u95F4\u5B57\u7B26\u4E32\u662F\u53EF\u80FD\u6709\u7B26\u53F7\u7684\u5341\u8FDB\u5236\u6570\u5B57\u5E8F\u5217\uFF0C\u6BCF\u4E2A\u5341\u8FDB\u5236\u6570\u5B57\u90FD\u5E26\u6709\u53EF\u9009\u7684\u5206\u6570\u548C\u5355\u4F4D\u540E\u7F00\uFF0C
      # \u4F8B\u5982"300ms"\u3001"-1.5h"\u6216"2h45m"\u3002\u6709\u6548\u7684\u65F6\u95F4\u5355\u4F4D\u4E3A"ns"\u3001"us"\uFF08\u6216"\u03BCs"\uFF09\u3001"ms"\u3001"s"\u3001"m"\u3001"h"\u3002
      timeout: "200s"
      # [\u5FC5\u9009] \u4EFB\u52A1\u8FD0\u884C\u6240\u5904\u7684\u955C\u50CF
      image: "harbor.123u.com/public/rocky9.1-python3:latest"
      # [\u5FC5\u9009] \u8FD0\u884C\u7684\u811A\u672C(\u4E0E command \u4E8C\u9009\u4E00)
      script: |
        #!/bin/sh
        set -euo pipefail
        # \u62C9\u53D6\u4EE3\u7801
        # \u52A0\u8F7DGIT_SSH_COMMAND
        mkdir -p /data/
        mv $CODO_tc_xy_gitlab_ci /data/gitkey
        chmod 0600 /data/gitkey
        export GIT_SSH_COMMAND="ssh -i /data/gitkey -o StrictHostKeyChecking=no -p 52000"
        git clone git@10.0.150.100:sa/rometa-deploys.git
        cp -r ./rometa-deploys /codo/artifacts/
        echo "git checkout over"
    - name: "upgrade"
      # [\u53EF\u9009] \u5F53 step \u51FA\u9519\u65F6\u7684\u5904\u7406\u65B9\u5F0F
      # [ continue | stopAndFail  | waitUntilTimeout ]
      onError: waitUntilTimeout
      # [\u53EF\u9009] \u8D85\u65F6\u65F6\u95F4(\u9ED8\u8BA460\u5206\u949F)
      # \u6301\u7EED\u65F6\u95F4\u5B57\u7B26\u4E32\u662F\u53EF\u80FD\u6709\u7B26\u53F7\u7684\u5341\u8FDB\u5236\u6570\u5B57\u5E8F\u5217\uFF0C\u6BCF\u4E2A\u5341\u8FDB\u5236\u6570\u5B57\u90FD\u5E26\u6709\u53EF\u9009\u7684\u5206\u6570\u548C\u5355\u4F4D\u540E\u7F00\uFF0C
      # \u4F8B\u5982"300ms"\u3001"-1.5h"\u6216"2h45m"\u3002\u6709\u6548\u7684\u65F6\u95F4\u5355\u4F4D\u4E3A"ns"\u3001"us"\uFF08\u6216"\u03BCs"\uFF09\u3001"ms"\u3001"s"\u3001"m"\u3001"h"\u3002
      timeout: "200s"
      # [\u5FC5\u9009] \u4EFB\u52A1\u8FD0\u884C\u6240\u5904\u7684\u955C\u50CF
      image: "harbor.123u.com/ops-public/rometa-deploy:latest"
      # [\u5FC5\u9009] \u8FD0\u884C\u7684\u811A\u672C(\u4E0E command \u4E8C\u9009\u4E00)
      script: |
        #!/bin/bash
        set -euo pipefail

        # \u53D8\u91CF\u5B9A\u4E49
        cluster=$codo_cluster
        namespace=$codo_namespace
        spec_svr=$codo_spec_svr

        # \u5BFC\u51FA\u73AF\u5883\u53D8\u91CF
        # \u96C6\u7FA4
        export ro3_deploy_cluster=$cluster
        # \u547D\u540D\u7A7A\u95F4
        export ro3_deploy_namespace=$namespace
        # \u6307\u5B9A\u670D\u52A1
        export ro3_deploy_spec_svr=$spec_svr
        # kubeconfig
        if [ "\${cluster}" == "tx-kr-rometa-test" ]; then
          export ro3_deploy_kubeconfig=$CODO_rometa_kr_kubeconfig
        fi
        if [ "\${cluster}" == "tx-sea-rometa-prod" ]; then
          export ro3_deploy_kubeconfig=$CODO_rometa_sea_kubeconfig
        fi
        if [ "\${cluster}" == "tx-sh-rometa-test" ]; then
          export ro3_deploy_kubeconfig=$CODO_rometa_sh_kubeconfig
        fi

        # \u62C9\u53D6\u4EE3\u7801
        cp -r /codo/artifacts/rometa-deploys ./
        cd ./rometa-deploys
        /app/upgrade_rometa.sh
\`\`\`

## \u4E91\u539F\u751F\u4EFB\u52A1\u5168\u91CF\u914D\u7F6E\u6A21\u677F\u793A\u4F8B

\`\`\`YAML
  # [\u5FC5\u9009] \u4EFB\u52A1\u7684CODO\u552F\u4E00ID
  taskID: "codocloudtask-sample-test"

  # [\u53EF\u9009] pod \u7684\u8D44\u6E90\u9650\u5236
  # \u7528\u6237\u53EF\u4EE5\u9009\u62E9\u5728\u4EFB\u52A1\u7EA7\u6307\u5B9A\u8D44\u6E90\u9700\u6C42\uFF0C\u800C\u4E0D\u662F\u5728\u6BCF\u4E2A Step \u4E0A\u6307\u5B9A\u8D44\u6E90\u9700\u6C42\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u4EFB\u52A1\u7EA7\u8D44\u6E90\u8981\u6C42\uFF0C
  # \u5B83\u5C06\u786E\u4FDD kubelet \u53EA\u4E3A\u6267\u884C Task \u7684 Steps \u4FDD\u7559\u8BE5\u6570\u91CF\u7684\u8D44\u6E90\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u4EFB\u52A1\u7EA7\u8D44\u6E90\u9650\u5236\uFF0C\u5219\u4EFB\u4F55 Step \u90FD\u4E0D\u80FD\u4F7F\u7528\u8D85\u8FC7\u8BE5\u6570\u91CF\u7684\u8D44\u6E90\u3002
  computeResources:
    requests:
      memory: "64Mi" # \u7533\u8BF7 512 MB \u7684\u5185\u5B58
      cpu: "30m" # \u7533\u8BF7 1 Core \u7684 CPU
    limits:
      memory: "64Mi" # \u7533\u8BF7 512 MB \u7684\u5185\u5B58
      cpu: "30m" # \u7533\u8BF7 1 Core \u7684 CPU

  # [\u53EF\u9009] \u9884\u8BA1\u751F\u6210\u7684 pod \u7684\u8981\u6C42
  podTemplate:
    # [\u53EF\u9009] NodeSelector \u662F\u4E00\u4E2A\u9009\u62E9\u5668\uFF0C\u5B83\u5FC5\u987B\u4E3A true \u624D\u80FD\u4F7F pod \u9002\u5408\u8282\u70B9\u3002
    # \u5B83\u5FC5\u987B\u4E0E\u8981\u5728\u8BE5\u8282\u70B9\u4E0A\u8C03\u5EA6 pod \u7684\u8282\u70B9\u6807\u7B7E\u76F8\u5339\u914D\u3002\u66F4\u591A\u4FE1\u606F\uFF1Ahttps://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/
    nodeSelector: { }
    # [\u53EF\u9009] pod \u7684\u73AF\u5883\u53D8\u91CF
    env: [ ]
    # [\u53EF\u9009] \u6B64 Toleration \u9644\u52A0\u5230\u7684 pod \u53EF\u4EE5\u5BB9\u5FCD\u4F7F\u7528\u5339\u914D\u8FD0\u7B97\u7B26 <operator> \u4E0E\u4E09\u5143\u7EC4 <key,value,effect> \u5339\u914D\u7684\u4EFB\u4F55\u6C61\u70B9\u3002
    tolerations:
      - key: "key"
        operator: "Equal"
        value: "value"
        effect: "NoSchedule"
    # [\u53EF\u9009] pod \u4EB2\u7F18\u6027\u914D\u7F6E
    # \u66F4\u591A\u4FE1\u606F\uFF1Ahttps://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/
    affinity:
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
            - matchExpressions:
                - key: kubernetes.io/e2e-az-name
                  operator: In
                  values:
                    - e2e-az1
      podAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
                - key: security
                  operator: In
                  values:
                    - S1
            topologyKey: failure-domain.beta.kubernetes.io/zone
      podAntiAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
                - key: security
                  operator: In
                  values:
                    - S1
            topologyKey: failure-domain.beta.kubernetes.io/zone

    # [\u53EF\u9009] SecurityContext \u4FDD\u5B58 Pod \u7EA7\u522B\u7684\u5B89\u5168\u5C5E\u6027\u548C\u901A\u7528\u5BB9\u5668\u8BBE\u7F6E\u3002\u9ED8\u8BA4\u4E3A\u7A7A\u3002\u6BCF\u4E2A\u5B57\u6BB5\u7684\u9ED8\u8BA4\u503C\u8BF7\u53C2\u9605\u7C7B\u578B\u8BF4\u660E\u3002
    securityContext:
      runAsNonRoot: true
      runAsUser: 1001
    # [\u53EF\u9009] \u5C5E\u4E8E pod \u7684\u5BB9\u5668\u53EF\u4EE5\u6302\u8F7D\u7684\u5377\u5217\u8868\u3002\u66F4\u591A\u4FE1\u606F\uFF1Ahttps://kubernetes.io/docs/concepts/storage/volumes
    volumes:
      - name: my-cache
        persistentVolumeClaim:
          claimName: my-volume-claim
    # [\u53EF\u9009] \u8BBE\u7F6E\u5BB9\u5668\u7684\u8FD0\u884C\u65F6\u7C7B\u540D
    # RuntimeClassName \u6307\u7684\u662F node.k8s.io \u7EC4\u4E2D\u7684\u4E00\u4E2A RuntimeClass \u5BF9\u8C61,
    # \u8BE5\u5BF9\u8C61\u5E94\u8BE5\u7528\u4E8E\u8FD0\u884C\u8FD9\u4E2A pod\u3002\u5982\u679C\u6CA1\u6709 RuntimeClass \u8D44\u6E90
    # \u5339\u914D\u6307\u5B9A\u7684\u7C7B\u540D,\u5219\u8BE5 pod \u5C06\u4E0D\u4F1A\u8FD0\u884C\u3002\u5982\u679C\u672A\u8BBE\u7F6E\u6216\u4E3A\u7A7A,\u5C06
    # \u4F7F\u7528"legacy"\uFF08\u9057\u7559\uFF09RuntimeClass,\u8FD9\u662F\u4E00\u4E2A\u9690\u5F0F\u7C7B,\u5176\u5B9A\u4E49\u4E3A\u7A7A,
    # \u4F7F\u7528\u9ED8\u8BA4\u7684\u8FD0\u884C\u65F6\u5904\u7406\u7A0B\u5E8F\u3002
    # \u66F4\u591A\u4FE1\u606F: https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
    # \u8FD9\u662F Kubernetes v1.14 \u7248\u672C\u4E2D\u7684\u4E00\u4E2A beta \u7279\u6027\u3002
    runtimeClassName: "runc"

    # [\u53EF\u9009] AutomountServiceAccountToken \u6307\u793A\u4EE5\u6B64\u670D\u52A1\u5E10\u6237\u8FD0\u884C\u7684 Pod \u662F\u5426\u5E94\u81EA\u52A8\u6302\u8F7D API \u4EE4\u724C\u3002\u53EF\u4EE5\u5728 Pod \u7EA7\u522B\u8986\u76D6\u3002
    automountServiceAccountToken: false
    # [\u53EF\u9009] Pod \u8BBE\u7F6E DNS \u7B56\u7565\u3002\u9ED8\u8BA4\u4E3A"ClusterFirst"\u3002\u6709\u6548\u503C\u4E3A
    # "ClusterFirstWithHostNet"\u3001"ClusterFirst"\u3001"\u9ED8\u8BA4"\u6216"\u65E0"\u3002
    # DNSConfig \u4E2D\u7ED9\u51FA\u7684 DNS \u53C2\u6570\u5C06\u4E0E\u4F7F\u7528 DNSPolicy \u9009\u62E9\u7684\u7B56\u7565\u5408\u5E76\u3002
    # \u8981\u5C06 DNS \u9009\u9879\u4E0E hostNetwork \u4E00\u8D77\u8BBE\u7F6E\uFF0C\u60A8\u5FC5\u987B\u5C06 DNS \u7B56\u7565\u663E\u5F0F\u6307\u5B9A\u4E3A"ClusterFirstWithHostNet"\u3002
    dnsPolicy: ""
    # [\u53EF\u9009] \u6307\u5B9A Pod \u7684 DNS \u53C2\u6570\u3002\u6B64\u5904\u6307\u5B9A\u7684\u53C2\u6570\u5C06\u5408\u5E76\u5230\u57FA\u4E8E DNSPolicy \u751F\u6210\u7684 DNS \u914D\u7F6E\u4E2D\u3002
    dnsConfig:
      nameservers: # DNS \u540D\u79F0\u670D\u52A1\u5668 IP \u5730\u5740\u7684\u5217\u8868\u3002\u8FD9\u5C06\u88AB\u9644\u52A0\u5230\u4ECE DNSPolicy \u751F\u6210\u7684\u57FA\u672C\u540D\u79F0\u670D\u52A1\u5668\u4E2D\u3002\u91CD\u590D\u7684\u540D\u79F0\u670D\u52A1\u5668\u5C06\u88AB\u5220\u9664\u3002
        - "8.8.8.8"
      searches: # \u7528\u4E8E\u4E3B\u673A\u540D\u67E5\u627E\u7684 DNS \u641C\u7D22\u57DF\u5217\u8868\u3002\u8FD9\u5C06\u88AB\u9644\u52A0\u5230\u4ECE DNSPolicy \u751F\u6210\u7684\u57FA\u672C\u641C\u7D22\u8DEF\u5F84\u4E2D\u3002\u91CD\u590D\u7684\u641C\u7D22\u8DEF\u5F84\u5C06\u88AB\u5220\u9664\u3002
        - "svc.cluster.local"
      options: # DNS \u89E3\u6790\u5668\u9009\u9879\u5217\u8868\u3002\u8FD9\u5C06\u4E0E DNSPolicy \u751F\u6210\u7684\u57FA\u672C\u9009\u9879\u5408\u5E76\u3002\u91CD\u590D\u7684\u6761\u76EE\u5C06\u88AB\u5220\u9664\u3002\u9009\u9879\u4E2D\u7ED9\u51FA\u7684\u89E3\u6790\u9009\u9879\u5C06\u8986\u76D6\u57FA\u672C DNSPolicy \u4E2D\u51FA\u73B0\u7684\u89E3\u6790\u9009\u9879\u3002
        - name: "ndots"
          value: "2"
    # [\u53EF\u9009] EnableServiceLinks \u6307\u793A\u662F\u5426\u5E94\u5C06\u6709\u5173\u670D\u52A1\u7684\u4FE1\u606F\u6CE8\u5165\u5230 pod \u7684\u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u4E0E Docker \u94FE\u63A5\u7684\u8BED\u6CD5\u76F8\u5339\u914D\u3002\u53EF\u9009\uFF1A\u9ED8\u8BA4\u4E3A true\u3002
    enableServiceLinks: true
    # [\u53EF\u9009] \u8BBE\u7F6E\u5BB9\u5668\u7684\u4F18\u5148\u7EA7\u7C7B\u540D
    # - \u5982\u679C\u6307\u5B9A\uFF0C\u5219\u6307\u793A Pod \u7684\u4F18\u5148\u7EA7\u3002 "system-node-key"\u548C"system-cluster-key"\u662F\u4E24\u4E2A\u7279\u6B8A\u7684\u5173\u952E\u5B57\uFF0C
    #   \u8868\u793A\u6700\u9AD8\u4F18\u5148\u7EA7\uFF0C\u524D\u8005\u4E3A\u6700\u9AD8\u4F18\u5148\u7EA7\u3002\u4EFB\u4F55\u5176\u4ED6\u540D\u79F0\u5FC5\u987B\u901A\u8FC7\u521B\u5EFA\u5177\u6709\u8BE5\u540D\u79F0\u7684 PriorityClass \u5BF9\u8C61\u6765\u5B9A\u4E49\u3002
    # - \u5982\u679C\u672A\u6307\u5B9A\uFF0CPod \u4F18\u5148\u7EA7\u5C06\u4E3A\u9ED8\u8BA4\u503C\uFF1B\u5982\u679C\u6CA1\u6709\u9ED8\u8BA4\u503C\uFF0C\u5219 Pod \u4F18\u5148\u7EA7\u4E3A\u96F6\u3002
    priorityClassName: ""
    # [\u53EF\u9009] \u8BBE\u7F6E\u5BB9\u5668\u7684\u8C03\u5EA6\u7B56\u7565
    schedulerName: "default-scheduler"
    # [\u53EF\u9009] ImagePullSecrets \u662F\u5BF9\u540C\u4E00\u547D\u540D\u7A7A\u95F4\u4E2D Secrets \u7684\u5F15\u7528\u7684\u53EF\u9009\u5217\u8868\uFF0C\u7528\u4E8E\u62C9\u53D6\u6B64 PodSpec \u4F7F\u7528\u7684\u4EFB\u4F55\u955C\u50CF\u3002
    # \u5982\u679C\u6307\u5B9A\uFF0C\u8FD9\u4E9B Secrets \u5C06\u4F20\u9012\u7ED9\u5404\u4E2A\u62C9\u53D6\u5668\u5B9E\u73B0\u4EE5\u4F9B\u4ED6\u4EEC\u4F7F\u7528\u3002
    # \u66F4\u591A\u4FE1\u606F\uFF1Ahttps://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
    imagePullSecrets:
      - name: my-secret # \u5F15\u7528\u5BF9\u8C61\u540D, \u53C2\u8003: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    # [\u53EF\u9009] HostAliases \u662F\u4E00\u4E2A\u53EF\u9009\u7684\u4E3B\u673A\u548C IP \u5217\u8868\uFF0C\u5982\u679C\u6307\u5B9A\uFF0C\u5C06\u88AB\u6CE8\u5165\u5230 Pod \u7684\u4E3B\u673A\u6587\u4EF6\u4E2D\u3002\u8FD9\u4EC5\u5BF9\u975E hostNetwork pod \u6709\u6548\u3002
    hostAliases:
      - ip: ""
        hostnames: [ "" ]
    # [\u53EF\u9009] \u6B64 Pod \u8BF7\u6C42\u4E3B\u673A\u7F51\u7EDC\u3002\u4F7F\u7528\u4E3B\u673A\u7684\u7F51\u7EDC\u547D\u540D\u7A7A\u95F4\u3002\u5982\u679C\u8BBE\u7F6E\u6B64\u9009\u9879\uFF0C\u5219\u5FC5\u987B\u6307\u5B9A\u5C06\u4F7F\u7528\u7684\u7AEF\u53E3\u3002\u9ED8\u8BA4\u4E3A false\u3002
    hostNetwork: false
    # [\u53EF\u9009] TopologySpreadConstraints \u63CF\u8FF0\u4E00\u7EC4 Pod \u5E94\u5982\u4F55\u8DE8\u62D3\u6251\u57DF\u5206\u5E03\u3002\u8C03\u5EA6\u7A0B\u5E8F\u5C06\u4EE5\u9075\u5B88\u7EA6\u675F\u7684\u65B9\u5F0F\u8C03\u5EA6 Pod\u3002\u6240\u6709topologySpreadConstraints \u90FD\u662FAND \u8FD0\u7B97\u3002
    # corev1.TopologySpreadConstraint
    topologySpreadConstraints:
      - maxSkew: 1
        topologyKey: kubernetes.io/hostname
        whenUnsatisfiable: DoNotSchedule
        labelSelector:
          matchLabels:
            app: myapp
          namespaces:
            - mynamespace


  # [\u53EF\u9009] \u8D85\u65F6\u65F6\u95F4(\u9ED8\u8BA460\u5206\u949F)
  # \u6301\u7EED\u65F6\u95F4\u5B57\u7B26\u4E32\u662F\u53EF\u80FD\u6709\u7B26\u53F7\u7684\u5341\u8FDB\u5236\u6570\u5B57\u5E8F\u5217\uFF0C\u6BCF\u4E2A\u5341\u8FDB\u5236\u6570\u5B57\u90FD\u5E26\u6709\u53EF\u9009\u7684\u5206\u6570\u548C\u5355\u4F4D\u540E\u7F00\uFF0C
  # \u4F8B\u5982"300ms"\u3001"-1.5h"\u6216"2h45m"\u3002\u6709\u6548\u7684\u65F6\u95F4\u5355\u4F4D\u4E3A"ns"\u3001"us"\uFF08\u6216"\u03BCs"\uFF09\u3001"ms"\u3001"s"\u3001"m"\u3001"h"\u3002
  timeout: "10m"  # 10\u5206\u949F


  # [\u5FC5\u9009] \u4EFB\u52A1\u5B9A\u4E49
  taskSpec:
    # [\u5FC5\u9009] \u4EFB\u52A1\u5C55\u793A\u540D\u79F0
    displayName: "cc-test"
    # [\u53EF\u9009] \u63CF\u8FF0
    description: "\u8FD9\u662F\u4E00\u4EFD\u63CF\u8FF0"
    # [\u53EF\u9009] \u5B58\u50A8\u5B9A\u4E49
    # \u9664\u4E86\u4E3A\u8F93\u5165\u548C\u8F93\u51FA\u8D44\u6E90\u9690\u5F0F\u521B\u5EFA\u7684\u5377\u4E4B\u5916\uFF0C\u6307\u5B9A\u4E00\u4E2A\u6216\u591A\u4E2A Volumes \uFF0C\u4EE5\u4FBF Task \u4E2D\u7684 Steps \u6267\u884C\u3002
    volumes:
      - name: my-volume
        emptyDir: { }

    # [\u5FC5\u9009] \u4EFB\u52A1\u6B65\u9AA4\u5B9A\u4E49
    # \u4EFB\u52A1\u6709\u4E24\u79CD\u6A21\u5F0F(\u53EA\u80FD\u9009\u5176\u4E00)
    # - script \u6A21\u5F0F:
    # - command \u6A21\u5F0F:
    steps:
      # [\u5FC5\u9009] \u6B65\u9AA4\u540D\u79F0
      - name: "step1"
        # [\u53EF\u9009] \u8D85\u65F6\u65F6\u95F4(\u9ED8\u8BA460\u5206\u949F)
        # \u6301\u7EED\u65F6\u95F4\u5B57\u7B26\u4E32\u662F\u53EF\u80FD\u6709\u7B26\u53F7\u7684\u5341\u8FDB\u5236\u6570\u5B57\u5E8F\u5217\uFF0C\u6BCF\u4E2A\u5341\u8FDB\u5236\u6570\u5B57\u90FD\u5E26\u6709\u53EF\u9009\u7684\u5206\u6570\u548C\u5355\u4F4D\u540E\u7F00\uFF0C
        # \u4F8B\u5982"300ms"\u3001"-1.5h"\u6216"2h45m"\u3002\u6709\u6548\u7684\u65F6\u95F4\u5355\u4F4D\u4E3A"ns"\u3001"us"\uFF08\u6216"\u03BCs"\uFF09\u3001"ms"\u3001"s"\u3001"m"\u3001"h"\u3002
        timeout: "10s"
        # [\u5FC5\u9009] \u4EFB\u52A1\u8FD0\u884C\u6240\u5904\u7684\u955C\u50CF
        image: "ccr.ccs.tencentyun.com/library/alpine:latest"
        # [\u53EF\u9009] \u955C\u50CF\u62C9\u53D6\u7B56\u7565
        # [Always | Never | IfNotPresent]
        # \u5982\u679C tag \u662F :latest ,\u5219 \u9ED8\u8BA4\u662F Always , \u5176\u4ED6\u60C5\u51B5\u7684 tag , \u9ED8\u8BA4\u90FD\u662F IfNotPresent
        imagePullPolicy: "IfNotPresent"
        # [\u53EF\u9009] \u6307\u5B9A\u73AF\u5883\u53D8\u91CF, \u8FD9\u91CC\u7684\u73AF\u5883\u53D8\u91CF\u662F\u9759\u6001\u7684, \u4F1A\u548C codo \u7684\u53C2\u6570\u8FDB\u884C\u5408\u5E76, \u5982\u679C key \u51B2\u7A81\u65F6, \u4EE5 codo \u7684\u53C2\u6570\u4E3A\u51C6
        env:
          - name: "FOO"
            value: "baz"
        # [\u53EF\u9009] \u6307\u5B9A step\u5BB9\u5668 \u7684\u8D44\u6E90\u9700\u6C42
        # \u6240\u6709 step \u7684\u914D\u7F6E\u5FC5\u987B\u52A0\u8D77\u6765\u5C0F\u4E8E pod \u7684\u914D\u7F6E
        # \u8FD9\u91CC\u7684\u914D\u7F6E\u4F1A\u5728\u4E0A\u5C42\u88AB\u8986\u76D6, key \u7EA7\u522B\u8986\u76D6, \u4F8B\u5982\u4E0A\u5C42\u53EA\u6307\u5B9A memory: 128Mi, \u5219 cpu \u8FD8\u662F\u6309\u7167 500m \u6765\u4F7F\u7528
        computeResources:
          requests:
            memory: "256Mi" # \u7533\u8BF7 256 MB \u7684\u5185\u5B58
            cpu: "500m" # \u7533\u8BF7 0.5 Core \u7684 CPU
        # [\u53EF\u9009] \u5DE5\u4F5C\u76EE\u5F55
        workingDir: /data
        # [\u53EF\u9009] \u5F53 step \u51FA\u9519\u65F6\u7684\u5904\u7406\u65B9\u5F0F
        # [ continue | stopAndFail  | waitUntilTimeout ]
        onError: stopAndFail
        # [\u53EF\u9009] securityContext \u662F Kubernetes \u548C Tekton \u4E2D\u7684\u4E00\u4E2A\u91CD\u8981\u914D\u7F6E\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u5BB9\u5668\u7684\u5B89\u5168\u4E0A\u4E0B\u6587\u3002
        # \u5728 Step \u4E2D\uFF0CsecurityContext \u53EF\u4EE5\u7528\u6765\u63A7\u5236\u5BB9\u5668\u7684\u6743\u9650\u548C\u884C\u4E3A\u3002
        #        securityContext:
        #          runAsUser: 1000
        #          runAsGroup: 3000
        #          fsGroup: 2000
        #          allowPrivilegeEscalation: false
        #          privileged: false
        #          capabilities:
        #            drop:
        #              - ALL
        #          readOnlyRootFilesystem: true
        # [\u53EF\u9009] \u6302\u8F7D\u5B58\u50A8
        volumeMounts:
          - name: my-volume
            mountPath: /data
        # [\u5FC5\u9009] \u8FD0\u884C\u7684\u811A\u672C(\u4E0E command \u4E8C\u9009\u4E00)
        script: |
          #!/bin/sh
          echo "Hello World step1 FOO=$FOO"
      - name: "step2"
        image: "ccr.ccs.tencentyun.com/library/alpine:latest"
        # [\u5FC5\u9009] \u6307\u5B9A\u547D\u4EE4\u6267\u884C(\u4E0E script \u4E8C\u9009\u4E00)
        command: [ codo ]
        args: [ "set-context", "abc=123" ]
      - name: "step3"
        image: "ccr.ccs.tencentyun.com/library/alpine:latest"
        script: |
          #!/bin/sh
          echo "context=====$(codo get-context abc)"
      - name: "step4-python-test"
        image: "harbor.123u.com/public/rocky9.1-python3:latest"
        script: |
          #!/bin/python3.9
          from floating import Floating
          # \u8BF7\u624B\u52A8\u6307\u5B9A\uFF0C\u8C03\u7528api\u6A21\u5F0F\u3002
          fl = Floating(api_mode=True)
          fl.logger.info("hello world")
\`\`\`

## \u4E91\u539F\u751F\u4EFB\u52A1 CRD

\`\`\`YAML
apiVersion: codo.dev/v1
kind: CodoCloudTask
metadata:
  labels:
    app.kubernetes.io/name: codocloudtask
    app.kubernetes.io/instance: codocloudtask-sample
    app.kubernetes.io/part-of: cloud-agent-operator
    app.kubernetes.io/managed-by: kustomize
    app.kubernetes.io/created-by: cloud-agent-operator
  name: codocloudtask-sample
spec:
  # [\u5FC5\u9009] \u4EFB\u52A1\u7684CODO\u552F\u4E00ID
  taskID: "codocloudtask-sample-test"

  # [\u53EF\u9009] pod \u7684\u8D44\u6E90\u9650\u5236
  # \u7528\u6237\u53EF\u4EE5\u9009\u62E9\u5728\u4EFB\u52A1\u7EA7\u6307\u5B9A\u8D44\u6E90\u9700\u6C42\uFF0C\u800C\u4E0D\u662F\u5728\u6BCF\u4E2A Step \u4E0A\u6307\u5B9A\u8D44\u6E90\u9700\u6C42\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u4EFB\u52A1\u7EA7\u8D44\u6E90\u8981\u6C42\uFF0C
  # \u5B83\u5C06\u786E\u4FDD kubelet \u53EA\u4E3A\u6267\u884C Task \u7684 Steps \u4FDD\u7559\u8BE5\u6570\u91CF\u7684\u8D44\u6E90\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u4EFB\u52A1\u7EA7\u8D44\u6E90\u9650\u5236\uFF0C\u5219\u4EFB\u4F55 Step \u90FD\u4E0D\u80FD\u4F7F\u7528\u8D85\u8FC7\u8BE5\u6570\u91CF\u7684\u8D44\u6E90\u3002
  computeResources:
    requests:
      memory: "64Mi" # \u7533\u8BF7 512 MB \u7684\u5185\u5B58
      cpu: "30m" # \u7533\u8BF7 1 Core \u7684 CPU
    limits:
      memory: "64Mi" # \u7533\u8BF7 512 MB \u7684\u5185\u5B58
      cpu: "30m" # \u7533\u8BF7 1 Core \u7684 CPU

  # [\u53EF\u9009] \u9884\u8BA1\u751F\u6210\u7684 pod \u7684\u8981\u6C42
  podTemplate:
    # [\u53EF\u9009] NodeSelector \u662F\u4E00\u4E2A\u9009\u62E9\u5668\uFF0C\u5B83\u5FC5\u987B\u4E3A true \u624D\u80FD\u4F7F pod \u9002\u5408\u8282\u70B9\u3002
    # \u5B83\u5FC5\u987B\u4E0E\u8981\u5728\u8BE5\u8282\u70B9\u4E0A\u8C03\u5EA6 pod \u7684\u8282\u70B9\u6807\u7B7E\u76F8\u5339\u914D\u3002\u66F4\u591A\u4FE1\u606F\uFF1Ahttps://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/
    nodeSelector: { }
    # [\u53EF\u9009] pod \u7684\u73AF\u5883\u53D8\u91CF
    env: [ ]
    # [\u53EF\u9009] \u6B64 Toleration \u9644\u52A0\u5230\u7684 pod \u53EF\u4EE5\u5BB9\u5FCD\u4F7F\u7528\u5339\u914D\u8FD0\u7B97\u7B26 <operator> \u4E0E\u4E09\u5143\u7EC4 <key,value,effect> \u5339\u914D\u7684\u4EFB\u4F55\u6C61\u70B9\u3002
    tolerations:
      - key: "key"
        operator: "Equal"
        value: "value"
        effect: "NoSchedule"
    # [\u53EF\u9009] pod \u4EB2\u7F18\u6027\u914D\u7F6E
    # \u66F4\u591A\u4FE1\u606F\uFF1Ahttps://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/
    affinity:
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
            - matchExpressions:
                - key: kubernetes.io/e2e-az-name
                  operator: In
                  values:
                    - e2e-az1
      podAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
                - key: security
                  operator: In
                  values:
                    - S1
            topologyKey: failure-domain.beta.kubernetes.io/zone
      podAntiAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
                - key: security
                  operator: In
                  values:
                    - S1
            topologyKey: failure-domain.beta.kubernetes.io/zone

    # [\u53EF\u9009] SecurityContext \u4FDD\u5B58 Pod \u7EA7\u522B\u7684\u5B89\u5168\u5C5E\u6027\u548C\u901A\u7528\u5BB9\u5668\u8BBE\u7F6E\u3002\u9ED8\u8BA4\u4E3A\u7A7A\u3002\u6BCF\u4E2A\u5B57\u6BB5\u7684\u9ED8\u8BA4\u503C\u8BF7\u53C2\u9605\u7C7B\u578B\u8BF4\u660E\u3002
    securityContext:
      runAsNonRoot: true
      runAsUser: 1001
    # [\u53EF\u9009] \u5C5E\u4E8E pod \u7684\u5BB9\u5668\u53EF\u4EE5\u6302\u8F7D\u7684\u5377\u5217\u8868\u3002\u66F4\u591A\u4FE1\u606F\uFF1Ahttps://kubernetes.io/docs/concepts/storage/volumes
    volumes:
      - name: my-cache
        persistentVolumeClaim:
          claimName: my-volume-claim
    # [\u53EF\u9009] \u8BBE\u7F6E\u5BB9\u5668\u7684\u8FD0\u884C\u65F6\u7C7B\u540D
    # RuntimeClassName \u6307\u7684\u662F node.k8s.io \u7EC4\u4E2D\u7684\u4E00\u4E2A RuntimeClass \u5BF9\u8C61,
    # \u8BE5\u5BF9\u8C61\u5E94\u8BE5\u7528\u4E8E\u8FD0\u884C\u8FD9\u4E2A pod\u3002\u5982\u679C\u6CA1\u6709 RuntimeClass \u8D44\u6E90
    # \u5339\u914D\u6307\u5B9A\u7684\u7C7B\u540D,\u5219\u8BE5 pod \u5C06\u4E0D\u4F1A\u8FD0\u884C\u3002\u5982\u679C\u672A\u8BBE\u7F6E\u6216\u4E3A\u7A7A,\u5C06
    # \u4F7F\u7528"legacy"\uFF08\u9057\u7559\uFF09RuntimeClass,\u8FD9\u662F\u4E00\u4E2A\u9690\u5F0F\u7C7B,\u5176\u5B9A\u4E49\u4E3A\u7A7A,
    # \u4F7F\u7528\u9ED8\u8BA4\u7684\u8FD0\u884C\u65F6\u5904\u7406\u7A0B\u5E8F\u3002
    # \u66F4\u591A\u4FE1\u606F: https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
    # \u8FD9\u662F Kubernetes v1.14 \u7248\u672C\u4E2D\u7684\u4E00\u4E2A beta \u7279\u6027\u3002
    runtimeClassName: "runc"

    # [\u53EF\u9009] AutomountServiceAccountToken \u6307\u793A\u4EE5\u6B64\u670D\u52A1\u5E10\u6237\u8FD0\u884C\u7684 Pod \u662F\u5426\u5E94\u81EA\u52A8\u6302\u8F7D API \u4EE4\u724C\u3002\u53EF\u4EE5\u5728 Pod \u7EA7\u522B\u8986\u76D6\u3002
    automountServiceAccountToken: false
    # [\u53EF\u9009] Pod \u8BBE\u7F6E DNS \u7B56\u7565\u3002\u9ED8\u8BA4\u4E3A"ClusterFirst"\u3002\u6709\u6548\u503C\u4E3A
    # "ClusterFirstWithHostNet"\u3001"ClusterFirst"\u3001"\u9ED8\u8BA4"\u6216"\u65E0"\u3002
    # DNSConfig \u4E2D\u7ED9\u51FA\u7684 DNS \u53C2\u6570\u5C06\u4E0E\u4F7F\u7528 DNSPolicy \u9009\u62E9\u7684\u7B56\u7565\u5408\u5E76\u3002
    # \u8981\u5C06 DNS \u9009\u9879\u4E0E hostNetwork \u4E00\u8D77\u8BBE\u7F6E\uFF0C\u60A8\u5FC5\u987B\u5C06 DNS \u7B56\u7565\u663E\u5F0F\u6307\u5B9A\u4E3A"ClusterFirstWithHostNet"\u3002
    dnsPolicy: ""
    # [\u53EF\u9009] \u6307\u5B9A Pod \u7684 DNS \u53C2\u6570\u3002\u6B64\u5904\u6307\u5B9A\u7684\u53C2\u6570\u5C06\u5408\u5E76\u5230\u57FA\u4E8E DNSPolicy \u751F\u6210\u7684 DNS \u914D\u7F6E\u4E2D\u3002
    dnsConfig:
      nameservers: # DNS \u540D\u79F0\u670D\u52A1\u5668 IP \u5730\u5740\u7684\u5217\u8868\u3002\u8FD9\u5C06\u88AB\u9644\u52A0\u5230\u4ECE DNSPolicy \u751F\u6210\u7684\u57FA\u672C\u540D\u79F0\u670D\u52A1\u5668\u4E2D\u3002\u91CD\u590D\u7684\u540D\u79F0\u670D\u52A1\u5668\u5C06\u88AB\u5220\u9664\u3002
        - "8.8.8.8"
      searches: # \u7528\u4E8E\u4E3B\u673A\u540D\u67E5\u627E\u7684 DNS \u641C\u7D22\u57DF\u5217\u8868\u3002\u8FD9\u5C06\u88AB\u9644\u52A0\u5230\u4ECE DNSPolicy \u751F\u6210\u7684\u57FA\u672C\u641C\u7D22\u8DEF\u5F84\u4E2D\u3002\u91CD\u590D\u7684\u641C\u7D22\u8DEF\u5F84\u5C06\u88AB\u5220\u9664\u3002
        - "svc.cluster.local"
      options: # DNS \u89E3\u6790\u5668\u9009\u9879\u5217\u8868\u3002\u8FD9\u5C06\u4E0E DNSPolicy \u751F\u6210\u7684\u57FA\u672C\u9009\u9879\u5408\u5E76\u3002\u91CD\u590D\u7684\u6761\u76EE\u5C06\u88AB\u5220\u9664\u3002\u9009\u9879\u4E2D\u7ED9\u51FA\u7684\u89E3\u6790\u9009\u9879\u5C06\u8986\u76D6\u57FA\u672C DNSPolicy \u4E2D\u51FA\u73B0\u7684\u89E3\u6790\u9009\u9879\u3002
        - name: "ndots"
          value: "2"
    # [\u53EF\u9009] EnableServiceLinks \u6307\u793A\u662F\u5426\u5E94\u5C06\u6709\u5173\u670D\u52A1\u7684\u4FE1\u606F\u6CE8\u5165\u5230 pod \u7684\u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u4E0E Docker \u94FE\u63A5\u7684\u8BED\u6CD5\u76F8\u5339\u914D\u3002\u53EF\u9009\uFF1A\u9ED8\u8BA4\u4E3A true\u3002
    enableServiceLinks: true
    # [\u53EF\u9009] \u8BBE\u7F6E\u5BB9\u5668\u7684\u4F18\u5148\u7EA7\u7C7B\u540D
    # - \u5982\u679C\u6307\u5B9A\uFF0C\u5219\u6307\u793A Pod \u7684\u4F18\u5148\u7EA7\u3002 "system-node-key"\u548C"system-cluster-key"\u662F\u4E24\u4E2A\u7279\u6B8A\u7684\u5173\u952E\u5B57\uFF0C
    #   \u8868\u793A\u6700\u9AD8\u4F18\u5148\u7EA7\uFF0C\u524D\u8005\u4E3A\u6700\u9AD8\u4F18\u5148\u7EA7\u3002\u4EFB\u4F55\u5176\u4ED6\u540D\u79F0\u5FC5\u987B\u901A\u8FC7\u521B\u5EFA\u5177\u6709\u8BE5\u540D\u79F0\u7684 PriorityClass \u5BF9\u8C61\u6765\u5B9A\u4E49\u3002
    # - \u5982\u679C\u672A\u6307\u5B9A\uFF0CPod \u4F18\u5148\u7EA7\u5C06\u4E3A\u9ED8\u8BA4\u503C\uFF1B\u5982\u679C\u6CA1\u6709\u9ED8\u8BA4\u503C\uFF0C\u5219 Pod \u4F18\u5148\u7EA7\u4E3A\u96F6\u3002
    priorityClassName: ""
    # [\u53EF\u9009] \u8BBE\u7F6E\u5BB9\u5668\u7684\u8C03\u5EA6\u7B56\u7565
    schedulerName: "default-scheduler"
    # [\u53EF\u9009] ImagePullSecrets \u662F\u5BF9\u540C\u4E00\u547D\u540D\u7A7A\u95F4\u4E2D Secrets \u7684\u5F15\u7528\u7684\u53EF\u9009\u5217\u8868\uFF0C\u7528\u4E8E\u62C9\u53D6\u6B64 PodSpec \u4F7F\u7528\u7684\u4EFB\u4F55\u955C\u50CF\u3002
    # \u5982\u679C\u6307\u5B9A\uFF0C\u8FD9\u4E9B Secrets \u5C06\u4F20\u9012\u7ED9\u5404\u4E2A\u62C9\u53D6\u5668\u5B9E\u73B0\u4EE5\u4F9B\u4ED6\u4EEC\u4F7F\u7528\u3002
    # \u66F4\u591A\u4FE1\u606F\uFF1Ahttps://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
    imagePullSecrets:
      - name: my-secret # \u5F15\u7528\u5BF9\u8C61\u540D, \u53C2\u8003: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    # [\u53EF\u9009] HostAliases \u662F\u4E00\u4E2A\u53EF\u9009\u7684\u4E3B\u673A\u548C IP \u5217\u8868\uFF0C\u5982\u679C\u6307\u5B9A\uFF0C\u5C06\u88AB\u6CE8\u5165\u5230 Pod \u7684\u4E3B\u673A\u6587\u4EF6\u4E2D\u3002\u8FD9\u4EC5\u5BF9\u975E hostNetwork pod \u6709\u6548\u3002
    hostAliases:
      - ip: ""
        hostnames: [ "" ]
    # [\u53EF\u9009] \u6B64 Pod \u8BF7\u6C42\u4E3B\u673A\u7F51\u7EDC\u3002\u4F7F\u7528\u4E3B\u673A\u7684\u7F51\u7EDC\u547D\u540D\u7A7A\u95F4\u3002\u5982\u679C\u8BBE\u7F6E\u6B64\u9009\u9879\uFF0C\u5219\u5FC5\u987B\u6307\u5B9A\u5C06\u4F7F\u7528\u7684\u7AEF\u53E3\u3002\u9ED8\u8BA4\u4E3A false\u3002
    hostNetwork: false
    # [\u53EF\u9009] TopologySpreadConstraints \u63CF\u8FF0\u4E00\u7EC4 Pod \u5E94\u5982\u4F55\u8DE8\u62D3\u6251\u57DF\u5206\u5E03\u3002\u8C03\u5EA6\u7A0B\u5E8F\u5C06\u4EE5\u9075\u5B88\u7EA6\u675F\u7684\u65B9\u5F0F\u8C03\u5EA6 Pod\u3002\u6240\u6709topologySpreadConstraints \u90FD\u662FAND \u8FD0\u7B97\u3002
    # corev1.TopologySpreadConstraint
    topologySpreadConstraints:
      - maxSkew: 1
        topologyKey: kubernetes.io/hostname
        whenUnsatisfiable: DoNotSchedule
        labelSelector:
          matchLabels:
            app: myapp
          namespaces:
            - mynamespace


  # [\u53EF\u9009] \u8D85\u65F6\u65F6\u95F4(\u9ED8\u8BA460\u5206\u949F)
  # \u6301\u7EED\u65F6\u95F4\u5B57\u7B26\u4E32\u662F\u53EF\u80FD\u6709\u7B26\u53F7\u7684\u5341\u8FDB\u5236\u6570\u5B57\u5E8F\u5217\uFF0C\u6BCF\u4E2A\u5341\u8FDB\u5236\u6570\u5B57\u90FD\u5E26\u6709\u53EF\u9009\u7684\u5206\u6570\u548C\u5355\u4F4D\u540E\u7F00\uFF0C
  # \u4F8B\u5982"300ms"\u3001"-1.5h"\u6216"2h45m"\u3002\u6709\u6548\u7684\u65F6\u95F4\u5355\u4F4D\u4E3A"ns"\u3001"us"\uFF08\u6216"\u03BCs"\uFF09\u3001"ms"\u3001"s"\u3001"m"\u3001"h"\u3002
  timeout: "10m"  # 10\u5206\u949F


  # [\u5FC5\u9009] \u4EFB\u52A1\u5B9A\u4E49
  taskSpec:
    # [\u5FC5\u9009] \u4EFB\u52A1\u5C55\u793A\u540D\u79F0
    displayName: "cc-test"
    # [\u53EF\u9009] \u63CF\u8FF0
    description: "\u8FD9\u662F\u4E00\u4EFD\u63CF\u8FF0"
    # [\u53EF\u9009] \u5B58\u50A8\u5B9A\u4E49
    # \u9664\u4E86\u4E3A\u8F93\u5165\u548C\u8F93\u51FA\u8D44\u6E90\u9690\u5F0F\u521B\u5EFA\u7684\u5377\u4E4B\u5916\uFF0C\u6307\u5B9A\u4E00\u4E2A\u6216\u591A\u4E2A Volumes \uFF0C\u4EE5\u4FBF Task \u4E2D\u7684 Steps \u6267\u884C\u3002
    volumes:
      - name: my-volume
        emptyDir: { }

    # [\u5FC5\u9009] \u4EFB\u52A1\u6B65\u9AA4\u5B9A\u4E49
    # \u4EFB\u52A1\u6709\u4E24\u79CD\u6A21\u5F0F(\u53EA\u80FD\u9009\u5176\u4E00)
    # - script \u6A21\u5F0F:
    # - command \u6A21\u5F0F:
    steps:
      # [\u5FC5\u9009] \u6B65\u9AA4\u540D\u79F0
      - name: "step1"
        # [\u53EF\u9009] \u8D85\u65F6\u65F6\u95F4(\u9ED8\u8BA460\u5206\u949F)
        # \u6301\u7EED\u65F6\u95F4\u5B57\u7B26\u4E32\u662F\u53EF\u80FD\u6709\u7B26\u53F7\u7684\u5341\u8FDB\u5236\u6570\u5B57\u5E8F\u5217\uFF0C\u6BCF\u4E2A\u5341\u8FDB\u5236\u6570\u5B57\u90FD\u5E26\u6709\u53EF\u9009\u7684\u5206\u6570\u548C\u5355\u4F4D\u540E\u7F00\uFF0C
        # \u4F8B\u5982"300ms"\u3001"-1.5h"\u6216"2h45m"\u3002\u6709\u6548\u7684\u65F6\u95F4\u5355\u4F4D\u4E3A"ns"\u3001"us"\uFF08\u6216"\u03BCs"\uFF09\u3001"ms"\u3001"s"\u3001"m"\u3001"h"\u3002
        timeout: "10s"
        # [\u5FC5\u9009] \u4EFB\u52A1\u8FD0\u884C\u6240\u5904\u7684\u955C\u50CF
        image: "ccr.ccs.tencentyun.com/library/alpine:latest"
        # [\u53EF\u9009] \u955C\u50CF\u62C9\u53D6\u7B56\u7565
        # [Always | Never | IfNotPresent]
        # \u5982\u679C tag \u662F :latest ,\u5219 \u9ED8\u8BA4\u662F Always , \u5176\u4ED6\u60C5\u51B5\u7684 tag , \u9ED8\u8BA4\u90FD\u662F IfNotPresent
        imagePullPolicy: "IfNotPresent"
        # [\u53EF\u9009] \u6307\u5B9A\u73AF\u5883\u53D8\u91CF, \u8FD9\u91CC\u7684\u73AF\u5883\u53D8\u91CF\u662F\u9759\u6001\u7684, \u4F1A\u548C codo \u7684\u53C2\u6570\u8FDB\u884C\u5408\u5E76, \u5982\u679C key \u51B2\u7A81\u65F6, \u4EE5 codo \u7684\u53C2\u6570\u4E3A\u51C6
        env:
          - name: "FOO"
            value: "baz"
        # [\u53EF\u9009] \u6307\u5B9A step\u5BB9\u5668 \u7684\u8D44\u6E90\u9700\u6C42
        # \u6240\u6709 step \u7684\u914D\u7F6E\u5FC5\u987B\u52A0\u8D77\u6765\u5C0F\u4E8E pod \u7684\u914D\u7F6E
        # \u8FD9\u91CC\u7684\u914D\u7F6E\u4F1A\u5728\u4E0A\u5C42\u88AB\u8986\u76D6, key \u7EA7\u522B\u8986\u76D6, \u4F8B\u5982\u4E0A\u5C42\u53EA\u6307\u5B9A memory: 128Mi, \u5219 cpu \u8FD8\u662F\u6309\u7167 500m \u6765\u4F7F\u7528
        computeResources:
          requests:
            memory: "256Mi" # \u7533\u8BF7 256 MB \u7684\u5185\u5B58
            cpu: "500m" # \u7533\u8BF7 0.5 Core \u7684 CPU
        # [\u53EF\u9009] \u5DE5\u4F5C\u76EE\u5F55
        workingDir: /data
        # [\u53EF\u9009] \u5F53 step \u51FA\u9519\u65F6\u7684\u5904\u7406\u65B9\u5F0F
        # [ continue | stopAndFail  | waitUntilTimeout ]
        onError: stopAndFail
        # [\u53EF\u9009] securityContext \u662F Kubernetes \u548C Tekton \u4E2D\u7684\u4E00\u4E2A\u91CD\u8981\u914D\u7F6E\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u5BB9\u5668\u7684\u5B89\u5168\u4E0A\u4E0B\u6587\u3002
        # \u5728 Step \u4E2D\uFF0CsecurityContext \u53EF\u4EE5\u7528\u6765\u63A7\u5236\u5BB9\u5668\u7684\u6743\u9650\u548C\u884C\u4E3A\u3002
        #        securityContext:
        #          runAsUser: 1000
        #          runAsGroup: 3000
        #          fsGroup: 2000
        #          allowPrivilegeEscalation: false
        #          privileged: false
        #          capabilities:
        #            drop:
        #              - ALL
        #          readOnlyRootFilesystem: true
        # [\u53EF\u9009] \u6302\u8F7D\u5B58\u50A8
        volumeMounts:
          - name: my-volume
            mountPath: /data
        # [\u5FC5\u9009] \u8FD0\u884C\u7684\u811A\u672C(\u4E0E command \u4E8C\u9009\u4E00)
        script: |
          #!/bin/sh
          echo "Hello World step1 FOO=$FOO"
      - name: "step2"
        image: "ccr.ccs.tencentyun.com/library/alpine:latest"
        # [\u5FC5\u9009] \u6307\u5B9A\u547D\u4EE4\u6267\u884C(\u4E0E script \u4E8C\u9009\u4E00)
        command: [ codo ]
        args: [ "set-context", "abc=123" ]
      - name: "step3"
        image: "ccr.ccs.tencentyun.com/library/alpine:latest"
        script: |
          #!/bin/sh
          echo "context=====$(codo get-context abc)"
      - name: "step4-python-test"
        image: "harbor.123u.com/public/rocky9.1-python3:latest"
        script: |
          #!/bin/python3.9
          from floating import Floating
          # \u8BF7\u624B\u52A8\u6307\u5B9A\uFF0C\u8C03\u7528api\u6A21\u5F0F\u3002
          fl = Floating(api_mode=True)
          fl.logger.info("hello world")
\`\`\``),ee=function(){Eu(!0)},ne=(0,k.useState)({show:!1,title:"",action:"post"}),yu=o()(ne,2),iu=yu[0],Bu=yu[1],te=(0,k.useState)("update_time"),Su=o()(te,2),Fe=Su[0],oe=Su[1],ae=(0,k.useState)("descend"),bu=o()(ae,2),se=bu[0],re=bu[1],Ee=(0,I.OV)({small:150,wide:80}),ie=Ee.width,le=(0,M.j)($u,void 0,"DELETE",_,x),Ce=le.runOpt,ce=(0,M.j)(Zu,iu.action==="post"?"create":"update",iu.action==="post"?"POST":"PUT",_,x),de=ce.runOpt,Ae=function(){tu(void 0),Bu({show:!0,title:"\u6DFB\u52A0\u4EFB\u52A1",action:"post"})},Pu=function(F){tu(F),Bu({show:!0,title:"\u4FEE\u6539\u4EFB\u52A1",action:"put"})},Be=function(){var a=D()(t()().mark(function F(n){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Ce({id:n.id});case 2:case"end":return l.stop()}},F)}));return function(n){return a.apply(this,arguments)}}(),De=function(){var a=D()(t()().mark(function F(n){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,de(s()(s()({},R),n));case 2:Bu(s()(s()({},iu),{},{show:!1}));case 3:case"end":return l.stop()}},F)}));return function(n){return a.apply(this,arguments)}}();(0,k.useEffect)(function(){var a;(a=_.current)===null||a===void 0||a.reload()},[m]),(0,k.useEffect)(function(){var a=function(){var F=D()(t()().mark(function n(){var f,l;return t()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(f=m.get("exec_uuid"),!f){A.next=13;break}return A.prev=2,A.next=5,Wu({filter_map:{exec_uuid:f}});case 5:l=A.sent,l.code===0&&l.data&&l.data.length>0?Pu(l.data[0]):x.error("\u672A\u627E\u5230\u76F8\u5173\u6570\u636E"),A.next=13;break;case 9:A.prev=9,A.t0=A.catch(2),console.error("\u83B7\u53D6\u4EFB\u52A1\u4FE1\u606F\u5931\u8D25",A.t0),x.error("\u83B7\u53D6\u4EFB\u52A1\u4FE1\u606F\u5931\u8D25");case 13:case"end":return A.stop()}},n,null,[[2,9]])}));return function(){return F.apply(this,arguments)}}();a()},[m]);var me=[{title:"\u58F0\u660E\u540D\u79F0",dataIndex:"task_name",width:200,ellipsis:!0,sorter:!0},{title:"\u4E1A\u52A1",dataIndex:"resource_group",width:120},{title:"\u66F4\u65B0\u4EBA",dataIndex:"creator",width:120,sorter:!0},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"update_time",width:180,sorter:!0,defaultSortOrder:"descend"},{title:"\u64CD\u4F5C",valueType:"option",width:ie,fixed:"right",render:function(F,n){return[(0,e.jsx)(Fu.Z.Link,{onClick:function(){tu(n),C(!0)},children:"\u5F15\u7528\u6D41\u7A0B"},"flow"),(0,e.jsx)(Fu.Z.Link,{onClick:function(){return Pu(n)},disabled:nu,children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(Du.Z,{title:"\u786E\u5B9A\u8981\u5220\u9664\u300A".concat(n.task_name,"\u300B\u5417\uFF1F"),description:"\u5220\u9664\u4E4B\u540E\u65E0\u6CD5\u627E\u56DE\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01",onConfirm:function(){return Be(n)},okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",children:(0,e.jsx)(Fu.Z.Link,{type:"danger",children:"\u5220\u9664"})},"delete")]}}];return(0,e.jsxs)(b.Z,{children:[hu,(0,e.jsx)(V.Z,{actionRef:_,rowKey:"id",params:{searchVal:K,order_by:Fe||"update_time",order:se},search:!1,defaultSize:"small",request:Uu(),columns:me,pagination:W.V2,toolbar:{title:(0,e.jsxs)(ku.Z,{align:"center",gap:"middle",children:[(0,e.jsx)(du.Z,{prefix:(0,e.jsx)(P.Z,{}),style:{width:320},placeholder:"\u8F93\u5165\u4EFB\u52A1\u540D\u79F0\u641C\u7D22",allowClear:!0,value:Q,onChange:function(F){return ou(F.target.value)}}),(0,e.jsx)(mu.ZP,{type:"link",icon:(0,e.jsx)(N.Z,{}),onClick:ee,title:"\u4E91\u539F\u751F\u4EFB\u52A1\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]}),actions:[(0,e.jsx)(mu.ZP,{type:"primary",icon:(0,e.jsx)($.Z,{}),onClick:Ae,disabled:nu,children:"\u6DFB\u52A0\u4EFB\u52A1"},"add")]},onChange:function(F,n,f){var l=f.field,lu=f.order;oe(l),re(lu)}}),(0,e.jsx)(Hu,{drawerData:iu,taskData:R,onVisibleChange:function(F){return Bu(s()(s()({},iu),{},{show:F}))},onSubmit:De}),(0,e.jsx)(G.Y,{width:1100,title:R?"\u4EFB\u52A1\u300A".concat(R.task_name,"\u300B\u5173\u8054\u7684\u6D41\u7A0B"):"",open:i,modalProps:{destroyOnClose:!0,onCancel:function(){C(!1)}},submitter:{resetButtonProps:{style:{display:"none"}},searchConfig:{submitText:"\u786E\u5B9A"}},onFinish:D()(t()().mark(function a(){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return C(!1),n.abrupt("return",!0);case 2:case"end":return n.stop()}},a)})),children:R&&(0,e.jsx)(Xu,{id:Number(R.id)})}),(0,e.jsx)(_u.Z,{title:"\u4E91\u539F\u751F\u4EFB\u52A1\u6700\u4F73\u5B9E\u8DF5",open:gu,onCancel:function(){return Eu(!1)},width:1200,footer:[(0,e.jsx)(mu.ZP,{onClick:function(){return Eu(!1)},children:"\u5173\u95ED"},"close")],bodyStyle:{maxHeight:"70vh",overflow:"auto"},className:"cloud-native-doc-modal",children:(0,e.jsx)("div",{style:{lineHeight:"1.6",padding:"0 16px 0 4px"},children:(0,e.jsx)(xu.UG,{components:{img:function(F){var n=Object.assign({},(w()(F),F));return(0,e.jsx)("img",s()(s()({},n),{},{style:{maxWidth:"100%",height:"auto",display:"block",padding:"16px 0 16px"}}))},code:function(F){var n=F.className,f=F.children,l=c()(F,Ju);if(n&&n.includes("language-")){var lu=/language-(\w+)/.exec(n);if(lu){var A=lu[1].toLowerCase();console.log("\u68C0\u6D4B\u5230\u8BED\u8A00:",A,"\u539F\u59CBclassName:",n);var pe=A==="yml"||A==="yaml"?"yaml":A;return(0,e.jsx)("div",{style:{width:"100%",overflow:"hidden"},children:(0,e.jsx)(Ou.Z,{style:Mu.Z,language:pe,showLineNumbers:!1,wrapLongLines:!0,customStyle:{maxWidth:"100%",width:"100%",margin:0,fontSize:"14px",lineHeight:"1.5",overflowX:"auto",wordWrap:"break-word",whiteSpace:"pre-wrap"},codeTagProps:{style:{whiteSpace:"pre-wrap",wordWrap:"break-word",maxWidth:"100%"}},children:String(f).replace(/\n$/,"")})})}}return(0,e.jsx)("code",s()(s()({},l),{},{style:{backgroundColor:"#f8f8f8",color:"#2d3748",padding:"2px 6px",borderRadius:"4px",fontSize:"0.9em",fontFamily:'Monaco, Consolas, "Courier New", monospace',textDecoration:"none !important",textDecorationLine:"none",boxShadow:"none",border:"1px solid #666666"},children:f}))},pre:function(F){var n=F.children;return(0,e.jsx)(e.Fragment,{children:n})}},children:X})})})]})},ue=qu},95812:function(q,p,u){var y=u(26068),c=u.n(y),O=u(67825),w=u.n(O),r=u(1544),s=u(20877),B=u(52676),t=["alertMessage","children","readOnly","required"],S=function(d){var o=d.alertMessage,W=d.children,b=d.readOnly,M=b===void 0?!1:b,I=d.required,P=w()(d,t);return(0,B.jsxs)(r.Z,c()(c()({},P),{},{required:M?!1:I,style:{marginBottom:0},children:[!M&&(0,B.jsx)("div",{style:{marginBottom:8},children:o&&(0,B.jsx)(s.Z,{type:"info",showIcon:!0,message:o})}),W]}))};p.Z=S},36903:function(q,p,u){u.d(p,{H0:function(){return w},JH:function(){return O},zB:function(){return c}});var y="cli_a270b45f63b9100b",c={free:"\u7A7A\u95F2",busy:"\u7E41\u5FD9",lock:"\u9501\u5B9A",offline:"\u79BB\u7EBF",maintain:"\u7EF4\u62A4"},O={python:"python",sh:"shell",go:"go",lua:"lua",perl:"perl",php:"php",javascript:"javascript",typescript:"typescript"},w=`
require:
  fields:
    - "field_1"
  vouchers:
    - "voucher1"
# [\u53EF\u9009] pod \u7684\u8D44\u6E90\u9650\u5236
# \u7528\u6237\u53EF\u4EE5\u9009\u62E9\u5728\u4EFB\u52A1\u7EA7\u6307\u5B9A\u8D44\u6E90\u9700\u6C42\uFF0C\u800C\u4E0D\u662F\u5728\u6BCF\u4E2A Step \u4E0A\u6307\u5B9A\u8D44\u6E90\u9700\u6C42\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u4EFB\u52A1\u7EA7\u8D44\u6E90\u8981\u6C42\uFF0C
# \u5B83\u5C06\u786E\u4FDD kubelet \u53EA\u4E3A\u6267\u884C Task \u7684 Steps \u4FDD\u7559\u8BE5\u6570\u91CF\u7684\u8D44\u6E90\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u4EFB\u52A1\u7EA7\u8D44\u6E90\u9650\u5236\uFF0C\u5219\u4EFB\u4F55 Step \u90FD\u4E0D\u80FD\u4F7F\u7528\u8D85\u8FC7\u8BE5\u6570\u91CF\u7684\u8D44\u6E90\u3002
computeResources:
  requests:
    memory: "64Mi" # \u7533\u8BF7 512 MB \u7684\u5185\u5B58
    cpu: "30m" # \u7533\u8BF7 1 Core \u7684 CPU
  limits:
    memory: "64Mi" # \u7533\u8BF7 512 MB \u7684\u5185\u5B58
    cpu: "30m" # \u7533\u8BF7 1 Core \u7684 CPU
# [\u5FC5\u9009] \u4EFB\u52A1\u5B9A\u4E49
taskSpec:
  # [\u5FC5\u9009] \u4EFB\u52A1\u5C55\u793A\u540D\u79F0
  displayName: "cc-test"
  # [\u53EF\u9009] \u63CF\u8FF0
  description: "\u8FD9\u662F\u4E00\u4EFD\u63CF\u8FF0"
  # [\u5FC5\u9009] \u4EFB\u52A1\u6B65\u9AA4\u5B9A\u4E49
  # \u4EFB\u52A1\u6709\u4E24\u79CD\u6A21\u5F0F(\u53EA\u80FD\u9009\u5176\u4E00)
  # - script \u6A21\u5F0F:
  # - command \u6A21\u5F0F:
  steps:
    # [\u5FC5\u9009] \u6B65\u9AA4\u540D\u79F0
    - name: "hello world"
      # [\u53EF\u9009] \u5F53 step \u51FA\u9519\u65F6\u7684\u5904\u7406\u65B9\u5F0F
      # [ continue | stopAndFail  | waitUntilTimeout ]
      onError: waitUntilTimeout
      # [\u53EF\u9009] \u8D85\u65F6\u65F6\u95F4(\u9ED8\u8BA460\u5206\u949F)
      # \u6301\u7EED\u65F6\u95F4\u5B57\u7B26\u4E32\u662F\u53EF\u80FD\u6709\u7B26\u53F7\u7684\u5341\u8FDB\u5236\u6570\u5B57\u5E8F\u5217\uFF0C\u6BCF\u4E2A\u5341\u8FDB\u5236\u6570\u5B57\u90FD\u5E26\u6709\u53EF\u9009\u7684\u5206\u6570\u548C\u5355\u4F4D\u540E\u7F00\uFF0C
      # \u4F8B\u5982\u201C300ms\u201D\u3001\u201C-1.5h\u201D\u6216\u201C2h45m\u201D\u3002\u6709\u6548\u7684\u65F6\u95F4\u5355\u4F4D\u4E3A\u201Cns\u201D\u3001\u201Cus\u201D\uFF08\u6216\u201C\u03BCs\u201D\uFF09\u3001\u201Cms\u201D\u3001\u201Cs\u201D\u3001\u201Cm\u201D\u3001\u201Ch\u201D\u3002
      timeout: "200s"
      # [\u5FC5\u9009] \u4EFB\u52A1\u8FD0\u884C\u6240\u5904\u7684\u955C\u50CF
      image: "harbor.123u.com/public/rocky9.1-python3:latest"
      # [\u5FC5\u9009] \u8FD0\u884C\u7684\u811A\u672C(\u4E0E command \u4E8C\u9009\u4E00)
      script: |
        #!/bin/sh
        set -euo pipefail
        echo hello world

`}}]);
