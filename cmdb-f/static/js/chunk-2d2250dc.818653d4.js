(window["webpackJsonp_cmdb"]=window["webpackJsonp_cmdb"]||[]).push([["chunk-2d2250dc"],{e380:function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t._self._c;return a("Modal",{attrs:{width:"780px;",title:t.modalData.title,"footer-hide":!0,styles:{top:"30px"}},model:{value:t.modalData.show,callback:function(a){t.$set(t.modalData,"show",a)},expression:"modalData.show"}},[a("Card",{attrs:{"dis-hover":""}},[a("div",{staticClass:"inner"},[a("Alert",{attrs:{"show-icon":""}},[t._v("基本信息")]),a("div",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Row",[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("实例ID：")])])]),a("Col",{attrs:{span:"20"}},[a("p",[t._v(" "+t._s(t.serverData.instance_id))])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("主机名：")])])]),a("Col",{attrs:{span:"20"}},[a("p",[t._v(" "+t._s(t.serverData.name))])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("厂商：")])])]),t.serverData.cloud_name?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.cloud_name)+" ")])]):t._e(),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("可用区：")])])]),a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.zone)+" ")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("网络类型：")])])]),t.serverData.network_type?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.network_type)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("付费类型：")])])]),t.serverData.charge_type?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.charge_type)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("实例状态：")])])]),"运行中"==t.serverData.state?a("Col",{attrs:{span:"8"}},[a("p",[a("tag",{attrs:{color:"success"}},[t._v(t._s(t.serverData.state))])],1)]):a("Col",{attrs:{span:"8"}},[a("p",[a("tag",{attrs:{color:"red"}},[t._v(t._s(t.serverData.state))])],1)]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("实例类型：")])])]),a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.instance_type)+" ")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("公网IP：")])])]),t.serverData.outer_ip?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.outer_ip))])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("没有公网IP")])]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("私网IP：")])])]),a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.inner_ip)+" ")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("CPU核心：")])])]),t.serverData.cpu?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.cpu)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("内存：")])])]),t.serverData.memory?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.memory)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("系统磁盘：")])])]),t.serverData.system_disk?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.system_disk)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("数据磁盘：")])])]),t.serverData.data_disk?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.data_disk))])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("安全组：")])])]),t.serverData.security_group_ids?a("Col",{attrs:{span:"20"}},t._l(t.serverData.security_group_ids,(function(s){return a("span",{staticStyle:{"margin-right":"6px"}},[t._v(" "+t._s(s)+" ")])})),0):a("Col",{attrs:{span:"20"}},[a("p",[t._v("没有安全组")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("系统名称：")])])]),t.serverData.os_name?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.os_name))])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("CloudWatch：")])])]),t.serverData.cloudwatch_state?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.cloudwatch_state)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("是否过期：")])])]),!0===t.serverData.is_expired?a("Col",{attrs:{span:"8"}},[a("p",[a("tag",{attrs:{color:"red"}},[t._v(t._s(t.serverData.is_expired))])],1)]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("正常")])]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("备注信息：")])])]),t.serverData.detail?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.detail)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("无")])])],1),a("Row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("创建时间：")])])]),t.serverData.instance_create_time?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.instance_create_time)+" ")])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])]),a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("过期时间：")])])]),t.serverData.instance_expired_time?a("Col",{attrs:{span:"8"}},[a("p",[t._v(" "+t._s(t.serverData.instance_expired_time))])]):a("Col",{attrs:{span:"8"}},[a("p",[t._v("未知信息")])])],1),a("Row",[a("Col",{attrs:{span:"4"}},[a("p",[a("b",[t._v("最后更新时间：")])])]),a("Col",{attrs:{span:"20"}},[a("p",[t._v(" "+t._s(t.serverData.update_time)+" ")])])],1)],1)],1)])],1)},p=[],e={name:"serverDetail",props:{modalData:{type:Object,default:()=>{}},serverData:{type:Object,default:()=>{}}}},o=e,n=s("2877"),_=Object(n["a"])(o,r,p,!1,null,null,null);a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d2250dc.818653d4.js.map