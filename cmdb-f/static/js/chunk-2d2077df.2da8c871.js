(window["webpackJsonp_cmdb"]=window["webpackJsonp_cmdb"]||[]).push([["chunk-2d2077df"],{a181:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e._self._c;return a("div",[a("Drawer",{attrs:{"before-close":e.handleClose,title:e.modalData.title,width:"50%",draggable:"","mask-closable":!1,"footer-hide":!0},on:{"on-close":e.handleCancel},model:{value:e.modalData.show,callback:function(a){e.$set(e.modalData,"show",a)},expression:"modalData.show"}},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":100}},[a("FormItem",{attrs:{label:"实例名称",prop:"name"}},[a("Input",{attrs:{maxlength:120,placeholder:"请输入实例名称"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1),a("FormItem",{attrs:{label:"厂商信息",prop:"cloud_name"}},[a("Input",{attrs:{maxlength:120,placeholder:"请输入厂商名称"},model:{value:e.formValidate.cloud_name,callback:function(a){e.$set(e.formValidate,"cloud_name",a)},expression:"formValidate.cloud_name"}})],1),a("FormItem",{attrs:{label:"版本",prop:"db_version"}},[a("Input",{attrs:{maxlength:120,placeholder:"请输入"},model:{value:e.formValidate.db_version,callback:function(a){e.$set(e.formValidate,"db_version",a)},expression:"formValidate.db_version"}})],1),a("FormItem",{attrs:{label:"引擎",prop:"db_engine"}},[a("Input",{attrs:{maxlength:120,placeholder:"请输入"},model:{value:e.formValidate.db_engine,callback:function(a){e.$set(e.formValidate,"db_engine",a)},expression:"formValidate.db_engine"}})],1),a("FormItem",{attrs:{label:"实例ID",prop:"instance_id"}},[a("Input",{attrs:{maxlength:120,placeholder:"请输入实例ID，如果不填则随机生成"},model:{value:e.formValidate.instance_id,callback:function(a){e.$set(e.formValidate,"instance_id",a)},expression:"formValidate.instance_id"}})],1),a("FormItem",{attrs:{label:"数据库地址"}},[a("vue-json-editor",{attrs:{"show-btns":!1,mode:"code",lang:"zh"},model:{value:e.formValidate.db_address,callback:function(a){e.$set(e.formValidate,"db_address",a)},expression:"formValidate.db_address"}})],1),a("FormItem",{attrs:{label:"扩展字段"}},[a("vue-json-editor",{attrs:{"show-btns":!1,mode:"code",lang:"zh"},on:{"json-change":e.onJsonChange,"json-save":e.onJsonSave,"has-error":e.onError},model:{value:e.formValidate.ext_info,callback:function(a){e.$set(e.formValidate,"ext_info",a)},expression:"formValidate.ext_info"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(a){return e.handleSubmit("formValidate",!1)}}},[e._v("保存")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(a){return e.handleSubmit("formValidate",!0)}}},[e._v("保存并继续")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(a){return e.handleReset("formValidate")}}},[e._v("重置")])],1)],1)],1)],1)},n=[],l=t("45a3"),r={name:"mysqlAdd",components:{vueJsonEditor:l["a"]},props:{modalData:{type:Object,default:{}}},data(){return{btnLoading:!1,ruleValidate:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],cloud_name:[{required:!0,message:"不能为空",trigger:"blur"}]},formValidate:{cloud_name:"qcloud",db_engine:"MySQL",db_version:"5.7",db_address:{items:[{ip:"10.0.70.145",port:3306,type:"private",domain:"",endpoint_type:"Primary"},{ip:"",port:0,type:"public",domain:"",endpoint_type:"Primary"}]},ext_info:{account_id:"3jcaSEJREKqaVLKSDdFCEt",region:"ap-singapore",zone:"ap-singapore-3",state:"运行中",db_class:"4C/8G/200G",charge_type:"按量付费",create_time:"2023-03-27 09:52:09"}}}},methods:{handleCancel(){this.$emit("drawer-close")},handleClose(){this.$emit("drawer-close")},handleSubmit(e,a){this.$refs[e].validate(e=>{e?(this.btnLoading=!0,setTimeout(()=>{this.$emit("save-data",this.formValidate,this.modalData.action,a),this.btnLoading=!1},1e3)):this.$Message.error("表单校验不通过!")})},onJsonChange(e){console.log("更改了--\x3e",e),this.jsonErrFlag=!1},onJsonSave(e){console.log("保存了---\x3e",e)},onError(e){console.log("报错了---\x3e",e),this.jsonErrFlag=!0}},watch:{},computed:{},mounted(){}},i=r,d=t("2877"),s=Object(d["a"])(i,o,n,!1,null,null,null);a["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d2077df.2da8c871.js.map