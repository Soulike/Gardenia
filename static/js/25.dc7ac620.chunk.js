(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[25],{1126:function(e,t,n){"use strict";var a=n(0),r=n(9),o=n.n(r),c=n(63),l=n(121);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},u=function(e){return a.createElement(l.a,null,(function(t){var n,r,c,l=t.getPrefixCls,u=e.prefixCls,p=e.className,m=e.hoverable,f=void 0===m||m,d=s(e,["prefixCls","className","hoverable"]),b=l("card",u),y=o()("".concat(b,"-grid"),p,(n={},r="".concat(b,"-grid-hoverable"),c=f,r in n?Object.defineProperty(n,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[r]=c,n));return a.createElement("div",i({},d,{className:y}))}))};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},f=function(e){return a.createElement(l.a,null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,c=e.className,l=e.avatar,i=e.title,s=e.description,u=m(e,["prefixCls","className","avatar","title","description"]),f=n("card",r),d=o()("".concat(f,"-meta"),c),b=l?a.createElement("div",{className:"".concat(f,"-meta-avatar")},l):null,y=i?a.createElement("div",{className:"".concat(f,"-meta-title")},i):null,v=s?a.createElement("div",{className:"".concat(f,"-meta-description")},s):null,g=y||v?a.createElement("div",{className:"".concat(f,"-meta-detail")},y,v):null;return a.createElement("div",p({},u,{className:d}),b,g)}))},d=n(155),b=n(1282).a,y=n(1248).a,v=n(43);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return k}));var x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function P(e){return e.map((function(t,n){return a.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},a.createElement("span",null,t))}))}var k=function(e){function t(){var e;return O(this,t),(e=C(this,N(t).apply(this,arguments))).onTabChange=function(t){e.props.onTabChange&&e.props.onTabChange(t)},e.renderCard=function(t){var n,r,l,i=t.getPrefixCls,s=e.props,u=s.prefixCls,p=s.className,m=s.extra,f=s.headStyle,v=void 0===f?{}:f,g=s.bodyStyle,O=void 0===g?{}:g,j=s.title,C=s.loading,N=s.bordered,w=void 0===N||N,k=s.size,S=void 0===k?"default":k,_=s.type,T=s.cover,H=s.actions,K=s.tabList,A=s.children,z=s.activeTabKey,B=s.defaultActiveTabKey,G=s.tabBarExtraContent,I=x(s,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent"]),J=i("card",u),L=o()(J,p,(E(n={},"".concat(J,"-loading"),C),E(n,"".concat(J,"-bordered"),w),E(n,"".concat(J,"-hoverable"),e.getCompatibleHoverable()),E(n,"".concat(J,"-contain-grid"),e.isContainGrid()),E(n,"".concat(J,"-contain-tabs"),K&&K.length),E(n,"".concat(J,"-").concat(S),"default"!==S),E(n,"".concat(J,"-type-").concat(_),!!_),n)),M=0===O.padding||"0px"===O.padding?{padding:24}:void 0,R=a.createElement("div",{className:"".concat(J,"-loading-content"),style:M},a.createElement(b,{gutter:8},a.createElement(y,{span:22},a.createElement("div",{className:"".concat(J,"-loading-block")}))),a.createElement(b,{gutter:8},a.createElement(y,{span:8},a.createElement("div",{className:"".concat(J,"-loading-block")})),a.createElement(y,{span:15},a.createElement("div",{className:"".concat(J,"-loading-block")}))),a.createElement(b,{gutter:8},a.createElement(y,{span:6},a.createElement("div",{className:"".concat(J,"-loading-block")})),a.createElement(y,{span:18},a.createElement("div",{className:"".concat(J,"-loading-block")}))),a.createElement(b,{gutter:8},a.createElement(y,{span:13},a.createElement("div",{className:"".concat(J,"-loading-block")})),a.createElement(y,{span:9},a.createElement("div",{className:"".concat(J,"-loading-block")}))),a.createElement(b,{gutter:8},a.createElement(y,{span:4},a.createElement("div",{className:"".concat(J,"-loading-block")})),a.createElement(y,{span:3},a.createElement("div",{className:"".concat(J,"-loading-block")})),a.createElement(y,{span:16},a.createElement("div",{className:"".concat(J,"-loading-block")})))),D=void 0!==z,U=(E(r={},D?"activeKey":"defaultActiveKey",D?z:B),E(r,"tabBarExtraContent",G),r),q=K&&K.length?a.createElement(d.a,h({},U,{className:"".concat(J,"-head-tabs"),size:"large",onChange:e.onTabChange}),K.map((function(e){return a.createElement(d.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(j||m||q)&&(l=a.createElement("div",{className:"".concat(J,"-head"),style:v},a.createElement("div",{className:"".concat(J,"-head-wrapper")},j&&a.createElement("div",{className:"".concat(J,"-head-title")},j),m&&a.createElement("div",{className:"".concat(J,"-extra")},m)),q));var F=T?a.createElement("div",{className:"".concat(J,"-cover")},T):null,Q=a.createElement("div",{className:"".concat(J,"-body"),style:O},C?R:A),V=H&&H.length?a.createElement("ul",{className:"".concat(J,"-actions")},P(H)):null,W=Object(c.a)(I,["onTabChange","noHovering","hoverable"]);return a.createElement("div",h({},W,{className:L}),l,F,Q,V)},e}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){"noHovering"in this.props&&(Object(v.a)(!this.props.noHovering,"Card","`noHovering` is deprecated, you can remove it safely or use `hoverable` instead."),Object(v.a)(!!this.props.noHovering,"Card","`noHovering={false}` is deprecated, use `hoverable` instead."))}},{key:"getCompatibleHoverable",value:function(){var e=this.props,t=e.noHovering,n=e.hoverable;return"noHovering"in this.props?!t||n:!!n}},{key:"isContainGrid",value:function(){var e;return a.Children.forEach(this.props.children,(function(t){t&&t.type&&t.type===u&&(e=!0)})),e}},{key:"render",value:function(){return a.createElement(l.a,null,this.renderCard)}}])&&j(n.prototype,r),i&&j(n,i),t}(a.Component);k.Grid=u,k.Meta=f},1128:function(e,t,n){"use strict";n(62),n(1129),n(456),n(1125)},1129:function(e,t,n){},1243:function(e,t,n){e.exports={Empty:"Style_Empty__sRUB0",img:"Style_img__2a9Oj"}},1244:function(e,t,n){e.exports=n.p+"static/media/process_building.ffa36809.svg"},1277:function(e,t,n){"use strict";n.r(t);n(78);var a=n(7),r=n(20),o=n(21),c=n(40),l=n(39),i=n(41),s=n(0),u=n.n(s),p=(n(1128),n(1126)),m=(n(1130),n(1131)),f=(n(102),n(11)),d=n(1243),b=n.n(d),y=n(309),v=n.n(y),g=n(1244),h=n.n(g);var E=u.a.memo((function(e){var t=e.username,n=e.repository,a=e.onCopy;return u.a.createElement(p.a,{className:b.a.Empty},u.a.createElement("img",{className:b.a.img,src:h.a,alt:"icon"}),u.a.createElement("p",null,u.a.createElement("strong",null,"\u8be5\u4ed3\u5e93\u6ca1\u6709\u8fdb\u884c\u8fc7\u63d0\u4ea4\u3002")),u.a.createElement("p",null,"\u53ef\u590d\u5236\u4ee5\u4e0b\u94fe\u63a5\uff0c\u5728\u672c\u5730\u514b\u9686\u672c\u4ed3\u5e93\u5e76\u5f00\u59cb\u60a8\u7684\u5de5\u4f5c\u3002"),u.a.createElement(m.a,{value:"".concat(window.location.origin,"/").concat(t,"/").concat(n,".git"),size:"large",addonAfter:u.a.createElement(v.a,{text:"".concat(window.location.origin,"/").concat(t,"/").concat(n,".git"),onCopy:a},u.a.createElement(f.a,{type:"copy"}))}))})),O=n(118),j=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).onCopy=function(e,t){t?a.a.success({message:"\u5730\u5740\u5df2\u6210\u529f\u590d\u5236"}):a.a.warning({message:"\u5730\u5740\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"})},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.match.params,t=e.username,n=e.repository;return u.a.createElement(E,{username:t,repository:n,onCopy:this.onCopy})}}]),t}(s.PureComponent),C=Object(O.f)(j);n.d(t,"default",(function(){return C}))}}]);
//# sourceMappingURL=25.dc7ac620.chunk.js.map