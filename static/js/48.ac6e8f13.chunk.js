(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[48],{1023:function(e,t,n){e.exports={Settings:"Style_Settings__2sbzj",menuWrapper:"Style_menuWrapper__120_C",contentWrapper:"Style_contentWrapper__l2G23"}},1249:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),i=(n(276),n(20)),s=n(7),o=n(31),c=n(34),u=n(90),m=n(89),p=n(91),l=n(0),y=n.n(l),I=(n(208),n(41)),S=n(1023),v=n.n(S),h=n(38);var E=y.a.memo((function(e){var t=e.children,n=e.menuItems,a=e.activeItemKey;return y.a.createElement("div",{className:v.a.Settings},y.a.createElement("div",{className:v.a.menuWrapper},y.a.createElement(I.a,{className:v.a.menu,selectedKeys:[a],mode:"inline"},n.map((function(e){var t=e.key,n=e.to,a=e.title,r=e.icon;return y.a.createElement(I.a.Item,{key:t,className:v.a.item},y.a.createElement(h.b,{to:n},r,a))})))),y.a.createElement("div",{className:v.a.contentWrapper},t))})),O=n(2),f=n(92),R=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).initMenuItems=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=n.props.match.params,a=t.username,r=t.repository;n.setState({menuItems:[{icon:y.a.createElement(i.a,{type:"setting"}),title:"\u9009\u9879",key:O.PAGE_ID.REPOSITORY.SETTINGS.OPTIONS,to:f.b.generateRepositorySettingsOptionsRoute({username:a,repository:r})},{icon:y.a.createElement(i.a,{type:"project"}),title:"\u5408\u4f5c\u8005",key:O.PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS,to:f.b.generateRepositorySettingsCollaboratorsRoute({username:a,repository:r})},{icon:y.a.createElement(i.a,{type:"branches"}),title:"\u5206\u652f",key:O.PAGE_ID.REPOSITORY.SETTINGS.BRANCHES,to:f.b.generateRepositorySettingsBranchesRoute({username:a,repository:r})},{icon:y.a.createElement(i.a,{type:"team"}),title:"\u5c0f\u7ec4",key:O.PAGE_ID.REPOSITORY.SETTINGS.GROUPS,to:f.b.generateRepositorySettingsGroupsRoute({username:a,repository:r})}]},e)})));case 1:case"end":return e.stop()}}),e)}))),n.setActiveMenuItemKey=function(){var e=n.props.location.pathname,t=n.state.menuItems,a=!0,r=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var c=s.value,u=c.to,m=c.key;if(u===e){n.setState({activeItemKey:m});break}}}catch(p){r=!0,i=p}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}},n.state={menuItems:[],activeItemKey:O.PAGE_ID.REPOSITORY.SETTINGS.OPTIONS},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initMenuItems();case 2:this.setActiveMenuItemKey();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t,n){e.match.path!==this.props.match.path&&this.setActiveMenuItemKey()}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.activeItemKey,a=t.menuItems;return y.a.createElement(E,{menuItems:a,activeItemKey:n},e)}}]),t}(l.PureComponent);n.d(t,"default",(function(){return R}))}}]);
//# sourceMappingURL=48.ac6e8f13.chunk.js.map