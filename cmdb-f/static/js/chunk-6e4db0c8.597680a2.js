(window["webpackJsonp_cmdb"]=window["webpackJsonp_cmdb"]||[]).push([["chunk-6e4db0c8"],{"13d5":function(e,n,t){"use strict";var r=t("23e7"),o=t("d58f").left,i=t("a640"),u=t("2d00"),c=t("605d"),a=!c&&u>79&&u<83,d=a||!i("reduce");r({target:"Array",proto:!0,forced:d},{reduce:function(e){var n=arguments.length;return o(this,e,n,n>1?arguments[1]:void 0)}})},3261:function(e,n,t){"use strict";t.r(n),t.d(n,"getFeFormInfo",(function(){return r})),t.d(n,"getUniqueStr",(function(){return o})),t.d(n,"getParams",(function(){return i}));t("13d5");const r=(e,n)=>{var t;return{...e,renderTags:Object.entries(e.tags).reduce((e,n)=>{const[t,r]=n;return e+=`${t} | ${r};`,e},""),resTypeRender:null===(t=n.resTypeOptions.find(n=>n.value===e.res_type))||void 0===t?void 0:t.label,cloundAccountRender:`${e.account_id} | ${e.vendor}`,tagsValues:Object.entries(e.tags).map(e=>(n.handleSelectTag({value:e[0]}),{key:e[0],value:e[1]}))}},o=e=>`^${Number(Math.random().toString().substring(2,e)+Date.now()).toString(36)}$`,i=(e,n)=>{const{name:t,account_id:r,vendor:o,cloud_region_id:i,res_type:u,region:c,zone:a,tagsValues:d,content:s,description:f,vpc_id:l,vpc_name:p,subnet_id:v,subnet_name:g}=e;return{name:t,account_id:r,vendor:o,cloud_region_id:i,vpc_id:l,vpc_name:p,subnet_id:v,subnet_name:g,res_type:u,region:c,zone:a,tags:d.reduce((e,n)=>(e[n.key]=n.value,e),{}),content:s,description:f}}},"605d":function(e,n,t){(function(n){var r=t("c6b6");e.exports="undefined"!=typeof n&&"process"==r(n)}).call(this,t("4362"))},a640:function(e,n,t){"use strict";var r=t("d039");e.exports=function(e,n){var t=[][e];return!!t&&r((function(){t.call(null,n||function(){return 1},1)}))}},d58f:function(e,n,t){var r=t("59ed"),o=t("7b0b"),i=t("44ad"),u=t("07fa"),c=TypeError,a=function(e){return function(n,t,a,d){r(t);var s=o(n),f=i(s),l=u(s),p=e?l-1:0,v=e?-1:1;if(a<2)while(1){if(p in f){d=f[p],p+=v;break}if(p+=v,e?p<0:l<=p)throw c("Reduce of empty array with no initial value")}for(;e?p>=0:l>p;p+=v)p in f&&(d=t(d,f[p],p,s));return d}};e.exports={left:a(!1),right:a(!0)}}}]);
//# sourceMappingURL=chunk-6e4db0c8.597680a2.js.map