(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[28],{1207:function(e,t,n){"use strict";n.r(t);var r=n(874),o=n(4),a=n.n(o),i=n(35),c=n(47),u=n(88),s=n(87),l=n(89),p=n(0),f=n.n(p),y=(n(106),n(981),n(14)),m=n.n(y);function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return v(this,t),g(this,O(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e,t,n=this.props,r=n.prefixCls,o=n.className,a=n.style,i=n.size,c=n.shape,u=m()((d(e={},"".concat(r,"-lg"),"large"===i),d(e,"".concat(r,"-sm"),"small"===i),e)),s=m()((d(t={},"".concat(r,"-circle"),"circle"===c),d(t,"".concat(r,"-square"),"square"===c),t)),l="number"===typeof i?{width:i,height:i,lineHeight:"".concat(i,"px")}:{};return p.createElement("span",{className:m()(r,o,u,s),style:h(h({},l),a)})}}])&&w(n.prototype,r),o&&w(n,o),t}(p.Component);E.defaultProps={size:"large"};var S=E;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _=function(e){var t=e.prefixCls,n=e.className,r=e.width,o=e.style;return p.createElement("h3",{className:m()(t,n),style:C({width:r},o)})};function P(e){return(P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==P(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){return k(this,t),A(this,T(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,e),n=t,(r=[{key:"getWidth",value:function(e){var t=this.props,n=t.width,r=t.rows,o=void 0===r?2:r;return Array.isArray(n)?n[e]:o-1===e?n:void 0}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,r=t.className,o=t.style,a=t.rows,i=x(Array(a)).map((function(t,n){return p.createElement("li",{key:n,style:{width:e.getWidth(n)}})}));return p.createElement("ul",{className:m()(n,r),style:o},i)}}])&&N(n.prototype,r),o&&N(n,o),t}(p.Component),W=n(131);function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){return(F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e){return e&&"object"===F(e)?e:{}}function H(e,t){return e&&!t?{shape:"square"}:{shape:"circle"}}function L(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function M(e,t){var n={};return e&&t||(n.width="61%"),n.rows=!e&&t?3:2,n}var V=function(e){function t(){var e;return K(this,t),(e=I(this,J(t).apply(this,arguments))).renderSkeleton=function(t){var n=t.getPrefixCls,r=e.props,o=r.prefixCls,a=r.loading,i=r.className,c=r.children,u=r.avatar,s=r.title,l=r.paragraph,f=r.active,y=n("skeleton",o);if(a||!("loading"in e.props)){var b,h,d,v=!!u,w=!!s,g=!!l;if(v){var O=q(q({prefixCls:"".concat(y,"-avatar")},H(w,g)),G(u));h=p.createElement("div",{className:"".concat(y,"-header")},p.createElement(S,O))}if(w||g){var j,E;if(w){var C=q(q({prefixCls:"".concat(y,"-title")},L(v,g)),G(s));j=p.createElement(_,C)}if(g){var P=q(q({prefixCls:"".concat(y,"-paragraph")},M(v,w)),G(l));E=p.createElement(R,P)}d=p.createElement("div",{className:"".concat(y,"-content")},j,E)}var x=m()(y,i,(B(b={},"".concat(y,"-with-avatar"),v),B(b,"".concat(y,"-active"),f),b));return p.createElement("div",{className:x},h,d)}return c},e}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return p.createElement(W.a,null,this.renderSkeleton)}}])&&D(n.prototype,r),o&&D(n,o),t}(p.Component);V.defaultProps={avatar:!1,title:!0,paragraph:!0};var Y=V,Q=n(982),X=n.n(Q),Z=n(936),$=f.a.lazy((function(){return Promise.all([n.e(32),n.e(40)]).then(n.bind(null,1225))})),ee=f.a.lazy((function(){return Promise.all([n.e(1),n.e(3),n.e(8),n.e(23)]).then(n.bind(null,1208))})),te=f.a.lazy((function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,1213))})),ne=f.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(26),n.e(31)]).then(n.bind(null,1226))})),re=f.a.lazy((function(){return Promise.all([n.e(8),n.e(12),n.e(29)]).then(n.bind(null,1227))})),oe=f.a.lazy((function(){return n.e(38).then(n.bind(null,1229))}));var ae=f.a.memo((function(e){var t=e.repository,n=t.username,r=t.name,o=t.description,a=e.branches,i=e.commitCount,c=e.isEmpty,u=e.objectType,s=e.loading;return f.a.createElement("div",{className:X.a.Code},f.a.createElement(Y,{active:!0,loading:s},f.a.createElement("div",{className:X.a.description},o),f.a.createElement(oe,{commitCount:i,branchCount:a.length}),c?f.a.createElement(ne,null):f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:X.a.buttonWrapper},f.a.createElement($,{branches:a}),f.a.createElement(te,{username:n,repository:r})),void 0===u||u===Z.a.TREE?f.a.createElement(ee,null):f.a.createElement(re,null))))})),ie=n(276),ce=n(101),ue=n(278),se=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).loadRepository=function(){var e,t,r,o;return a.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=n.props.match.params,t=e.username,r=e.repository,i.next=3,a.a.awrap(ue.a.repository({username:t},{name:r}));case 3:null!==(o=i.sent)&&n.setState({repository:o});case 5:case"end":return i.stop()}}))},n.loadCommitCount=function(){var e,t,r,o,i,c,u=arguments;return a.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:"master",t=n.props.match.params,r=t.username,o=t.repository,s.next=4,a.a.awrap(ue.a.commitCount({username:r},{name:o},e));case 4:null!==(i=s.sent)&&(0===(c=i.commitCount)?n.setState({isEmpty:!0}):n.setState({commitCount:c}));case 6:case"end":return s.stop()}}))},n.loadBranches=function(){var e,t,o,i;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=n.props.match.params,t=e.username,o=e.repository,c.next=3,a.a.awrap(ue.a.branch({username:t},{name:o}));case 3:null!==(i=c.sent)&&n.setState({branches:Object(r.a)(i)});case 5:case"end":return c.stop()}}))},n.state={repository:new ie.e("","","",!0),branches:[],commitCount:0,isEmpty:!1,loading:!0},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,a.a.awrap(Promise.all([this.loadRepository(),this.loadCommitCount()]));case 3:if(this.state.isEmpty){e.next=7;break}return e.next=7,a.a.awrap(this.loadBranches());case 7:this.setState({loading:!1});case 8:case"end":return e.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(e,t,n){var r,o;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.match.params.branch,o=this.props.match.params.branch,r===o){t.next=7;break}return this.setState({loading:!0}),t.next=6,a.a.awrap(this.loadCommitCount(o));case 6:this.setState({loading:!1});case 7:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.repository,n=e.branches,r=e.commitCount,o=e.isEmpty,a=e.loading,i=this.props.match.params.objectType;return f.a.createElement(ae,{isEmpty:o,repository:t,commitCount:r,branches:n,objectType:i,loading:a})}}]),t}(p.PureComponent),le=Object(ce.f)(se);n.d(t,"default",(function(){return le}))},874:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return r}))},936:function(e,t,n){"use strict";var r;!function(e){e.BLOB="blob",e.TREE="tree"}(r||(r={})),n.d(t,"a",(function(){return r}))},981:function(e,t,n){},982:function(e,t,n){e.exports={Code:"Style_Code__2UKpz",description:"Style_description__Yt5nK",buttonWrapper:"Style_buttonWrapper__3GVKN"}}}]);
//# sourceMappingURL=28.16509a68.chunk.js.map