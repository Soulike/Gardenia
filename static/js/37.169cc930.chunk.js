(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[37],{1272:function(t,e,n){t.exports={Notifications:"Style_Notifications__D-xOu",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__3BI5A"}},1273:function(t,e,n){t.exports={Notification:"Style_Notification__2Atwy",left:"Style_left__2q6SK",right:"Style_right__jEYSy",unconfirmedDotWrapper:"Style_unconfirmedDotWrapper__2Vdk3",unconfirmedDot:"Style_unconfirmedDot__3iNX4",iconWrapper:"Style_iconWrapper__2S6sF",contentWrapper:"Style_contentWrapper__lH-PF",typeWrapper:"Style_typeWrapper__3XsAt",timeWrapper:"Style_timeWrapper__1qIiV",buttonWrapper:"Style_buttonWrapper__23C0M"}},1410:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return D}));var a=n(105),o=n(1),r=n.n(o),i=n(4),c=n(18),s=n(21),l=n(46),u=n(45),m=n(0),f=n.n(m),d=n(1272),p=n.n(d),C=n(1152),_=n(1144),k=n(1433),E=n(118),N=n(199),y=n(1273),b=n.n(y),v=n(194),x=n(1158),g=n(1180),h=n(1170),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},O=n(26),B=function(t,e){return m.createElement(O.a,Object.assign({},t,{ref:e,icon:S}))};B.displayName="ReloadOutlined";var P=m.forwardRef(B),F=n(112);var W=f.a.memo((function(t){var e=t.notification,n=e.id,a=e.confirmed,o=e.content,r=e.type,i=e.timestamp,c=t.onConfirmButtonClickFactory,s=t.onUnconfirmButtonClickFactory;return f.a.createElement(k.b.Item,null,f.a.createElement("div",{className:b.a.Notification},f.a.createElement("div",{className:b.a.left},f.a.createElement("div",{className:b.a.unconfirmedDotWrapper},a?null:f.a.createElement("span",{className:b.a.unconfirmedDot})),f.a.createElement("div",{className:b.a.iconWrapper},f.a.createElement(g.a,null)),f.a.createElement("div",{className:b.a.contentWrapper},o)),f.a.createElement("div",{className:b.a.right},f.a.createElement("div",{className:b.a.typeWrapper},r),f.a.createElement("div",{className:b.a.timeWrapper},f.a.createElement(v.a,{title:F.b.parseTimestampToDate(i)},f.a.createElement("span",null,F.b.parseTimestampToDifference(i)))),f.a.createElement("div",{className:b.a.buttonWrapper},f.a.createElement(x.b,{size:-1},f.a.createElement(v.a,{title:"\u786e\u8ba4\u6d88\u606f"},f.a.createElement(E.a,{onClick:c(n),size:"small",disabled:a},f.a.createElement(h.a,null))),f.a.createElement(v.a,{title:"\u64a4\u9500\u786e\u8ba4\u6d88\u606f"},f.a.createElement(E.a,{onClick:s(n),size:"small",disabled:!a},f.a.createElement(P,null))))))))}));var A=f.a.memo((function(t){var e=t.notifications,n=t.unconfirmedNotificationCount,a=t.onConfirmButtonClickFactory,o=t.onUnconfirmButtonClickFactory,r=t.onLoadMoreButtonClick,i=t.loading;return f.a.createElement("div",{className:p.a.Notifications},f.a.createElement(C.a,{title:f.a.createElement("div",null,"\u6d88\u606f (",n," \u6761\u672a\u786e\u8ba4)")},f.a.createElement(_.a,{spinning:i},e.length>0?f.a.createElement(f.a.Fragment,null,f.a.createElement(k.b,{bordered:!0,size:"small"},e.map((function(t){return f.a.createElement(W,{notification:t,onConfirmButtonClickFactory:a,onUnconfirmButtonClickFactory:o,key:t.id})}))),f.a.createElement("div",{className:p.a.loadMoreButtonWrapper},f.a.createElement(E.a,{type:"primary",disabled:i,loading:i,onClick:r},"\u52a0\u8f7d\u66f4\u591a"))):f.a.createElement(N.a,{description:"\u6ca1\u6709\u6d88\u606f"}))))})),M=n(160),w=n(40),T=n(122),j=n(349),I=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(c.a)(this,n),(o=e.call(this,t)).setStatePromise=Object(T.promisify)(o.setState),o.loadNotificationCount=Object(i.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.f.getCount({confirmed:!1});case 2:if(null===(e=t.sent)){t.next=7;break}return n=e.count,t.next=7,o.setStatePromise({unconfirmedNotificationCount:n});case 7:case"end":return t.stop()}}),t)}))),o.onSetConfirmedButtonClickFactory=function(t,e){return Object(i.a)(r.a.mark((function n(){var i,c,s,l,u,m,f,d,p,C,_;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.setStatePromise({loading:!0});case 2:return n.next=4,w.f.setConfirmed([{id:t}],e);case 4:if(null===n.sent){n.next=19;break}i=o.state,c=i.notifications,s=i.unconfirmedNotificationCount,l=Object(a.a)(c),u=0;case 9:if(!(u<l.length)){n.next=17;break}if(l[u].id!==t){n.next=14;break}return m=l[u],f=m.id,d=m.timestamp,p=m.content,C=m.type,_=m.username,l[u]=new M.f(f,_,p,C,d,e),n.abrupt("break",17);case 14:u++,n.next=9;break;case 17:return n.next=19,o.setStatePromise({notifications:l,unconfirmedNotificationCount:s+(e?-1:1)});case 19:return n.next=21,o.setStatePromise({loading:!1});case 21:case"end":return n.stop()}}),n)})))},o.onConfirmButtonClickFactory=function(t){return o.onSetConfirmedButtonClickFactory(t,!0)},o.onUnconfirmButtonClickFactory=function(t){return o.onSetConfirmedButtonClickFactory(t,!1)},o.onLoadMoreButtonClick=Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.loadMoreNotifications();case 2:case"end":return t.stop()}}),t)}))),o.loadMoreNotifications=Object(i.a)(r.a.mark((function t(){var e,i,c,s,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=o.state,i=e.loadEnd,c=e.lastLoadPosition,i){t.next=17;break}return t.next=4,o.setStatePromise({loading:!0});case 4:return t.next=6,w.f.get({},c,n.NOTIFICATION_AMOUNT_PER_PAGE);case 6:if(null===(s=t.sent)){t.next=15;break}if(!((l=s.notifications).length<n.NOTIFICATION_AMOUNT_PER_PAGE)){t.next=13;break}return j.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u6d88\u606f"}),t.next=13,o.setStatePromise({loadEnd:!0});case 13:return t.next=15,o.setStatePromise({notifications:[].concat(Object(a.a)(o.state.notifications),Object(a.a)(l)),loading:!1,lastLoadPosition:c+n.NOTIFICATION_AMOUNT_PER_PAGE});case 15:t.next=18;break;case 17:j.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u6d88\u606f"});case 18:case"end":return t.stop()}}),t)}))),o.state={notifications:[],loading:!1,lastLoadPosition:0,loadEnd:!1,unconfirmedNotificationCount:0},o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setStatePromise({loading:!0});case 2:return t.next=4,Promise.all([this.loadNotificationCount(),this.loadMoreNotifications()]);case 4:return t.next=6,this.setStatePromise({loading:!1});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.notifications,n=t.loading,a=t.unconfirmedNotificationCount;return f.a.createElement(A,{notifications:e,unconfirmedNotificationCount:a,loading:n,onConfirmButtonClickFactory:this.onConfirmButtonClickFactory,onUnconfirmButtonClickFactory:this.onUnconfirmButtonClickFactory,onLoadMoreButtonClick:this.onLoadMoreButtonClick})}}]),n}(m.PureComponent);I.NOTIFICATION_AMOUNT_PER_PAGE=20;var D=I}}]);
//# sourceMappingURL=37.169cc930.chunk.js.map