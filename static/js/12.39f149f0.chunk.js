(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[12],{1190:function(e,t,r){"use strict";var n=r(230),a=r(0),o=r.n(a),i=r(1159),s=r(1193),l=r.n(s);t.a=o.a.memo((function(e){var t=e.isPublic,r=Object(n.a)(e,["isPublic"]);return t?o.a.createElement(i.a,Object.assign({className:l.a.AccessibilityTag,color:"blue"},r),"\u516c\u5171"):o.a.createElement(i.a,Object.assign({className:l.a.AccessibilityTag,color:"gold"},r),"\u79c1\u4eba")}))},1193:function(e,t,r){e.exports={AccessibilityTag:"Style_AccessibilityTag__4cAHc"}},1194:function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var a=e[n];"."===a?e.splice(n,1):".."===a?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",a=!1,o=arguments.length-1;o>=-1&&!a;o--){var i=o>=0?arguments[o]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,a="/"===i.charAt(0))}return(a?"/":"")+(t=r(n(t.split("/"),(function(e){return!!e})),!a).join("/"))||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===a(e,-1);return(e=r(n(e.split("/"),(function(e){return!!e})),!o).join("/"))||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var a=n(e.split("/")),o=n(r.split("/")),i=Math.min(a.length,o.length),s=i,l=0;l<i;l++)if(a[l]!==o[l]){s=l;break}var c=[];for(l=s;l<a.length;l++)c.push("..");return(c=c.concat(o.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,a=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!a){n=o;break}}else a=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function(e){"string"!==typeof e&&(e+="");var t,r=0,n=-1,a=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!a){r=t+1;break}}else-1===n&&(a=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,r=0,n=-1,a=!0,o=0,i=e.length-1;i>=0;--i){var s=e.charCodeAt(i);if(47!==s)-1===n&&(a=!1,n=i+1),46===s?-1===t?t=i:1!==o&&(o=1):-1!==t&&(o=-1);else if(!a){r=i+1;break}}return-1===t||-1===n||0===o||1===o&&t===n-1&&t===r+1?"":e.slice(t,n)};var a="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r(64))},1197:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r(1),a=r.n(n),o=r(4),i=r(0),s=r.n(i),l=r(1160),c=r(118),u=r(193),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},f=r(26),m=function(e,t){return i.createElement(f.a,Object.assign({},e,{ref:t,icon:p}))};m.displayName="StarFilled";var d=i.forwardRef(m),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"},v=function(e,t){return i.createElement(f.a,Object.assign({},e,{ref:t,icon:h}))};v.displayName="StarOutlined";var b=i.forwardRef(v),y=r(112);var g=s.a.memo((function(e){var t=e.hasStared,r=e.starAmount,n=e.loading,i=e.onClick;return s.a.createElement(l.b,{size:-1},s.a.createElement(c.a,{size:"small",onClick:function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"function"!==typeof i){e.next=4;break}return e.next=4,i(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),loading:n,disabled:n},t?s.a.createElement(s.a.Fragment,null,s.a.createElement(d,null)," Unstar"):s.a.createElement(s.a.Fragment,null,s.a.createElement(b,null)," Star")),s.a.createElement(u.a,{title:r},s.a.createElement(c.a,{size:"small",onClick:function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.preventDefault());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y.d.getNumberAbbreviation(r))))}))},1200:function(e,t,r){e.exports={Repository:"Style_Repository__2NMPM",repository:"Style_repository__3pIAD",title:"Style_title__31C8D",infoWrapper:"Style_infoWrapper__37-3Z",tag:"Style_tag__2zslt",repositoryMoreInfo:"Style_repositoryMoreInfo__1BugR",forkAmountWrapper:"Style_forkAmountWrapper__2GE5q"}},1201:function(e,t,r){},1202:function(e,t,r){},1203:function(e,t,r){"use strict";r.d(t,"a",(function(){return A}));var n=r(0),a=r.n(n),o=r(1200),i=r.n(o),s=r(36),l=r(1154),c=r(1190),u=r(353),p=r(1),f=r.n(p),m=r(4),d=r(351),h=r(1197),v=r(44);var b=a.a.memo((function(e){var t=Object(n.useState)(!1),r=Object(d.a)(t,2),o=r[0],i=r[1],s=Object(n.useState)(0),l=Object(d.a)(s,2),c=l[0],u=l[1],p=Object(n.useState)(!1),b=Object(d.a)(p,2),y=b[0],g=b[1],E=e.repository,w=E.username,k=E.name;Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.k.isStaredRepository({username:w,name:k});case 2:null!==(t=e.sent)&&(r=t.isStared,i(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(m.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.k.getRepositoryStarAmount({username:w,name:k});case 2:null!==(t=e.sent)&&(r=t.amount,u(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();g(!0),Promise.all([e(),t()]).finally((function(){return g(!1)}))}),[w,k]);var S=function(){var e=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!0),!o){e.next=8;break}return e.next=4,v.k.remove({username:w,name:k});case 4:null!==e.sent&&(i(!1),u((function(e){return e-1}))),e.next=12;break;case 8:return e.next=10,v.k.add({username:w,name:k});case 10:null!==e.sent&&(i(!1),u((function(e){return e+1})));case 12:g(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(h.a,{hasStared:o,loading:y,starAmount:c,onClick:S})})),y=r(1201),g=r.n(y),E=r(1173),w=r(1146);var k=a.a.memo((function(e){var t=e.forkAmount,r=e.loading;return a.a.createElement("div",{className:g.a.ForkAmount},a.a.createElement(w.a,{spinning:r},a.a.createElement(E.a,null)," ",t))})),S=r(352);var _=a.a.memo((function(e){var t=Object(n.useState)(0),r=Object(d.a)(t,2),o=r[0],i=r[1],s=Object(n.useState)(!1),l=Object(d.a)(s,2),c=l[0],u=l[1],p=e.repository,h=p.username,v=p.name;return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.forkAmount({username:h,name:v});case 2:null!==(t=e.sent)&&(r=t.amount,i(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();u(!0),e().finally((function(){return u(!1)}))}),[h,v]),a.a.createElement(k,{loading:c,forkAmount:o})})),j=r(1202),O=r.n(j),x=r(112),L=r(193),M=r(1209);var C=a.a.memo((function(e){var t=e.lastCommit,r=e.loading;return a.a.createElement("div",{className:O.a.LastUpdateInfo},a.a.createElement(w.a,{spinning:r},null===t?null:a.a.createElement("div",{className:O.a.text},a.a.createElement(M.a,null)," \u6700\u540e\u66f4\u65b0\u4e8e ",a.a.createElement(L.a,{title:x.b.parseTimestampToDate(t.timestamp)},a.a.createElement("span",{className:O.a.time},x.b.parseTimestampToDifference(t.timestamp))))))}));var P=a.a.memo((function(e){var t=Object(n.useState)(null),r=Object(d.a)(t,2),o=r[0],i=r[1],s=Object(n.useState)(!1),l=Object(d.a)(s,2),c=l[0],u=l[1],p=e.repository,h=p.username,b=p.name;return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.j.lastCommit({username:h,name:b});case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();u(!0),e().finally((function(){return u(!1)}))}),[h,b]),a.a.createElement(C,{lastCommit:o,loading:c})}));var A=a.a.memo((function(e){var t=e.repository,r=e.showUsername,n=t.username,o=t.name,p=t.isPublic,f=t.description;return a.a.createElement("div",{className:i.a.Repository},a.a.createElement(u.a,{to:s.Function.generateRepositoryCodeRoute({username:n,repositoryName:o})},a.a.createElement(l.a,{className:i.a.repository},a.a.createElement(l.a.Meta,{title:a.a.createElement("div",{className:i.a.title},a.a.createElement("div",{className:i.a.infoWrapper},a.a.createElement("div",{className:i.a.tag},a.a.createElement(c.a,{isPublic:p})),a.a.createElement("div",{className:i.a.name},r?"".concat(n,"/"):"",o)),a.a.createElement("div",{className:i.a.buttonWrapper},a.a.createElement(b,{repository:t}))),description:a.a.createElement("div",null,0===f.length?a.a.createElement("i",null,"\u6ca1\u6709\u63cf\u8ff0"):f)}),a.a.createElement("div",{className:i.a.repositoryMoreInfo},a.a.createElement("div",{className:i.a.forkAmountWrapper},a.a.createElement(_,{repository:t})),a.a.createElement("div",{className:i.a.updateInfoWrapper},a.a.createElement(P,{repository:t}))))))}))},1204:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(105),a=r(0),o=r.n(a),i=r(1205),s=r.n(i),l=r(1435),c=r(198),u=r(1203);var p=function(e){var t=e.repositories,r=e.loading,a=e.showUsername;return o.a.createElement(l.b,{className:s.a.RepositoryList,dataSource:Object(n.a)(t),loading:r,locale:{emptyText:o.a.createElement(c.a,{description:"\u6ca1\u6709\u4ed3\u5e93"})},renderItem:function(e){return o.a.createElement(u.a,{key:"".concat(e.username,"/").concat(e.name),repository:e,showUsername:a})}})}},1205:function(e,t,r){e.exports={RepositoryList:"Style_RepositoryList__3Ox2N",repositoryWrapper:"Style_repositoryWrapper__8uUYD",repository:"Style_repository__snu_K",tag:"Style_tag__3JMWU"}},1209:function(e,t,r){"use strict";var n=r(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},o=r(26),i=function(e,t){return n.createElement(o.a,Object.assign({},e,{ref:t,icon:a}))};i.displayName="ClockCircleOutlined";t.a=n.forwardRef(i)},1244:function(e,t,r){e.exports={Index:"Style_Index__3aRmg",alertWrapper:"Style_alertWrapper__1vm7c",description:"Style_description__Fp3il",memeWrapper:"Style_memeWrapper__2TD3N",meme:"Style_meme__gsx9j",repositoryWrapper:"Style_repositoryWrapper__mjMAI"}},1245:function(e,t,r){e.exports=r(1246)},1246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),o=s(a),i=s(r(12));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scrollListener=r.scrollListener.bind(r),r.eventListenerOptions=r.eventListenerOptions.bind(r),r.mousewheelListener=r.mousewheelListener.bind(r),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(r){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,r=this.getParentElement(e),n=void 0;if(this.props.useWindow){var a=document.documentElement||document.body.parentNode||document.body,o=void 0!==t.pageYOffset?t.pageYOffset:a.scrollTop;n=this.props.isReverse?o:this.calculateOffset(e,o)}else n=this.props.isReverse?r.scrollTop:e.scrollHeight-r.scrollTop-r.clientHeight;n<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=r.scrollHeight,this.beforeScrollTop=r.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),r=t.children,n=t.element,a=t.hasMore,i=(t.initialLoad,t.isReverse),s=t.loader,l=(t.loadMore,t.pageStart,t.ref),c=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));c.ref=function(t){e.scrollComponent=t,l&&l(t)};var u=[r];return a&&(s?i?u.unshift(s):u.push(s):this.defaultLoader&&(i?u.unshift(this.defaultLoader):u.push(this.defaultLoader))),o.default.createElement(n,c,u)}}]),t}(a.Component);l.propTypes={children:i.default.node.isRequired,element:i.default.node,hasMore:i.default.bool,initialLoad:i.default.bool,isReverse:i.default.bool,loader:i.default.node,loadMore:i.default.func.isRequired,pageStart:i.default.number,ref:i.default.func,getScrollParent:i.default.func,threshold:i.default.number,useCapture:i.default.bool,useWindow:i.default.bool},l.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=l,e.exports=t.default},1261:function(e,t,r){e.exports=r.p+"static/media/\u4f59\u88d5\u4f59\u88d5.4aa86cd4.jpg"},1420:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return M}));var n=r(1),a=r.n(n),o=r(105),i=r(4),s=r(17),l=r(19),c=r(33),u=r(32),p=r(0),f=r.n(p),m=r(44),d=r(1244),h=r.n(d),v=r(1245),b=r.n(v),y=r(1204),g=r(1158),E=r(338),w=r(1261),k=r.n(w);var S=function(e){var t=e.repositoryList,r=e.loadMore,n=e.loading,a=e.hasMore,o=e.onMemeDoubleClick,i=e.showMeme;return f.a.createElement("div",{className:h.a.Index},f.a.createElement("div",{className:h.a.alertWrapper},f.a.createElement(g.a,{type:"warning",message:"\u9879\u76ee\u4ecd\u5728\u5f00\u53d1\u4e2d",closable:!0,description:f.a.createElement("div",{className:h.a.description},f.a.createElement("div",{className:h.a.text},f.a.createElement("div",null,"\u672c\u9879\u76ee\u7531\u7ec3\u4e60\u65f6\u957f\u4e24\u5e74\u534a\u5e72\u5565\u5565\u4e0d\u884c\u5403\u996d\u7b2c\u4e00\u540d\u7684\u524d\u7aef\u5f00\u53d1\uff0c\u4e14\u540e\u7aef\u8fd0\u884c\u5728\u6bcf\u6708\u4ec5\u9700 9.5 \u5143\u4eba\u6c11\u5e01\u7684\u8fa3\u9e21\u670d\u52a1\u5668\u4e0a\u3002"),f.a.createElement("div",null,f.a.createElement("strong",null,"\u8bf7\u5927\u5bb6\u5907\u4efd\u597d\u81ea\u5df1\u7684\u4ee3\u7801"),"\uff0c\u51fa\u73b0 BUG \u8bf7",f.a.createElement(E.a,{href:"https://github.com/Soulike/Gardenia/issues"},"\u63d0 Issue"),"\u3002"),f.a.createElement("div",null,"\u7531\u4e8e\u4ecd\u5904\u4e8e\u5f00\u53d1\u72b6\u6001\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e0d\u517c\u5bb9\u66f4\u6539\u3002",f.a.createElement("strong",null,"\u51fa\u73b0\u95ee\u9898\u8bf7\u5148\u5c1d\u8bd5\u6e05\u9664\u7f13\u5b58\u5237\u65b0\u9875\u9762"),"\u3002"),f.a.createElement("div",null,"\u8bf7\u5404\u4f4d\u591a\u62c5\u5f85\uff0c\u7528\u6b63\u5e38\u7684\u59ff\u52bf\u4f7f\u7528\u672c\u5e73\u53f0\uff0c\u4e0d\u80dc\u611f\u8c22",f.a.createElement("span",{role:"img","aria-label":"emoji","aria-labelledby":"emoji"},"\ud83d\ude00"),"\u3002")),i?f.a.createElement("div",{className:h.a.memeWrapper,onDoubleClick:o},f.a.createElement("img",{src:k.a,alt:"meme",className:h.a.meme})):f.a.createElement("div",{className:h.a.memeWrapper})),banner:!0}),f.a.createElement(g.a,{type:"info",message:"Git \u81ea\u52a8\u4fdd\u5b58\u5bc6\u7801\u7684\u65b9\u6cd5",description:f.a.createElement("div",{className:h.a.text},f.a.createElement("div",null,"\u5728\u547d\u4ee4\u884c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53ef\u81ea\u52a8\u4fdd\u5b58\u5bc6\u7801\uff0c\u514d\u53bb\u6bcf\u6b21\u8f93\u5165\u5bc6\u7801\u7684\u9ebb\u70e6\u3002"),f.a.createElement("code",null,"git config --global credential.helper cache && git config --global credential.helper 'cache --timeout=31556926'"),f.a.createElement("div",null,"SSH \u8fde\u63a5\u65b9\u5f0f\u4ecd\u5728\u5f00\u53d1\u4e2d\uff0c\u7ed9\u5927\u5bb6\u5e26\u6765\u7684\u4e0d\u4fbf\u6df1\u8868\u6b49\u610f\u3002")),banner:!0})),f.a.createElement(b.a,{loadMore:r,initialLoad:!1,pageStart:1,hasMore:a},f.a.createElement(y.a,{repositories:t,loading:n,showUsername:!0})))},_=r(228),j=r(1194),O=r.n(j),x=r(79),L=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).setStatePromise=Object(x.promisify)(n.setState),n.forceUpdatePromise=Object(x.promisify)(n.forceUpdate),n.setTitle=function(){document.title=_.a.NAME},n.loadMoreRepositories=function(){var e=Object(i.a)(a.a.mark((function e(t){var i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.state.repositories,n.setState({loading:!0}),e.next=4,m.i.getRepositories((t-1)*r.PAGE_SIZE,t*r.PAGE_SIZE);case 4:if(s=e.sent,n.setState({loading:!1}),null===s){e.next=13;break}if(i.push.apply(i,Object(o.a)(s)),!(s.length<r.PAGE_SIZE)){e.next=11;break}return e.next=11,n.setStatePromise({hasMore:!1});case 11:return e.next=13,n.forceUpdatePromise();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onMemeDoubleClickFactory=function(){var e=0,t=new Audio(O.a.join("","mp3","rikairikai.mp3")),r=new Audio(O.a.join("","mp3","subeteorikaishidawa.mp3")),o=new Audio(O.a.join("","mp3","arikairikairikairikairikai.mp3")),s=new Audio(O.a.join("","mp3","wurusaiwurusaiwurusai.mp3")),l=new Audio(O.a.join("","mp3","damaraseteitadakimasu.mp3"));return Object(i.a)(a.a.mark((function i(){return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(1!==e){a.next=5;break}return a.next=3,t.play();case 3:a.next=24;break;case 5:if(2!==e){a.next=10;break}return a.next=8,r.play();case 8:a.next=24;break;case 10:if(3!==e){a.next=15;break}return a.next=13,o.play();case 13:a.next=24;break;case 15:if(!(e>3&&e<6)){a.next=20;break}return a.next=18,s.play();case 18:a.next=24;break;case 20:if(6!==e){a.next=24;break}return a.next=23,l.play();case 23:l.onended=function(){return n.setState({showMeme:!1})};case 24:e++;case 25:case"end":return a.stop()}}),i)})))},n.state={repositories:[],loading:!0,hasMore:!0,showMeme:!0},n}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),e.next=3,this.loadMoreRepositories(1);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repositories,r=e.hasMore,n=e.loading,a=e.showMeme;return f.a.createElement(S,{onMemeDoubleClick:this.onMemeDoubleClickFactory(),repositoryList:t,loadMore:this.loadMoreRepositories,hasMore:r,loading:n,showMeme:a})}}]),r}(p.PureComponent);L.PAGE_SIZE=10;var M=L}}]);
//# sourceMappingURL=12.39f149f0.chunk.js.map