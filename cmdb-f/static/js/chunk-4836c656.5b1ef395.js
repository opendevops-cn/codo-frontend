(window["webpackJsonp_cmdb"]=window["webpackJsonp_cmdb"]||[]).push([["chunk-4836c656","chunk-2d213ad6","chunk-2d216b1b"],{"1a17":function(t,a,e){},a754:function(t,a,e){"use strict";e("1a17")},ae62:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("Modal",{attrs:{width:"780px;",title:t.modalData.title,"footer-hide":!0,styles:{top:"30px"}},model:{value:t.modalData.show,callback:function(a){t.$set(t.modalData,"show",a)},expression:"modalData.show"}},[a("Card",{attrs:{"dis-hover":""}},[a("div",{staticClass:"inner"},[a("Alert",{attrs:{"show-icon":""}},[t._v("基本信息")]),a("div",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Row",[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("实例ID：")])])]),a("Col",{attrs:{span:"20"}},[a("p",[t._v(" "+t._s(t.natData.instance_id))])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("实例名称：")])])]),a("Col",{attrs:{span:"20"}},[a("p",[t._v(" "+t._s(t.natData.name))])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("厂商：")])])]),t.natData.cloud_name?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.natData.cloud_name)+" ")])]):t._e(),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("AccountID：")])])]),a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.natData.account_id)+" ")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("地区：")])])]),t.natData.region?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.natData.region))])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知")])]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("机房：")])])]),a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.natData.zone)+" ")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("网络类型：")])])]),t.natData.network_type?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.natData.network_type)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("付费类型：")])])]),t.natData.charge_type?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.natData.charge_type)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("实例状态：")])])]),"运行中"==t.natData.state||"可用"==t.natData.state?a("Col",{attrs:{span:"8"}},[a("p",[a("tag",{attrs:{color:"success"}},[t._v(t._s(t.natData.state))])],1)]):a("Col",{attrs:{span:"8"}},[a("p",[a("tag",{attrs:{color:"red"}},[t._v(t._s(t.natData.state))])],1)]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("是否过期：")])])]),!0===t.natData.is_expired?a("Col",{attrs:{span:"8"}},[a("p",[a("tag",{attrs:{color:"red"}},[t._v(t._s(t.natData.is_expired))])],1)]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("正常")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("公网IP：")])])]),t.natData.outer_ip?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.natData.outer_ip.join(", ")))])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("VPC")])])]),t.natData.vpc_id?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.natData.vpc_id)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("实例类型：")])])]),a("Col",{attrs:{span:"20"}},[a("p",[t._v(" "+t._s(t.natData.spec)+" ")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("创建时间：")])])]),t.natData.create_time?a("Col",{attrs:{span:"20"}},[a("p",[t._v(" "+t._s(t.natData.create_time)+" ")])]):a("Col",{attrs:{span:"20"}},[a("p",[t._v("未知信息")])])],1),a("Row",[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("最后更新时间：")])])]),a("Col",{attrs:{span:"20"}},[a("p",[t._v(" "+t._s(t.natData.update_time)+" ")])])],1)],1)],1)])],1)},n=[],i={name:"natDetail",props:{modalData:{type:Object,default:()=>{}},natData:{type:Object,default:()=>{}}}},o=i,l=e("2877"),r=Object(l["a"])(o,s,n,!1,null,null,null);a["default"]=r.exports},c40d:function(t,a,e){"use strict";e.r(a),e.d(a,"getNat",(function(){return n})),e.d(a,"optNat",(function(){return i}));var s=e("be3b");const n=t=>Object(s["default"])({url:"/api/v2/cmdb/nat/",method:"get",params:t}),i=(t,a)=>Object(s["default"])({url:"/api/v2/cmdb/nat/",method:a,data:t})},e235:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"search-con search-con-top"},[a("Input",{staticClass:"search-input",attrs:{search:"",maxlength:50,placeholder:"输入关键字搜索"},on:{"on-search":t.handleSearch},model:{value:t.initPara.searchVal,callback:function(a){t.$set(t.initPara,"searchVal",a)},expression:"initPara.searchVal"}}),t.instance_id?a("h4",{staticClass:"search-col"},[t._v("实例："+t._s(t.instance_id))]):t._e(),t.instance_id?t._e():a("Button",{staticClass:"search-add-btn",attrs:{type:"error",disabled:0===t.selectList.length},on:{click:t.handleDel}},[t._v("批量删除")])],1),a("Table",{ref:"selection",attrs:{size:"small",columns:t.tableColumns,data:t.tableData,loading:t.i.tableLoading},on:{"on-sort-change":t.handleSort,"on-selection-change":t.handleSelect}}),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"left"}},[a("Page",{attrs:{total:t.i.pageTotal,current:t.initPara.page_number,"page-size":t.initPara.page_size,"show-total":"","show-sizer":"","page-size-opts":[15,50,100,1e3]},on:{"on-change":t.handlerChangePage,"on-page-size-change":t.handlePageSize}})],1)]),t.natData?a("div",[a("NatDetail",{attrs:{"modal-data":t.modalData,"nat-data":t.natData}})],1):t._e()],1)},n=[],i=(e("14d9"),e("c40d")),o=e("ae62"),l={name:"NatGateway",components:{NatDetail:o["default"]},props:{instance_id:{type:String,default:null},sg_ids:{type:Object|Array,default:null}},data(){return{modalData:{show:!1,title:"Nat详情"},natData:{},tableColumns:[{type:"selection",key:"selection",width:60,align:"center"},{title:"网关名称",key:"name",tooltip:!0,sortable:!0,minWidth:150},{title:"网关ID",key:"instance_id",ellipsis:!0,tooltip:!0,minWidth:200,render:(t,a)=>t("a",{on:{click:()=>{this.handleDetail(a.row)}}},a.row.instance_id)},{title:"类型",key:"spec",minWidth:100},{title:"厂商",key:"cloud_name",minWidth:90},{title:"地域",key:"region",minWidth:90},{title:"公网IP",key:"outer_ip",minWidth:190,render:(t,a)=>t("span",a.row.outer_ip.join(","))},{title:"备注",key:"description",ellipsis:!0,tooltip:!0,minWidth:100},{title:"更新时间",key:"update_time",sortable:!0,width:170}],tableData:[],i:{pageTotal:0,tableLoading:!0},initPara:{page_number:1,page_size:15,searchVal:null,sg_ids:[],order_by:"",order:"ascend"},selectList:[]}},methods:{async handleGetData(){const t=await Object(i["getNat"])(this.initPara);0==t.code?(this.tableData=t.data,this.i.pageTotal=t.count):this.$Message.error(t.msg),this.i.tableLoading=!1},handleDel(){this.$Modal.confirm({title:"二次确认",content:"确定删除已选中的数据？",onOk:()=>{Object(i["optNat"])({id_list:this.selectList},"delete").then(t=>{0===t.code?(this.$Message.success(t.msg),this.handleGetData()):this.$Notice.error({title:""+t.msg})})},onCancel:()=>{this.$Message.info("回头是岸~")}})},handleDetail(t){this.natData=t,this.modalData.show=!0},handleClose(){this.modalAdd.show=!1,this.modalData.show=!1,this.handleGetData()},handleSelect(t){let a=[];t.forEach(t=>{a.push(t.id)}),this.selectList=a},handleSearch(){this.initPara.page_number=1,this.handleGetData()},handleSort(t,a,e){this.initPara.order="asc"===t.order?"ascend":"descend",this.initPara.order_by=t.key,this.handleGetData()},handlerChangePage(t){this.initPara.page_number=t,this.handleGetData()},handlePageSize(t){this.initPara.page_number=1,this.initPara.page_size=t,this.handleGetData()}},watch:{searchValue(t){this.pageNum=1,this.handleGetData()},instance_id(t){this.pageNum=1,this.securityInfoList=[],this.handleGetData()},sg_ids(t){this.initPara["sg_ids"]=JSON.stringify(this.sg_ids),this.pageNum=1,this.securityInfoList=[],this.handleGetData()}},computed:{},mounted(){this.handleGetData()}},r=l,p=(e("a754"),e("2877")),d=Object(p["a"])(r,s,n,!1,null,"36b42874",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-4836c656.5b1ef395.js.map