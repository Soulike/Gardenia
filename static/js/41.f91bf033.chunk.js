(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[41],{1157:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(0),o=n(138),a=n(121),i=n(43);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=function(e){function t(){var e;return u(this,t),(e=s(this,f(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var n=t.getPrefixCls,a=e.props,i=a.prefixCls,c=m(a,["prefixCls"]);delete c.title;var u=n("popover",i);return r.createElement(o.a,l({},c,{prefixCls:u,ref:e.saveTooltip,overlay:e.getOverlay(u)}))},e}var n,c,v;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(c=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,n=t.title,o=t.content;return Object(i.a)(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),r.createElement("div",null,n&&r.createElement("div",{className:"".concat(e,"-title")},n),r.createElement("div",{className:"".concat(e,"-inner-content")},o))}},{key:"render",value:function(){return r.createElement(a.a,null,this.renderPopover)}}])&&p(n.prototype,c),v&&p(n,v),t}(r.Component);v.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}}},1276:function(e,t,n){"use strict";n.r(t);n(78);var r=n(7),o=n(20),a=n(21),i=n(40),c=n(39),l=n(41),u=n(0),p=n.n(u),s=(n(460),n(1157)),f=(n(153),n(46)),y=(n(1130),n(1131)),m=(n(102),n(11)),v=n(309),b=n.n(v);var g=p.a.memo((function(e){var t=e.username,n=e.repository,r=e.onCopy;return p.a.createElement(s.a,{title:"\u901a\u8fc7 HTTPS \u514b\u9686",trigger:"click",placement:"bottomLeft",overlayStyle:{width:"450px"},content:p.a.createElement(p.a.Fragment,null,p.a.createElement("p",null,"\u4f7f\u7528 Git \u6765\u514b\u9686\u4ee5\u4e0b\u5730\u5740"),p.a.createElement(y.a,{value:"".concat(window.location.origin,"/").concat(t,"/").concat(n,".git"),addonAfter:p.a.createElement(b.a,{text:"".concat(window.location.origin,"/").concat(t,"/").concat(n,".git"),onCopy:r},p.a.createElement(m.a,{type:"copy"}))}))},p.a.createElement(f.a,{type:"primary"},"\u514b\u9686"))})),h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).onCopy=function(e,t){t?r.a.success({message:"\u5730\u5740\u5df2\u6210\u529f\u590d\u5236"}):r.a.warning({message:"\u5730\u5740\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"})},n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.username,n=e.repository;return p.a.createElement(g,{username:t,repository:n,onCopy:this.onCopy})}}]),t}(u.PureComponent);n.d(t,"default",(function(){return h}))}}]);
//# sourceMappingURL=41.f91bf033.chunk.js.map