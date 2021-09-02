(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[16],{1027:function(e,t,r){e.exports={Index:"Style_Index__3aRmg",alertWrapper:"Style_alertWrapper__1vm7c",description:"Style_description__Fp3il",memeWrapper:"Style_memeWrapper__2TD3N",meme:"Style_meme__gsx9j",repositoryWrapper:"Style_repositoryWrapper__mjMAI"}},1028:function(e,t,r){e.exports=r(1029)},1029:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(0),a=i(s),o=i(r(154));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scrollListener=r.scrollListener.bind(r),r.eventListenerOptions=r.eventListenerOptions.bind(r),r.mousewheelListener=r.mousewheelListener.bind(r),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(r){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,r=this.getParentElement(e),n=void 0;if(this.props.useWindow){var s=document.documentElement||document.body.parentNode||document.body,a=void 0!==t.pageYOffset?t.pageYOffset:s.scrollTop;n=this.props.isReverse?a:this.calculateOffset(e,a)}else n=this.props.isReverse?r.scrollTop:e.scrollHeight-r.scrollTop-r.clientHeight;n<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=r.scrollHeight,this.beforeScrollTop=r.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),r=t.children,n=t.element,s=t.hasMore,o=(t.initialLoad,t.isReverse),i=t.loader,c=(t.loadMore,t.pageStart,t.ref),l=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));l.ref=function(t){e.scrollComponent=t,c&&c(t)};var u=[r];return s&&(i?o?u.unshift(i):u.push(i):this.defaultLoader&&(o?u.unshift(this.defaultLoader):u.push(this.defaultLoader))),a.default.createElement(n,l,u)}}]),t}(s.Component);c.propTypes={children:o.default.node.isRequired,element:o.default.node,hasMore:o.default.bool,initialLoad:o.default.bool,isReverse:o.default.bool,loader:o.default.node,loadMore:o.default.func.isRequired,pageStart:o.default.number,ref:o.default.func,getScrollParent:o.default.func,threshold:o.default.number,useCapture:o.default.bool,useWindow:o.default.bool},c.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=c,e.exports=t.default},1391:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return L}));var n=r(2),s=r.n(n),a=r(92),o=r(7),i=r(15),c=r(16),l=r(40),u=r(39),p=r(0),d=r(34),f=r(1027),h=r.n(f),m=r(1028),j=r.n(m),b=r(961),v=r(922),O=r(335),y=r.p+"static/media/alice_mana.725a90d0.png",x=r(1);var g=function(e){var t=e.repositoryList,r=e.loadMore,n=e.loading,s=e.hasMore,a=e.onMemeDoubleClick,o=e.showMeme;return Object(x.jsxs)("div",{className:h.a.Index,children:[Object(x.jsxs)("div",{className:h.a.alertWrapper,children:[Object(x.jsx)(v.a,{type:"warning",message:"\u9879\u76ee\u4ecd\u5728\u5f00\u53d1\u4e2d",closable:!0,description:Object(x.jsxs)("div",{className:h.a.description,children:[Object(x.jsxs)("div",{className:h.a.text,children:[Object(x.jsx)("div",{children:"\u672c\u9879\u76ee\u7531\u7ec3\u4e60\u65f6\u957f\u4e24\u5e74\u534a\u5e72\u5565\u5565\u4e0d\u884c\u5403\u996d\u7b2c\u4e00\u540d\u7684\u524d\u7aef\u5f00\u53d1\uff0c\u4e14\u540e\u7aef\u8fd0\u884c\u5728\u6bcf\u6708\u4ec5\u9700 9.5 \u5143\u4eba\u6c11\u5e01\u7684\u8fa3\u9e21\u670d\u52a1\u5668\u4e0a\u3002"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("strong",{children:"\u8bf7\u5927\u5bb6\u5907\u4efd\u597d\u81ea\u5df1\u7684\u4ee3\u7801"}),"\uff0c\u51fa\u73b0 BUG \u8bf7",Object(x.jsx)(O.a,{href:"https://github.com/Soulike/Gardenia/issues",children:"\u63d0 Issue"}),"\u3002"]}),Object(x.jsxs)("div",{children:["\u7531\u4e8e\u4ecd\u5904\u4e8e\u5f00\u53d1\u72b6\u6001\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e0d\u517c\u5bb9\u66f4\u6539\u3002",Object(x.jsx)("strong",{children:"\u51fa\u73b0\u95ee\u9898\u8bf7\u5148\u5c1d\u8bd5\u6e05\u9664\u7f13\u5b58\u5237\u65b0\u9875\u9762"}),"\u3002"]}),Object(x.jsxs)("div",{children:["\u8bf7\u5404\u4f4d\u591a\u62c5\u5f85\uff0c\u7528\u6b63\u5e38\u7684\u59ff\u52bf\u4f7f\u7528\u672c\u5e73\u53f0\uff0c\u4e0d\u80dc\u611f\u8c22",Object(x.jsx)("span",{role:"img","aria-label":"emoji","aria-labelledby":"emoji",children:"\ud83d\ude00"}),"\u3002"]})]}),o?Object(x.jsx)("div",{className:h.a.memeWrapper,onDoubleClick:a,children:Object(x.jsx)("img",{src:y,alt:"meme",className:h.a.meme})}):Object(x.jsx)("div",{className:h.a.memeWrapper})]}),banner:!0}),Object(x.jsx)(v.a,{type:"info",message:"Git \u81ea\u52a8\u4fdd\u5b58\u5bc6\u7801\u7684\u65b9\u6cd5",description:Object(x.jsxs)("div",{className:h.a.text,children:[Object(x.jsx)("div",{children:"\u5728\u547d\u4ee4\u884c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53ef\u81ea\u52a8\u4fdd\u5b58\u5bc6\u7801\uff0c\u514d\u53bb\u6bcf\u6b21\u8f93\u5165\u5bc6\u7801\u7684\u9ebb\u70e6\u3002"}),Object(x.jsx)("code",{children:"git config --global credential.helper cache && git config --global credential.helper 'cache --timeout=31556926'"}),Object(x.jsx)("div",{children:"SSH \u8fde\u63a5\u65b9\u5f0f\u4ecd\u5728\u5f00\u53d1\u4e2d\uff0c\u7ed9\u5927\u5bb6\u5e26\u6765\u7684\u4e0d\u4fbf\u6df1\u8868\u6b49\u610f\u3002"})]}),banner:!0})]}),Object(x.jsx)(j.a,{loadMore:r,initialLoad:!1,pageStart:1,hasMore:s,children:Object(x.jsx)(b.a,{repositories:t,loading:n,showUsername:!0})})]})},S=r(3),_=r(104),w=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).setStatePromise=Object(_.promisify)(n.setState),n.forceUpdatePromise=Object(_.promisify)(n.forceUpdate),n.setTitle=function(){document.title=S.a},n.loadMoreRepositories=function(){var e=Object(o.a)(s.a.mark((function e(t){var o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.state.repositories,n.setState({loading:!0}),e.next=4,d.i.getRepositories((t-1)*r.PAGE_SIZE,t*r.PAGE_SIZE);case 4:if(i=e.sent,n.setState({loading:!1}),null===i){e.next=13;break}if(o.push.apply(o,Object(a.a)(i)),!(i.length<r.PAGE_SIZE)){e.next=11;break}return e.next=11,n.setStatePromise({hasMore:!1});case 11:return e.next=13,n.forceUpdatePromise();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onMemeDoubleClickFactory=function(){return function(){return null}},n.state={repositories:[],loading:!0,hasMore:!0,showMeme:!0},n}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),e.next=3,this.loadMoreRepositories(1);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repositories,r=e.hasMore,n=e.loading,s=e.showMeme;return Object(x.jsx)(g,{onMemeDoubleClick:this.onMemeDoubleClickFactory(),repositoryList:t,loadMore:this.loadMoreRepositories,hasMore:r,loading:n,showMeme:s})}}]),r}(p.PureComponent);w.PAGE_SIZE=10;var L=w},946:function(e,t,r){"use strict";var n=r(19),s=r(217),a=r(0),o=r.n(a),i=r(923),c=r(949),l=r.n(c),u=r(1),p=["isPublic"];function d(e){var t=e.isPublic,r=Object(s.a)(e,p);return t?Object(u.jsx)(i.a,Object(n.a)(Object(n.a)({className:l.a.AccessibilityTag,color:"blue"},r),{},{children:"\u516c\u5f00"})):Object(u.jsx)(i.a,Object(n.a)(Object(n.a)({className:l.a.AccessibilityTag,color:"gold"},r),{},{children:"\u79c1\u4eba"}))}t.a=o.a.memo(d)},949:function(e,t,r){e.exports={AccessibilityTag:"Style_AccessibilityTag__4cAHc"}},952:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r(2),s=r.n(n),a=r(7),o=r(0),i=r.n(o),c=r(924),l=r(111),u=r(176),p=r(5),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},f=r(13),h=function(e,t){return o.createElement(f.a,Object(p.a)(Object(p.a)({},e),{},{ref:t,icon:d}))};h.displayName="StarFilled";var m=o.forwardRef(h),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"},b=function(e,t){return o.createElement(f.a,Object(p.a)(Object(p.a)({},e),{},{ref:t,icon:j}))};b.displayName="StarOutlined";var v=o.forwardRef(b),O=r(72),y=r(1);function x(e){var t=e.hasStared,r=e.starAmount,n=e.loading,o=e.onClick;return Object(y.jsxs)(c.b,{size:-1,children:[Object(y.jsx)(l.a,{size:"small",onClick:function(){var e=Object(a.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"function"!==typeof o){e.next=4;break}return e.next=4,o(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),loading:n,disabled:n,children:t?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(m,{})," Unstar"]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(v,{})," Star"]})}),Object(y.jsx)(u.a,{title:r,children:Object(y.jsx)(l.a,{size:"small",onClick:function(){var e=Object(a.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.preventDefault());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:O.d.getNumberAbbreviation(r)})})]})}var g=i.a.memo(x)},956:function(e,t,r){e.exports={Repository:"Style_Repository__2NMPM",repository:"Style_repository__3pIAD",title:"Style_title__31C8D",infoWrapper:"Style_infoWrapper__37-3Z",tag:"Style_tag__2zslt",repositoryMoreInfo:"Style_repositoryMoreInfo__1BugR",forkAmountWrapper:"Style_forkAmountWrapper__2GE5q"}},957:function(e,t,r){},958:function(e,t,r){},960:function(e,t,r){"use strict";r.d(t,"a",(function(){return U}));var n=r(0),s=r.n(n),a=r(956),o=r.n(a),i=r(57),c=r(919),l=r(946),u=r(346),p=r(2),d=r.n(p),f=r(7),h=r(61),m=r(952),j=r(34),b=r(1);function v(e){var t=Object(n.useState)(!1),r=Object(h.a)(t,2),s=r[0],a=r[1],o=Object(n.useState)(0),i=Object(h.a)(o,2),c=i[0],l=i[1],u=Object(n.useState)(!1),p=Object(h.a)(u,2),v=p[0],O=p[1],y=e.repository,x=y.username,g=y.name;Object(n.useEffect)((function(){var e=function(){var e=Object(f.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.k.isStaredRepository({username:x,name:g});case 2:null!==(t=e.sent)&&(r=t.isStared,a(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(f.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.k.getRepositoryStarAmount({username:x,name:g});case 2:null!==(t=e.sent)&&(r=t.amount,l(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();O(!0),Promise.all([e(),t()]).finally((function(){return O(!1)}))}),[x,g]);var S=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(!0),!s){e.next=8;break}return e.next=4,j.k.remove({username:x,name:g});case 4:null!==e.sent&&(a(!1),l((function(e){return e-1}))),e.next=12;break;case 8:return e.next=10,j.k.add({username:x,name:g});case 10:null!==e.sent&&(a(!1),l((function(e){return e+1})));case 12:O(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(m.a,{hasStared:s,loading:v,starAmount:c,onClick:S})}var O=s.a.memo(v),y=r(957),x=r.n(y),g=r(935),S=r(907);function _(e){var t=e.forkAmount,r=e.loading;return Object(b.jsx)("div",{className:x.a.ForkAmount,children:Object(b.jsxs)(S.a,{spinning:r,children:[Object(b.jsx)(g.a,{})," ",t]})})}var w=s.a.memo(_),L=r(344);function k(e){var t=Object(n.useState)(0),r=Object(h.a)(t,2),s=r[0],a=r[1],o=Object(n.useState)(!1),i=Object(h.a)(o,2),c=i[0],l=i[1],u=e.repository,p=u.username,m=u.name;return Object(n.useEffect)((function(){var e=function(){var e=Object(f.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.forkAmount({username:p,name:m});case 2:null!==(t=e.sent)&&(r=t.amount,a(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();l(!0),e().finally((function(){return l(!1)}))}),[p,m]),Object(b.jsx)(w,{loading:c,forkAmount:s})}var M=s.a.memo(k),P=r(958),C=r.n(P),N=r(72),E=r(176),R=r(971);function W(e){var t=e.lastCommit,r=e.loading;return Object(b.jsx)("div",{className:C.a.LastUpdateInfo,children:Object(b.jsx)(S.a,{spinning:r,children:null===t?null:Object(b.jsxs)("div",{className:C.a.text,children:[Object(b.jsx)(R.a,{})," \u6700\u540e\u66f4\u65b0\u4e8e ",Object(b.jsx)(E.a,{title:N.b.parseTimestampToDate(t.timestamp),children:Object(b.jsx)("span",{className:C.a.time,children:N.b.parseTimestampToDifference(t.timestamp)})})]})})})}var T=s.a.memo(W);function A(e){var t=Object(n.useState)(null),r=Object(h.a)(t,2),s=r[0],a=r[1],o=Object(n.useState)(!1),i=Object(h.a)(o,2),c=i[0],l=i[1],u=e.repository,p=u.username,m=u.name;return Object(n.useEffect)((function(){var e=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.j.lastCommit({username:p,name:m});case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();l(!0),e().finally((function(){return l(!1)}))}),[p,m]),Object(b.jsx)(T,{lastCommit:s,loading:c})}var D=s.a.memo(A);function I(e){var t=e.repository,r=e.showUsername,n=t.username,s=t.name,a=t.isPublic,p=t.description;return Object(b.jsx)("div",{className:o.a.Repository,children:Object(b.jsx)(u.a,{to:i.Function.generateRepositoryCodeRoute({username:n,repositoryName:s}),children:Object(b.jsxs)(c.a,{className:o.a.repository,children:[Object(b.jsx)(c.a.Meta,{title:Object(b.jsxs)("div",{className:o.a.title,children:[Object(b.jsxs)("div",{className:o.a.infoWrapper,children:[Object(b.jsx)("div",{className:o.a.tag,children:Object(b.jsx)(l.a,{isPublic:a})}),Object(b.jsxs)("div",{className:o.a.name,children:[r?"".concat(n,"/"):"",s]})]}),Object(b.jsx)("div",{className:o.a.buttonWrapper,children:Object(b.jsx)(O,{repository:t})})]}),description:Object(b.jsx)("div",{children:0===p.length?Object(b.jsx)("i",{children:"\u6ca1\u6709\u63cf\u8ff0"}):p})}),Object(b.jsxs)("div",{className:o.a.repositoryMoreInfo,children:[Object(b.jsx)("div",{className:o.a.forkAmountWrapper,children:Object(b.jsx)(M,{repository:t})}),Object(b.jsx)("div",{className:o.a.updateInfoWrapper,children:Object(b.jsx)(D,{repository:t})})]})]})})})}var U=s.a.memo(I)},961:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(92),s=(r(0),r(963)),a=r.n(s),o=r(1407),i=r(183),c=r(960),l=r(1);var u=function(e){var t=e.repositories,r=e.loading,s=e.showUsername;return Object(l.jsx)(o.b,{className:a.a.RepositoryList,dataSource:Object(n.a)(t),loading:r,locale:{emptyText:Object(l.jsx)(i.a,{description:"\u6ca1\u6709\u4ed3\u5e93"})},renderItem:function(e){return Object(l.jsx)(c.a,{repository:e,showUsername:s},"".concat(e.username,"/").concat(e.name))}})}},963:function(e,t,r){e.exports={RepositoryList:"Style_RepositoryList__3Ox2N",repositoryWrapper:"Style_repositoryWrapper__8uUYD",repository:"Style_repository__snu_K",tag:"Style_tag__3JMWU"}},971:function(e,t,r){"use strict";var n=r(5),s=r(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},o=r(13),i=function(e,t){return s.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:a}))};i.displayName="ClockCircleOutlined";t.a=s.forwardRef(i)}}]);
//# sourceMappingURL=16.804f71e4.chunk.js.map