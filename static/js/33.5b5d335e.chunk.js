(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[33],{1071:function(e,t,n){e.exports={Settings:"Style_Settings__1_D_n",menuWrapper:"Style_menuWrapper__3Nc6L",contentWrapper:"Style_contentWrapper__15Ahb"}},1291:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),s=(n(280),n(22)),i=n(47),c=n(65),o=n(165),u=n(164),m=n(166),p=n(0),l=n.n(p),y=(n(209),n(41)),v=n(1071),h=n.n(v),I=n(38);var f=l.a.memo((function(e){var t=e.children,n=e.menuItems,a=e.activeItemKey;return l.a.createElement("div",{className:h.a.Settings},l.a.createElement("div",{className:h.a.menuWrapper},l.a.createElement(y.a,{className:h.a.menu,selectedKeys:[a],mode:"inline"},n.map((function(e){var t=e.key,n=e.to,a=e.title,r=e.icon;return l.a.createElement(y.a.Item,{key:t,className:h.a.item},l.a.createElement(I.b,{to:n},r,a))})))),l.a.createElement("div",{className:h.a.contentWrapper},t))})),S=n(3),d=n(88),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).initMenuItems=function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=n.props.match.params,a=t.username,r=t.repository;n.setState({menuItems:[{icon:l.a.createElement(s.a,{type:"setting"}),title:"\u9009\u9879",key:S.PAGE_ID.REPOSITORY.SETTINGS.OPTIONS,to:d.b.generateRepositorySettingsOptionsRoute({username:a,repository:r})}]},e)})));case 1:case"end":return e.stop()}}))},n.setActiveMenuItemKey=function(){var e=n.props.location.pathname,t=n.state.menuItems,a=!0,r=!1,s=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var o=i.value,u=o.to,m=o.key;if(u===e){n.setState({activeItemKey:m});break}}}catch(p){r=!0,s=p}finally{try{a||null==c.return||c.return()}finally{if(r)throw s}}},n.state={menuItems:[],activeItemKey:S.PAGE_ID.REPOSITORY.SETTINGS.OPTIONS},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(this.initMenuItems());case 2:this.setActiveMenuItemKey();case 3:case"end":return e.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(e,t,n){e.match.path!==this.props.match.path&&this.setActiveMenuItemKey()}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.activeItemKey,a=t.menuItems;return l.a.createElement(f,{menuItems:a,activeItemKey:n},e)}}]),t}(p.PureComponent);n.d(t,"default",(function(){return E}))}}]);
//# sourceMappingURL=33.5b5d335e.chunk.js.map