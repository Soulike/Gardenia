(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[28],{1141:function(e,t,a){e.exports={PullRequests:"Style_PullRequests__3Kelk",list:"Style_list__b1Gu_",header:"Style_header__1R6S6",statusFilter:"Style_statusFilter__MT4yU",tag:"Style_tag__2WXw7",pageButtonWrapper:"Style_pageButtonWrapper__2b5NJ"}},1142:function(e,t,a){e.exports={PullRequests:"Style_PullRequests__3KvT_",emptyWrapper:"Style_emptyWrapper__B5-AF"}},1143:function(e,t,a){e.exports={PullRequest:"Style_PullRequest__1UvZQ",titleWrapper:"Style_titleWrapper__3dp-8",iconWrapper:"Style_iconWrapper__1ZOwL",info:"Style_info__12dwX"}},1205:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),s=a(5),u=a(12),l=a(14),o=a(36),c=a(35),i=a(37),m=a(0),p=a.n(m),E=(a(165),a(90)),d=(a(164),a(46)),b=(a(246),a(80)),f=a(1141),P=a.n(f),g=a(24),h=a(120),R=a(45),v=a(39),_=(a(318),a(91)),S=a(1142),y=a.n(S),N=a(1143),k=a.n(N),A=a(128),O=a(1037),x=a(1045),q=a(1039);function C(e){switch(e){case v.b.CLOSED:return"red";case v.b.MERGED:return"purple";case v.b.OPEN:return"green"}}var w=p.a.memo((function(e){var t=e.pullRequest,a=t.title,r=t.status,n=t.creationTime,s=t.no,u=t.sourceRepositoryUsername,l=t.targetRepositoryUsername,o=t.targetRepositoryName;return p.a.createElement("div",{className:k.a.PullRequest},p.a.createElement("div",{className:k.a.titleWrapper},p.a.createElement("div",{className:k.a.iconWrapper,style:{color:C(r)}},function(e){switch(e){case v.b.CLOSED:return p.a.createElement(O.a,null);case v.b.MERGED:return p.a.createElement(x.a,null);case v.b.OPEN:return p.a.createElement(q.a,null)}}(r)),p.a.createElement(g.b,{to:R.b.generateRepositoryPullRequestRoute({username:l,repository:o,no:s.toString()})},p.a.createElement("div",{className:k.a.title},a))),p.a.createElement("div",{className:k.a.info},"#",s," \u7531 ",p.a.createElement("b",null,u)," \u4e8e ",A.a.parseTimestampToDifference(n)," \u521b\u5efa"))}));var B=p.a.memo((function(e){var t=e.pullRequests;return p.a.createElement("div",{className:y.a.PullRequests},t.length>0?t.map((function(e){return p.a.createElement(w,{pullRequest:e,key:e.id})})):p.a.createElement("div",{className:y.a.emptyWrapper},p.a.createElement(_.a,{description:"\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pull Request"})))})),G={name:"ellipsis",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]}},W=a(17),j=function(e,t){return p.a.createElement(W.a,Object.assign({},e,{ref:t,icon:G}))};j.displayName="EllipsisOutlined";var D=p.a.forwardRef(j),M=a(1032);var Z=Object(h.f)(p.a.memo((function(e){var t=e.branches,a=e.loading,r=e.match.params,n=r.username,s=r.repository,u=e.openAmount,l=e.closedAmount,o=e.mergedAmount,c=e.onStatusButtonClick,i=e.currentStatus,m=e.currentPageNumber,f=e.pullRequests,h=e.onNextButtonClick,_=e.onPrevButtonClick,S=e.noNextPage,y="",N=!0,k=!1,A=void 0;try{for(var C,w=t[Symbol.iterator]();!(N=(C=w.next()).done);N=!0){var G=C.value,W=G.isDefault,j=G.name;W&&(y=j)}}catch(Z){k=!0,A=Z}finally{try{N||null==w.return||w.return()}finally{if(k)throw A}}return p.a.createElement("div",{className:P.a.PullRequests},p.a.createElement(E.a,{spinning:a},p.a.createElement("div",{className:P.a.list},p.a.createElement("div",{className:P.a.header},p.a.createElement("div",{className:P.a.statusFilter},p.a.createElement(d.a.Group,{size:"small"},p.a.createElement(d.a,{type:"link",style:{color:"unset",fontWeight:void 0===i?"bolder":"inherit"},onClick:c(void 0)},p.a.createElement(D,null)," \u6240\u6709",p.a.createElement(b.a,{className:P.a.tag},u+l+o)),p.a.createElement(d.a,{type:"link",style:{color:"green",fontWeight:i===v.b.OPEN?"bolder":"inherit"},onClick:c(v.b.OPEN)},p.a.createElement(q.a,null)," \u5f00\u542f\u7684",p.a.createElement(b.a,{className:P.a.tag},u)),p.a.createElement(d.a,{type:"link",style:{color:"red",fontWeight:i===v.b.CLOSED?"bolder":"inherit"},onClick:c(v.b.CLOSED)},p.a.createElement(O.a,null)," \u5df2\u5173\u95ed",p.a.createElement(b.a,{className:P.a.tag},l)),p.a.createElement(d.a,{type:"link",style:{color:"purple",fontWeight:i===v.b.MERGED?"bolder":"inherit"},onClick:c(v.b.MERGED)},p.a.createElement(x.a,null)," \u5df2\u5408\u5e76",p.a.createElement(b.a,{className:P.a.tag},o)))),p.a.createElement("div",{className:P.a.buttonWrapper},p.a.createElement(g.b,{to:R.b.generateRepositoryCompareRoute({sourceRepositoryUsername:n,sourceRepositoryName:s,sourceRepositoryBranch:y,targetRepositoryBranch:y,repository:s,username:n})},p.a.createElement(d.a,{type:"primary"},p.a.createElement(M.a,null),"\u521b\u5efa Pull Request")))),p.a.createElement("div",{className:P.a.pullRequestListWrapper},p.a.createElement(B,{pullRequests:f}))),p.a.createElement("div",{className:P.a.pageButtonWrapper},p.a.createElement(d.a.Group,null,p.a.createElement(d.a,{disabled:0===m,onClick:_},"\u4e0a\u4e00\u9875"),p.a.createElement(d.a,{onClick:h,disabled:S},"\u4e0b\u4e00\u9875")))))}))),I=a(320),L=a(78),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).onStatusButtonClick=function(e){return Object(s.a)(n.a.mark((function r(){return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a.setState({currentStatus:e,loading:!0,currentPageNumber:0}),r.t0=e,r.next=r.t0===v.b.OPEN?4:r.t0===v.b.MERGED?7:r.t0===v.b.CLOSED?10:13;break;case 4:return r.next=6,a.loadOpenAmount();case 6:return r.abrupt("break",16);case 7:return r.next=9,a.loadMergedAmount();case 9:return r.abrupt("break",16);case 10:return r.next=12,a.loadClosedAmount();case 12:return r.abrupt("break",16);case 13:return r.next=15,Promise.all([a.loadOpenAmount(),a.loadClosedAmount(),a.loadMergedAmount()]);case 15:return r.abrupt("break",16);case 16:return r.next=18,a.loadPullRequests(e,0,t.SIZE_PER_PAGE);case 18:a.setState({loading:!1});case 19:case"end":return r.stop()}}),r)})))},a.onPrevButtonClick=Object(s.a)(n.a.mark((function e(){var r,s,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.state,s=r.currentPageNumber,u=r.currentStatus,!(s>0)){e.next=6;break}return a.setState({loading:!0}),e.next=5,a.loadPullRequests(u,(s-1)*t.SIZE_PER_PAGE,t.SIZE_PER_PAGE);case 5:a.setState({currentPageNumber:s-1,loading:!1});case 6:case"end":return e.stop()}}),e)}))),a.onNextButtonClick=Object(s.a)(n.a.mark((function e(){var r,s,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.state,s=r.currentPageNumber,u=r.currentStatus,a.setState({loading:!0}),e.next=4,a.loadPullRequests(u,(s+1)*t.SIZE_PER_PAGE,t.SIZE_PER_PAGE);case 4:a.setState({currentPageNumber:s+1,loading:!1});case 5:case"end":return e.stop()}}),e)}))),a.loadPullRequests=function(){var e=Object(s.a)(n.a.mark((function e(t,r,s){var u,l,o,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=a.props.match.params,l=u.username,o=u.repository,e.next=3,L.e.getByRepository({username:l,name:o},t,r,s);case 3:null!==(c=e.sent)&&(i=c.pullRequests,a.setState({pullRequests:i}));case 5:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),a.loadBranches=Object(s.a)(n.a.mark((function e(){var t,r,s,u,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.username,s=t.repository,e.next=3,I.a.branches({username:r,name:s});case 3:null!==(u=e.sent)&&(l=u.branches,a.setState({branches:l}));case 5:case"end":return e.stop()}}),e)}))),a.loadOpenAmount=Object(s.a)(n.a.mark((function e(){var t,r,s,u,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.username,s=t.repository,e.next=3,L.e.getPullRequestAmount({username:r,name:s},v.b.OPEN);case 3:null!==(u=e.sent)&&(l=u.amount,a.setState({openAmount:l}));case 5:case"end":return e.stop()}}),e)}))),a.loadClosedAmount=Object(s.a)(n.a.mark((function e(){var t,r,s,u,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.username,s=t.repository,e.next=3,L.e.getPullRequestAmount({username:r,name:s},v.b.CLOSED);case 3:null!==(u=e.sent)&&(l=u.amount,a.setState({closedAmount:l}));case 5:case"end":return e.stop()}}),e)}))),a.loadMergedAmount=Object(s.a)(n.a.mark((function e(){var t,r,s,u,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.username,s=t.repository,e.next=3,L.e.getPullRequestAmount({username:r,name:s},v.b.MERGED);case 3:null!==(u=e.sent)&&(l=u.amount,a.setState({mergedAmount:l}));case 5:case"end":return e.stop()}}),e)}))),a.setNoNextPage=function(){var e=a.state,r=e.currentStatus,n=e.currentPageNumber,s=e.openAmount,u=e.closedAmount,l=e.mergedAmount;switch(r){case v.b.CLOSED:return(n+1)*t.SIZE_PER_PAGE>=u;case v.b.MERGED:return(n+1)*t.SIZE_PER_PAGE>=l;case v.b.OPEN:return(n+1)*t.SIZE_PER_PAGE>=s;default:return(n+1)*t.SIZE_PER_PAGE>=s+u+l}},a.state={branches:[],loading:!1,openAmount:0,closedAmount:0,mergedAmount:0,pullRequests:[],currentStatus:v.b.OPEN,currentPageNumber:0},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,Promise.all([this.loadBranches(),this.loadOpenAmount(),this.loadClosedAmount(),this.loadMergedAmount(),this.loadPullRequests(v.b.OPEN,0,t.SIZE_PER_PAGE)]);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.branches,a=e.loading,r=e.closedAmount,n=e.mergedAmount,s=e.openAmount,u=e.pullRequests,l=e.currentStatus,o=e.currentPageNumber;return p.a.createElement(Z,{branches:t,loading:a,closedAmount:r,mergedAmount:n,openAmount:s,pullRequests:u,currentStatus:l,currentPageNumber:o,onStatusButtonClick:this.onStatusButtonClick,onNextButtonClick:this.onNextButtonClick,onPrevButtonClick:this.onPrevButtonClick,noNextPage:this.setNoNextPage()})}}]),t}(m.PureComponent);T.SIZE_PER_PAGE=20;var U=Object(h.f)(T);a.d(t,"default",(function(){return U}))}}]);
//# sourceMappingURL=28.7dbd5e7b.chunk.js.map