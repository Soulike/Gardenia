(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[14],{1004:function(e,t,a){e.exports={DefaultAvatar:"Style_DefaultAvatar__1F6EL",img:"Style_img__2bePj"}},1005:function(e,t,a){"use strict";a(107),a(1006)},1006:function(e,t,a){},1007:function(e,t,a){e.exports={GroupList:"Style_GroupList__1GfzT",groupWrapper:"Style_groupWrapper__2nh8Q",groupName:"Style_groupName__1jfy7"}},1015:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1004),s=a.n(o),c=a(289),i=a.n(c);var l=r.a.memo((function(){return r.a.createElement("div",{className:s.a.DefaultAvatar},r.a.createElement("img",{src:i.a,alt:"default_avatar",className:s.a.img}))}));a.d(t,"a",(function(){return l}))},1016:function(e,t,a){"use strict";a(963);var n=a(961),r=(a(965),a(964)),o=(a(977),a(979)),s=(a(282),a(22)),c=a(956),i=(a(967),a(120)),l=a(0),u=a.n(l),p=a(1007),m=a.n(p),f=a(39),d=a(91);var v=function(e){var t=e.groups,a=e.loading,l=e.administratingGroups,p=l?l.map((function(e){return e.id})):[];return u.a.createElement(n.a,{className:m.a.GroupList,loading:a,locale:{emptyText:u.a.createElement(i.a,{description:"\u6ca1\u6709\u5c0f\u7ec4"})},dataSource:Object(c.a)(t),renderItem:function(e){var t=e.id,a=e.name;return u.a.createElement(f.b,{className:m.a.groupWrapper,target:"_blank",rel:"noreferrer noopener",to:d.b.generateGroupRoute({id:t.toString()})},u.a.createElement(r.a,{className:m.a.group,hoverable:!0,size:"small"},u.a.createElement(r.a.Meta,{avatar:u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{type:"team"})," ",t),title:u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:m.a.groupName},a),p.includes(t)?u.a.createElement(o.a,{color:"blue"},"\u7ba1\u7406\u5458"):null)})))}})};a.d(t,"a",(function(){return v}))},1018:function(e,t,a){"use strict";var n=a(0),r=a(9),o=a(84),s=a(15),c=a.n(s),i=a(22),l=a(133);var u=a(40);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(){}a.d(t,"a",(function(){return h}));var h=function(e){function t(e){var a,s,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s=this,l=v(t).call(this,e),(a=!l||"object"!==p(l)&&"function"!==typeof l?b(s):l).handleClose=function(e){e.preventDefault();var t=r.findDOMNode(b(a));t.style.height="".concat(t.offsetHeight,"px"),t.style.height="".concat(t.offsetHeight,"px"),a.setState({closing:!0}),(a.props.onClose||y)(e)},a.animationEnd=function(){a.setState({closing:!1,closed:!0}),(a.props.afterClose||y)()},a.renderAlert=function(e){var t,r=e.getPrefixCls,s=a.props,l=s.description,u=s.prefixCls,p=s.message,d=s.closeText,v=s.banner,b=s.className,g=void 0===b?"":b,y=s.style,h=s.icon,E=a.props,_=E.closable,P=E.type,S=E.showIcon,N=E.iconType,x=a.state,O=x.closing,T=x.closed,k=r("alert",u);S=!(!v||void 0!==S)||S,P=v&&void 0===P?"warning":P||"info";var w="filled";if(!N){switch(P){case"success":N="check-circle";break;case"info":N="info-circle";break;case"error":N="close-circle";break;case"warning":N="exclamation-circle";break;default:N="default"}l&&(w="outlined")}d&&(_=!0);var j=c()(k,"".concat(k,"-").concat(P),(f(t={},"".concat(k,"-closing"),O),f(t,"".concat(k,"-with-description"),!!l),f(t,"".concat(k,"-no-icon"),!S),f(t,"".concat(k,"-banner"),!!v),f(t,"".concat(k,"-closable"),_),t),g),G=_?n.createElement("button",{type:"button",onClick:a.handleClose,className:"".concat(k,"-close-icon"),tabIndex:0},d?n.createElement("span",{className:"".concat(k,"-close-text")},d):n.createElement(i.a,{type:"close"})):null,A=function(e){return Object.keys(e).reduce((function(t,a){return"data-"!==a.substr(0,5)&&"aria-"!==a.substr(0,5)&&"role"!==a||"data-__"===a.substr(0,7)||(t[a]=e[a]),t}),{})}(a.props),C=h&&(n.isValidElement(h)?n.cloneElement(h,{className:c()("".concat(k,"-icon"),f({},h.props.className,h.props.className))}):n.createElement("span",{className:"".concat(k,"-icon")},h))||n.createElement(i.a,{className:"".concat(k,"-icon"),type:N,theme:w});return T?null:n.createElement(o.default,{component:"",showProp:"data-show",transitionName:"".concat(k,"-slide-up"),onEnd:a.animationEnd},n.createElement("div",m({"data-show":!O,className:j,style:y},A),S?C:null,n.createElement("span",{className:"".concat(k,"-message")},p),n.createElement("span",{className:"".concat(k,"-description")},l),G))},Object(u.a)(!("iconType"in e),"Alert","`iconType` is deprecated. Please use `icon` instead."),a.state={closing:!1,closed:!1},a}var a,s,h;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),a=t,(s=[{key:"render",value:function(){return n.createElement(l.a,null,this.renderAlert)}}])&&d(a.prototype,s),h&&d(a,h),t}(n.Component)},1057:function(e,t,a){e.exports={PersonalCenter:"Style_PersonalCenter__2IT0f",profileWrapper:"Style_profileWrapper__10VU8",tabWrapper:"Style_tabWrapper__1H1eE"}},1058:function(e,t,a){e.exports={Profile:"Style_Profile__HS71R",avatarWrapper:"Style_avatarWrapper__1dgAK",avatar:"Style_avatar__1iXcS",avatarImg:"Style_avatarImg__39o9R",nameWrapper:"Style_nameWrapper__2Pm-Q",username:"Style_username__35TJe",nickname:"Style_nickname__Us9QU",divideLine:"Style_divideLine__qpBpQ",editButtonWrapper:"Style_editButtonWrapper__2kGIv",infoWrapper:"Style_infoWrapper__1sO8j",info:"Style_info__IZjki",icon:"Style_icon__3mgiP"}},1059:function(e,t,a){e.exports={Repositories:"Style_Repositories__1Vrql",tools:"Style_tools__Vr4KW",buttonWrapper:"Style_buttonWrapper__XrdYo"}},1060:function(e,t,a){e.exports={Groups:"Style_Groups__3NINE",tools:"Style_tools__1BGw5"}},1284:function(e,t,a){"use strict";a.r(t);var n=a(36),r=a(48),o=a(89),s=a(88),c=a(90),i=a(0),l=a.n(i),u=(a(982),a(985)),p=a(1057),m=a.n(p),f=a(4),d=a.n(f),v=(a(282),a(22)),b=(a(430),a(134)),g=a(1058),y=a.n(g),h=a(91),E=a(39),_=a(1015),P=h.a.PAGE_ID,S=h.a.PAGE_ID_TO_ROUTE;var N=l.a.memo((function(e){var t=e.profile,a=t.username,n=t.nickname,r=t.email,o=t.avatar;return l.a.createElement("div",{className:y.a.Profile},l.a.createElement("div",{className:y.a.avatarWrapper},l.a.createElement("div",{className:y.a.avatar},o?l.a.createElement("img",{src:o,alt:"avatar",className:y.a.avatarImg}):l.a.createElement(_.a,null))),l.a.createElement("div",{className:y.a.nameWrapper},l.a.createElement("div",{className:y.a.username},a),l.a.createElement("div",{className:y.a.nickname},n)),l.a.createElement("div",{className:y.a.divideLine}),l.a.createElement("div",{className:y.a.editButtonWrapper},l.a.createElement(E.b,{to:S[P.SETTING.SETTING]},l.a.createElement(b.a,{block:!0},"\u7f16\u8f91"))),l.a.createElement("div",{className:y.a.infoWrapper},l.a.createElement("div",{className:y.a.info},l.a.createElement(v.a,{type:"mail",className:y.a.icon}),l.a.createElement("a",{href:"mailto:".concat(r)},r))))})),x=a(102),O=a(210),T=a(283),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).loadProfile=function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.props.match.params.username,n.next=3,d.a.awrap(O.c.get({username:e}));case 3:null!==(t=n.sent)&&a.setState({profile:t});case 5:case"end":return n.stop()}}))},a.state={profile:new T.d("","","example@example.com","")},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(this.loadProfile());case 2:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.profile;return l.a.createElement(N,{profile:e})}}]),t}(i.PureComponent),w=Object(x.f)(k);var j=l.a.memo((function(e){var t=e.tabs,a=e.activeTabKey,n=e.onTabChange;return l.a.createElement("div",{className:m.a.PersonalCenter},l.a.createElement("div",{className:m.a.profileWrapper},l.a.createElement(w,null)),l.a.createElement("div",{className:m.a.tabWrapper},l.a.createElement(u.a,{animated:!1,activeKey:a,onChange:n},t.map((function(e){var t=e.key,a=e.title,n=e.component;return l.a.createElement(u.a.TabPane,{key:t,tab:a},n)})))))})),G=a(287),A=a.n(G),C=a(956),W=a(1059),I=a.n(W),R=a(994),D=a(3);var B=function(e){var t=e.repositories,a=e.loading,n=e.onNextPageButtonClick,r=e.onPrevPageButtonClick,o=e.hasNextPage,s=e.hasPrevPage;return l.a.createElement("div",{className:I.a.Repositories},l.a.createElement("div",{className:I.a.tools},l.a.createElement(E.b,{to:D.PAGE_ID_TO_ROUTE[D.PAGE_ID.CREATE_REPOSITORY],target:"_blank",rel:"noreferrer noopener"},l.a.createElement(b.a,{type:"primary"},l.a.createElement(v.a,{type:"plus"}),"\u6dfb\u52a0\u4ed3\u5e93"))),l.a.createElement(R.a,{repositories:t,loading:a,showUsername:!1}),l.a.createElement("div",{className:I.a.buttonWrapper},o||s?l.a.createElement(b.a.Group,null,l.a.createElement(b.a,{onClick:r,disabled:!s},"\u4e0a\u4e00\u9875"),l.a.createElement(b.a,{onClick:n,disabled:!o},"\u4e0b\u4e00\u9875")):null))},K=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).loadRepositories=function(){var e,n,r;return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=a.props.match.params.username,n=a.state.pageNumber,a.setState({loading:!0}),o.next=5,d.a.awrap(O.d.getRepositories((n-1)*t.PAGE_SIZE,n*t.PAGE_SIZE,e));case 5:null!==(r=o.sent)&&a.setState({repositories:Object(C.a)(r)}),a.setState({loading:!1});case 8:case"end":return o.stop()}}))},a.onNextPageButtonClick=function(){var e,n,r;return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=a.state,n=e.repositories,!e.hasNextPage||n.length!==t.PAGE_SIZE){o.next=6;break}return o.next=4,d.a.awrap(a.setToNextPage());case 4:return o.next=6,d.a.awrap(a.loadRepositories());case 6:if((r=a.state.repositories).length<t.PAGE_SIZE&&a.setState({hasNextPage:!1}),0!==r.length){o.next=14;break}return a.setState({repositories:n}),o.next=12,d.a.awrap(a.setToPrevPage());case 12:o.next=16;break;case 14:a.setState({hasPrevPage:!0}),a.scrollToTop();case 16:case"end":return o.stop()}}))},a.onPrevPageButtonClick=function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((e=a.state.pageNumber)>1)){t.next=8;break}return t.next=4,d.a.awrap(a.setToPrevPage());case 4:return t.next=6,d.a.awrap(a.loadRepositories());case 6:a.setState({hasNextPage:!0}),a.scrollToTop();case 8:2===e&&a.setState({hasPrevPage:!1});case 9:case"end":return t.stop()}}))},a.setToNextPage=function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=a.state.pageNumber;a.setState({pageNumber:t+1},e)})));case 1:case"end":return e.stop()}}))},a.setToPrevPage=function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=a.state.pageNumber;t>0?a.setState({pageNumber:t-1},e):e()})));case 1:case"end":return e.stop()}}))},a.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},a.state={repositories:[],loading:!0,pageNumber:1,hasNextPage:!0,hasPrevPage:!1},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(this.loadRepositories());case 2:this.state.repositories.length<t.PAGE_SIZE&&this.setState({hasNextPage:!1});case 4:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.repositories,a=e.loading,n=e.hasNextPage,r=e.hasPrevPage;return l.a.createElement(B,{repositories:t,loading:a,onPrevPageButtonClick:this.onPrevPageButtonClick,onNextPageButtonClick:this.onNextPageButtonClick,hasNextPage:n,hasPrevPage:r})}}]),t}(i.PureComponent);K.PAGE_SIZE=10;var U=Object(x.f)(K),L=(a(1005),a(1018)),M=a(1060),Z=a.n(M),F=a(1016);var H=l.a.memo((function(e){var t=e.groups,a=e.loading,n=e.administratingGroups;return l.a.createElement("div",{className:Z.a.Groups},l.a.createElement("div",{className:Z.a.tools},l.a.createElement(L.a,{type:"info",showIcon:!0,message:"\u53ef\u7531\u5c0f\u7ec4\u7ba1\u7406\u5458\u9080\u8bf7\u8fdb\u7ec4"}),l.a.createElement(E.b,{to:D.PAGE_ID_TO_ROUTE[D.PAGE_ID.CREATE_GROUP],target:"_blank"},l.a.createElement(b.a,{type:"primary"},l.a.createElement(v.a,{type:"plus"}),"\u65b0\u5efa\u5c0f\u7ec4"))),l.a.createElement(F.a,{groups:t,loading:a,administratingGroups:n}))})),Q=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).loadGroups=function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.props.match.params.username,a.setState({loading:!0}),n.next=4,d.a.awrap(O.a.getGroups({username:e}));case 4:null!==(t=n.sent)&&a.setState({groups:Object(C.a)(t)}),a.setState({loading:!1});case 7:case"end":return n.stop()}}))},a.loadAdministratingGroups=function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.props.match.params.username,a.setState({loading:!0}),n.next=4,d.a.awrap(O.a.getAdministratingGroups({username:e}));case 4:null!==(t=n.sent)&&a.setState({administratingGroups:Object(C.a)(t)}),a.setState({loading:!1});case 7:case"end":return n.stop()}}))},a.state={groups:[],administratingGroups:[],loading:!0},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(Promise.all([this.loadGroups(),this.loadAdministratingGroups()]));case 2:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.groups,a=e.loading,n=e.administratingGroups;return l.a.createElement(H,{groups:t,loading:a,administratingGroups:n})}}]),t}(i.PureComponent),V=Object(x.f)(Q),J=a(169),Y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).setTitle=function(){var e=a.props.match.params.username;document.title="".concat(e," - ").concat(J.a.NAME)},a.setActiveTabKey=function(){var e=a.props.location.search,n=A.a.decode(e.slice(1)).tab;"undefined"===typeof n?a.setState({activeTabKey:t.TABS[0].key}):Array.isArray(n)?a.setState({activeTabKey:n[0]}):a.setState({activeTabKey:n})},a.onTabChange=function(e){a.props.history.push("?tab=".concat(e)),a.setState({activeTabKey:e})},a.state={activeTabKey:""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setActiveTabKey(),this.setTitle()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.location.search!==e.location.search&&this.setActiveTabKey()}},{key:"render",value:function(){var e=this.state.activeTabKey;return l.a.createElement(j,{tabs:t.TABS,activeTabKey:e,onTabChange:this.onTabChange})}}]),t}(i.PureComponent);Y.TABS=[{key:"repositories",title:"\u4ed3\u5e93",component:l.a.createElement(U,null)},{key:"groups",title:"\u5c0f\u7ec4",component:l.a.createElement(V,null)}];var q=Object(x.f)(Y);a.d(t,"default",(function(){return q}))},987:function(e,t,a){"use strict";a(977);var n=a(979),r=a(996),o=a(0),s=a.n(o);var c=s.a.memo((function(e){var t=e.isPublic,a=Object(r.a)(e,["isPublic"]);return t?s.a.createElement(n.a,Object.assign({color:"blue"},a),"\u516c\u5171"):s.a.createElement(n.a,Object.assign({color:"gold"},a),"\u79c1\u4eba")}));a.d(t,"a",(function(){return c}))},990:function(e,t,a){e.exports={RepositoryList:"Style_RepositoryList__3Ox2N",repositoryWrapper:"Style_repositoryWrapper__8uUYD"}},994:function(e,t,a){"use strict";a(963);var n=a(961),r=(a(965),a(964)),o=(a(967),a(120)),s=a(956),c=a(0),i=a.n(c),l=a(990),u=a.n(l),p=a(39),m=a(91),f=a(987);var d=function(e){var t=e.repositories,a=e.loading,c=e.showUsername;return i.a.createElement(n.a,{className:u.a.RepositoryList,dataSource:Object(s.a)(t),loading:a,locale:{emptyText:i.a.createElement(o.a,{description:"\u6ca1\u6709\u4ed3\u5e93"})},renderItem:function(e){var t=e.username,a=e.name,n=e.description,o=e.isPublic;return i.a.createElement(p.b,{className:u.a.repositoryWrapper,target:"_blank",rel:"noreferrer noopener",to:m.b.generateRepositoryRoute({username:t,repository:a})},i.a.createElement(r.a,{className:u.a.repository,hoverable:!0},i.a.createElement(r.a.Meta,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{isPublic:o}),c?"".concat(t,"/"):"",a),description:i.a.createElement("div",null,0===n.length?i.a.createElement("i",null,"\u6ca1\u6709\u63cf\u8ff0"):n)})))}})};a.d(t,"a",(function(){return d}))}}]);
//# sourceMappingURL=14.5679c1bf.chunk.js.map