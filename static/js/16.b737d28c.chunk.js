/*! For license information please see 16.b737d28c.chunk.js.LICENSE */
(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[16],{1002:function(e,t,n){e.exports={Groups:"Style_Groups__2oZjk",title:"Style_title__GJenS"}},1003:function(e,t,n){},1004:function(e,t,n){e.exports={JoinGroupModal:"Style_JoinGroupModal__1JxBP",input:"Style_input__3pWhq"}},1005:function(e,t,n){"use strict";e.exports=function(e){return"number"===typeof e?e-e===0:"string"===typeof e&&""!==e.trim()&&(Number.isFinite?Number.isFinite(+e):isFinite(+e))}},1220:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),o=n(875),c=n(36),l=n(47),i=n(89),s=n(88),u=n(90),p=n(0),f=n.n(p),m=n(1002),b=n.n(m),d=n(909),y=n(943),v=(n(78),n(9)),g=(n(412),n(132)),h=(n(275),n(19)),O=n(1003),E=n.n(O),C=(n(415),n(283)),j=(n(879),n(881)),k=n(1004),w=n.n(k);var S=f.a.memo((function(e){var t=e.visible,n=e.onCancel,r=e.onOk,a=e.groupId,o=e.onGroupIdInputChange;return f.a.createElement(C.a,{title:"\u52a0\u5165\u5c0f\u7ec4",visible:t,onCancel:n,onOk:r,destroyOnClose:!0,className:w.a.JoinGroupModal,width:400},f.a.createElement("label",null,f.a.createElement(j.a,{placeholder:"\u5c0f\u7ec4\u7684 ID",className:w.a.input,value:a,onChange:o,autoFocus:!0})))}));var N=f.a.memo((function(e){var t=e.modalVisible,n=e.onModalCancel,r=e.onModalOk,a=e.onClick,o=e.onGroupIdInputChange,c=e.groupId;return f.a.createElement(f.a.Fragment,null,f.a.createElement(g.a,{type:"primary",className:E.a.JoinGroupButton,onClick:a},f.a.createElement(h.a,{type:"plus"}),"\u52a0\u5165"),f.a.createElement(S,{visible:t,onOk:r,onCancel:n,groupId:c,onGroupIdInputChange:o}))})),P=n(1005),x=n.n(P),_=n(278),I=n(101),T=n(208),G=new(n.n(T).a),M=Symbol(),H=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).onClick=function(){n.setState({modalVisible:!0,groupId:""})},n.onGroupIdInputChange=function(e){var t=e.target.value;(""===t||x()(t))&&n.setState({groupId:t})},n.onModalOk=function(){var e,t,r,o;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(e=n.state.groupId,x()(e)){c.next=5;break}v.a.warn({message:"\u5c0f\u7ec4 ID \u5fc5\u987b\u662f\u6570\u5b57"}),c.next=10;break;case 5:return t=n.props.match.params,r=t.repository,o=t.username,c.next=8,a.a.awrap(_.a.addToGroup({username:o,name:r},{id:Number.parseInt(e)}));case 8:null!==c.sent&&(v.a.success({message:"\u52a0\u5165\u5c0f\u7ec4\u6210\u529f"}),G.emit(M),n.setState({modalVisible:!1}));case 10:case"end":return c.stop()}}))},n.onModalCancel=function(){n.setState({modalVisible:!1})},n.state={modalVisible:!1,groupId:""},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.modalVisible,n=e.groupId;return f.a.createElement(N,{modalVisible:t,onClick:this.onClick,onModalOk:this.onModalOk,onModalCancel:this.onModalCancel,onGroupIdInputChange:this.onGroupIdInputChange,groupId:n})}}]),t}(p.PureComponent),V=Object(I.f)(H);var A=f.a.memo((function(e){var t=e.groups,n=e.loading;return f.a.createElement("div",{className:b.a.Groups},f.a.createElement(d.a,null,f.a.createElement("div",{className:b.a.title},"\u5c0f\u7ec4",f.a.createElement(V,null))),f.a.createElement("div",{className:b.a.groupListWrapper},f.a.createElement(y.a,{groups:t,loading:n})))})),F=n(206),J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).loadGroups=function(){var e,t,r,c;return a.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=n.props.match.params,t=e.username,r=e.repository,n.setState({loading:!0}),l.next=4,a.a.awrap(F.f.groups({username:t,name:r}));case 4:null!==(c=l.sent)&&n.setState({groups:Object(o.a)(c)}),n.setState({loading:!1});case 7:case"end":return l.stop()}}))},n.state={groups:[],loading:!0},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.awrap(this.loadGroups());case 2:G.on(M,this.loadGroups);case 3:case"end":return e.stop()}}),null,this)}},{key:"componentWillUnmount",value:function(){G.removeListener(M,this.loadGroups)}},{key:"render",value:function(){var e=this.state,t=e.groups,n=e.loading;return f.a.createElement(A,{groups:t,loading:n})}}]),t}(p.PureComponent),L=Object(I.f)(J);n.d(t,"default",(function(){return L}))},875:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return r}))},883:function(e,t,n){"use strict";var r=n(0),a=n(14),o=n.n(a),c=n(107),l=n(131);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},u=function(e){return r.createElement(l.a,null,(function(t){var n,a,c,l=t.getPrefixCls,u=e.prefixCls,p=e.className,f=e.hoverable,m=void 0===f||f,b=s(e,["prefixCls","className","hoverable"]),d=l("card",u),y=o()("".concat(d,"-grid"),p,(n={},a="".concat(d,"-grid-hoverable"),c=m,a in n?Object.defineProperty(n,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[a]=c,n));return r.createElement("div",i({},b,{className:y}))}))};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=function(e){return r.createElement(l.a,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,c=e.className,l=e.avatar,i=e.title,s=e.description,u=f(e,["prefixCls","className","avatar","title","description"]),m=n("card",a),b=o()("".concat(m,"-meta"),c),d=l?r.createElement("div",{className:"".concat(m,"-meta-avatar")},l):null,y=i?r.createElement("div",{className:"".concat(m,"-meta-title")},i):null,v=s?r.createElement("div",{className:"".concat(m,"-meta-description")},s):null,g=y||v?r.createElement("div",{className:"".concat(m,"-meta-detail")},y,v):null;return r.createElement("div",p({},u,{className:b}),d,g)}))},b=n(905),d=n(1245).a,y=n(1216).a,v=n(40);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return P}));var S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function N(e){return e.map((function(t,n){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},r.createElement("span",null,t))}))}var P=function(e){function t(){var e;return E(this,t),(e=j(this,k(t).apply(this,arguments))).onTabChange=function(t){e.props.onTabChange&&e.props.onTabChange(t)},e.renderCard=function(t){var n,a,l,i=t.getPrefixCls,s=e.props,u=s.prefixCls,p=s.className,f=s.extra,m=s.headStyle,v=void 0===m?{}:m,g=s.bodyStyle,E=void 0===g?{}:g,C=s.title,j=s.loading,k=s.bordered,w=void 0===k||k,P=s.size,x=void 0===P?"default":P,_=s.type,I=s.cover,T=s.actions,G=s.tabList,M=s.children,H=s.activeTabKey,V=s.defaultActiveTabKey,A=s.tabBarExtraContent,F=S(s,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent"]),J=i("card",u),L=o()(J,p,(O(n={},"".concat(J,"-loading"),j),O(n,"".concat(J,"-bordered"),w),O(n,"".concat(J,"-hoverable"),e.getCompatibleHoverable()),O(n,"".concat(J,"-contain-grid"),e.isContainGrid()),O(n,"".concat(J,"-contain-tabs"),G&&G.length),O(n,"".concat(J,"-").concat(x),"default"!==x),O(n,"".concat(J,"-type-").concat(_),!!_),n)),D=0===E.padding||"0px"===E.padding?{padding:24}:void 0,K=r.createElement("div",{className:"".concat(J,"-loading-content"),style:D},r.createElement(d,{gutter:8},r.createElement(y,{span:22},r.createElement("div",{className:"".concat(J,"-loading-block")}))),r.createElement(d,{gutter:8},r.createElement(y,{span:8},r.createElement("div",{className:"".concat(J,"-loading-block")})),r.createElement(y,{span:15},r.createElement("div",{className:"".concat(J,"-loading-block")}))),r.createElement(d,{gutter:8},r.createElement(y,{span:6},r.createElement("div",{className:"".concat(J,"-loading-block")})),r.createElement(y,{span:18},r.createElement("div",{className:"".concat(J,"-loading-block")}))),r.createElement(d,{gutter:8},r.createElement(y,{span:13},r.createElement("div",{className:"".concat(J,"-loading-block")})),r.createElement(y,{span:9},r.createElement("div",{className:"".concat(J,"-loading-block")}))),r.createElement(d,{gutter:8},r.createElement(y,{span:4},r.createElement("div",{className:"".concat(J,"-loading-block")})),r.createElement(y,{span:3},r.createElement("div",{className:"".concat(J,"-loading-block")})),r.createElement(y,{span:16},r.createElement("div",{className:"".concat(J,"-loading-block")})))),W=void 0!==H,z=(O(a={},W?"activeKey":"defaultActiveKey",W?H:V),O(a,"tabBarExtraContent",A),a),B=G&&G.length?r.createElement(b.a,h({},z,{className:"".concat(J,"-head-tabs"),size:"large",onChange:e.onTabChange}),G.map((function(e){return r.createElement(b.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(C||f||B)&&(l=r.createElement("div",{className:"".concat(J,"-head"),style:v},r.createElement("div",{className:"".concat(J,"-head-wrapper")},C&&r.createElement("div",{className:"".concat(J,"-head-title")},C),f&&r.createElement("div",{className:"".concat(J,"-extra")},f)),B));var R=I?r.createElement("div",{className:"".concat(J,"-cover")},I):null,q=r.createElement("div",{className:"".concat(J,"-body"),style:E},j?K:M),Q=T&&T.length?r.createElement("ul",{className:"".concat(J,"-actions")},N(T)):null,U=Object(c.a)(F,["onTabChange","noHovering","hoverable"]);return r.createElement("div",h({},U,{className:L}),l,R,q,Q)},e}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){"noHovering"in this.props&&(Object(v.a)(!this.props.noHovering,"Card","`noHovering` is deprecated, you can remove it safely or use `hoverable` instead."),Object(v.a)(!!this.props.noHovering,"Card","`noHovering={false}` is deprecated, use `hoverable` instead."))}},{key:"getCompatibleHoverable",value:function(){var e=this.props,t=e.noHovering,n=e.hoverable;return"noHovering"in this.props?!t||n:!!n}},{key:"isContainGrid",value:function(){var e;return r.Children.forEach(this.props.children,(function(t){t&&t.type&&t.type===u&&(e=!0)})),e}},{key:"render",value:function(){return r.createElement(l.a,null,this.renderCard)}}])&&C(n.prototype,a),i&&C(n,i),t}(r.Component);P.Grid=u,P.Meta=m},885:function(e,t,n){"use strict";n(106),n(890),n(900),n(887)},890:function(e,t,n){},901:function(e,t,n){"use strict";n(106),n(915)},906:function(e,t,n){"use strict";var r=n(0),a=n(14),o=n.n(a),c=n(107),l=n(50),i=n(19),s=n(131);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},h=function(e){function t(){var e;return m(this,t),(e=d(this,y(t).apply(this,arguments))).handleClick=function(){var t=e.props,n=t.checked,r=t.onChange;r&&r(!n)},e.renderCheckableTag=function(t){var n,a=t.getPrefixCls,c=e.props,l=c.prefixCls,i=c.className,s=c.checked,u=g(c,["prefixCls","className","checked"]),m=a("tag",l),b=o()(m,(f(n={},"".concat(m,"-checkable"),!0),f(n,"".concat(m,"-checkable-checked"),s),n),i);return delete u.onChange,r.createElement("span",p({},u,{className:b,onClick:e.handleClick}))},e}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return r.createElement(s.a,null,this.renderCheckableTag)}}])&&b(n.prototype,a),c&&b(n,c),t}(r.Component),O=n(133),E=Object(O.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"),C=n(40),j=n(279);function k(e){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},T=new RegExp("^(".concat(E.join("|"),")(-inverse)?$")),G=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=P(this,x(t).call(this,e))).state={visible:!0},n.handleIconClick=function(e){e.stopPropagation(),n.setVisible(!1,e)},n.renderTag=function(e){var t=n.props,a=t.children,o=I(t,["children"]),l="onClick"in o||a&&"a"===a.type,i=Object(c.a)(o,["onClose","afterClose","color","visible","closable","prefixCls"]);return l?r.createElement(j.a,null,r.createElement("span",S({},i,{className:n.getTagClassName(e),style:n.getTagStyle()}),a,n.renderCloseIcon())):r.createElement("span",S({},i,{className:n.getTagClassName(e),style:n.getTagStyle()}),a,n.renderCloseIcon())},Object(C.a)(!("afterClose"in e),"Tag","'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."),n}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,l=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(a=[{key:"getTagStyle",value:function(){var e=this.props,t=e.color,n=e.style,r=this.isPresetColor();return S({backgroundColor:t&&!r?t:void 0},n)}},{key:"getTagClassName",value:function(e){var t,n=e.getPrefixCls,r=this.props,a=r.prefixCls,c=r.className,l=r.color,i=this.state.visible,s=this.isPresetColor(),u=n("tag",a);return o()(u,(w(t={},"".concat(u,"-").concat(l),s),w(t,"".concat(u,"-has-color"),l&&!s),w(t,"".concat(u,"-hidden"),!i),t),c)}},{key:"setVisible",value:function(e,t){var n=this.props,r=n.onClose,a=n.afterClose;r&&r(t),a&&!r&&a(),t.defaultPrevented||"visible"in this.props||this.setState({visible:e})}},{key:"isPresetColor",value:function(){var e=this.props.color;return!!e&&T.test(e)}},{key:"renderCloseIcon",value:function(){return this.props.closable?r.createElement(i.a,{type:"close",onClick:this.handleIconClick}):null}},{key:"render",value:function(){return r.createElement(s.a,null,this.renderTag)}}])&&N(n.prototype,a),l&&N(n,l),t}(r.Component);G.CheckableTag=h,G.defaultProps={closable:!1},Object(l.polyfill)(G);t.a=G},907:function(e,t,n){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},909:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(907),c=n.n(o);var l=a.a.memo((function(e){var t=e.children;return a.a.createElement("h2",{className:c.a.SettingsTitle},t)}));n.d(t,"a",(function(){return l}))},915:function(e,t,n){},939:function(e,t,n){e.exports={GroupList:"Style_GroupList__1GfzT",groupWrapper:"Style_groupWrapper__2nh8Q",groupName:"Style_groupName__1jfy7"}},943:function(e,t,n){"use strict";n(884);var r=n(882),a=(n(885),n(883)),o=(n(901),n(906)),c=(n(275),n(19)),l=n(875),i=(n(889),n(118)),s=n(0),u=n.n(s),p=n(939),f=n.n(p),m=n(35),b=n(91);var d=function(e){var t=e.groups,n=e.loading,s=e.administratingGroups,p=s?s.map((function(e){return e.id})):[];return u.a.createElement(r.a,{className:f.a.GroupList,loading:n,locale:{emptyText:u.a.createElement(i.a,{description:"\u6ca1\u6709\u5c0f\u7ec4"})},dataSource:Object(l.a)(t),renderItem:function(e){var t=e.id,n=e.name;return u.a.createElement(m.b,{className:f.a.groupWrapper,target:"_blank",rel:"noreferrer noopener",to:b.b.generateGroupRoute({id:t.toString()})},u.a.createElement(a.a,{className:f.a.group,hoverable:!0,size:"small"},u.a.createElement(a.a.Meta,{avatar:u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{type:"team"})," ",t),title:u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:f.a.groupName},n),p.includes(t)?u.a.createElement(o.a,{color:"blue"},"\u7ba1\u7406\u5458"):null)})))}})};n.d(t,"a",(function(){return d}))}}]);
//# sourceMappingURL=16.b737d28c.chunk.js.map