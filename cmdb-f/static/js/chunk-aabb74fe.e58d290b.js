(window["webpackJsonp_cmdb"]=window["webpackJsonp_cmdb"]||[]).push([["chunk-aabb74fe","chunk-2d0c8f4d","chunk-2d2077df","chunk-2d2288b3","chunk-2d21d456","chunk-2d0de8d7"],{"0ddd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("Card",{attrs:{"dis-hover":"",bordered:!1}},[e("div",[e("Alert",{attrs:{"show-icon":""}},[t._v(" 已选择 "),e("span",[t._v(t._s(t.selectList.length))]),t._v(" 项 "),e("a",{staticStyle:{"margin-left":"10px"},on:{click:t.clearSelectAll}},[t._v("清空已选")])]),e("Select",{staticStyle:{width:"100px"},on:{"on-change":t.handleSerachChangge},model:{value:t.serachType,callback:function(e){t.serachType=e},expression:"serachType"}},t._l(t.serachTypeList,(function(a){return e("Option",{key:a.value,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1),"address"===t.serachType?[e("Input",{staticStyle:{width:"300px",margin:"2px"},attrs:{clearable:"",placeholder:"输入地址模糊查询"},on:{"on-change":t.handleClear},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch.apply(null,arguments)}},model:{value:t.initPara.search_address,callback:function(e){t.$set(t.initPara,"search_address",e)},expression:"initPara.search_address"}})]:[e("Input",{staticStyle:{width:"300px",margin:"2px"},attrs:{clearable:"",placeholder:"输入关键字模糊搜索"},on:{"on-change":t.handleClear},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch.apply(null,arguments)}},model:{value:t.initPara.searchVal,callback:function(e){t.$set(t.initPara,"searchVal",e)},expression:"initPara.searchVal"}})],e("Button",{staticStyle:{margin:"3px"},on:{click:function(e){return t.handleSearch()}}},[t._v("搜索")]),e("Button",{staticStyle:{margin:"3px"},on:{click:t.handleAdd}},[t._v("添加")]),e("span",{staticStyle:{"margin-left":"20px"}},[t._v("一键筛选：")]),e("ButtonGroup",["is_normal"===t.initPara.search_filter?e("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handlefilter("is_normal")}}},[t._v("未过期")]):e("Button",{on:{click:function(e){return t.handlefilter("is_normal")}}},[t._v("未过期")]),"is_expired"===t.initPara.search_filter?e("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handlefilter("is_expired")}}},[t._v("已过期")]):e("Button",{on:{click:function(e){return t.handlefilter("is_expired")}}},[t._v("已过期")]),"is_showdown"===t.initPara.search_filter?e("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handlefilter("is_showdown")}}},[t._v("已关机")]):e("Button",{on:{click:function(e){return t.handlefilter("is_showdown")}}},[t._v("已关机")])],1),0!==t.selectList.length?[e("Button",{staticStyle:{margin:"6px"},attrs:{type:"error"},on:{click:t.handleDel}},[t._v("一键删除")]),e("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:function(e){return t.exportData(2)}}},[e("Icon",{attrs:{type:"ios-download-outline"}}),t._v("导出数据 ")],1)]:[e("Button",{staticStyle:{margin:"6px"},attrs:{type:"error",disabled:""}},[t._v("一键删除")]),e("Button",{staticClass:"search-btn",attrs:{type:"primary",disabled:""}},[e("Icon",{attrs:{type:"ios-download-outline"}}),t._v("导出数据 ")],1)],e("Table",{ref:"selection",attrs:{size:"small",columns:t.columns,data:t.tableData,loading:t.i.tableLoading},on:{"on-sort-change":t.handleSort,"on-selection-change":t.handleSelect}})],2),e("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[e("div",{staticStyle:{float:"left"}},[e("Page",{attrs:{total:t.i.pageTotal,current:t.initPara.page_number,"page-size":t.initPara.page_size,"page-size-opts":[12,35,50,100,1e3],"show-sizer":"","show-total":""},on:{"on-change":t.handlerChangePage,"on-page-size-change":t.handlePageSize}})],1)]),t.mysqlData?e("div",[e("mysqlDetail",{attrs:{"modal-data":t.modalData,"mysql-data":t.mysqlData}})],1):t._e(),t.addressDialog.show&&"aws"===t.addressDialog.cloudName?[e("auroraAddress",{attrs:{dialog:t.addressDialog,"address-items":t.addressItems,"instances-items":t.instancesItems}})]:t.addressDialog.show&&["aliyun","qcloud","volc","gcp"].includes(t.addressDialog.cloudName)?[e("mysqlAddress",{attrs:{dialog:t.addressDialog,"address-items":t.addressItems}})]:t._e(),e("mysql-add",{attrs:{"modal-data":t.modalAdd},on:{"drawer-close":t.handleClose,"save-data":t.handleSaveData}})],2)},l=[],n=(a("14d9"),a("85ae")),o=a("d11d"),r=a("da44"),i=a("56a7"),d=a("a181"),c={components:{mysqlDetail:o["default"],mysqlAddress:r["default"],auroraAddress:i["default"],mysqlAdd:d["default"]},data(){return{addressDialog:{show:!1,title:"",cloudName:""},addressItems:{},instancesItems:{},modalData:{show:!1,title:"MySQL详情"},modalAdd:{show:!1,action:"post",title:"添加数据库"},mysqlData:{},selectList:[],serachType:"default",serachTypeList:[{value:"default",label:"默认搜索"},{value:"address",label:"地址搜索"}],i:{pageTotal:0,tableLoading:!0},initPara:{page_number:1,page_size:12,search_filter:"is_normal",order_by:"",order:"ascend"},tableData:[],columns:[{type:"selection",title:"selection",key:"selection",width:60,align:"center"},{title:"云厂商",key:"cloud_name",minWidth:130,maxWidth:160,sortable:!0,render:(t,e)=>{const a=e.row.cloud_name;return"qcloud"===a?t("div",[t("Tag",{props:{color:"geekblue"}},"腾讯云")]):"aliyun"===a?t("div",[t("Tag",{props:{color:"blue"}},"阿里云")]):"cds"===a?t("div",[t("Tag",{props:{color:"cyan"}},"首都云")]):"volc"===a?t("div",[t("Tag",{props:{color:"orange"}},"火山云")]):"gcp"===a?t("div",[t("Tag",{props:{color:"green"}},"谷歌云")]):"aws"===a?t("div",[t("Tag",{props:{color:"volcano"}},"AWS")]):void 0}},{title:"实例状态",key:"state",align:"center",width:130,sortable:!0,render:(t,e)=>{const{row:a}=e,s="运行中"===a.state?"success":"关机"===a.state?"error":"创建中"===a.state?"primary":"error",l="运行中"===a.state?"运行中":"关机"===a.state?"已关机":"创建中"===a.state?"创建中":a.state;return t("Tag",{props:{type:"dot",color:s}},l)}},{title:"实例ID",key:"instance_id",align:"left",minWidth:130,sortable:!0,render:(t,e)=>t("a",{on:{click:()=>{this.handleDetail(e.row)}}},e.row.instance_id)},{title:"实例名称",key:"name",align:"left",minWidth:130,sortable:!0,tooltip:!0},{title:"可用区",key:"zone",minWidth:130,maxWidth:160,tooltip:!0},{title:"引擎",key:"db_engine",align:"left",width:130,sortable:!0},{title:"版本",key:"db_version",align:"left",minWidth:110,maxWidth:160,sortable:!0,tooltip:!0},{title:"操作",key:"handle",width:120,align:"left",render:(t,e)=>t("div",[t("a",{style:{marginRight:"10px"},on:{click:()=>{this.handViewAddress(e.row)}}},"链接地址")])},{title:"最后更新时间",key:"update_time",align:"center",fixed:"right",width:180,sortable:!0}]}},mounted(){this.handleGetData()},methods:{async handleGetData(){const t=await Object(n["getMySQLList"])(this.initPara);0===t.code?(this.tableData=t.data,this.i.pageTotal=t.count):this.$Message.error(""+t.msg),this.clearSelectAll(),this.i.tableLoading=!1},handleClose(){this.modalAdd.show=!1,this.modalData.show=!1,this.handleGetData()},handleAdd(){this.modalAdd.show=!0},handleSaveData(t,e,a){Object(n["optrationMysQL"])(t,e).then(t=>{0==t.code?(this.$Message.success("成功"),a?this.handleGetData():this.handleClose()):this.$Message.error(t.msg)})},handleSearch(){this.initPara.page_number=1,this.handleGetData()},handlefilter(t){this.initPara.search_filter=t,this.handleGetData()},handleDetail(t){this.mysqlData=t,this.modalData.show=!0},handViewAddress(t){this.addressItems=t.db_address.items,console.info(this.addressItems),"aws"===t.cloud_name&&(this.instancesItems=t.ext_info.db_instance_info),this.addressDialog={show:!0,title:t.name,cloudName:t.cloud_name}},handleSort(t,e,a){this.initPara.order="asc"===t.order?"ascend":"descend",this.initPara.order_by=t.key,this.handleGetData()},handlerChangePage(t){this.initPara.page_number=t,this.handleGetData()},handlePageSize(t){this.initPara.page_size=t,this.handleGetData()},handleSelect(t){let e=[];t.forEach(t=>{e.push(t.id)}),this.selectList=e},clearSelectAll(){this.$refs.selection.selectAll(!1)},handleClear(t){""===t.target.value&&(this.tableData=this.value)},handleSerachChangge(){this.initPara.search_address="",this.initPara.searchVal=""},handleDel(){this.$Modal.confirm({title:"二次确认",content:"确定删除已选中的数据? ",onOk:()=>{Object(n["optrationMysQL"])({id_list:this.selectList},"delete").then(t=>{0===t.code?(this.$Notice.success({title:""+t.msg}),this.handleGetData()):this.$Notice.error({title:""+t.msg})})},onCancel:()=>{this.$Message.info("回头是岸~"),this.clearSelectAll()}})},exportData(t){1===t?this.$refs.selection.exportCsv({filename:"codo_cmdb_original_data"}):2===t&&this.$refs.selection.exportCsv({filename:"codo_cmdb_sorting_and_filtering_data",original:!1}),this.clearSelectAll()}}},p=c,m=a("2877"),h=Object(m["a"])(p,s,l,!1,null,null,null);e["default"]=h.exports},"56a7":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("Modal",{attrs:{title:t.dialog.title,width:"920","mask-closable":!1,"footer-hide":!0},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[e("Alert",{attrs:{type:"success","show-icon":""}},[t._v("集群地址")]),e("div",{staticStyle:{"margin-top":"5px"}},[e("Table",{attrs:{stripe:"",border:"",columns:t.columns,data:t.addressItems}})],1),e("p"),e("Alert",{attrs:{"show-icon":""}},[t._v("节点地址")]),e("div",[e("Table",{attrs:{stripe:"",border:"",columns:t.instanceColumns,data:t.instancesItems}})],1)],1)],1)},l=[],n={name:"auroraAddress",props:{dialog:Object,addressItems:{type:Array,default:function(){return[]}},instancesItems:{type:Array,default:function(){return[]}}},data(){return{columns:[{title:"集群类型",key:"type",align:"center",width:120,sortable:!0,render:(t,e)=>{let a=e.row.endpoint_type;return"read"===a?t("div",[t("Tag",{props:{color:"blue"}},"读集群")]):"wirte"===a?t("div",[t("Tag",{props:{color:"geekblue"}},"写集群")]):void 0}},{title:"网络",key:"type",align:"center",width:120,sortable:!0,render:(t,e)=>{let a=e.row.type;if("auto_dns"===a)return t("div",[t("Tag",{props:{color:"default"}},"智能DNS")])}},{title:"端口",key:"port",width:100,align:"center",sortable:!0},{title:"域名地址",key:"domain",align:"left",sortable:!0}],instanceColumns:[{title:"名称",key:"name",tooltip:!0},{title:"地址",key:"instance_addr",align:"left",tooltip:!0},{title:"用户",key:"instance_user",width:100},{title:"端口",key:"instance_port",width:90},{title:"类型",key:"instance_class",width:120},{title:"状态",key:"instance_status",width:100}]}},methods:{},computed:{}},o=n,r=a("2877"),i=Object(r["a"])(o,s,l,!1,null,null,null);e["default"]=i.exports},"85ae":function(t,e,a){"use strict";a.r(e),a.d(e,"getMySQLList",(function(){return l})),a.d(e,"optrationMysQL",(function(){return n}));var s=a("be3b");const l=t=>Object(s["default"])({url:"/api/v2/cmdb/mysql/",method:"get",params:t}),n=(t,e)=>Object(s["default"])({url:"/api/v2/cmdb/mysql/",method:e,data:t})},a181:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("Drawer",{attrs:{"before-close":t.handleClose,title:t.modalData.title,width:"50%",draggable:"","mask-closable":!1,"footer-hide":!0},on:{"on-close":t.handleCancel},model:{value:t.modalData.show,callback:function(e){t.$set(t.modalData,"show",e)},expression:"modalData.show"}},[e("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":100}},[e("FormItem",{attrs:{label:"实例名称",prop:"name"}},[e("Input",{attrs:{maxlength:120,placeholder:"请输入实例名称"},model:{value:t.formValidate.name,callback:function(e){t.$set(t.formValidate,"name",e)},expression:"formValidate.name"}})],1),e("FormItem",{attrs:{label:"厂商信息",prop:"cloud_name"}},[e("Input",{attrs:{maxlength:120,placeholder:"请输入厂商名称"},model:{value:t.formValidate.cloud_name,callback:function(e){t.$set(t.formValidate,"cloud_name",e)},expression:"formValidate.cloud_name"}})],1),e("FormItem",{attrs:{label:"版本",prop:"db_version"}},[e("Input",{attrs:{maxlength:120,placeholder:"请输入"},model:{value:t.formValidate.db_version,callback:function(e){t.$set(t.formValidate,"db_version",e)},expression:"formValidate.db_version"}})],1),e("FormItem",{attrs:{label:"引擎",prop:"db_engine"}},[e("Input",{attrs:{maxlength:120,placeholder:"请输入"},model:{value:t.formValidate.db_engine,callback:function(e){t.$set(t.formValidate,"db_engine",e)},expression:"formValidate.db_engine"}})],1),e("FormItem",{attrs:{label:"实例ID",prop:"instance_id"}},[e("Input",{attrs:{maxlength:120,placeholder:"请输入实例ID，如果不填则随机生成"},model:{value:t.formValidate.instance_id,callback:function(e){t.$set(t.formValidate,"instance_id",e)},expression:"formValidate.instance_id"}})],1),e("FormItem",{attrs:{label:"数据库地址"}},[e("vue-json-editor",{attrs:{"show-btns":!1,mode:"code",lang:"zh"},model:{value:t.formValidate.db_address,callback:function(e){t.$set(t.formValidate,"db_address",e)},expression:"formValidate.db_address"}})],1),e("FormItem",{attrs:{label:"扩展字段"}},[e("vue-json-editor",{attrs:{"show-btns":!1,mode:"code",lang:"zh"},on:{"json-change":t.onJsonChange,"json-save":t.onJsonSave,"has-error":t.onError},model:{value:t.formValidate.ext_info,callback:function(e){t.$set(t.formValidate,"ext_info",e)},expression:"formValidate.ext_info"}})],1),e("FormItem",[e("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate",!1)}}},[t._v("保存")]),e("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleSubmit("formValidate",!0)}}},[t._v("保存并继续")]),e("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleReset("formValidate")}}},[t._v("重置")])],1)],1)],1)],1)},l=[],n=a("45a3"),o={name:"mysqlAdd",components:{vueJsonEditor:n["a"]},props:{modalData:{type:Object,default:{}}},data(){return{btnLoading:!1,ruleValidate:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],cloud_name:[{required:!0,message:"不能为空",trigger:"blur"}]},formValidate:{cloud_name:"qcloud",db_engine:"MySQL",db_version:"5.7",db_address:{items:[{ip:"10.0.70.145",port:3306,type:"private",domain:"",endpoint_type:"Primary"},{ip:"",port:0,type:"public",domain:"",endpoint_type:"Primary"}]},ext_info:{account_id:"3jcaSEJREKqaVLKSDdFCEt",region:"ap-singapore",zone:"ap-singapore-3",state:"运行中",db_class:"4C/8G/200G",charge_type:"按量付费",create_time:"2023-03-27 09:52:09"}}}},methods:{handleCancel(){this.$emit("drawer-close")},handleClose(){this.$emit("drawer-close")},handleSubmit(t,e){this.$refs[t].validate(t=>{t?(this.btnLoading=!0,setTimeout(()=>{this.$emit("save-data",this.formValidate,this.modalData.action,e),this.btnLoading=!1},1e3)):this.$Message.error("表单校验不通过!")})},onJsonChange(t){console.log("更改了--\x3e",t),this.jsonErrFlag=!1},onJsonSave(t){console.log("保存了---\x3e",t)},onError(t){console.log("报错了---\x3e",t),this.jsonErrFlag=!0}},watch:{},computed:{},mounted(){}},r=o,i=a("2877"),d=Object(i["a"])(r,s,l,!1,null,null,null);e["default"]=d.exports},d11d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{width:"780px;",title:t.modalData.title,"footer-hide":!0,styles:{top:"30px"}},model:{value:t.modalData.show,callback:function(e){t.$set(t.modalData,"show",e)},expression:"modalData.show"}},[e("Card",{attrs:{"dis-hover":""}},[e("div",{staticClass:"inner"},[e("Alert",{attrs:{"show-icon":""}},[t._v("基本信息")]),e("div",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[e("Row",[e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("实例ID：")])])]),e("Col",{attrs:{span:"20"}},[e("p",[t._v(" "+t._s(t.mysqlData.instance_id))])])],1),e("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("主机名：")])])]),e("Col",{attrs:{span:"20"}},[e("p",[t._v(" "+t._s(t.mysqlData.name))])])],1),e("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("厂商：")])])]),t.mysqlData.cloud_name?e("Col",{attrs:{span:"8"}},[e("p",[t._v(" "+t._s(t.mysqlData.cloud_name)+" ")])]):t._e(),e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("AccountID：")])])]),e("Col",{attrs:{span:"8"}},[e("p",[t._v(" "+t._s(t.mysqlData.account_id)+" ")])])],1),e("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("地区：")])])]),t.mysqlData.region?e("Col",{attrs:{span:"8"}},[e("p",[t._v(" "+t._s(t.mysqlData.region))])]):e("Col",{attrs:{span:"8"}},[e("p",[t._v("未知")])]),e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("机房：")])])]),e("Col",{attrs:{span:"8"}},[e("p",[t._v(" "+t._s(t.mysqlData.zone)+" ")])])],1),e("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("网络类型：")])])]),t.mysqlData.network_type?e("Col",{attrs:{span:"8"}},[e("p",[t._v(" "+t._s(t.mysqlData.network_type)+" ")])]):e("Col",{attrs:{span:"8"}},[e("p",[t._v("未知信息")])]),e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("付费类型：")])])]),t.mysqlData.charge_type?e("Col",{attrs:{span:"8"}},[e("p",[t._v(" "+t._s(t.mysqlData.charge_type)+" ")])]):e("Col",{attrs:{span:"8"}},[e("p",[t._v("未知信息")])])],1),e("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("实例状态：")])])]),"运行中"==t.mysqlData.state?e("Col",{attrs:{span:"8"}},[e("p",[e("tag",{attrs:{color:"success"}},[t._v(t._s(t.mysqlData.state))])],1)]):e("Col",{attrs:{span:"8"}},[e("p",[e("tag",{attrs:{color:"red"}},[t._v(t._s(t.mysqlData.state))])],1)]),e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("实例类型：")])])]),e("Col",{attrs:{span:"8"}},[e("p",[t._v(" "+t._s(t.mysqlData.db_class)+" ")])])],1),e("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("引擎：")])])]),t.mysqlData.db_engine?e("Col",{attrs:{span:"8"}},[e("p",[t._v(" "+t._s(t.mysqlData.db_engine))])]):e("Col",{attrs:{span:"8"}},[e("p",[t._v("未知信息")])]),e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("版本：")])])]),t.mysqlData.db_version?e("Col",{attrs:{span:"8"}},[e("p",[t._v(" "+t._s(t.mysqlData.db_version)+" ")])]):e("Col",{attrs:{span:"8"}},[e("p",[t._v("未知信息")])])],1),e("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("是否过期：")])])]),!0===t.mysqlData.is_expired?e("Col",{attrs:{span:"8"}},[e("p",[e("tag",{attrs:{color:"red"}},[t._v(t._s(t.mysqlData.is_expired))])],1)]):e("Col",{attrs:{span:"8"}},[e("p",[t._v("正常")])]),e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("备注信息：")])])]),t.mysqlData.detail?e("Col",{attrs:{span:"8"}},[e("p",[t._v(" "+t._s(t.mysqlData.detail)+" ")])]):e("Col",{attrs:{span:"8"}},[e("p",[t._v("无")])])],1),e("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("创建时间：")])])]),t.mysqlData.create_time?e("Col",{attrs:{span:"20"}},[e("p",[t._v(" "+t._s(t.mysqlData.create_time)+" ")])]):e("Col",{attrs:{span:"20"}},[e("p",[t._v("未知信息")])])],1),e("Row",[e("Col",{attrs:{span:"4"}},[e("p",[e("b",[t._v("最后更新时间：")])])]),e("Col",{attrs:{span:"20"}},[e("p",[t._v(" "+t._s(t.mysqlData.update_time)+" ")])])],1)],1)],1)])],1)},l=[],n={name:"MysqlDetail",props:{modalData:{type:Object,default:()=>{}},mysqlData:{type:Object,default:()=>{}}}},o=n,r=a("2877"),i=Object(r["a"])(o,s,l,!1,null,null,null);e["default"]=i.exports},da44:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("Modal",{attrs:{title:t.dialog.title,width:"70%","mask-closable":!1,"footer-hide":!0},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[e("alert",[t._v("一共查询到:"+t._s(t.totalCount)+"条链接地址.")]),e("div",{staticStyle:{"margin-top":"5px"}},[e("Table",{attrs:{columns:t.columns,data:t.addressItems}})],1)],1)],1)},l=[],n={name:"mysqlAddress",props:{dialog:Object,addressItems:{type:Array,default:function(){return[]}}},data(){return{columns:[{title:"Endpoint",key:"endpoint_type",align:"center",width:120,render:(t,e)=>{let a=e.row.endpoint_type;return"Cluster"===a?t("div",[t("Tag",{props:{color:"geekblue"}},"集群地址")]):"Primary"===a?t("div",[t("Tag",{props:{color:"blue"}},"主地址")]):"Custom"===a?t("div",[t("Tag",{props:{color:"cyan"}},"自定义地址")]):void 0}},{title:"NetWork",key:"type",align:"center",width:120,render:(t,e)=>{let a=e.row.type;return"private"===a?t("div",[t("Tag",{props:{color:"default"}},"内网")]):"public"===a?t("div",[t("Tag",{props:{color:"red"}},"公网")]):void 0}},{title:"Port",key:"port",width:100,align:"center"},{title:"IP Address",key:"ip",width:150,align:"center",sortable:!0},{title:"Domain Address",key:"domain",align:"left"}]}},methods:{handerSearch(){console.log(11)}},computed:{totalCount(){return this.addressItems.length}}},o=n,r=a("2877"),i=Object(r["a"])(o,s,l,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-aabb74fe.e58d290b.js.map