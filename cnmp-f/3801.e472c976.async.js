"use strict";(self.webpackChunkcnmp=self.webpackChunkcnmp||[]).push([[3801],{12246:function(n,e,t){var r=t(50959),o=t(25492),i=t(80785);e.Z=function(n){i.Z&&((0,o.mf)(n)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof n)));var e=(0,r.useRef)(n);e.current=(0,r.useMemo)((function(){return n}),[n]);var t=(0,r.useRef)();return t.current||(t.current=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.current.apply(this,n)}),t.current}},47212:function(n,e,t){t.d(e,{Z:function(){return W}});var r=t(99938),o=t(50959),i=t(65460),a=function(n,e){var t=e.manual,a=e.ready,c=void 0===a||a,u=e.defaultParams,l=void 0===u?[]:u,s=e.refreshDeps,f=void 0===s?[]:s,d=e.refreshDepsAction,v=(0,o.useRef)(!1);return v.current=!1,(0,i.Z)((function(){!t&&c&&(v.current=!0,n.run.apply(n,(0,r.ev)([],(0,r.CR)(l),!1)))}),[c]),(0,i.Z)((function(){v.current||t||(v.current=!0,d?d():n.refresh())}),(0,r.ev)([],(0,r.CR)(f),!1)),{onBefore:function(){if(!c)return{stopNow:!0}}}};a.onInit=function(n){var e=n.ready,t=void 0===e||e;return{loading:!n.manual&&t}};var c=a,u=t(26336);function l(n,e){var t=(0,o.useRef)({deps:e,obj:void 0,initialized:!1}).current;return!1!==t.initialized&&(0,u.Z)(t.deps,e)||(t.deps=e,t.obj=n(),t.initialized=!0),t.obj}var s=t(77924),f=new Map,d=new Map,v={},p=function(n,e){return v[n]||(v[n]=[]),v[n].push(e),function(){var t=v[n].indexOf(e);v[n].splice(t,1)}},h=function(n,e){var t=e.cacheKey,i=e.cacheTime,a=void 0===i?3e5:i,c=e.staleTime,u=void 0===c?0:c,h=e.setCache,g=e.getCache,m=(0,o.useRef)(),y=(0,o.useRef)(),b=function(n,e){h?h(e):function(n,e,t){var o=f.get(n);(null==o?void 0:o.timer)&&clearTimeout(o.timer);var i=void 0;e>-1&&(i=setTimeout((function(){f.delete(n)}),e)),f.set(n,(0,r.pi)((0,r.pi)({},t),{timer:i}))}(n,a,e),function(n,e){v[n]&&v[n].forEach((function(n){return n(e)}))}(n,e.data)},C=function(n,e){return void 0===e&&(e=[]),g?g(e):function(n){return f.get(n)}(n)};return l((function(){if(t){var e=C(t);e&&Object.hasOwnProperty.call(e,"data")&&(n.state.data=e.data,n.state.params=e.params,(-1===u||(new Date).getTime()-e.time<=u)&&(n.state.loading=!1)),m.current=p(t,(function(e){n.setState({data:e})}))}}),[]),(0,s.Z)((function(){var n;null===(n=m.current)||void 0===n||n.call(m)})),t?{onBefore:function(n){var e=C(t,n);return e&&Object.hasOwnProperty.call(e,"data")?-1===u||(new Date).getTime()-e.time<=u?{loading:!1,data:null==e?void 0:e.data,error:void 0,returnNow:!0}:{data:null==e?void 0:e.data,error:void 0}:{}},onRequest:function(n,e){var o=function(n){return d.get(n)}(t);return o&&o!==y.current||(o=n.apply(void 0,(0,r.ev)([],(0,r.CR)(e),!1)),y.current=o,function(n,e){d.set(n,e),e.then((function(e){return d.delete(n),e})).catch((function(){d.delete(n)}))}(t,o)),{servicePromise:o}},onSuccess:function(e,r){var o;t&&(null===(o=m.current)||void 0===o||o.call(m),b(t,{data:e,params:r,time:(new Date).getTime()}),m.current=p(t,(function(e){n.setState({data:e})})))},onMutate:function(e){var r;t&&(null===(r=m.current)||void 0===r||r.call(m),b(t,{data:e,params:n.state.params,time:(new Date).getTime()}),m.current=p(t,(function(e){n.setState({data:e})})))}}:{}},g=t(66292),m=t.n(g),y=function(n,e){var t=e.debounceWait,i=e.debounceLeading,a=e.debounceTrailing,c=e.debounceMaxWait,u=(0,o.useRef)(),l=(0,o.useMemo)((function(){var n={};return void 0!==i&&(n.leading=i),void 0!==a&&(n.trailing=a),void 0!==c&&(n.maxWait=c),n}),[i,a,c]);return(0,o.useEffect)((function(){if(t){var e=n.runAsync.bind(n);return u.current=m()((function(n){n()}),t,l),n.runAsync=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new Promise((function(t,o){var i;null===(i=u.current)||void 0===i||i.call(u,(function(){e.apply(void 0,(0,r.ev)([],(0,r.CR)(n),!1)).then(t).catch(o)}))}))},function(){var t;null===(t=u.current)||void 0===t||t.cancel(),n.runAsync=e}}}),[t,l]),t?{onCancel:function(){var n;null===(n=u.current)||void 0===n||n.cancel()}}:{}},b=function(n,e){var t=e.loadingDelay,r=e.ready,i=(0,o.useRef)();if(!t)return{};var a=function(){i.current&&clearTimeout(i.current)};return{onBefore:function(){return a(),!1!==r&&(i.current=setTimeout((function(){n.setState({loading:!0})}),t)),{loading:!1}},onFinally:function(){a()},onCancel:function(){a()}}},C=t(81620);function w(){return!C.Z||"hidden"!==document.visibilityState}var S=[];if(C.Z){window.addEventListener("visibilitychange",(function(){if(w())for(var n=0;n<S.length;n++){(0,S[n])()}}),!1)}var R=function(n){return S.push(n),function(){var e=S.indexOf(n);S.splice(e,1)}},P=function(n,e){var t=e.pollingInterval,r=e.pollingWhenHidden,a=void 0===r||r,c=e.pollingErrorRetryCount,u=void 0===c?-1:c,l=(0,o.useRef)(),s=(0,o.useRef)(),f=(0,o.useRef)(0),d=function(){var n;l.current&&clearTimeout(l.current),null===(n=s.current)||void 0===n||n.call(s)};return(0,i.Z)((function(){t||d()}),[t]),t?{onBefore:function(){d()},onError:function(){f.current+=1},onSuccess:function(){f.current=0},onFinally:function(){-1===u||-1!==u&&f.current<=u?l.current=setTimeout((function(){a||w()?n.refresh():s.current=R((function(){n.refresh()}))}),t):f.current=0},onCancel:function(){d()}}:{}};var k=[];if(C.Z){var O=function(){if(w()&&(!C.Z||void 0===navigator.onLine||navigator.onLine))for(var n=0;n<k.length;n++){(0,k[n])()}};window.addEventListener("visibilitychange",O,!1),window.addEventListener("focus",O,!1)}var T=function(n){return k.push(n),function(){var e=k.indexOf(n);e>-1&&k.splice(e,1)}},$=function(n,e){var t=e.refreshOnWindowFocus,i=e.focusTimespan,a=void 0===i?5e3:i,c=(0,o.useRef)(),u=function(){var n;null===(n=c.current)||void 0===n||n.call(c)};return(0,o.useEffect)((function(){if(t){var e=(o=n.refresh.bind(n),i=a,l=!1,function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];l||(l=!0,o.apply(void 0,(0,r.ev)([],(0,r.CR)(n),!1)),setTimeout((function(){l=!1}),i))});c.current=T((function(){e()}))}var o,i,l;return function(){u()}}),[t,a]),(0,s.Z)((function(){u()})),{}},Z=function(n,e){var t=e.retryInterval,r=e.retryCount,i=(0,o.useRef)(),a=(0,o.useRef)(0),c=(0,o.useRef)(!1);return r?{onBefore:function(){c.current||(a.current=0),c.current=!1,i.current&&clearTimeout(i.current)},onSuccess:function(){a.current=0},onError:function(){if(a.current+=1,-1===r||a.current<=r){var e=null!=t?t:Math.min(1e3*Math.pow(2,a.current),3e4);i.current=setTimeout((function(){c.current=!0,n.refresh()}),e)}else a.current=0},onCancel:function(){a.current=0,i.current&&clearTimeout(i.current)}}:{}},x=t(38209),E=t.n(x),j=function(n,e){var t=e.throttleWait,i=e.throttleLeading,a=e.throttleTrailing,c=(0,o.useRef)(),u={};return void 0!==i&&(u.leading=i),void 0!==a&&(u.trailing=a),(0,o.useEffect)((function(){if(t){var e=n.runAsync.bind(n);return c.current=E()((function(n){n()}),t,u),n.runAsync=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return new Promise((function(t,o){var i;null===(i=c.current)||void 0===i||i.call(c,(function(){e.apply(void 0,(0,r.ev)([],(0,r.CR)(n),!1)).then(t).catch(o)}))}))},function(){var t;n.runAsync=e,null===(t=c.current)||void 0===t||t.cancel()}}}),[t,i,a]),t?{onCancel:function(){var n;null===(n=c.current)||void 0===n||n.cancel()}}:{}},B=t(53270),A=t(12246),H=t(25492),I=t(80785),N=function(n){I.Z&&((0,H.mf)(n)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof n,'".'))),(0,o.useEffect)((function(){null==n||n()}),[])},M=t(25844),z=function(){function n(n,e,t,o){void 0===o&&(o={}),this.serviceRef=n,this.options=e,this.subscribe=t,this.initState=o,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=(0,r.pi)((0,r.pi)((0,r.pi)({},this.state),{loading:!e.manual}),o)}return n.prototype.setState=function(n){void 0===n&&(n={}),this.state=(0,r.pi)((0,r.pi)({},this.state),n),this.subscribe()},n.prototype.runPluginHandler=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var o=this.pluginImpls.map((function(t){var o;return null===(o=t[n])||void 0===o?void 0:o.call.apply(o,(0,r.ev)([t],(0,r.CR)(e),!1))})).filter(Boolean);return Object.assign.apply(Object,(0,r.ev)([{}],(0,r.CR)(o),!1))},n.prototype.runAsync=function(){for(var n,e,t,o,i,a,c,u,l,s,f=[],d=0;d<arguments.length;d++)f[d]=arguments[d];return(0,r.mG)(this,void 0,void 0,(function(){var d,v,p,h,g,m,y,b,C,w,S;return(0,r.Jh)(this,(function(R){switch(R.label){case 0:if(this.count+=1,d=this.count,v=this.runPluginHandler("onBefore",f),p=v.stopNow,h=void 0!==p&&p,g=v.returnNow,m=void 0!==g&&g,y=(0,r._T)(v,["stopNow","returnNow"]),h)return[2,new Promise((function(){}))];if(this.setState((0,r.pi)({loading:!0,params:f},y)),m)return[2,Promise.resolve(y.data)];null===(e=(n=this.options).onBefore)||void 0===e||e.call(n,f),R.label=1;case 1:return R.trys.push([1,3,,4]),(b=this.runPluginHandler("onRequest",this.serviceRef.current,f).servicePromise)||(b=(S=this.serviceRef).current.apply(S,(0,r.ev)([],(0,r.CR)(f),!1))),[4,b];case 2:return C=R.sent(),d!==this.count?[2,new Promise((function(){}))]:(this.setState({data:C,error:void 0,loading:!1}),null===(o=(t=this.options).onSuccess)||void 0===o||o.call(t,C,f),this.runPluginHandler("onSuccess",C,f),null===(a=(i=this.options).onFinally)||void 0===a||a.call(i,f,C,void 0),d===this.count&&this.runPluginHandler("onFinally",f,C,void 0),[2,C]);case 3:if(w=R.sent(),d!==this.count)return[2,new Promise((function(){}))];throw this.setState({error:w,loading:!1}),null===(u=(c=this.options).onError)||void 0===u||u.call(c,w,f),this.runPluginHandler("onError",w,f),null===(s=(l=this.options).onFinally)||void 0===s||s.call(l,f,void 0,w),d===this.count&&this.runPluginHandler("onFinally",f,void 0,w),w;case 4:return[2]}}))}))},n.prototype.run=function(){for(var n=this,e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.runAsync.apply(this,(0,r.ev)([],(0,r.CR)(e),!1)).catch((function(e){n.options.onError||console.error(e)}))},n.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},n.prototype.refresh=function(){this.run.apply(this,(0,r.ev)([],(0,r.CR)(this.state.params||[]),!1))},n.prototype.refreshAsync=function(){return this.runAsync.apply(this,(0,r.ev)([],(0,r.CR)(this.state.params||[]),!1))},n.prototype.mutate=function(n){var e=(0,H.mf)(n)?n(this.state.data):n;this.runPluginHandler("onMutate",e),this.setState({data:e})},n}(),F=z;var L=function(n,e,t){void 0===e&&(e={}),void 0===t&&(t=[]);var o=e.manual,i=void 0!==o&&o,a=(0,r._T)(e,["manual"]);I.Z&&e.defaultParams&&!Array.isArray(e.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof e.defaultParams));var c=(0,r.pi)({manual:i},a),u=(0,B.Z)(n),f=(0,M.Z)(),d=l((function(){var n=t.map((function(n){var e;return null===(e=null==n?void 0:n.onInit)||void 0===e?void 0:e.call(n,c)})).filter(Boolean);return new F(u,c,f,Object.assign.apply(Object,(0,r.ev)([{}],(0,r.CR)(n),!1)))}),[]);return d.options=c,d.pluginImpls=t.map((function(n){return n(d,c)})),N((function(){if(!i){var n=d.state.params||e.defaultParams||[];d.run.apply(d,(0,r.ev)([],(0,r.CR)(n),!1))}})),(0,s.Z)((function(){d.cancel()})),{loading:d.state.loading,data:d.state.data,error:d.state.error,params:d.state.params||[],cancel:(0,A.Z)(d.cancel.bind(d)),refresh:(0,A.Z)(d.refresh.bind(d)),refreshAsync:(0,A.Z)(d.refreshAsync.bind(d)),run:(0,A.Z)(d.run.bind(d)),runAsync:(0,A.Z)(d.runAsync.bind(d)),mutate:(0,A.Z)(d.mutate.bind(d))}};var W=function(n,e,t){return L(n,e,(0,r.ev)((0,r.ev)([],(0,r.CR)(t||[]),!1),[y,b,P,$,j,c,h,Z],!1))}},25844:function(n,e,t){var r=t(99938),o=t(50959);e.Z=function(){var n=(0,r.CR)((0,o.useState)({}),2)[1];return(0,o.useCallback)((function(){return n({})}),[])}},26336:function(n,e,t){function r(n,e){if(n===e)return!0;for(var t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}t.d(e,{Z:function(){return r}})},81620:function(n,e){var t=!("undefined"==typeof window||!window.document||!window.document.createElement);e.Z=t},85584:function(n,e,t){t.d(e,{Z:function(){return Z}});var r=t(50959),o=t(16646),i=t(82187),a=t.n(i),c=t(80687),u=t(69361),l=t(75053),s=t(2444),f=t(601),d=t(99978),v=t(60926),p=t(41748),h=t(75775);const g=n=>{const{lineWidth:e,fontSizeIcon:t,calc:r}=n,o=n.fontSizeSM;return(0,p.TS)(n,{tagFontSize:o,tagLineHeight:(0,f.bf)(r(n.lineHeightSM).mul(o).equal()),tagIconSize:r(t).sub(r(e).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:n.colorFillTertiary})},m=n=>({defaultBg:new d.C(n.colorFillQuaternary).onBackground(n.colorBgContainer).toHexString(),defaultColor:n.colorText});var y=(0,h.I$)("Tag",(n=>(n=>{const{paddingXXS:e,lineWidth:t,tagPaddingHorizontal:r,componentCls:o,calc:i}=n,a=i(r).sub(t).equal(),c=i(e).sub(t).equal();return{[o]:Object.assign(Object.assign({},(0,v.Wf)(n)),{display:"inline-block",height:"auto",marginInlineEnd:n.marginXS,paddingInline:a,fontSize:n.tagFontSize,lineHeight:n.tagLineHeight,whiteSpace:"nowrap",background:n.defaultBg,border:`${(0,f.bf)(n.lineWidth)} ${n.lineType} ${n.colorBorder}`,borderRadius:n.borderRadiusSM,opacity:1,transition:`all ${n.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:n.defaultColor},[`${o}-close-icon`]:{marginInlineStart:c,fontSize:n.tagIconSize,color:n.colorTextDescription,cursor:"pointer",transition:`all ${n.motionDurationMid}`,"&:hover":{color:n.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${n.iconCls}-close, ${n.iconCls}-close:hover`]:{color:n.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:n.colorPrimary,backgroundColor:n.colorFillSecondary},"&:active, &-checked":{color:n.colorTextLightSolid},"&-checked":{backgroundColor:n.colorPrimary,"&:hover":{backgroundColor:n.colorPrimaryHover}},"&:active":{backgroundColor:n.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${n.iconCls} + span, > span + ${n.iconCls}`]:{marginInlineStart:a}}),[`${o}-borderless`]:{borderColor:"transparent",background:n.tagBorderlessBg}}})(g(n))),m),b=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t};const C=r.forwardRef(((n,e)=>{const{prefixCls:t,style:o,className:i,checked:c,onChange:u,onClick:l}=n,f=b(n,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:d,tag:v}=r.useContext(s.E_),p=d("tag",t),[h,g,m]=y(p),C=a()(p,`${p}-checkable`,{[`${p}-checkable-checked`]:c},null==v?void 0:v.className,i,g,m);return h(r.createElement("span",Object.assign({},f,{ref:e,style:Object.assign(Object.assign({},o),null==v?void 0:v.style),className:C,onClick:n=>{null==u||u(!c),null==l||l(n)}})))}));var w=C,S=t(35047);var R=(0,h.bk)(["Tag","preset"],(n=>(n=>(0,S.Z)(n,((e,t)=>{let{textColor:r,lightBorderColor:o,lightColor:i,darkColor:a}=t;return{[`${n.componentCls}${n.componentCls}-${e}`]:{color:r,background:i,borderColor:o,"&-inverse":{color:n.colorTextLightSolid,background:a,borderColor:a},[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}})))(g(n))),m);const P=(n,e,t)=>{const r="string"!=typeof(o=t)?o:o.charAt(0).toUpperCase()+o.slice(1);var o;return{[`${n.componentCls}${n.componentCls}-${e}`]:{color:n[`color${t}`],background:n[`color${r}Bg`],borderColor:n[`color${r}Border`],[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}};var k=(0,h.bk)(["Tag","status"],(n=>{const e=g(n);return[P(e,"success","Success"),P(e,"processing","Info"),P(e,"error","Error"),P(e,"warning","Warning")]}),m),O=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t};const T=(n,e)=>{const{prefixCls:t,className:i,rootClassName:f,style:d,children:v,icon:p,color:h,onClose:g,closeIcon:m,closable:b,bordered:C=!0}=n,w=O(n,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:S,direction:P,tag:T}=r.useContext(s.E_),[$,Z]=r.useState(!0);r.useEffect((()=>{"visible"in w&&Z(w.visible)}),[w.visible]);const x=(0,c.o2)(h),E=(0,c.yT)(h),j=x||E,B=Object.assign(Object.assign({backgroundColor:h&&!j?h:void 0},null==T?void 0:T.style),d),A=S("tag",t),[H,I,N]=y(A),M=a()(A,null==T?void 0:T.className,{[`${A}-${h}`]:j,[`${A}-has-color`]:h&&!j,[`${A}-hidden`]:!$,[`${A}-rtl`]:"rtl"===P,[`${A}-borderless`]:!C},i,f,I,N),z=n=>{n.stopPropagation(),null==g||g(n),n.defaultPrevented||Z(!1)},[,F]=(0,u.Z)(b,m,(n=>null===n?r.createElement(o.Z,{className:`${A}-close-icon`,onClick:z}):r.createElement("span",{className:`${A}-close-icon`,onClick:z},n)),null,!1),L="function"==typeof w.onClick||v&&"a"===v.type,W=p||null,D=W?r.createElement(r.Fragment,null,W,v&&r.createElement("span",null,v)):v,q=r.createElement("span",Object.assign({},w,{ref:e,className:M,style:B}),D,F,x&&r.createElement(R,{key:"preset",prefixCls:A}),E&&r.createElement(k,{key:"status",prefixCls:A}));return H(L?r.createElement(l.Z,{component:"Tag"},q):q)},$=r.forwardRef(T);$.CheckableTag=w;var Z=$}}]);