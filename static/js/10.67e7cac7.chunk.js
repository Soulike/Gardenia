(window["webpackJsonpsoulike-git"]=window["webpackJsonpsoulike-git"]||[]).push([[10],{1196:function(e,t,r){"use strict";r.r(t);var o=r(12),n=r.n(o),s=r(846),i=r(26),a=r(46),l=r(62),u=r(142),p=r(141),c=r(143),h=r(0),d=r.n(h),f=r(74),v=r(973),m=r.n(v),y=r(825),L=r.n(y),b=r(848);var g=function(e){var t=e.repositoryList,r=e.loadMore,o=e.loading,n=e.hasMore;return d.a.createElement("div",{className:m.a.Index},d.a.createElement(L.a,{loadMore:r,initialLoad:!1,hasMore:n},d.a.createElement(b.a,{repositoryList:t,loading:o})))},w=function(e){function t(e){var r;return Object(a.a)(this,t),(r=Object(u.a)(this,Object(p.a)(t).call(this,e))).loadMore=Object(i.a)(n.a.mark((function e(){var o,i,a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.state,i=o.repositoryList,a=o.lastEnd,e.next=3,f.c.getList(a,a+t.PAGE_SIZE);case 3:l=e.sent,r.setState({loading:!1}),null!==l&&(i.push.apply(i,Object(s.a)(l)),r.setState({lastEnd:a+t.PAGE_SIZE-1}),l.length<t.PAGE_SIZE&&r.setState({hasMore:!1}),r.forceUpdate());case 6:case"end":return e.stop()}}),e)}))),r.state={repositoryList:[],loading:!0,hasMore:!0,lastEnd:0},r}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadMore();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repositoryList,r=e.hasMore,o=e.loading;return d.a.createElement(g,{repositoryList:t,loadMore:this.loadMore,hasMore:r,loading:o})}}]),t}(h.PureComponent);w.PAGE_SIZE=10;var E=w;r.d(t,"default",(function(){return E}))},825:function(e,t,r){e.exports=r(826)},826:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),n=r(0),s=a(n),i=a(r(1));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scrollListener=r.scrollListener.bind(r),r.eventListenerOptions=r.eventListenerOptions.bind(r),r.mousewheelListener=r.mousewheelListener.bind(r),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(r){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,r=this.getParentElement(e),o=void 0;if(this.props.useWindow){var n=document.documentElement||document.body.parentNode||document.body,s=void 0!==t.pageYOffset?t.pageYOffset:n.scrollTop;o=this.props.isReverse?s:this.calculateOffset(e,s)}else o=this.props.isReverse?r.scrollTop:e.scrollHeight-r.scrollTop-r.clientHeight;o<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=r.scrollHeight,this.beforeScrollTop=r.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),r=t.children,o=t.element,n=t.hasMore,i=(t.initialLoad,t.isReverse),a=t.loader,l=(t.loadMore,t.pageStart,t.ref),u=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));u.ref=function(t){e.scrollComponent=t,l&&l(t)};var p=[r];return n&&(a?i?p.unshift(a):p.push(a):this.defaultLoader&&(i?p.unshift(this.defaultLoader):p.push(this.defaultLoader))),s.default.createElement(o,u,p)}}]),t}(n.Component);l.propTypes={children:i.default.node.isRequired,element:i.default.node,hasMore:i.default.bool,initialLoad:i.default.bool,isReverse:i.default.bool,loader:i.default.node,loadMore:i.default.func.isRequired,pageStart:i.default.number,ref:i.default.func,getScrollParent:i.default.func,threshold:i.default.number,useCapture:i.default.bool,useWindow:i.default.bool},l.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=l,e.exports=t.default},830:function(e,t,r){e.exports={RepositoryList:"Style_RepositoryList__3Ox2N",repositoryWrapper:"Style_repositoryWrapper__8uUYD"}},846:function(e,t,r){"use strict";function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"a",(function(){return o}))},848:function(e,t,r){"use strict";r(805);var o=r(804),n=(r(845),r(844)),s=(r(793),r(114)),i=r(0),a=r.n(i),l=r(830),u=r.n(l),p=r(63),c=r(44),h=r(236);var d=function(e){var t=e.repositoryList,r=e.loading;return a.a.createElement(o.a,{className:u.a.RepositoryList,dataSource:t,loading:r,locale:{emptyText:a.a.createElement(s.a,{description:"\u6ca1\u6709\u4ed3\u5e93"})},renderItem:function(e){var t=e.username,r=e.name,o=e.description,s=e.isPublic;return a.a.createElement(p.b,{className:u.a.repositoryWrapper,target:"__blank",rel:"noreferrer noopener",to:c.c[c.a.REPOSITORY].replace(":username",t).replace(":repository",r).replace(":path*","")},a.a.createElement(n.a,{className:u.a.repository,hoverable:!0},a.a.createElement(n.a.Meta,{title:a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{isPublic:s}),t,"/",r),description:a.a.createElement("div",null,0===o.length?a.a.createElement("i",null,"\u6ca1\u6709\u63cf\u8ff0"):o)})))}})};r.d(t,"a",(function(){return d}))},973:function(e,t,r){e.exports={Index:"Style_Index__3aRmg",repositoryWrapper:"Style_repositoryWrapper__mjMAI"}}}]);
//# sourceMappingURL=10.67e7cac7.chunk.js.map