(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[16],{1214:function(e,t,r){"use strict";r.r(t);var a=r(11),n=r.n(a),o=r(964),i=r(31),s=r(59),c=r(81),l=r(261),u=r(260),p=r(262),d=r(0),m=r.n(d),y=r(156),E=r(973),f=r.n(E),h=r(956),v=r.n(h),b=r(953);var g=function(e){var t=e.repositoryList,r=e.loadMore,a=e.loading,n=e.hasMore;return m.a.createElement("div",{className:f.a.Index},m.a.createElement(v.a,{loadMore:r,initialLoad:!1,hasMore:n},m.a.createElement(b.a,{repositoryList:t,loading:a})))},_=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).loadMore=Object(i.a)(n.a.mark((function e(){var a,i,s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.state,i=a.repositoryList,s=a.lastEnd,e.next=3,y.c.getList(s,s+t.PAGE_SIZE);case 3:c=e.sent,r.setState({loading:!1}),null!==c&&(i.push.apply(i,Object(o.a)(c)),r.setState({lastEnd:s+t.PAGE_SIZE-1}),c.length<t.PAGE_SIZE&&r.setState({hasMore:!1}),r.forceUpdate());case 6:case"end":return e.stop()}}),e)}))),r.state={repositoryList:[],loading:!0,hasMore:!0,lastEnd:0},r}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadMore();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repositoryList,r=e.hasMore,a=e.loading;return m.a.createElement(g,{repositoryList:t,loadMore:this.loadMore,hasMore:r,loading:a})}}]),t}(d.PureComponent);_.PAGE_SIZE=10;var M=_;r.d(t,"default",(function(){return M}))},930:function(e,t,r){"use strict";r(943);var a=r(951),n=r(952),o=r(0),i=r.n(o);var s=i.a.memo((function(e){var t=e.isPublic,r=Object(n.a)(e,["isPublic"]);return i.a.createElement(i.a.Fragment,null,t?i.a.createElement(a.a,Object.assign({color:"blue"},r),"\u516c\u5171"):i.a.createElement(a.a,Object.assign({color:"gold"},r),"\u79c1\u4eba"))}));r.d(t,"a",(function(){return s}))},942:function(e,t,r){e.exports={RepositoryList:"Style_RepositoryList__3Ox2N",repositoryWrapper:"Style_repositoryWrapper__8uUYD"}},953:function(e,t,r){"use strict";r(936);var a=r(933),n=(r(935),r(934)),o=(r(927),r(122)),i=r(0),s=r.n(i),c=r(942),l=r.n(c),u=r(82),p=r(194),d=r(930);var m=function(e){var t=e.repositoryList,r=e.loading;return s.a.createElement(a.a,{className:l.a.RepositoryList,dataSource:t,loading:r,locale:{emptyText:s.a.createElement(o.a,{description:"\u6ca1\u6709\u4ed3\u5e93"})},renderItem:function(e){var t=e.username,r=e.name,a=e.description,o=e.isPublic;return s.a.createElement(u.b,{className:l.a.repositoryWrapper,target:"__blank",rel:"noreferrer noopener",to:p.Function.generateRepositoryRoute({username:t,repository:r})},s.a.createElement(n.a,{className:l.a.repository,hoverable:!0},s.a.createElement(n.a.Meta,{title:s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{isPublic:o}),t,"/",r),description:s.a.createElement("div",null,0===a.length?s.a.createElement("i",null,"\u6ca1\u6709\u63cf\u8ff0"):a)})))}})};r.d(t,"a",(function(){return m}))},973:function(e,t,r){e.exports={Index:"Style_Index__3aRmg",repositoryWrapper:"Style_repositoryWrapper__mjMAI"}}}]);
//# sourceMappingURL=16.5312f9ba.chunk.js.map