(window["webpackJsonp_cmdb"]=window["webpackJsonp_cmdb"]||[]).push([["chunk-c99fbf74"],{"259e":function(e,t,n){"use strict";n("ae74")},ae74:function(e,t,n){},fec9:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("Drawer",{attrs:{title:e.templateInfo.name,width:"1000"},on:{"on-close":e.onClose},model:{value:e.showDrawer,callback:function(t){e.showDrawer=t},expression:"showDrawer"}},[t("div",{staticClass:"drawer__content"},[t("div",{staticClass:"drawer__content__section"},[t("div",{staticClass:"drawer__content__section__header"},[t("div",{staticClass:"drawer__content__section__header__title"},[e._v("基本信息")]),e.editBasicInfo?e._e():t("div",{staticClass:"drawer__content__section__header__icon",on:{click:function(t){e.editBasicInfo=!0}}},[t("Icon",{attrs:{type:"md-create"}}),t("span",{staticClass:"drawer__content__section__header__icon__text"},[e._v("编辑")])],1)]),e.editBasicInfo?t("div",{staticClass:"drawer__content__section__form"},[t("Form",{ref:"basicForm",attrs:{model:e.templateInfo,"label-width":100,rules:e.formRules}},[t("div",{staticClass:"modal__content__section__form"},[t("div",{staticClass:"modal__content__section__form__custom"},[t("FormItem",{attrs:{prop:"name",label:"模板名称"}},[t("Input",{attrs:{type:"text",placeholder:"请输入模板名称"},model:{value:e.templateInfo.name,callback:function(t){e.$set(e.templateInfo,"name",t)},expression:"templateInfo.name"}})],1)],1),t("div",{staticClass:"modal__content__section__form__select"},[t("FormItem",{attrs:{prop:"res_type",label:"模板类型"}},[t("Select",{attrs:{type:"text",placeholder:"请选择模板类型"},model:{value:e.templateInfo.res_type,callback:function(t){e.$set(e.templateInfo,"res_type",t)},expression:"templateInfo.res_type"}},e._l(e.resTypeOptions,(function(n){return t("Option",{key:n.value,attrs:{value:n.value}},[e._v(e._s(n.label))])})),1)],1)],1),t("div",{staticClass:"modal__content__section__form__longer"},[t("FormItem",{attrs:{prop:"subnet_id",label:"私有子网"}},[t("Select",{attrs:{filterable:"",placeholder:"请选择私有子网"},on:{"on-change":e.handleInstanceChange},model:{value:e.templateInfo.subnet_id,callback:function(t){e.$set(e.templateInfo,"subnet_id",t)},expression:"templateInfo.subnet_id"}},e._l(e.vswitchOptions,(function(n){return t("Option",{key:n.id,attrs:{value:n.instance_id}},[e._v(e._s(n.label))])})),1)],1)],1),t("div",{staticClass:"modal__content__section__form__longer"},[t("FormItem",{attrs:{prop:"vpc_name",label:"私有网络"}},[t("Input",{attrs:{type:"text",disabled:""},model:{value:e.templateInfo.vpc_name,callback:function(t){e.$set(e.templateInfo,"vpc_name",t)},expression:"templateInfo.vpc_name"}})],1)],1),t("div",{staticClass:"modal__content__section__form__select"},[t("FormItem",{attrs:{prop:"cloud_region_id",label:"云区域"}},[t("Input",{attrs:{type:"text",placeholder:""},model:{value:e.templateInfo.cloud_region_id,callback:function(t){e.$set(e.templateInfo,"cloud_region_id",t)},expression:"templateInfo.cloud_region_id"}})],1)],1),t("div",{staticClass:"modal__content__section__form__select"},[t("FormItem",{attrs:{prop:"cloundAccountRender",label:"云厂商"}},[t("Input",{attrs:{type:"text",disabled:"",placeholder:""},model:{value:e.templateInfo.cloundAccountRender,callback:function(t){e.$set(e.templateInfo,"cloundAccountRender",t)},expression:"templateInfo.cloundAccountRender"}})],1)],1),t("div",{staticClass:"modal__content__section__form__select"},[t("FormItem",{attrs:{prop:"region",label:"地域"}},[t("Input",{attrs:{type:"text",disabled:"",placeholder:""},model:{value:e.templateInfo.region,callback:function(t){e.$set(e.templateInfo,"region",t)},expression:"templateInfo.region"}})],1)],1),t("div",{staticClass:"modal__content__section__form__select"},[t("FormItem",{attrs:{prop:"zone",label:"可用区"}},[t("Input",{attrs:{type:"text",placeholder:""},model:{value:e.templateInfo.zone,callback:function(t){e.$set(e.templateInfo,"zone",t)},expression:"templateInfo.zone"}})],1)],1)])])],1):t("div",{staticClass:"drawer__content__section__info"},[t("div",{staticClass:"drawer__content__section__info__line"},[t("div",{staticClass:"drawer__content__section__info__line__label"},[e._v(" 模板名称 ")]),t("div",{staticClass:"drawer__content__section__info__line__value"},[e._v(" "+e._s(e.templateInfo.name)+" ")])]),t("div",{staticClass:"drawer__content__section__info__line"},[t("div",{staticClass:"drawer__content__section__info__line__label"},[e._v(" 模板类型 ")]),t("div",{staticClass:"drawer__content__section__info__line__value"},[e._v(" "+e._s(e.templateInfo.resTypeRender)+" ")])]),t("div",{staticClass:"drawer__content__section__info__line"},[t("div",{staticClass:"drawer__content__section__info__line__label"},[e._v(" 私有子网 ")]),t("div",{staticClass:"drawer__content__section__info__line__value"},[e._v(" "+e._s(e.templateInfo.subnet_name)+" ")])]),t("div",{staticClass:"drawer__content__section__info__line"},[t("div",{staticClass:"drawer__content__section__info__line__label"},[e._v(" 私有网络 ")]),t("div",{staticClass:"drawer__content__section__info__line__value"},[e._v(" "+e._s(e.templateInfo.vpc_name)+" ")])]),t("div",{staticClass:"drawer__content__section__info__line"},[t("div",{staticClass:"drawer__content__section__info__line__label"},[e._v(" 云区域 ")]),t("div",{staticClass:"drawer__content__section__info__line__value"},[e._v(" "+e._s(e.templateInfo.cloud_region_id)+" ")])]),t("div",{staticClass:"drawer__content__section__info__line"},[t("div",{staticClass:"drawer__content__section__info__line__label"},[e._v(" 云厂商 ")]),t("div",{staticClass:"drawer__content__section__info__line__value"},[e._v(" "+e._s(e.templateInfo.cloundAccountRender)+" ")])])])]),t("div",{staticStyle:{"margin-top":"1em"}}),t("div",{staticClass:"modal__content__section__form__longer"},[t("div",{staticClass:"drawer__content__section"},[t("div",{staticClass:"drawer__content__section__header"},[t("div",{staticClass:"drawer__content__section__header__title"},[e._v("TF配置")]),e.editModelInfo?e._e():t("div",{staticClass:"drawer__content__section__header__icon",on:{click:e.handleEditModelInfo}},[t("Icon",{attrs:{type:"md-create"}}),t("span",{staticClass:"drawer__content__section__header__icon__text"},[e._v("编辑")])],1)]),e.editModelInfo?t("div",{staticClass:"drawer__content__section__form"},[t("Form",{ref:"resTypeForm",attrs:{model:e.templateInfo,"label-width":100,rules:e.formRules}},[t("div",{staticClass:"modal__content__section__form"},[t("div",{staticClass:"modal__content__section__form__longer"},[t("codo-editor",{key:""+e._uid,attrs:{lang:e.script_type,read:e.read},model:{value:e.templateInfo.content,callback:function(t){e.$set(e.templateInfo,"content",t)},expression:"templateInfo.content"}})],1)])])],1):t("div",{staticClass:"drawer__content__section__info"},[t("div",{staticClass:"modal__content__section__form__longer"},[t("codo-editor",{key:""+e._uid,attrs:{lang:e.script_type,read:e.read},model:{value:e.templateInfo.content,callback:function(t){e.$set(e.templateInfo,"content",t)},expression:"templateInfo.content"}})],1)])])]),t("div",{staticStyle:{"margin-top":"1em"}}),t("div",{staticClass:"drawer__content__section"},[t("div",{staticClass:"drawer__content__section__header"},[t("div",{staticClass:"drawer__content__section__header__title"},[e._v("其他设置")]),e.editOtherInfo?e._e():t("div",{staticClass:"drawer__content__section__header__icon",on:{click:function(t){e.editOtherInfo=!0}}},[t("Icon",{attrs:{type:"md-create"}}),t("span",{staticClass:"drawer__content__section__header__icon__text"},[e._v("编辑")])],1)]),e.editOtherInfo?t("div",[t("Form",{ref:"otherForm",attrs:{model:e.templateInfo,"label-width":100,rules:e.formRules}},[t("div",{staticClass:"modal__content__section__form"},[t("div",{staticClass:"modal__content__section__form__tags"},[t("div",{staticClass:"modal__content__section__form__tags__label"},[e._v(" 标签 ")]),t("div",{staticClass:"modal__content__section__form__tags__content"},e._l(e.templateInfo.tagsValues,(function(n,a){return t("div",{key:a,staticClass:"modal__content__section__form__tags__content__line"},[t("FormItem",{attrs:{prop:"tagsValues."+a+".key",rules:{required:!0,message:"标签键不能为空",trigger:"blur"}}},[t("Select",{attrs:{filterable:""},on:{"on-select":e.handleSelectTag},model:{value:n.key,callback:function(t){e.$set(n,"key",t)},expression:"item.key"}},e._l(e.tagKeyOptions,(function(n){return t("Option",{key:n.value,attrs:{value:n.value}},[e._v(e._s(n.label))])})),1)],1),t("FormItem",{attrs:{prop:"tagsValues."+a+".value",rules:{required:!0,message:"标签值不能为空",trigger:"blur"}}},[t("Select",{attrs:{filterable:"",loading:void 0===e.tagValueOptions[n.key],disabled:""===n.key,placeholder:""===n.key?"请先选择标签键":"请选择"},model:{value:n.value,callback:function(t){e.$set(n,"value",t)},expression:"item.value"}},e._l(e.tagValueOptions[n.key],(function(n){return t("Option",{key:n.value,attrs:{value:n.value}},[e._v(e._s(n.label))])})),1)],1),a===e.templateInfo.tagsValues.length-1?t("Icon",{attrs:{size:"20",type:"md-add"},on:{click:e.handleAddTag}}):e._e(),e.templateInfo.tagsValues.length>1?t("Icon",{attrs:{size:"20",type:"md-close"},on:{click:function(t){return e.handleRemoveTag(a)}}}):e._e()],1)})),0)]),t("div",{staticClass:"modal__content__section__form__longer"},[t("FormItem",{attrs:{prop:"description",label:"备注"}},[t("Input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.templateInfo.description,callback:function(t){e.$set(e.templateInfo,"description",t)},expression:"templateInfo.description"}})],1)],1)])])],1):t("div",{staticClass:"drawer__content__section__info"},[t("div",{staticClass:"drawer__content__section__info__line"},[t("div",{staticClass:"drawer__content__section__info__line__label"},[e._v(" 标签 ")]),t("div",{staticClass:"drawer__content__section__info__line__value"},[e._v(" "+e._s(e.templateInfo.renderTags)+" ")])]),t("div",{staticClass:"drawer__content__section__info__line"},[t("div",{staticClass:"drawer__content__section__info__line__label"},[e._v(" 备注 ")]),t("div",{staticClass:"drawer__content__section__info__line__value"},[e._v(" "+e._s(e.templateInfo.description)+" ")])])])])]),e.editBasicInfo||e.editModelInfo||e.editOtherInfo?t("div",{staticClass:"drawer__footer"},[t("Button",{attrs:{type:"primary"},on:{click:e.handleUpdate}},[e._v("确认修改")])],1):e._e()])},_=[],s=(n("d9e2"),n("14d9"),n("2ef0")),o=n("30b3"),i=n("a743"),l=n("3261"),c=n("d4f7"),r=n("7063");const d=1e3;var p={components:{codoEditor:c["default"]},name:"EditTemplate",props:{show:{type:Boolean,default:!1},row:{type:Object,default:()=>({})}},data(){return{script_type:"sh",read:!0,imageIdOptions:[],imageIdLoading:!1,specialSplit:"",editBasicInfo:!1,editModelInfo:!1,editOtherInfo:!1,vswitchOptions:[],securityGroupOptions:[],tagKeyOptions:[],resTypeOptions:r["resTypeOptions"],dataDiskTypeOptions:r["dataDiskTypeOptions"],systemDiskTypeOptions:r["systemDiskTypeOptions"],instanceChargeTypeOptions:r["instanceChargeTypeOptions"],internetChargeTypeOptions:r["internetChargeTypeOptions"],tagValueOptions:{},templateInfo:{cloud_region_id:"",cloud_region_name:"",account_id:"",name:"",res_type:"",vendor:"",region:"",zone:"",tags:{},tagsValues:[{key:"",value:""}],renderTags:"",vpc_id:"",vpc_name:"",content:""},formRules:{name:[{required:!0,message:"模板名称必填",trigger:"blur"}],res_type:[{required:!0,message:"模板类型必选",trigger:"blur"}],subnet_id:[{required:!0,message:"私有子网必选",trigger:"change"}],cloundAccountRender:[{required:!0,message:"云厂商不能为空",trigger:"blur"}],vpc_name:[{required:!0,message:"私有网络不能为空",trigger:"blur"}],region:[{required:!0,message:"地域不能为空",trigger:"blur"}],zone:[{required:!0,message:"可用区不能为空",trigger:"blur"}],tags:[{required:!0,message:"标签必填",trigger:"blur"}]},showDrawer:!1}},computed:{insTypeParams(){const{account_id:e,vendor:t,res_type:n,region:a,zone:_,instance_type:s,content:o}=this.templateInfo;return{account_id:e,vendor:t,res_type:n,region:a,zone:_,instance_type:s,isEdit:this.editModelInfo,content:o}}},watch:{show(e){e&&this.getSettings(),this.showDrawer=e},row(e){this.editBasicInfo=!1,this.editModelInfo=!1,this.editOtherInfo=!1,this.templateInfo=Object(l["getFeFormInfo"])(e,this)},insTypeParams:{async handler(e){const{account_id:t,vendor:n,res_type:a,region:_,zone:s,instance_type:o,isEdit:i}=e;t&&n&&a&&_&&s&&o&&i&&this.getInsTypeOptions()},deep:!0}},mounted(){this.specialSplit=Object(l["getUniqueStr"])(3)},methods:{handleEditModelInfo(){this.editModelInfo=!0,this.read=!1},getInsTypeOptions:Object(s["debounce"])((async function(){try{const{account_id:e,vendor:t,res_type:n,region:a,zone:_,instance_type:s}=this.templateInfo,{data:i}=await Object(o["getInsType"])({account_id:e,vendor:t,res_type:n,region:a,zone:_,instance_type:s});this.templateInfo.cpu=i.cpu,this.templateInfo.memory=i.memory}catch(e){this.templateInfo.cpu="",this.templateInfo.memory=""}}),d),async handleUpdate(){try{const e=new Promise((e,t)=>{this.editBasicInfo?this.$refs.basicForm.validate(n=>{n||t(new Error("表单校验失败，请检查")),e()}):e()}),t=new Promise((e,t)=>{this.editModelInfo?this.$refs.resTypeForm.validate(n=>{n||t(new Error("表单校验失败，请检查")),e()}):e()}),n=new Promise((e,t)=>{this.editOtherInfo?this.$refs.otherForm.validate(n=>{n||t(new Error("表单校验失败，请检查")),e()}):e()});await Promise.all([e,t,n]);const a=Object(l["getParams"])(this.templateInfo,this),_=await Object(o["modifyOrderTemplate"])({id:this.templateInfo.id,...a,description:a.description||""});if(!_)throw new Error("请求错误，请重试");this.$emit("editSuccessCallback"),this.showDrawer=!1,this.$Message.success(_.msg)}catch(e){console.log(e),this.$Message.error(e.message)}},handleInstanceChange(e){const t=this.vswitchOptions.find(t=>t.instance_id===e);this.templateInfo={...this.templateInfo,subnet_name:`${t.instance_id} | ${t.name} | ${t.cidr_block_v4}`,vendor:t.cloud_name,account_id:t.account_id,cloundAccountRender:`${t.account_id} | ${t.cloud_name}`,vpc_id:t.vpc_id.replace(/[\r\n]/g,""),vpc_name:`${t.vpc_id} | ${t.vpc_name}`,cloud_region_id:t.cloud_region_id,cloudRender:""+t.cloud_region_id,region:t.region,zone:t.zone}},async getSettings(){this.getVswitchData(),this.getTagData()},async getVswitchData(){const{data:e}=await Object(i["getVswitch"])();this.vswitchOptions=e.map(e=>({...e,label:`${e.instance_id} | ${e.name} | ${e.cidr_block_v4}`}))},async getTagData(){const{data:e}=await Object(o["getTagList"])();this.tagKeyOptions=e.map(e=>({label:e,value:e}))},async handleSelectTag(e){const{data:t}=await Object(o["getTagList"])({tag_key:e.value});this.$set(this.tagValueOptions,e.value,t.map(e=>({label:e,value:e})))},handleAddTag(){this.templateInfo.tagsValues.push({key:"",value:""})},handleRemoveTag(e){this.templateInfo.tagsValues=this.templateInfo.tagsValues.filter((t,n)=>n!==e)},onClose(){this.showDrawer=!1,this.$emit("closeDrawer")}}},m=p,u=(n("259e"),n("2877")),f=Object(u["a"])(m,a,_,!1,null,"34ab057c",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-c99fbf74.47d761bc.js.map