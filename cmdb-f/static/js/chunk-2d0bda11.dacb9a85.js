(window["webpackJsonp_cmdb"]=window["webpackJsonp_cmdb"]||[]).push([["chunk-2d0bda11"],{"2d8a":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e._self._c;return a("div",[a("Modal",{attrs:{title:e.modalData.title,loading:!0,"footer-hide":!0,width:"750"},on:{"on-cancel":e.handleCancel},model:{value:e.modalData.show,callback:function(a){e.$set(e.modalData,"show",a)},expression:"modalData.show"}},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":100}},[a("FormItem",{attrs:{label:"名称",prop:"name"}},[a("Input",{attrs:{maxlength:120,placeholder:"请输入名称、虚拟交换机、虚拟子网"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("FormItem",{attrs:{label:"厂商",prop:"cloud_name"}},[a("Select",{model:{value:e.formValidate.cloud_name,callback:function(a){e.$set(e.formValidate,"cloud_name",a)},expression:"formValidate.cloud_name"}},[a("Option",{attrs:{value:"neiwang"}},[e._v("内网")])],1)],1)],1),a("FormItem",{attrs:{label:"局域网名",prop:"vpc_name"}},[a("Input",{attrs:{maxlength:120,placeholder:"请输入局域网名 VPC"},model:{value:e.formValidate.vpc_name,callback:function(a){e.$set(e.formValidate,"vpc_name",a)},expression:"formValidate.vpc_name"}})],1),a("FormItem",{attrs:{label:"网段V4",prop:"cidr_block_v4"}},[a("Input",{attrs:{maxlength:120,placeholder:"请输入网段 IPv4"},model:{value:e.formValidate.cidr_block_v4,callback:function(a){e.$set(e.formValidate,"cidr_block_v4",a)},expression:"formValidate.cidr_block_v4"}})],1),a("FormItem",{attrs:{label:"网段V6",prop:"cidr_block_v6"}},[a("Input",{attrs:{maxlength:250,placeholder:"请输入网段 IPv6"},model:{value:e.formValidate.cidr_block_v6,callback:function(a){e.$set(e.formValidate,"cidr_block_v6",a)},expression:"formValidate.cidr_block_v6"}})],1),a("FormItem",{attrs:{label:"网关地址",prop:"route"}},[a("Input",{attrs:{maxlength:120,placeholder:"请输入网关地址"},model:{value:e.formValidate.route,callback:function(a){e.$set(e.formValidate,"route",a)},expression:"formValidate.route"}})],1),a("FormItem",{attrs:{label:"详情备注",prop:"description"}},[a("Input",{attrs:{maxlength:250,type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入详情备注..."},model:{value:e.formValidate.description,callback:function(a){e.$set(e.formValidate,"description",a)},expression:"formValidate.description"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(a){return e.handleSubmit("formValidate")}}},[e._v("保存")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(a){return e.handleReset("formValidate")}}},[e._v("重置")])],1)],1)],1)],1)},o=[],r={name:"vswitchAdd",props:{modalData:{type:Object,default:{}}},data(){return{btnLoading:!1,ruleValidate:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],vpc_name:[{required:!0,message:"虚拟局域网名不能为空",trigger:"blur"}],description:[{required:!0,message:"备注不能为空",trigger:"blur"}]},formValidate:{cloud_name:"neiwang"}}},methods:{handleCancel(){this.$emit("drawer-close")},handleClose(){this.$emit("drawer-close")},handleSubmit(e){this.$refs[e].validate(e=>{e?(this.btnLoading=!0,setTimeout(()=>{this.$emit("save-data",this.formValidate,this.modalData.action),this.btnLoading=!1},1e3)):this.$Message.error("表单校验不通过!")})}},watch:{},computed:{},mounted(){}},i=r,n=t("2877"),d=Object(n["a"])(i,l,o,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0bda11.dacb9a85.js.map