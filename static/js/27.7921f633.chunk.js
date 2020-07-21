(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[27],{1249:function(e,t,a){e.exports={PullRequests:"Style_PullRequests__2EzEd",list:"Style_list__2Z9aN",header:"Style_header__bLOXb",statusFilter:"Style_statusFilter__3-bE3",tag:"Style_tag__2Esc7",pageButtonWrapper:"Style_pageButtonWrapper__oo2S4"}},1250:function(e,t,a){e.exports={PullRequests:"Style_PullRequests__2-07Q",emptyWrapper:"Style_emptyWrapper__2PVg3"}},1251:function(e,t,a){e.exports={PullRequest:"Style_PullRequest__2fW0b",titleWrapper:"Style_titleWrapper__1oAuA",iconWrapper:"Style_iconWrapper__MP-ds",info:"Style_info__1lTJJ"}},1354:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},s=a(16),u=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};u.displayName="EllipsisOutlined";t.a=r.forwardRef(u)},1374:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var r=a(1),n=a.n(r),s=a(3),u=a(10),o=a(11),c=a(20),l=a(19),i=a(0),m=a.n(i),p=a(215),E=a(1249),d=a.n(E),f=a(1121),h=a(105),g=a(1133),P=a(18),b=a(62),v=a(25),R=a(23),_=a(1250),y=a.n(_),S=a(1251),N=a.n(S),k=a(99),A=a(1143),O=a(1151),x=a(1145),q=a(261);function w(e){switch(e){case R.c.CLOSED:return"red";case R.c.MERGED:return"purple";case R.c.OPEN:return"green"}}var C=m.a.memo((function(e){var t=e.pullRequest,a=t.title,r=t.status,n=t.creationTime,s=t.no,u=t.sourceRepositoryUsername,o=t.targetRepositoryUsername,c=t.targetRepositoryName;return m.a.createElement("div",{className:N.a.PullRequest},m.a.createElement("div",{className:N.a.titleWrapper},m.a.createElement("div",{className:N.a.iconWrapper,style:{color:w(r)}},function(e){switch(e){case R.c.CLOSED:return m.a.createElement(A.a,null);case R.c.MERGED:return m.a.createElement(O.a,null);case R.c.OPEN:return m.a.createElement(x.a,null)}}(r)),m.a.createElement(q.a,{to:v.Function.generateRepositoryPullRequestRoute({username:o,repository:c,no:s.toString()})},m.a.createElement("div",{className:N.a.title},a))),m.a.createElement("div",{className:N.a.info},"#",s," \u7531 ",m.a.createElement("b",null,u)," \u4e8e ",k.b.parseTimestampToDifference(n)," \u521b\u5efa"))})),B=a(184);var G=m.a.memo((function(e){var t=e.pullRequests;return m.a.createElement("div",{className:y.a.PullRequests},t.length>0?t.map((function(e){return m.a.createElement(C,{pullRequest:e,key:e.id})})):m.a.createElement("div",{className:y.a.emptyWrapper},m.a.createElement(B.a,{description:"\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pull Request"})))})),D=a(1354),W=a(1137);var j=Object(b.f)(m.a.memo((function(e){var t,a=e.branches,r=e.loading,n=e.match.params,s=n.username,u=n.repository,o=e.openAmount,c=e.closedAmount,l=e.mergedAmount,i=e.onStatusButtonClick,E=e.currentStatus,b=e.currentPageNumber,_=e.pullRequests,y=e.onNextButtonClick,S=e.onPrevButtonClick,N=e.noNextPage,k="",q=Object(p.a)(a);try{for(q.s();!(t=q.n()).done;){var w=t.value,C=w.isDefault,B=w.name;C&&(k=B)}}catch(j){q.e(j)}finally{q.f()}return m.a.createElement("div",{className:d.a.PullRequests},m.a.createElement(f.a,{spinning:r},m.a.createElement("div",{className:d.a.list},m.a.createElement("div",{className:d.a.header},m.a.createElement("div",{className:d.a.statusFilter},m.a.createElement(h.a.Group,{size:"small"},m.a.createElement(h.a,{type:"link",style:{color:"unset",fontWeight:void 0===E?"bolder":"inherit"},onClick:i(void 0)},m.a.createElement(D.a,null)," \u6240\u6709",m.a.createElement(g.a,{className:d.a.tag},o+c+l)),m.a.createElement(h.a,{type:"link",style:{color:"green",fontWeight:E===R.c.OPEN?"bolder":"inherit"},onClick:i(R.c.OPEN)},m.a.createElement(x.a,null)," \u5f00\u542f\u7684",m.a.createElement(g.a,{className:d.a.tag},o)),m.a.createElement(h.a,{type:"link",style:{color:"red",fontWeight:E===R.c.CLOSED?"bolder":"inherit"},onClick:i(R.c.CLOSED)},m.a.createElement(A.a,null)," \u5df2\u5173\u95ed",m.a.createElement(g.a,{className:d.a.tag},c)),m.a.createElement(h.a,{type:"link",style:{color:"purple",fontWeight:E===R.c.MERGED?"bolder":"inherit"},onClick:i(R.c.MERGED)},m.a.createElement(O.a,null)," \u5df2\u5408\u5e76",m.a.createElement(g.a,{className:d.a.tag},l)))),m.a.createElement("div",{className:d.a.buttonWrapper},m.a.createElement(P.b,{to:v.Function.generateRepositoryCompareRoute({sourceRepositoryUsername:s,sourceRepositoryName:u,sourceRepositoryBranch:k,targetRepositoryBranch:k,repository:u,username:s})},m.a.createElement(h.a,{type:"primary"},m.a.createElement(W.a,null),"\u521b\u5efa Pull Request")))),m.a.createElement("div",{className:d.a.pullRequestListWrapper},m.a.createElement(G,{pullRequests:_}))),m.a.createElement("div",{className:d.a.pageButtonWrapper},m.a.createElement(h.a.Group,null,m.a.createElement(h.a,{disabled:0===b,onClick:S},"\u4e0a\u4e00\u9875"),m.a.createElement(h.a,{onClick:y,disabled:N},"\u4e0b\u4e00\u9875")))))}))),M=a(329),Z=a(38),I=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).onStatusButtonClick=function(e){return Object(s.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.setState({currentStatus:e,loading:!0,currentPageNumber:0}),t.t0=e,t.next=t.t0===R.c.OPEN?4:t.t0===R.c.MERGED?7:t.t0===R.c.CLOSED?10:13;break;case 4:return t.next=6,r.loadOpenAmount();case 6:return t.abrupt("break",16);case 7:return t.next=9,r.loadMergedAmount();case 9:return t.abrupt("break",16);case 10:return t.next=12,r.loadClosedAmount();case 12:return t.abrupt("break",16);case 13:return t.next=15,Promise.all([r.loadOpenAmount(),r.loadClosedAmount(),r.loadMergedAmount()]);case 15:return t.abrupt("break",16);case 16:return t.next=18,r.loadPullRequests(e,0,a.SIZE_PER_PAGE);case 18:r.setState({loading:!1});case 19:case"end":return t.stop()}}),t)})))},r.onPrevButtonClick=Object(s.a)(n.a.mark((function e(){var t,s,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.state,s=t.currentPageNumber,u=t.currentStatus,!(s>0)){e.next=7;break}return r.setState({loading:!0}),e.next=5,r.loadPullRequests(u,(s-1)*a.SIZE_PER_PAGE,a.SIZE_PER_PAGE);case 5:r.setState({currentPageNumber:s-1,loading:!1}),window.scrollTo({top:0,behavior:"smooth"});case 7:case"end":return e.stop()}}),e)}))),r.onNextButtonClick=Object(s.a)(n.a.mark((function e(){var t,s,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.state,s=t.currentPageNumber,u=t.currentStatus,r.setState({loading:!0}),e.next=4,r.loadPullRequests(u,(s+1)*a.SIZE_PER_PAGE,a.SIZE_PER_PAGE);case 4:r.setState({currentPageNumber:s+1,loading:!1}),window.scrollTo({top:0,behavior:"smooth"});case 6:case"end":return e.stop()}}),e)}))),r.loadPullRequests=function(){var e=Object(s.a)(n.a.mark((function e(t,a,s){var u,o,c,l,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=r.props.match.params,o=u.username,c=u.repository,e.next=3,Z.g.getByRepository({username:o,name:c},t,a,s);case 3:null!==(l=e.sent)&&(i=l.pullRequests,r.setState({pullRequests:i}));case 5:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),r.loadBranches=Object(s.a)(n.a.mark((function e(){var t,a,s,u,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.username,s=t.repository,e.next=3,M.a.branches({username:a,name:s});case 3:null!==(u=e.sent)&&(o=u.branches,r.setState({branches:o}));case 5:case"end":return e.stop()}}),e)}))),r.loadOpenAmount=Object(s.a)(n.a.mark((function e(){var t,a,s,u,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.username,s=t.repository,e.next=3,Z.g.getPullRequestAmount({username:a,name:s},R.c.OPEN);case 3:null!==(u=e.sent)&&(o=u.amount,r.setState({openAmount:o}));case 5:case"end":return e.stop()}}),e)}))),r.loadClosedAmount=Object(s.a)(n.a.mark((function e(){var t,a,s,u,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.username,s=t.repository,e.next=3,Z.g.getPullRequestAmount({username:a,name:s},R.c.CLOSED);case 3:null!==(u=e.sent)&&(o=u.amount,r.setState({closedAmount:o}));case 5:case"end":return e.stop()}}),e)}))),r.loadMergedAmount=Object(s.a)(n.a.mark((function e(){var t,a,s,u,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.username,s=t.repository,e.next=3,Z.g.getPullRequestAmount({username:a,name:s},R.c.MERGED);case 3:null!==(u=e.sent)&&(o=u.amount,r.setState({mergedAmount:o}));case 5:case"end":return e.stop()}}),e)}))),r.setNoNextPage=function(){var e=r.state,t=e.currentStatus,n=e.currentPageNumber,s=e.openAmount,u=e.closedAmount,o=e.mergedAmount;switch(t){case R.c.CLOSED:return(n+1)*a.SIZE_PER_PAGE>=u;case R.c.MERGED:return(n+1)*a.SIZE_PER_PAGE>=o;case R.c.OPEN:return(n+1)*a.SIZE_PER_PAGE>=s;default:return(n+1)*a.SIZE_PER_PAGE>=s+u+o}},r.state={branches:[],loading:!1,openAmount:0,closedAmount:0,mergedAmount:0,pullRequests:[],currentStatus:R.c.OPEN,currentPageNumber:0},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,Promise.all([this.loadBranches(),this.loadOpenAmount(),this.loadClosedAmount(),this.loadMergedAmount(),this.loadPullRequests(R.c.OPEN,0,a.SIZE_PER_PAGE)]);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(s.a)(n.a.mark((function e(t,a,r){var s,u,o,c,l,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.props.match.params,u=s.username,o=s.repository,c=t.match.params,l=c.username,i=c.repository,u===l&&o===i){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.branches,a=e.loading,r=e.closedAmount,n=e.mergedAmount,s=e.openAmount,u=e.pullRequests,o=e.currentStatus,c=e.currentPageNumber;return m.a.createElement(j,{branches:t,loading:a,closedAmount:r,mergedAmount:n,openAmount:s,pullRequests:u,currentStatus:o,currentPageNumber:c,onStatusButtonClick:this.onStatusButtonClick,onNextButtonClick:this.onNextButtonClick,onPrevButtonClick:this.onPrevButtonClick,noNextPage:this.setNoNextPage()})}}]),a}(i.PureComponent);I.SIZE_PER_PAGE=20;var L=Object(b.f)(I)}}]);
//# sourceMappingURL=27.7921f633.chunk.js.map