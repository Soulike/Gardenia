(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[13],{1126:function(e,t,n){"use strict";var a=n(0),r=n(9),o=n.n(r),c=n(63),l=n(121);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},u=function(e){return a.createElement(l.a,null,(function(t){var n,r,c,l=t.getPrefixCls,u=e.prefixCls,p=e.className,m=e.hoverable,f=void 0===m||m,d=s(e,["prefixCls","className","hoverable"]),v=l("card",u),b=o()("".concat(v,"-grid"),p,(n={},r="".concat(v,"-grid-hoverable"),c=f,r in n?Object.defineProperty(n,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[r]=c,n));return a.createElement("div",i({},d,{className:b}))}))};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},f=function(e){return a.createElement(l.a,null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,c=e.className,l=e.avatar,i=e.title,s=e.description,u=m(e,["prefixCls","className","avatar","title","description"]),f=n("card",r),d=o()("".concat(f,"-meta"),c),v=l?a.createElement("div",{className:"".concat(f,"-meta-avatar")},l):null,b=i?a.createElement("div",{className:"".concat(f,"-meta-title")},i):null,y=s?a.createElement("div",{className:"".concat(f,"-meta-description")},s):null,g=b||y?a.createElement("div",{className:"".concat(f,"-meta-detail")},b,y):null;return a.createElement("div",p({},u,{className:d}),v,g)}))},d=n(155),v=n(1282).a,b=n(1248).a,y=n(43);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return w}));var N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function k(e){return e.map((function(t,n){return a.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},a.createElement("span",null,t))}))}var w=function(e){function t(){var e;return O(this,t),(e=C(this,_(t).apply(this,arguments))).onTabChange=function(t){e.props.onTabChange&&e.props.onTabChange(t)},e.renderCard=function(t){var n,r,l,i=t.getPrefixCls,s=e.props,u=s.prefixCls,p=s.className,m=s.extra,f=s.headStyle,y=void 0===f?{}:f,g=s.bodyStyle,O=void 0===g?{}:g,j=s.title,C=s.loading,_=s.bordered,S=void 0===_||_,w=s.size,x=void 0===w?"default":w,P=s.type,T=s.cover,I=s.actions,B=s.tabList,H=s.children,A=s.activeTabKey,D=s.defaultActiveTabKey,R=s.tabBarExtraContent,K=N(s,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent"]),W=i("card",u),z=o()(W,p,(E(n={},"".concat(W,"-loading"),C),E(n,"".concat(W,"-bordered"),S),E(n,"".concat(W,"-hoverable"),e.getCompatibleHoverable()),E(n,"".concat(W,"-contain-grid"),e.isContainGrid()),E(n,"".concat(W,"-contain-tabs"),B&&B.length),E(n,"".concat(W,"-").concat(x),"default"!==x),E(n,"".concat(W,"-type-").concat(P),!!P),n)),L=0===O.padding||"0px"===O.padding?{padding:24}:void 0,M=a.createElement("div",{className:"".concat(W,"-loading-content"),style:L},a.createElement(v,{gutter:8},a.createElement(b,{span:22},a.createElement("div",{className:"".concat(W,"-loading-block")}))),a.createElement(v,{gutter:8},a.createElement(b,{span:8},a.createElement("div",{className:"".concat(W,"-loading-block")})),a.createElement(b,{span:15},a.createElement("div",{className:"".concat(W,"-loading-block")}))),a.createElement(v,{gutter:8},a.createElement(b,{span:6},a.createElement("div",{className:"".concat(W,"-loading-block")})),a.createElement(b,{span:18},a.createElement("div",{className:"".concat(W,"-loading-block")}))),a.createElement(v,{gutter:8},a.createElement(b,{span:13},a.createElement("div",{className:"".concat(W,"-loading-block")})),a.createElement(b,{span:9},a.createElement("div",{className:"".concat(W,"-loading-block")}))),a.createElement(v,{gutter:8},a.createElement(b,{span:4},a.createElement("div",{className:"".concat(W,"-loading-block")})),a.createElement(b,{span:3},a.createElement("div",{className:"".concat(W,"-loading-block")})),a.createElement(b,{span:16},a.createElement("div",{className:"".concat(W,"-loading-block")})))),G=void 0!==A,J=(E(r={},G?"activeKey":"defaultActiveKey",G?A:D),E(r,"tabBarExtraContent",R),r),U=B&&B.length?a.createElement(d.a,h({},J,{className:"".concat(W,"-head-tabs"),size:"large",onChange:e.onTabChange}),B.map((function(e){return a.createElement(d.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(j||m||U)&&(l=a.createElement("div",{className:"".concat(W,"-head"),style:y},a.createElement("div",{className:"".concat(W,"-head-wrapper")},j&&a.createElement("div",{className:"".concat(W,"-head-title")},j),m&&a.createElement("div",{className:"".concat(W,"-extra")},m)),U));var F=T?a.createElement("div",{className:"".concat(W,"-cover")},T):null,V=a.createElement("div",{className:"".concat(W,"-body"),style:O},C?M:H),q=I&&I.length?a.createElement("ul",{className:"".concat(W,"-actions")},k(I)):null,Y=Object(c.a)(K,["onTabChange","noHovering","hoverable"]);return a.createElement("div",h({},Y,{className:z}),l,F,V,q)},e}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){"noHovering"in this.props&&(Object(y.a)(!this.props.noHovering,"Card","`noHovering` is deprecated, you can remove it safely or use `hoverable` instead."),Object(y.a)(!!this.props.noHovering,"Card","`noHovering={false}` is deprecated, use `hoverable` instead."))}},{key:"getCompatibleHoverable",value:function(){var e=this.props,t=e.noHovering,n=e.hoverable;return"noHovering"in this.props?!t||n:!!n}},{key:"isContainGrid",value:function(){var e;return a.Children.forEach(this.props.children,(function(t){t&&t.type&&t.type===u&&(e=!0)})),e}},{key:"render",value:function(){return a.createElement(l.a,null,this.renderCard)}}])&&j(n.prototype,r),i&&j(n,i),t}(a.Component);w.Grid=u,w.Meta=f},1128:function(e,t,n){"use strict";n(62),n(1129),n(456),n(1125)},1129:function(e,t,n){},1144:function(e,t,n){e.exports={InputTip:"Style_InputTip__KsPY_"}},1145:function(e,t,n){e.exports={DefaultAvatar:"Style_DefaultAvatar__1F6EL",img:"Style_img__2bePj"}},1146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1144),c=n.n(o);var l=r.a.memo((function(e){var t=e.children;return r.a.createElement("div",{className:c.a.InputTip},t)}));n.d(t,"a",(function(){return l}))},1147:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1145),c=n.n(o),l=n(308),i=n.n(l);var s=r.a.memo((function(){return r.a.createElement("div",{className:c.a.DefaultAvatar},r.a.createElement("img",{src:i.a,alt:"default_avatar",className:c.a.img}))}));n.d(t,"a",(function(){return s}))},1156:function(e,t,n){e.exports={SettingsTitle:"Style_SettingsTitle__j1tWe"}},1157:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(0),r=n(138),o=n(121),c=n(43);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=function(e){function t(){var e;return s(this,t),(e=p(this,m(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var n=t.getPrefixCls,o=e.props,c=o.prefixCls,l=d(o,["prefixCls"]);delete l.title;var s=n("popover",c);return a.createElement(r.a,i({},l,{prefixCls:s,ref:e.saveTooltip,overlay:e.getOverlay(s)}))},e}var n,l,v;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(l=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,n=t.title,r=t.content;return Object(c.a)(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),a.createElement("div",null,n&&a.createElement("div",{className:"".concat(e,"-title")},n),a.createElement("div",{className:"".concat(e,"-inner-content")},r))}},{key:"render",value:function(){return a.createElement(o.a,null,this.renderPopover)}}])&&u(n.prototype,l),v&&u(n,v),t}(a.Component);v.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}}},1162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1156),c=n.n(o);var l=r.a.memo((function(e){var t=e.children;return r.a.createElement("h2",{className:c.a.SettingsTitle},t)}));n.d(t,"a",(function(){return l}))},1220:function(e,t,n){e.exports={Collaborators:"Style_Collaborators__26mkc",title:"Style_title__3vU-l",alertWrapper:"Style_alertWrapper__2KUmV"}},1221:function(e,t,n){e.exports={AddCollaborationButton:"Style_AddCollaborationButton__3jp8B",loadingSpin:"Style_loadingSpin__2V5_M"}},1222:function(e,t,n){},1223:function(e,t,n){e.exports={CollaboratorCard:"Style_CollaboratorCard__24ydr",cardContent:"Style_cardContent__Se2bf",basicInfo:"Style_basicInfo__yeHst",avatarWrapper:"Style_avatarWrapper__2UzNm",username:"Style_username__31JOW",nickname:"Style_nickname__RiOx6"}},1252:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(21),o=n(40),c=n(39),l=n(41),i=n(0),s=n.n(i),u=(n(457),n(190)),p=n(1220),m=n.n(p),f=n(1162),d=(n(78),n(7)),v=n(3),b=n.n(v),y=n(5),g=(n(460),n(1157)),h=(n(153),n(46)),E=(n(1130),n(1131)),O=(n(102),n(11)),j=(n(154),n(90)),C=n(1221),_=n.n(C),S=n(309),N=n.n(S),k=n(1146);var w=s.a.memo((function(e){var t=e.code,n=e.loading,a=e.onClick,r=e.onCopy;return s.a.createElement(g.a,{trigger:"click",title:"\u9080\u8bf7\u7801",placement:"bottomRight",content:s.a.createElement("div",{className:_.a.AddCollaborationButton},n?s.a.createElement("div",{className:_.a.loadingSpin},s.a.createElement(j.a,null)):s.a.createElement("div",null,s.a.createElement(E.a,{value:t,addonAfter:s.a.createElement(N.a,{text:t,onCopy:r},s.a.createElement(O.a,{type:"copy"}))}),s.a.createElement(k.a,null,"\u9080\u8bf7\u7801\u6709\u6548\u671f 10 \u5206\u949f\uff0c\u4e14\u53ea\u53ef\u4f7f\u7528\u4e00\u6b21\u3002")))},s.a.createElement(h.a,{type:"primary",onClick:a},s.a.createElement(O.a,{type:"plus"}),"\u6dfb\u52a0"))})),x=n(77),P=n(118),T=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).onClick=Object(y.a)(b.a.mark((function e(){var t,a,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,n.setState({loading:!0}),e.next=4,x.b.generateCode({username:a,name:r});case 4:null!==(o=e.sent)&&(c=o.code,n.setState({code:c,loading:!1}));case 6:case"end":return e.stop()}}),e)}))),n.onCopy=function(e,t){t?d.a.success({message:"\u9080\u8bf7\u7801\u5df2\u6210\u529f\u590d\u5236"}):d.a.warning({message:"\u9080\u8bf7\u7801\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"})},n.state={code:"",loading:!1},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.code,n=e.loading;return s.a.createElement(w,{code:t,loading:n,onClick:this.onClick,onCopy:this.onCopy})}}]),t}(i.PureComponent),I=Object(P.f)(T),B=(n(1134),n(1133)),H=(n(305),n(91)),A=n(1222),D=n.n(A),R=(n(1128),n(1126)),K=(n(458),n(222)),W=(n(461),n(298)),z=n(1223),L=n.n(z),M=n(1147),G=n(27),J=n(45);var U=s.a.memo((function(e){var t=e.profile,n=t.username,a=t.nickname,r=t.avatar,o=e.onRemoveButtonClick,c=e.loading;return s.a.createElement("div",{className:L.a.CollaboratorCard},s.a.createElement(R.a,{bordered:!1},s.a.createElement("div",{className:L.a.cardContent},s.a.createElement(G.b,{to:J.b.generatePersonalCenterRoute({username:n}),target:"_blank",className:L.a.basicInfo},s.a.createElement("div",{className:L.a.avatarWrapper},r?s.a.createElement(W.a,{src:r,shape:"square",size:48}):s.a.createElement(M.a,null)),s.a.createElement("div",{className:L.a.nickname},a),s.a.createElement("div",{className:L.a.username},n)),s.a.createElement(K.a,{disabled:c,title:s.a.createElement(s.a.Fragment,null,"\u786e\u8ba4\u53d6\u6d88 ",s.a.createElement("b",null,n)," \u7684\u5408\u4f5c\u8005\u8eab\u4efd\uff1f"),onConfirm:o},s.a.createElement(h.a,{type:"danger",disabled:c,loading:c},"\u79fb\u9664")))))})),F=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).onRemoveButtonClick=Object(y.a)(b.a.mark((function e(){var t,a,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,a=t.profile.username,r=t.match.params,o=r.username,c=r.repository,n.setState({loading:!0}),e.next=4,x.b.remove({username:o,name:c},{username:a});case 4:null!==e.sent&&(d.a.success({message:"\u79fb\u9664\u5408\u4f5c\u8005\u6210\u529f"}),setTimeout((function(){window.location.reload()}),1e3)),n.setState({loading:!1});case 7:case"end":return e.stop()}}),e)}))),n.state={loading:!1},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.loading,t=this.props.profile;return s.a.createElement(U,{profile:t,loading:e,onRemoveButtonClick:this.onRemoveButtonClick})}}]),t}(i.PureComponent),V=Object(P.f)(F);var q=s.a.memo((function(e){var t=e.profiles,n=e.loading;return s.a.createElement("div",{className:D.a.ProfileList},s.a.createElement(B.a,{locale:{emptyText:s.a.createElement(H.a,{description:"\u6ca1\u6709\u7528\u6237"})},loading:n,dataSource:t,renderItem:function(e){return s.a.createElement(V,{profile:e})}}))})),Y=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).loadCollaborators=Object(y.a)(b.a.mark((function e(){var t,a,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,e.next=3,x.b.getCollaborators({username:a,name:r});case 3:null!==(o=e.sent)&&(c=o.collaborators,n.setState({profiles:c}));case 5:case"end":return e.stop()}}),e)}))),n.state={profiles:[],loading:!1},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadCollaborators();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.profiles,n=e.loading;return s.a.createElement(q,{profiles:t,loading:n})}}]),t}(i.PureComponent),Q=Object(P.f)(Y);var X=s.a.memo((function(){return s.a.createElement("div",{className:m.a.Collaborators},s.a.createElement(f.a,null,s.a.createElement("div",{className:m.a.title},"\u5408\u4f5c\u8005",s.a.createElement(I,null))),s.a.createElement("div",{className:m.a.alertWrapper},s.a.createElement(u.a,{type:"info",message:"\u4ed3\u5e93\u5408\u4f5c\u8005\u53ef\u53d6\u5f97\u548c\u521b\u5efa\u8005\u76f8\u540c\u7684\u4ed3\u5e93\u8bbf\u95ee\u6743\u9650\u3002",showIcon:!0})),s.a.createElement(Q,null))})),Z=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(X,null)}}]),t}(i.PureComponent);n.d(t,"default",(function(){return Z}))}}]);
//# sourceMappingURL=13.762c9db7.chunk.js.map