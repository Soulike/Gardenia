(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[15],{1007:function(e,t,o){},1208:function(e,t,o){"use strict";o.r(t);o(155);var n=o(19),r=o(59),a=o(81),c=o(261),i=o(260),l=o(262),u=o(0),p=o.n(u),s=(o(153),o(1007),o(390)),f=o(58),y=o(45);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function v(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},O=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=b(this,g(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var o=t.getPrefixCls,n=e.props,r=n.prefixCls,a=C(n,["prefixCls"]);delete a.title;var c=o("popover",r);return u.createElement(s.a,m({},a,{prefixCls:c,ref:e.saveTooltip,overlay:e.getOverlay(c)}))},e}var o,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),o=t,(n=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,o=t.title,n=t.content;return Object(y.a)(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),u.createElement("div",null,o&&u.createElement("div",{className:"".concat(e,"-title")},o),u.createElement("div",{className:"".concat(e,"-inner-content")},n))}},{key:"render",value:function(){return u.createElement(f.a,null,this.renderPopover)}}])&&v(o.prototype,n),r&&v(o,r),t}(u.Component);O.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};o(922);var w=o(923),E=(o(926),o(929)),j=(o(399),o(46)),P=o(945),x=o.n(P);var k=p.a.memo((function(e){var t=e.username,o=e.repository,n=e.onCopy;return p.a.createElement(O,{title:"\u901a\u8fc7 HTTPS \u514b\u9686",trigger:"click",placement:"bottomLeft",overlayStyle:{width:"450px"},content:p.a.createElement(p.a.Fragment,null,p.a.createElement("p",null,"\u4f7f\u7528 Git \u6765\u514b\u9686\u4ee5\u4e0b\u5730\u5740"),p.a.createElement(E.a,{value:"".concat(window.location.origin,"/").concat(t,"/").concat(o,".git"),addonAfter:p.a.createElement(x.a,{text:"".concat(window.location.origin,"/").concat(t,"/").concat(o,".git"),onCopy:n},p.a.createElement(j.a,{type:"copy"}))}))},p.a.createElement(w.a,{type:"primary"},"\u514b\u9686"))})),_=function(e){function t(){var e,o;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(o=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).onCopy=function(e,t){t?n.a.success({message:"\u5730\u5740\u5df2\u6210\u529f\u590d\u5236"}):n.a.warning({message:"\u5730\u5740\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"})},o}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.username,o=e.repository;return p.a.createElement(k,{username:t,repository:o,onCopy:this.onCopy})}}]),t}(u.PureComponent);o.d(t,"default",(function(){return _}))},945:function(e,t,o){"use strict";var n=o(946).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},946:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=i(o(0)),c=i(o(947));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(t.CopyToClipboard=function(e){function t(){var e,o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return o=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.onClick=function(e){var t=n.props,o=t.text,r=t.onCopy,i=t.children,l=t.options,u=a.default.Children.only(i),p=(0,c.default)(o,l);r&&r(o,p),u&&u.props&&"function"===typeof u.props.onClick&&u.props.onClick(e)},l(n,o)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["text","onCopy","options","children"]),r=a.default.Children.only(t);return a.default.cloneElement(r,n({},o,{onClick:this.onClick}))}}]),t}(a.default.PureComponent)).defaultProps={onCopy:void 0,options:void 0}},947:function(e,t,o){"use strict";var n=o(948),r="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var o,a,c,i,l,u,p=!1;t||(t={}),o=t.debug||!1;try{if(c=n(),i=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(o){o.stopPropagation(),t.format&&(o.preventDefault(),o.clipboardData.clearData(),o.clipboardData.setData(t.format,e))})),document.body.appendChild(u),i.selectNodeContents(u),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(s){o&&console.error("unable to copy using execCommand: ",s),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),p=!0}catch(s){o&&console.error("unable to copy using clipboardData: ",s),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:r),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),u&&document.body.removeChild(u),c()}return p}},948:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=15.f8653dee.chunk.js.map