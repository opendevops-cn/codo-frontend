(window["webpackJsonp_cmdb"]=window["webpackJsonp_cmdb"]||[]).push([["chunk-2f8fd983","chunk-2d0ae8c9"],{"0b12":function(e,t,a){"use strict";a.r(t),a.d(t,"postTreeAsset",(function(){return l})),a.d(t,"getTreeAsset",(function(){return o})),a.d(t,"changeTreeAssetStatus",(function(){return i})),a.d(t,"deleteTreeAsset",(function(){return n})),a.d(t,"getRelation",(function(){return s})),a.d(t,"getServiceTreelist",(function(){return d})),a.d(t,"operationTree",(function(){return m})),a.d(t,"getBizEnv",(function(){return u})),a.d(t,"getTreeModule",(function(){return c}));var r=a("be3b");const l=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/asset/",method:"post",data:e}),o=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/asset/",method:"get",params:e}),i=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/asset/",method:"patch",data:e}),n=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/asset/",method:"delete",data:e}),s=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/asset/relation/",method:"get",params:e}),d=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/",method:"get",params:e}),m=(e,t)=>Object(r["default"])({url:"/api/v2/cmdb/tree/",method:t,data:e}),u=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/env/",method:"get",params:e}),c=e=>Object(r["default"])({url:"/api/v2/cmdb/tree/module/",method:"get",params:e})},"43c5":function(e,t,a){"use strict";a("affe")},affe:function(e,t,a){},eab3:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",[t("Drawer",{attrs:{title:e.modalData.title,width:"800",draggable:"","mask-closable":!1},model:{value:e.modalData.show,callback:function(t){e.$set(e.modalData,"show",t)},expression:"modalData.show"}},[t("Form",{ref:"formValidate",staticStyle:{width:"750px"},attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":90}},[t("FormItem",{staticStyle:{"padding-top":"10px"},attrs:{label:"分组名称",prop:"perm_group_name"}},[t("Input",{attrs:{maxlength:50,placeholder:"请输入分组名称"},model:{value:e.formValidate.perm_group_name,callback:function(t){e.$set(e.formValidate,"perm_group_name",t)},expression:"formValidate.perm_group_name"}})],1),[t("Row",{attrs:{gutter:5}},[t("FormItem",[t("Alert",{attrs:{type:"success","show-icon":"",closable:""}},[e._v(" 根据业务拓扑信息创建动态分组 "),t("template",{slot:"desc"},[t("p",[e._v(" 下列条件的关系为且 业务为必填项，集群和模块为可以输入多个，以半角逗号或者空格来分隔。 ")]),t("p",[e._v("当前类型查询条件不支持通配符，全部为精确查询。")])])],2)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"选择业务",prop:"biz_id"}},[t("Select",{attrs:{filterable:"",placeholder:"请选择业务..."},on:{"on-select":e.handleChangeBiz},model:{value:e.formValidate.biz_id,callback:function(t){e.$set(e.formValidate,"biz_id",t)},expression:"formValidate.biz_id"}},e._l(e.bizList,(function(e){return t("Option",{key:e.biz_id,attrs:{value:e.biz_id,label:e.biz_cn_name}})})),1)],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"",prop:"env_name"}},[t("Select",{attrs:{filterable:"",placeholder:"请选择环境.."},model:{value:e.formValidate.env_name,callback:function(t){e.$set(e.formValidate,"env_name",t)},expression:"formValidate.env_name"}},e._l(e.envList,(function(e){return t("Option",{key:e,attrs:{value:e,label:e}})})),1)],1)],1),t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"集群名称",prop:"region_name"}},[t("Input",{attrs:{maxlength:500,placeholder:"输入集群、区服名称，多个以半角逗号或者空格区分"},model:{value:e.formValidate.region_name,callback:function(t){e.$set(e.formValidate,"region_name",t)},expression:"formValidate.region_name"}})],1)],1),t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"模块名称",prop:"module_name"}},[t("Input",{attrs:{maxlength:500,placeholder:"输入模块、服务名称，多个以半角逗号或者空格区分"},model:{value:e.formValidate.module_name,callback:function(t){e.$set(e.formValidate,"module_name",t)},expression:"formValidate.module_name"}})],1)],1)],1)],t("FormItem",{attrs:{label:"用户组",prop:"user_group"}},[t("Select",{attrs:{filterable:"",placeholder:"请选择用户组",multiple:""},model:{value:e.formValidate.user_group,callback:function(t){e.$set(e.formValidate,"user_group",t)},expression:"formValidate.user_group"}},e._l(e.roleList,(function(e){return t("Option",{key:e.id,attrs:{value:e.role_name,label:e.role_name}})})),1)],1),t("FormItem",{attrs:{label:"角色",prop:"perm_type"}},[t("RadioGroup",{model:{value:e.formValidate.perm_type,callback:function(t){e.$set(e.formValidate,"perm_type",t)},expression:"formValidate.perm_type"}},[t("Radio",{attrs:{label:"dev"}},[e._v("开发")]),t("Radio",{attrs:{label:"ops"}},[e._v("运维")])],1)],1),t("FormItem",{attrs:{label:"备注信息",prop:"perm_group_detail"}},[t("Input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"Enter something..."},model:{value:e.formValidate.perm_group_detail,callback:function(t){e.$set(e.formValidate,"perm_group_detail",t)},expression:"formValidate.perm_group_detail"}})],1),t("div",{staticClass:"drawer-footer"},[t("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(t){return e.handleCancel("formValidate")}}},[e._v("取消")]),t("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("提交")])],1)],2)],1)],1)},l=[],o=a("0b12"),i=a("30b3"),n={name:"permGroupEdit",props:{modalData:{type:Object,default:{}},bizList:{type:Object|Array,default:[]}},data(){return{index:1,btnLoading:!1,envList:[],roleList:[],regionList:[],jmssAccounts:[],formValidate:{user_group:[],biz_id:null},ruleValidate:{perm_group_name:[{required:!0,message:"权限分组名称不能为空",trigger:"blur"}],perm_type:[{required:!0,message:"请选择角色类型",trigger:"blur"}],user_group:[{required:!0,message:"请选择用户组",trigger:"blur",type:"array"}]}}},watch:{"formValidate.biz_id":{handler(e,t){e&&e!==t&&this.handleGetEnv()},deep:!0}},methods:{async handleGetEnv(){const e=await Object(o["getBizEnv"])({biz_id:this.formValidate.biz_id});0===e.code?this.envList=e.data.env_list:this.$Message.error(e.msg)},handleCancel(e){this.$refs[e].resetFields(),this.$emit("drawer-close")},handleRoleInfoList(){Object(i["getRoleInfoList"])().then(e=>{0===e.code?this.roleList=e.data:this.$Message.error(""+e.msg)})},handleChange(){this.formValidate.biz_id=null,this.formValidate.env_name=null},handleChangeBiz(){this.formValidate.env_name=null,this.regionList=[],this.envList=[],this.formValidate.region_name=null},async handleSubmit(e){const t=await this.$refs[e].validate();t?setTimeout(()=>{this.$emit("save-data",this.formValidate,this.modalData.action)},200):this.$Notice.error({title:"表单验证失败"})}},mounted(){this.handleRoleInfoList()}},s=n,d=(a("43c5"),a("2877")),m=Object(d["a"])(s,r,l,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2f8fd983.6ba71e58.js.map