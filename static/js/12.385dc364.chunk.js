(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[12],{1207:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),o=(n(155),n(19)),i=n(31),c=n(59),u=n(81),s=n(261),l=n(260),f=n(262),d=n(0),p=n.n(d),h=(n(922),n(923)),b=(n(153),n(994),n(1)),m=n(996),y=n.n(m),v=n(20),g=n.n(v),k=n(154),C=n(924),w=n(46),O=n(58),S=n(45);function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=x(this,P(t).call(this,e))).saveSwitch=function(e){n.rcSwitch=e},n.renderSwitch=function(e){var t,r=e.getPrefixCls,a=n.props,o=a.prefixCls,i=a.size,c=a.loading,u=a.className,s=void 0===u?"":u,l=a.disabled,f=r("switch",o),p=g()(s,(_(t={},"".concat(f,"-small"),"small"===i),_(t,"".concat(f,"-loading"),c),t)),h=c?d.createElement(w.a,{type:"loading",className:"".concat(f,"-loading-icon")}):null;return d.createElement(C.a,{insertExtraNode:!0},d.createElement(y.a,N({},Object(k.a)(n.props,["loading"]),{prefixCls:f,className:p,disabled:l||c,ref:n.saveSwitch,loadingIcon:h})))},Object(S.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,e),n=t,(r=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return d.createElement(O.a,null,this.renderSwitch)}}])&&j(n.prototype,r),a&&j(n,a),t}(d.Component);I.__ANT_SWITCH=!0,I.propTypes={prefixCls:b.string,size:b.oneOf(["small","default","large"]),className:b.string};n(926);var D=n(929),M=n(995),A=n.n(M);var R=p.a.memo((function(e){var t=e.username,n=e.name,r=e.description,a=e.isPublic,o=e.onNameInputChange,i=e.onDescriptionInputChange,c=e.onIsPublicSwitchChange,u=e.onSubmit,s=e.submitting,l=e.loading;return p.a.createElement("div",{className:A.a.CreateRepository},p.a.createElement("h1",{className:A.a.title},"\u521b\u5efa\u65b0\u4ed3\u5e93"),p.a.createElement("form",{action:"#",className:A.a.form,onSubmit:u},p.a.createElement("label",{className:A.a.label},p.a.createElement("div",{className:A.a.text},"\u4ed3\u5e93\u540d"),p.a.createElement(D.a,{addonBefore:p.a.createElement("div",null,t," /"),autoFocus:!0,value:n,onChange:o,disabled:l})),p.a.createElement("label",{className:A.a.label},p.a.createElement("div",{className:A.a.text},"\u63cf\u8ff0\uff08\u53ef\u9009\uff09"),p.a.createElement(D.a,{value:r,onChange:i,disabled:l})),p.a.createElement("label",{className:A.a.label},p.a.createElement("div",{className:A.a.inlineText},"\u516c\u5f00"),p.a.createElement(I,{checked:a,onChange:c,disabled:l}),p.a.createElement("div",{className:A.a.inlineDescription},a?"\u6240\u6709\u4eba\u90fd\u80fd\u770b\u5230\u8be5\u4ed3\u5e93":"\u53ea\u6709\u4f60\u80fd\u770b\u5230\u8be5\u4ed3\u5e93")),p.a.createElement(h.a,{htmlType:"submit",type:"primary",block:!0,className:A.a.submitButton,loading:s,disabled:s||l},"\u521b\u5efa\u4ed3\u5e93")))})),W=n(266),L=n(156),U=n(263),F=n(95),B=n(194),V=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).onNameInputChange=function(e){n.setState({name:e.target.value})},n.onDescriptionInputChange=function(e){n.setState({description:e.target.value})},n.onIsPublicSwitchChange=function(e){n.setState({isPublic:e})},n.onSubmit=function(){var e=Object(i.a)(a.a.mark((function e(t){var r,i,c,u,s,l,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=n.state,i=r.username,c=r.name,u=r.description,s=r.isPublic,0!==c.length){e.next=5;break}return o.a.warn({message:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d"}),e.abrupt("return");case 5:return n.setState({submitting:!0}),e.next=8,L.c.create(new U.d(i,c,u,s));case 8:l=e.sent,n.setState({submitting:!1}),null!==l&&(f=n.props.history,o.a.success({message:"\u4ed3\u5e93\u521b\u5efa\u6210\u529f"}),f.push(B.Function.generateRepositoryRoute({username:i,repository:c})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={username:"",name:"",description:"",isPublic:!0,submitting:!1,loading:!0},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get();case 2:null!==(t=e.sent)&&(n=t.username,this.setState({loading:!1,username:n}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.username,n=e.name,r=e.description,a=e.isPublic,o=e.submitting,i=e.loading;return p.a.createElement(R,{username:t,name:n,description:r,isPublic:a,submitting:o,loading:i,onNameInputChange:this.onNameInputChange,onDescriptionInputChange:this.onDescriptionInputChange,onIsPublicSwitchChange:this.onIsPublicSwitchChange,onSubmit:this.onSubmit})}}]),t}(d.PureComponent),z=Object(F.f)(V);n.d(t,"default",(function(){return z}))},921:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},924:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r,a=n(0),o=n(12),i=n(121),c=n(195),u=n(58);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return!e||null===e.offsetParent}var b=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=f(t).apply(this,arguments),(e=!a||"object"!==s(a)&&"function"!==typeof a?d(n):a).animationStart=!1,e.destroy=!1,e.onClick=function(t,n){if(!(!t||h(t)||t.className.indexOf("-leave")>=0)){var a=e.props.insertExtraNode;e.extraNode=document.createElement("div");var o=d(e).extraNode;o.className="ant-click-animating-node";var c=e.getAttributeName();t.setAttribute(c,"true"),r=r||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&function(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}(n)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(n)&&"transparent"!==n&&(e.csp&&e.csp.nonce&&(r.nonce=e.csp.nonce),o.style.borderColor=n,r.innerHTML="\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ".concat(n,";\n      }"),document.body.contains(r)||document.body.appendChild(r)),a&&t.appendChild(o),i.a.addStartEventListener(t,e.onTransitionStart),i.a.addEndEventListener(t,e.onTransitionEnd)}},e.onTransitionStart=function(t){if(!e.destroy){var n=Object(o.findDOMNode)(d(e));t&&t.target===n&&(e.animationStart||e.resetEffect(n))}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!h(n.target)){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,r)}),0),c.a.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=Object(c.a)((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;return e.csp=n,r},e}var n,b,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(b=[{key:"componentDidMount",value:function(){var e=Object(o.findDOMNode)(this);e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0}},{key:"getAttributeName",value:function(){return this.props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}},{key:"resetEffect",value:function(e){if(e&&e!==this.extraNode&&e instanceof Element){var t=this.props.insertExtraNode,n=this.getAttributeName();e.setAttribute(n,"false"),r&&(r.innerHTML=""),t&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),i.a.removeStartEventListener(e,this.onTransitionStart),i.a.removeEndEventListener(e,this.onTransitionEnd)}}},{key:"render",value:function(){return a.createElement(u.a,null,this.renderWave)}}])&&l(n.prototype,b),m&&l(n,m),t}(a.Component)},994:function(e,t,n){},995:function(e,t,n){e.exports={CreateRepository:"Style_CreateRepository__2Mw5u",title:"Style_title__13iw0",label:"Style_label__3gZrW",submitButton:"Style_submitButton__3gaVe",text:"Style_text__5znWR",inlineText:"Style_inlineText__1p1pR",inlineDescription:"Style_inlineDescription__2_j5X"}},996:function(e,t,n){e.exports=n(997)},997:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(74);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(20),m=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=f(t).call(this,e),n=!a||"object"!==typeof a&&"function"!==typeof a?p(r):a,h(p(p(n)),"handleClick",(function(e){var t=n.state.checked,r=n.props.onClick,a=!t;n.setChecked(a,e),r&&r(a,e)})),h(p(p(n)),"handleKeyDown",(function(e){37===e.keyCode?n.setChecked(!1,e):39===e.keyCode&&n.setChecked(!0,e)})),h(p(p(n)),"handleMouseUp",(function(e){var t=n.props.onMouseUp;n.node&&n.node.blur(),t&&t(e)})),h(p(p(n)),"saveNode",(function(e){n.node=e}));var o=!1;return o="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:o},n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,o=[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}],(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,r=n.disabled,a=n.onChange;r||("checked"in this.props||this.setState({checked:e}),a&&a(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,o=t.disabled,i=t.loadingIcon,c=t.checkedChildren,l=t.unCheckedChildren,f=s(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),d=this.state.checked,p=b((h(e={},n,!!n),h(e,r,!0),h(e,"".concat(r,"-checked"),d),h(e,"".concat(r,"-disabled"),o),e));return a.a.createElement("button",u({},f,{type:"button",role:"switch","aria-checked":d,disabled:o,className:p,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),i,a.a.createElement("span",{className:"".concat(r,"-inner")},d?c:l))}}])&&l(n.prototype,r),o&&l(n,o),t}(r.Component);m.propTypes={className:i.a.string,prefixCls:i.a.string,disabled:i.a.bool,checkedChildren:i.a.any,unCheckedChildren:i.a.any,onChange:i.a.func,onMouseUp:i.a.func,onClick:i.a.func,tabIndex:i.a.number,checked:i.a.bool,defaultChecked:i.a.bool,autoFocus:i.a.bool,loadingIcon:i.a.node},m.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(c.polyfill)(m),t.default=m}}]);
//# sourceMappingURL=12.385dc364.chunk.js.map