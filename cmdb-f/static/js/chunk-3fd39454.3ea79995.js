(window["webpackJsonp_cmdb"]=window["webpackJsonp_cmdb"]||[]).push([["chunk-3fd39454","chunk-2d0ae8c9"],{"0395":function(e,t,a){"use strict";a("5569")},"0b12":function(e,t,a){"use strict";a.r(t),a.d(t,"postTreeAsset",(function(){return i})),a.d(t,"getTreeAsset",(function(){return l})),a.d(t,"changeTreeAssetStatus",(function(){return o})),a.d(t,"deleteTreeAsset",(function(){return s})),a.d(t,"getRelation",(function(){return n})),a.d(t,"getServiceTreelist",(function(){return m})),a.d(t,"operationTree",(function(){return d})),a.d(t,"getBizEnv",(function(){return p})),a.d(t,"getTreeModule",(function(){return u}));var r=a("be3b");const i=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/asset/",method:"post",data:e}),l=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/asset/",method:"get",params:e}),o=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/asset/",method:"patch",data:e}),s=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/asset/",method:"delete",data:e}),n=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/asset/relation/",method:"get",params:e}),m=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/",method:"get",params:e}),d=(e,t)=>Object(r["default"])({url:"/api/v2/cmdb/tree/",method:t,data:e}),p=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/env/",method:"get",params:e}),u=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/module/",method:"get",params:e})},5569:function(e,t,a){},eab3:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",[t("Drawer",{attrs:{title:e.modalData.title,width:"800",draggable:"","mask-closable":!1},model:{value:e.modalData.show,callback:function(t){e.$set(e.modalData,"show",t)},expression:"modalData.show"}},[t("Form",{ref:"formValidate",staticStyle:{width:"750px"},attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":90}},[t("FormItem",{staticStyle:{"padding-top":"10px"},attrs:{label:"分组名称",prop:"perm_group_name"}},[t("Input",{attrs:{maxlength:50,placeholder:"请输入分组名称"},model:{value:e.formValidate.perm_group_name,callback:function(t){e.$set(e.formValidate,"perm_group_name",t)},expression:"formValidate.perm_group_name"}})],1),[t("Row",{attrs:{gutter:5}},[t("FormItem",[t("Alert",{attrs:{type:"success","show-icon":"",closable:""}},[e._v(" 根据业务拓扑信息创建动态分组 "),t("template",{slot:"desc"},[t("p",[e._v(" 下列条件的关系为且 业务为必填项，集群和模块为可以输入多个，以半角逗号或者空格来分隔。 ")]),t("p",[e._v("当前类型查询条件不支持通配符，全部为精确查询。")])])],2)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"选择业务",prop:"biz_id"}},[t("Select",{attrs:{filterable:"",placeholder:"请选择业务..."},on:{"on-select":e.handleChangeBiz},model:{value:e.formValidate.biz_id,callback:function(t){e.$set(e.formValidate,"biz_id",t)},expression:"formValidate.biz_id"}},e._l(e.bizList,(function(e){return t("Option",{key:e.biz_id,attrs:{value:e.biz_id,label:e.biz_cn_name}})})),1)],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"",prop:"env_name"}},[t("Select",{attrs:{filterable:"",placeholder:"请选择环境.."},model:{value:e.formValidate.env_name,callback:function(t){e.$set(e.formValidate,"env_name",t)},expression:"formValidate.env_name"}},e._l(e.envList,(function(e){return t("Option",{key:e,attrs:{value:e,label:e}})})),1)],1)],1),t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"集群名称",prop:"region_name"}},[t("Input",{attrs:{maxlength:500,placeholder:"输入集群、区服名称，多个以半角逗号或者空格区分"},model:{value:e.formValidate.region_name,callback:function(t){e.$set(e.formValidate,"region_name",t)},expression:"formValidate.region_name"}})],1)],1),t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"模块名称",prop:"module_name"}},[t("Input",{attrs:{maxlength:500,placeholder:"输入模块、服务名称，多个以半角逗号或者空格区分"},model:{value:e.formValidate.module_name,callback:function(t){e.$set(e.formValidate,"module_name",t)},expression:"formValidate.module_name"}})],1)],1)],1)],t("FormItem",{attrs:{label:"堡垒机组织",prop:"jms_org_id"}},[t("Select",{attrs:{filterable:"",placeholder:"请选择组织"},model:{value:e.formValidate.jms_org_id,callback:function(t){e.$set(e.formValidate,"jms_org_id",t)},expression:"formValidate.jms_org_id"}},e._l(e.jmsOrgs,(function(e){return t("Option",{key:e.id,attrs:{value:e.id,label:e.name}})})),1)],1),t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"权限开始时间",prop:"perm_start_time"}},[t("Row",[t("DatePicker",{staticStyle:{width:"700px"},attrs:{type:"datetime",placeholder:"开始时间",format:"yyyy-MM-dd HH:mm:ss"},on:{"on-change":e.handleStartDateChange},model:{value:e.formValidate.perm_start_time,callback:function(t){e.$set(e.formValidate,"perm_start_time",t)},expression:"formValidate.perm_start_time"}})],1)],1)],1),[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"权限结束时间",prop:"perm_end_time"}},[t("Row",[t("DatePicker",{staticStyle:{width:"700px"},attrs:{type:"datetime",placeholder:"结束时间",format:"yyyy-MM-dd HH:mm:ss"},on:{"on-change":e.handleEndDateChange},model:{value:e.formValidate.perm_end_time,callback:function(t){e.$set(e.formValidate,"perm_end_time",t)},expression:"formValidate.perm_end_time"}})],1)],1)],1),t("FormItem",{attrs:{label:"用户组",prop:"user_group"}},[t("Select",{attrs:{filterable:"",placeholder:"请选择用户组",multiple:""},model:{value:e.formValidate.user_group,callback:function(t){e.$set(e.formValidate,"user_group",t)},expression:"formValidate.user_group"}},e._l(e.roleList,(function(e){return t("Option",{key:e.id,attrs:{value:e.role_name,label:e.role_name}})})),1)],1)],t("FormItem",{attrs:{label:"账号类型",prop:"perm_type"}},[t("RadioGroup",{model:{value:e.formValidate.perm_type,callback:function(t){e.$set(e.formValidate,"perm_type",t)},expression:"formValidate.perm_type"}},[t("Radio",{attrs:{label:"dev"}},[e._v("普通用户")]),t("Radio",{attrs:{label:"ops"}},[e._v("特权用户")])],1)],1),t("FormItem",{attrs:{label:"备注信息",prop:"perm_group_detail"}},[t("Input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"Enter something..."},model:{value:e.formValidate.perm_group_detail,callback:function(t){e.$set(e.formValidate,"perm_group_detail",t)},expression:"formValidate.perm_group_detail"}})],1),t("div",{staticClass:"drawer-footer"},[t("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(t){return e.handleCancel("formValidate")}}},[e._v("取消")]),t("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("提交")])],1)],2)],1)],1)},i=[],l=(a("d9e2"),a("0b12")),o=a("30b3"),s={name:"permGroupEdit",props:{modalData:{type:Object,default:{}},bizList:{type:Object|Array,default:[]}},data(){return{index:1,btnLoading:!1,envList:[],roleList:[],regionList:[],jmsOrgs:[],jmssAccounts:[],formValidate:{user_group:[],biz_id:null},ruleValidate:{perm_group_name:[{required:!0,message:"分组名称不能为空",trigger:"blur"}],perm_type:[{required:!0,message:"请选择角色类型",trigger:"blur"}],jms_org_id:[{required:!0,message:"请选择堡垒机组织",trigger:"blur"}],perm_start_time:[{required:!0,message:"请选择堡垒机授权开始时间",trigger:"blur"}],perm_end_time:[{required:!0,message:"请选择堡垒机授权结束时间",trigger:"blur"},{validator:this.validateEndTime,trigger:"blur"}],user_group:[{required:!0,message:"请选择用户组",trigger:"blur",type:"array"}]}}},watch:{"formValidate.biz_id":{handler(e,t){e&&e!==t&&this.handleGetEnv()},deep:!0}},methods:{validateEndTime(e,t,a){this.formValidate.perm_end_time&&this.formValidate.perm_start_time&&new Date(this.formValidate.perm_end_time)<=new Date(this.formValidate.perm_start_time)?a(new Error("结束时间必须大于开始时间")):a()},handleStartDateChange(e){this.formValidate.perm_start_time=this.formatDate(e)},handleEndDateChange(e){this.formValidate.perm_end_time=this.formatDate(e)},formatDate(e){if(!e)return"";if(!(e instanceof Date))return e;const t=new Date(e),a=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0"),s=String(t.getSeconds()).padStart(2,"0");return`${a}-${r}-${i} ${l}:${o}:${s}`},async handleGetEnv(){const e=await Object(l["getBizEnv"])({biz_id:this.formValidate.biz_id});0===e.code?this.envList=e.data.env_list:this.$Message.error(e.msg)},handleCancel(e){this.$refs[e].resetFields(),this.$emit("drawer-close")},handleRoleInfoList(){Object(o["getRoleInfoList"])().then(e=>{0===e.code?this.roleList=e.data:this.$Message.error(""+e.msg)})},handleJmsOrgList(){Object(o["getJMSOrgList"])().then(e=>{0===e.code?this.jmsOrgs=e.data:this.$Message.error(""+e.msg)})},handleChange(){this.formValidate.biz_id=null,this.formValidate.env_name=null},handleChangeBiz(){this.formValidate.env_name=null,this.regionList=[],this.envList=[],this.formValidate.region_name=null},async handleSubmit(e){this.formValidate.perm_start_time=this.formatDate(this.formValidate.perm_start_time),this.formValidate.perm_end_time=this.formatDate(this.formValidate.perm_end_time);const t=await this.$refs[e].validate();t?setTimeout(()=>{this.$emit("save-data",this.formValidate,this.modalData.action)},200):this.$Notice.error({title:"表单验证失败"})}},mounted(){this.handleRoleInfoList(),this.handleJmsOrgList()}},n=s,m=(a("0395"),a("2877")),d=Object(m["a"])(n,r,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3fd39454.3ea79995.js.map