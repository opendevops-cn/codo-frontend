"use strict";(self.webpackChunkcnmp=self.webpackChunkcnmp||[]).push([[8005],{33587:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(99938),o=r(50959);var l=function(e,t){void 0===e&&(e=!1);var r=(0,n.CR)((0,o.useState)(e),2),l=r[0],a=r[1];return[l,(0,o.useMemo)((function(){var r=void 0===t?!e:t;return{toggle:function(){return a((function(t){return t===e?r:e}))},set:function(e){return a(e)},setLeft:function(){return a(e)},setRight:function(){return a(r)}}}),[])]};function a(e){void 0===e&&(e=!1);var t=(0,n.CR)(l(!!e),2),r=t[0],a=t[1],s=a.toggle,i=a.set;return[r,(0,o.useMemo)((function(){return{toggle:s,set:function(e){return i(!!e)},setTrue:function(){return i(!0)},setFalse:function(){return i(!1)}}}),[])]}},2918:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(50959),o=r(82187),l=r.n(o),a=r(40253),s=r(98808),i=r(60718),c=r(2444),u=r(8096),p=r(79588);const f=e=>{let{children:t}=e;const{getPrefixCls:r}=n.useContext(c.E_),o=r("breadcrumb");return n.createElement("li",{className:`${o}-separator`,"aria-hidden":"true"},""===t?t:t||"/")};f.__ANT_BREADCRUMB_SEPARATOR=!0;var m=f,g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function d(e,t,r,o){if(null==r)return null;const{className:a,onClick:i}=t,c=g(t,["className","onClick"]),u=Object.assign(Object.assign({},(0,s.Z)(c,{data:!0,aria:!0})),{onClick:i});return void 0!==o?n.createElement("a",Object.assign({},u,{className:l()(`${e}-link`,a),href:o}),r):n.createElement("span",Object.assign({},u,{className:l()(`${e}-link`,a)}),r)}function b(e,t){return(r,n,o,l,a)=>{if(t)return t(r,n,o,l);const s=function(e,t){if(void 0===e.title||null===e.title)return null;const r=Object.keys(t).join("|");return"object"==typeof e.title?e.title:String(e.title).replace(new RegExp(`:(${r})`,"g"),((e,r)=>t[r]||e))}(r,n);return d(e,r,s,a)}}var y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const O=e=>{const{prefixCls:t,separator:r="/",children:o,menu:l,overlay:a,dropdownProps:s,href:i}=e;const c=(e=>{if(l||a){const r=Object.assign({},s);if(l){const e=l||{},{items:t}=e,o=y(e,["items"]);r.menu=Object.assign(Object.assign({},o),{items:null==t?void 0:t.map(((e,t)=>{var{key:r,title:o,label:l,path:a}=e,s=y(e,["key","title","label","path"]);let c=null!=l?l:o;return a&&(c=n.createElement("a",{href:`${i}${a}`},c)),Object.assign(Object.assign({},s),{key:null!=r?r:t,label:c})}))})}else a&&(r.overlay=a);return n.createElement(p.Z,Object.assign({placement:"bottom"},r),n.createElement("span",{className:`${t}-overlay-link`},e,n.createElement(u.Z,null)))}return e})(o);return null!=c?n.createElement(n.Fragment,null,n.createElement("li",null,c),r&&n.createElement(m,null,r)):null},v=e=>{const{prefixCls:t,children:r,href:o}=e,l=y(e,["prefixCls","children","href"]),{getPrefixCls:a}=n.useContext(c.E_),s=a("breadcrumb",t);return n.createElement(O,Object.assign({},l,{prefixCls:s}),d(s,l,r,o))};v.__ANT_BREADCRUMB_ITEM=!0;var h=v,j=r(601),x=r(60926),C=r(75775),S=r(41748);var $=(0,C.I$)("Breadcrumb",(e=>(e=>{const{componentCls:t,iconCls:r,calc:n}=e;return{[t]:Object.assign(Object.assign({},(0,x.Wf)(e)),{color:e.itemColor,fontSize:e.fontSize,[r]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${(0,j.bf)(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:n(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,x.Qy)(e)),"li:last-child":{color:e.lastItemColor},[`${t}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${t}-link`]:{[`\n          > ${r} + span,\n          > ${r} + a\n        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${(0,j.bf)(e.paddingXXS)}`,marginInline:n(e.marginXXS).mul(-1).equal(),[`> ${r}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}})((0,S.TS)(e,{}))),(e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}))),E=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function k(e){const{breadcrumbName:t,children:r}=e,n=E(e,["breadcrumbName","children"]),o=Object.assign({title:t},n);return r&&(o.menu={items:r.map((e=>{var{breadcrumbName:t}=e,r=E(e,["breadcrumbName"]);return Object.assign(Object.assign({},r),{title:t})}))}),o}var w=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const N=e=>{const{prefixCls:t,separator:r="/",style:o,className:u,rootClassName:p,routes:f,items:g,children:d,itemRender:y,params:v={}}=e,h=w(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:j,direction:x,breadcrumb:C}=n.useContext(c.E_);let S;const E=j("breadcrumb",t),[N,P,I]=$(E),R=function(e,t){return(0,n.useMemo)((()=>e||(t?t.map(k):null)),[e,t])}(g,f);const T=b(E,y);if(R&&R.length>0){const e=[],t=g||f;S=R.map(((o,l)=>{const{path:a,key:i,type:c,menu:u,overlay:p,onClick:f,className:g,separator:d,dropdownProps:b}=o,y=((e,t)=>{if(void 0===t)return t;let r=(t||"").replace(/^\//,"");return Object.keys(e).forEach((t=>{r=r.replace(`:${t}`,e[t])})),r})(v,a);void 0!==y&&e.push(y);const h=null!=i?i:l;if("separator"===c)return n.createElement(m,{key:h},d);const j={},x=l===R.length-1;u?j.menu=u:p&&(j.overlay=p);let{href:C}=o;return e.length&&void 0!==y&&(C=`#/${e.join("/")}`),n.createElement(O,Object.assign({key:h},j,(0,s.Z)(o,{data:!0,aria:!0}),{className:g,dropdownProps:b,href:C,separator:x?"":r,onClick:f,prefixCls:E}),T(o,v,t,e,C))}))}else if(d){const e=(0,a.Z)(d).length;S=(0,a.Z)(d).map(((t,n)=>{if(!t)return t;const o=n===e-1;return(0,i.Tm)(t,{separator:o?"":r,key:n})}))}const X=l()(E,null==C?void 0:C.className,{[`${E}-rtl`]:"rtl"===x},u,p,P,I),M=Object.assign(Object.assign({},null==C?void 0:C.style),o);return N(n.createElement("nav",Object.assign({className:X,style:M},h),n.createElement("ol",null,S)))};N.Item=h,N.Separator=m;var P=N},51142:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(50959),o=r(82187),l=r.n(o),a=r(8146),s=r(56445),i=r(2444),c=r(75775),u=r(41748);const p=["wrap","nowrap","wrap-reverse"],f=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],m=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];var g=function(e,t){return l()(Object.assign(Object.assign(Object.assign({},((e,t)=>{const r={};return p.forEach((n=>{r[`${e}-wrap-${n}`]=t.wrap===n})),r})(e,t)),((e,t)=>{const r={};return m.forEach((n=>{r[`${e}-align-${n}`]=t.align===n})),r[`${e}-align-stretch`]=!t.align&&!!t.vertical,r})(e,t)),((e,t)=>{const r={};return f.forEach((n=>{r[`${e}-justify-${n}`]=t.justify===n})),r})(e,t)))};const d=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},b=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},y=e=>{const{componentCls:t}=e,r={};return p.forEach((e=>{r[`${t}-wrap-${e}`]={flexWrap:e}})),r},O=e=>{const{componentCls:t}=e,r={};return m.forEach((e=>{r[`${t}-align-${e}`]={alignItems:e}})),r},v=e=>{const{componentCls:t}=e,r={};return f.forEach((e=>{r[`${t}-justify-${e}`]={justifyContent:e}})),r};var h=(0,c.I$)("Flex",(e=>{const{paddingXS:t,padding:r,paddingLG:n}=e,o=(0,u.TS)(e,{flexGapSM:t,flexGap:r,flexGapLG:n});return[d(o),b(o),y(o),O(o),v(o)]}),(()=>({})),{resetStyle:!1}),j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const x=n.forwardRef(((e,t)=>{const{prefixCls:r,rootClassName:o,className:c,style:u,flex:p,gap:f,children:m,vertical:d=!1,component:b="div"}=e,y=j(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:O,direction:v,getPrefixCls:x}=n.useContext(i.E_),C=x("flex",r),[S,$,E]=h(C),k=null!=d?d:null==O?void 0:O.vertical,w=l()(c,o,null==O?void 0:O.className,C,$,E,g(C,e),{[`${C}-rtl`]:"rtl"===v,[`${C}-gap-${f}`]:(0,s.n)(f),[`${C}-vertical`]:k}),N=Object.assign(Object.assign({},null==O?void 0:O.style),u);return p&&(N.flex=p),f&&!(0,s.n)(f)&&(N.gap=f),S(n.createElement(b,Object.assign({ref:t,className:w,style:N},(0,a.Z)(y,["justify","wrap","align"])),m))}));var C=x}}]);