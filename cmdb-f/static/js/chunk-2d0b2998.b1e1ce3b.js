(window["webpackJsonp_cmdb"]=window["webpackJsonp_cmdb"]||[]).push([["chunk-2d0b2998"],{2598:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"padding-top":"1px"}},[e("Alert",{attrs:{type:"info","show-icon":""}},[e("p",[t._v("基础资源面板：")]),e("template",{slot:"desc"},[e("p",[t._v("快速跳转查看基础资源，基础资源定时同步云商数据")])])],2),e("Row",{attrs:{gutter:20}},t._l(t.basicList,(function(a,s){return e("i-col",{key:s,staticStyle:{cursor:"pointer"},attrs:{xxl:6,lg:8,sm:12}},[e("Card",{staticStyle:{margin:"1px 0px 20px","text-align":"center"},attrs:{"dis-hover":"",bordered:!1},nativeOn:{click:function(e){return t.handlerName(a)}}},[e("div",{staticStyle:{"text-align":"center"}},[e("Icon",{staticStyle:{"font-size":"80px",color:"#00b2ee"},attrs:{type:a.icon}}),e("h3",[e("router-link",{staticClass:"nav-link",attrs:{to:{name:a.router_path_name}}},[t._v(t._s(a.name))])],1),e("p",{staticStyle:{padding:"5px"}},[t._v(t._s(a.detail))])],1)])],1)})),1)],1)},n=[],r=(a("14d9"),{data(){return{basicList:[{name:"集群",value:"server",icon:"ios-apps",detail:"拓扑的集群模板",router_path_name:"cmdb_set_temp"},{name:"主机",value:"server",icon:"logo-tux",detail:"云厂商服务器资源",router_path_name:"cmdb_asset_server"},{name:"数据库",value:"mysql",icon:"ios-photos",detail:"云厂商RDS/PoalarDB资源",router_path_name:"cmdb_asset_mysql"},{name:"Redis",value:"Redis",icon:"logo-buffer",detail:"云厂商Redis緩存资源",router_path_name:"cmdb_asset_redis"},{name:"负载均衡",value:"lb",icon:"ios-git-network",detail:"云厂商负载均衡",router_path_name:"cmdb_asset_lb"},{name:"VPC",value:"vpc",icon:"md-grid",detail:"云厂商虚拟局域网",router_path_name:"cmdb_asset_vpc"},{name:"虚拟子网",value:"vswitch",icon:"ios-options",detail:"云厂商虚拟交换机、虚拟子网",router_path_name:"cmdb_asset_vswitch"},{name:"安全组",value:"sg",icon:"ios-lock",detail:"云厂商安全组",router_path_name:"cmdb_security_group"}]}},methods:{handlerName(t){const e={name:t.router_path_name};this.$router.push(e)}}}),i=r,o=a("2877"),c=Object(o["a"])(i,s,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b2998.b1e1ce3b.js.map