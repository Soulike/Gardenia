(window["webpackJsonpsoulike-git"]=window["webpackJsonpsoulike-git"]||[]).push([[19],{1203:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n.n(r),o=(n(154),n(23)),i=n(30),s=n(59),c=n(81),u=n(260),l=n(259),f=n(261),d=n(0),p=n.n(d),m=(n(919),n(921)),g=(n(922),n(927)),b=(n(395),n(46)),h=n(970),v=n.n(h),y=n(940),E=n.n(y);var w=p.a.memo((function(e){var t=e.username,n=e.password,r=e.onUsernameInputChange,a=e.onPasswordInputChange,o=e.onLoginFormSubmit;return p.a.createElement("main",{className:v.a.Login},p.a.createElement("form",{action:"#",className:v.a.form,onSubmit:o},p.a.createElement("img",{className:v.a.logo,src:E.a,alt:"web_developer_logo"}),p.a.createElement(g.a,{type:"text",size:"large",onChange:r,autoFocus:!0,value:t,placeholder:"\u7528\u6237\u540d",prefix:p.a.createElement(b.a,{type:"user"})}),p.a.createElement(g.a,{type:"password",size:"large",onChange:a,value:n,placeholder:"\u5bc6\u7801",prefix:p.a.createElement(b.a,{type:"lock"})}),p.a.createElement(m.a,{htmlType:"submit",className:v.a.button,size:"large",type:"primary",block:!0},"\u767b\u5f55")))})),S=n(193),k=n(94),O=n(155),N=n(187),_=n(191),I=n(262),C=S.CONFIG.PAGE_ID,x=S.CONFIG.PAGE_ID_TO_ROUTE,L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onUsernameInputChange=function(e){n.setState({username:e.target.value})},n.onPasswordInputChange=function(e){n.setState({password:e.target.value})},n.onLoginFormSubmit=function(){var e=Object(i.a)(a.a.mark((function e(t){var r,i,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=n.state,i=r.username,s=r.password,0!==i.length){e.next=5;break}return o.a.warn({message:"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"}),e.abrupt("return");case 5:if(0!==s.length){e.next=8;break}return o.a.warn({message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"}),e.abrupt("return");case 8:return c=I.a.calculateHash(i,s),e.next=11,O.a.login(new I.a(i,c));case 11:e.sent&&((0,n.props.setLoggedIn)(),o.a.success({message:"\u767b\u5f55\u6210\u529f"}),n.props.history.push(x[C.INDEX]));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={username:"",password:""},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title="\u767b\u5f55",this.props.isLoggedIn&&this.props.history.push(x[C.INDEX])}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return p.a.createElement(w,{username:t,password:n,onLoginFormSubmit:this.onLoginFormSubmit,onPasswordInputChange:this.onPasswordInputChange,onUsernameInputChange:this.onUsernameInputChange})}}]),t}(d.PureComponent),T={setLoggedIn:N.setLoggedInAction},j=Object(k.f)(Object(_.b)((function(e){return{isLoggedIn:e.Root.isLoggedIn}}),T)(L));t.default=j},918:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},920:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r,a=n(0),o=n(16),i=n(118),s=n(194),c=n(58);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return!e||null===e.offsetParent}var g=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=f(t).apply(this,arguments),(e=!a||"object"!==u(a)&&"function"!==typeof a?d(n):a).animationStart=!1,e.destroy=!1,e.onClick=function(t,n){if(!(!t||m(t)||t.className.indexOf("-leave")>=0)){var a=e.props.insertExtraNode;e.extraNode=document.createElement("div");var o=d(e).extraNode;o.className="ant-click-animating-node";var s=e.getAttributeName();t.setAttribute(s,"true"),r=r||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&function(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}(n)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(n)&&"transparent"!==n&&(e.csp&&e.csp.nonce&&(r.nonce=e.csp.nonce),o.style.borderColor=n,r.innerHTML="\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ".concat(n,";\n      }"),document.body.contains(r)||document.body.appendChild(r)),a&&t.appendChild(o),i.a.addStartEventListener(t,e.onTransitionStart),i.a.addEndEventListener(t,e.onTransitionEnd)}},e.onTransitionStart=function(t){if(!e.destroy){var n=Object(o.findDOMNode)(d(e));t&&t.target===n&&(e.animationStart||e.resetEffect(n))}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!m(n.target)){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,r)}),0),s.a.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=Object(s.a)((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;return e.csp=n,r},e}var n,g,b;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(g=[{key:"componentDidMount",value:function(){var e=Object(o.findDOMNode)(this);e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0}},{key:"getAttributeName",value:function(){return this.props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}},{key:"resetEffect",value:function(e){if(e&&e!==this.extraNode&&e instanceof Element){var t=this.props.insertExtraNode,n=this.getAttributeName();e.setAttribute(n,"false"),r&&(r.innerHTML=""),t&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),i.a.removeStartEventListener(e,this.onTransitionStart),i.a.removeEndEventListener(e,this.onTransitionEnd)}}},{key:"render",value:function(){return a.createElement(c.a,null,this.renderWave)}}])&&l(n.prototype,g),b&&l(n,b),t}(a.Component)},940:function(e,t,n){e.exports=n.p+"static/media/developing_code.240e8e0f.svg"},970:function(e,t,n){e.exports={Login:"Style_Login__2bEsG",form:"Style_form__1Yzdr",logo:"Style_logo__3bWtv",button:"Style_button__3L0sa"}}}]);
//# sourceMappingURL=19.53a24e9b.chunk.js.map