(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[39],{1047:function(t,e,n){t.exports={Notifications:"Style_Notifications__D-xOu",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__3BI5A"}},1048:function(t,e,n){t.exports={Notification:"Style_Notification__2Atwy",left:"Style_left__2q6SK",right:"Style_right__jEYSy",unconfirmedDotWrapper:"Style_unconfirmedDotWrapper__2Vdk3",unconfirmedDot:"Style_unconfirmedDot__3iNX4",iconWrapper:"Style_iconWrapper__2S6sF",contentWrapper:"Style_contentWrapper__lH-PF",typeWrapper:"Style_typeWrapper__3XsAt",timeWrapper:"Style_timeWrapper__1qIiV",buttonWrapper:"Style_buttonWrapper__23C0M"}},1387:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var i=n(90),a=n(2),o=n.n(a),r=n(6),c=n(15),s=n(16),l=n(40),u=n(39),d=n(0),f=n.n(d),m=n(1047),p=n.n(m),j=n(923),b=n(911),x=n(1411),O=n(111),h=n(184),C=n(1048),_=n.n(C),k=n(177),N=n(928),y=n(944),v=n(912),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},S=n(13),B=function(t,e){return d.createElement(S.a,Object.assign({},t,{ref:e,icon:g}))};B.displayName="ReloadOutlined";var P=d.forwardRef(B),F=n(72),W=n(1);function A(t){var e=t.notification,n=e.id,i=e.confirmed,a=e.content,o=e.type,r=e.timestamp,c=t.onConfirmButtonClickFactory,s=t.onUnconfirmButtonClickFactory;return Object(W.jsx)(x.b.Item,{children:Object(W.jsxs)("div",{className:_.a.Notification,children:[Object(W.jsxs)("div",{className:_.a.left,children:[Object(W.jsx)("div",{className:_.a.unconfirmedDotWrapper,children:i?null:Object(W.jsx)("span",{className:_.a.unconfirmedDot})}),Object(W.jsx)("div",{className:_.a.iconWrapper,children:Object(W.jsx)(y.a,{})}),Object(W.jsx)("div",{className:_.a.contentWrapper,children:a})]}),Object(W.jsxs)("div",{className:_.a.right,children:[Object(W.jsx)("div",{className:_.a.typeWrapper,children:o}),Object(W.jsx)("div",{className:_.a.timeWrapper,children:Object(W.jsx)(k.a,{title:F.b.parseTimestampToDate(r),children:Object(W.jsx)("span",{children:F.b.parseTimestampToDifference(r)})})}),Object(W.jsx)("div",{className:_.a.buttonWrapper,children:Object(W.jsxs)(N.b,{size:-1,children:[Object(W.jsx)(k.a,{title:"\u786e\u8ba4\u6d88\u606f",children:Object(W.jsx)(O.a,{onClick:c(n),size:"small",disabled:i,children:Object(W.jsx)(v.a,{})})}),Object(W.jsx)(k.a,{title:"\u64a4\u9500\u786e\u8ba4\u6d88\u606f",children:Object(W.jsx)(O.a,{onClick:s(n),size:"small",disabled:!i,children:Object(W.jsx)(P,{})})})]})})]})]})})}var M=f.a.memo(A);function w(t){var e=t.notifications,n=t.unconfirmedNotificationCount,i=t.onConfirmButtonClickFactory,a=t.onUnconfirmButtonClickFactory,o=t.onLoadMoreButtonClick,r=t.loading;return Object(W.jsx)("div",{className:p.a.Notifications,children:Object(W.jsx)(j.a,{title:Object(W.jsxs)("div",{children:["\u6d88\u606f (",n," \u6761\u672a\u786e\u8ba4)"]}),children:Object(W.jsx)(b.a,{spinning:r,children:e.length>0?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(x.b,{bordered:!0,size:"small",children:e.map((function(t){return Object(W.jsx)(M,{notification:t,onConfirmButtonClickFactory:i,onUnconfirmButtonClickFactory:a},t.id)}))}),Object(W.jsx)("div",{className:p.a.loadMoreButtonWrapper,children:Object(W.jsx)(O.a,{type:"primary",disabled:r,loading:r,onClick:o,children:"\u52a0\u8f7d\u66f4\u591a"})})]}):Object(W.jsx)(h.a,{description:"\u6ca1\u6709\u6d88\u606f"})})})})}var T=f.a.memo(w),I=n(138),E=n(34),D=n(104),U=n(344),L=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).setStatePromise=Object(D.promisify)(a.setState),a.loadNotificationCount=Object(r.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.f.getCount({confirmed:!1});case 2:if(null===(e=t.sent)){t.next=7;break}return n=e.count,t.next=7,a.setStatePromise({unconfirmedNotificationCount:n});case 7:case"end":return t.stop()}}),t)}))),a.onSetConfirmedButtonClickFactory=function(t,e){return Object(r.a)(o.a.mark((function n(){var r,c,s,l,u,d,f,m,p,j,b;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.setStatePromise({loading:!0});case 2:return n.next=4,E.f.setConfirmed([{id:t}],e);case 4:if(null===n.sent){n.next=19;break}r=a.state,c=r.notifications,s=r.unconfirmedNotificationCount,l=Object(i.a)(c),u=0;case 9:if(!(u<l.length)){n.next=17;break}if(l[u].id!==t){n.next=14;break}return d=l[u],f=d.id,m=d.timestamp,p=d.content,j=d.type,b=d.username,l[u]=new I.f(f,b,p,j,m,e),n.abrupt("break",17);case 14:u++,n.next=9;break;case 17:return n.next=19,a.setStatePromise({notifications:l,unconfirmedNotificationCount:s+(e?-1:1)});case 19:return n.next=21,a.setStatePromise({loading:!1});case 21:case"end":return n.stop()}}),n)})))},a.onConfirmButtonClickFactory=function(t){return a.onSetConfirmedButtonClickFactory(t,!0)},a.onUnconfirmButtonClickFactory=function(t){return a.onSetConfirmedButtonClickFactory(t,!1)},a.onLoadMoreButtonClick=Object(r.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.loadMoreNotifications();case 2:case"end":return t.stop()}}),t)}))),a.loadMoreNotifications=Object(r.a)(o.a.mark((function t(){var e,r,c,s,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.state,r=e.loadEnd,c=e.lastLoadPosition,r){t.next=17;break}return t.next=4,a.setStatePromise({loading:!0});case 4:return t.next=6,E.f.get({},c,n.NOTIFICATION_AMOUNT_PER_PAGE);case 6:if(null===(s=t.sent)){t.next=15;break}if(!((l=s.notifications).length<n.NOTIFICATION_AMOUNT_PER_PAGE)){t.next=13;break}return U.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u6d88\u606f"}),t.next=13,a.setStatePromise({loadEnd:!0});case 13:return t.next=15,a.setStatePromise({notifications:[].concat(Object(i.a)(a.state.notifications),Object(i.a)(l)),loading:!1,lastLoadPosition:c+n.NOTIFICATION_AMOUNT_PER_PAGE});case 15:t.next=18;break;case 17:U.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u6d88\u606f"});case 18:case"end":return t.stop()}}),t)}))),a.state={notifications:[],loading:!1,lastLoadPosition:0,loadEnd:!1,unconfirmedNotificationCount:0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(r.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setStatePromise({loading:!0});case 2:return t.next=4,Promise.all([this.loadNotificationCount(),this.loadMoreNotifications()]);case 4:return t.next=6,this.setStatePromise({loading:!1});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.notifications,n=t.loading,i=t.unconfirmedNotificationCount;return Object(W.jsx)(T,{notifications:e,unconfirmedNotificationCount:i,loading:n,onConfirmButtonClickFactory:this.onConfirmButtonClickFactory,onUnconfirmButtonClickFactory:this.onUnconfirmButtonClickFactory,onLoadMoreButtonClick:this.onLoadMoreButtonClick})}}]),n}(d.PureComponent);L.NOTIFICATION_AMOUNT_PER_PAGE=20;var R=L}}]);
//# sourceMappingURL=39.153454ce.chunk.js.map