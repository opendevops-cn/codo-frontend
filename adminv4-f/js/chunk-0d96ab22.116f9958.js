(window["webpackJsonp_mg"]=window["webpackJsonp_mg"]||[]).push([["chunk-0d96ab22"],{"5e9f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("Card",{attrs:{"dis-hover":""}},[t("div",{staticClass:"search-con search-con-top"},[t("Select",{staticClass:"search-col",model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[e._l(e.columns,(function(a){return["handle"!==a.key?t("Option",{key:"search-col-".concat(a.key),attrs:{value:a.key,label:a.title}}):e._e()]}))],2),t("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),t("DatePicker",{staticClass:"search-input",staticStyle:{width:"220px"},attrs:{value:e.selectDate,options:e.optionsDate,type:"daterange",placement:"bottom-end",placeholder:"Select date"},on:{"on-change":e.handlerChangeDate}}),t("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")])],1),t("Table",{attrs:{size:"small",columns:e.columns,data:e.tableData,loading:e.i.tableLoading},on:{"on-sort-change":e.handleSort}}),t("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[t("div",{staticStyle:{float:"left"}},[t("Page",{attrs:{total:e.i.pageTotal,current:e.initPara.page_number,"page-size":e.initPara.page_size,"show-total":"","show-sizer":"","page-size-opts":[15,50,100,1e3]},on:{"on-change":e.handlerChangePage,"on-page-size-change":e.handlePageSize}})],1)])],1)},n=[],r=(a("96cf"),a("3b8d")),s=a("66df"),o=function(e){return s["a"].request({url:"/api/p/v4/app/opt_log/",method:"get",params:e})},l={data:function(){return{columns:[{title:"用户名",key:"username",align:"center",minWidth:120,sortable:!0},{title:"昵称",key:"nickname",sortable:!0,minWidth:100},{title:"服务",key:"service_name",minWidth:80,sortable:!0,maxWidth:120},{title:"请求",key:"method",minWidth:85,maxWidth:150,render:function(e,t){var a=t.row.method;return e("div","GET"==a?[e("p",{style:{color:"#61affe"}},t.row.method)]:"POST"==a?[e("p",{style:{color:"#49cc90"}},t.row.method)]:"PUT"==a?[e("p",{style:{color:"#fca130"}},t.row.method)]:"PATCH"==a?[e("p",{style:{color:"#50e3c2"}},t.row.method)]:"DELETE"==a?[e("p",{style:{color:"#ed4014"}},t.row.method)]:[e("p",{style:{color:"#f93e3e"}},t.row.method)])}},{title:"请求路径",key:"uri",tooltip:!0,minWidth:180,maxWidth:350},{title:"请求头",key:"rq_headers",tooltip:!0,minWidth:150,maxWidth:400},{title:"请求数据",key:"rq_data",tooltip:!0,minWidth:150,maxWidth:800},{title:"链路ID",key:"trace_id",tooltip:!0,minWidth:80,maxWidth:150},{title:"upstream",key:"upstream",tooltip:!0,minWidth:80,maxWidth:150},{title:"状态",key:"response_status",sortable:!0,minWidth:80,maxWidth:100},{title:"访问IP",key:"client_ip",sortable:!0,minWidth:100,maxWidth:150},{title:"访问时间",key:"start_time",sortable:!0,width:160}],tableData:[],tableLoading:!0,selectDate:[],i:{pageTotal:0,tableLoading:!0},initPara:{page_number:1,page_size:15,searchVal:null,order_by:"start_time",order:"descend"},searchKey:"username",searchValue:"",filter_map:"",optionsDate:{shortcuts:[{text:"一星期",value:function(){var e=new Date;e.setTime(e.getTime()+864e5);var t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]},onClick:function(e){}},{text:"一个月",value:function(){var e=new Date;e.setTime(e.getTime()+864e5);var t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]},onClick:function(e){}},{text:"三个月",value:function(){var e=new Date;e.setTime(e.getTime()+864e5);var t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]},onClick:function(e){}}]}}},methods:{handleGetData:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.initPara["start_date"]=this.selectDate[0],this.initPara["end_date"]=this.selectDate[1],e.next=4,o(this.initPara);case 4:t=e.sent,0==t.data.code?(this.tableData=t.data.data,this.i.pageTotal=t.data.count):this.$Message.error(t.data.msg),this.i.tableLoading=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getDates:function(){var e=new Date,t=new Date;t.setTime(t.getTime()+864e5),e.setTime(e.getTime()-6048e5),this.selectDate=[e,t]},handlerChangeDate:function(e){this.selectDate=e},handleSearch:function(){this.initPara.page_number=1,this.handleGetData()},handleSort:function(e,t,a){this.initPara.order="asc"===e.order?"ascend":"descend",this.initPara.order_by=e.key,this.handleGetData()},handlerChangePage:function(e){this.initPara.page_number=e,this.handleGetData()},handlePageSize:function(e){this.initPara.page_number=1,this.initPara.page_size=e,this.handleGetData()}},watch:{selectDate:function(e){this.handleGetData()}},mounted:function(){this.getDates()}},c=l,h=(a("dc57"),a("2877")),d=Object(h["a"])(c,i,n,!1,null,"dcd62f98",null);t["default"]=d.exports},bfd7:function(e,t,a){},dc57:function(e,t,a){"use strict";a("bfd7")}}]);