(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[39],{1001:function(e,t,n){e.exports={Settings:"Style_Settings__2sbzj",menuWrapper:"Style_menuWrapper__120_C",contentWrapper:"Style_contentWrapper__l2G23"}},1225:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),s=(n(275),n(21)),i=n(35),o=n(47),c=n(88),u=n(87),m=n(89),p=n(0),l=n.n(p),y=(n(207),n(41)),I=n(1001),S=n.n(I),v=n(38);var h=l.a.memo((function(e){var t=e.children,n=e.menuItems,a=e.activeItemKey;return l.a.createElement("div",{className:S.a.Settings},l.a.createElement("div",{className:S.a.menuWrapper},l.a.createElement(y.a,{className:S.a.menu,selectedKeys:[a],mode:"inline"},n.map((function(e){var t=e.key,n=e.to,a=e.title,r=e.icon;return l.a.createElement(y.a.Item,{key:t,className:S.a.item},l.a.createElement(v.b,{to:n},r,a))})))),l.a.createElement("div",{className:S.a.contentWrapper},t))})),E=n(3),O=n(90),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).initMenuItems=function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=n.props.match.params,a=t.username,r=t.repository;n.setState({menuItems:[{icon:l.a.createElement(s.a,{type:"setting"}),title:"\u9009\u9879",key:E.PAGE_ID.REPOSITORY.SETTINGS.OPTIONS,to:O.b.generateRepositorySettingsOptionsRoute({username:a,repository:r})},{icon:l.a.createElement(s.a,{type:"project"}),title:"\u5408\u4f5c\u8005",key:E.PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS,to:O.b.generateRepositoryCollaboratorsRoute({username:a,repository:r})},{icon:l.a.createElement(s.a,{type:"branches"}),title:"\u5206\u652f",key:E.PAGE_ID.REPOSITORY.SETTINGS.BRANCHES,to:O.b.generateRepositoryBranchesRoute({username:a,repository:r})},{icon:l.a.createElement(s.a,{type:"team"}),title:"\u5c0f\u7ec4",key:E.PAGE_ID.REPOSITORY.SETTINGS.GROUPS,to:O.b.generateRepositoryGroupsRoute({username:a,repository:r})}]},e)})));case 1:case"end":return e.stop()}}))},n.setActiveMenuItemKey=function(){var e=n.props.location.pathname,t=n.state.menuItems,a=!0,r=!1,s=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var c=i.value,u=c.to,m=c.key;if(u===e){n.setState({activeItemKey:m});break}}}catch(p){r=!0,s=p}finally{try{a||null==o.return||o.return()}finally{if(r)throw s}}},n.state={menuItems:[],activeItemKey:E.PAGE_ID.REPOSITORY.SETTINGS.OPTIONS},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(this.initMenuItems());case 2:this.setActiveMenuItemKey();case 3:case"end":return e.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(e,t,n){e.match.path!==this.props.match.path&&this.setActiveMenuItemKey()}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.activeItemKey,a=t.menuItems;return l.a.createElement(h,{menuItems:a,activeItemKey:n},e)}}]),t}(p.PureComponent);n.d(t,"default",(function(){return f}))}}]);
//# sourceMappingURL=39.3196c3f7.chunk.js.map