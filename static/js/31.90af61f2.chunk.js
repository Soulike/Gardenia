(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[31],{1112:function(e,t,a){e.exports={Issues:"Style_Issues__wxh9c",list:"Style_list__1i8bQ",header:"Style_header__2KaVh",statusFilter:"Style_statusFilter__3zE2w",tag:"Style_tag__3Xw8C",pageButtonWrapper:"Style_pageButtonWrapper__P17fr"}},1113:function(e,t,a){e.exports={IssueList:"Style_IssueList__3_LLo",emptyWrapper:"Style_emptyWrapper__3X6HT"}},1114:function(e,t,a){e.exports={Issue:"Style_Issue__3wQKl",titleWrapper:"Style_titleWrapper__3c3D9",iconWrapper:"Style_iconWrapper__3QVF5",info:"Style_info__2PXRc"}},1378:function(e,t,a){"use strict";var s=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},n=a(20),c=function(e,t){return s.createElement(n.a,Object.assign({},e,{ref:t,icon:r}))};c.displayName="EllipsisOutlined";t.a=s.forwardRef(c)},1400:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return M}));var s=a(2),r=a.n(s),n=a(4),c=a(14),o=a(15),i=a(39),u=a(38),l=a(1),p=a(0),m=a.n(p),d=a(1112),j=a.n(d),b=a(902),h=a(917),x=a(118),O=a(916),f=a(22),v=a(62),_=a(66),N=a(26),S=a(1378),g=a(942),P=a(941),y=a(922),E=a(1113),k=a.n(E),A=a(1114),w=a.n(A),C=a(81),I=a(268);function B(e){var t=e.issue,a=t.status,s=t.no,r=t.title,n=t.repositoryUsername,c=t.repositoryName,o=t.username,i=t.creationTime;return Object(l.jsxs)("div",{className:w.a.Issue,children:[Object(l.jsxs)("div",{className:w.a.titleWrapper,children:[Object(l.jsx)("div",{className:w.a.iconWrapper,style:{color:W(a)},children:R(a)}),Object(l.jsx)(I.a,{to:_.Function.generateRepositoryIssueRoute({username:n,repositoryName:c,no:s.toString()}),children:Object(l.jsx)("div",{className:w.a.title,children:r})})]}),Object(l.jsxs)("div",{className:w.a.info,children:["#",s," \u7531 ",Object(l.jsx)("b",{children:o})," \u4e8e ",C.b.parseTimestampToDifference(i)," \u521b\u5efa"]})]})}function R(e){switch(e){case N.a.CLOSED:return Object(l.jsx)(P.a,{});case N.a.OPEN:return Object(l.jsx)(g.a,{})}}function W(e){switch(e){case N.a.CLOSED:return"red";case N.a.OPEN:return"green"}}var L=m.a.memo(B),D=a(194);function G(e){var t=e.issues;return Object(l.jsx)("div",{className:k.a.IssueList,children:t.length>0?t.map((function(e){return Object(l.jsx)(L,{issue:e},e.id)})):Object(l.jsx)("div",{className:k.a.emptyWrapper,children:Object(l.jsx)(D.a,{description:"\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684 Issue"})})})}var Z=m.a.memo(G);var z=m.a.memo(Object(v.j)((function(e){var t=e.match.params,a=t.username,s=t.repositoryName,r=e.loading,n=e.openAmount,c=e.closedAmount,o=e.currentStatus,i=e.onStatusButtonClick,u=e.currentPageNumber,p=e.onPrevButtonClick,m=e.onNextButtonClick,d=e.noNextPage,v=e.issues;return Object(l.jsx)("div",{className:j.a.Issues,children:Object(l.jsx)(b.a,{spinning:r,children:Object(l.jsxs)("div",{className:j.a.list,children:[Object(l.jsxs)("div",{className:j.a.header,children:[Object(l.jsx)("div",{className:j.a.statusFilter,children:Object(l.jsxs)(h.b,{size:-1,children:[Object(l.jsxs)(x.a,{size:"small",type:"link",style:{color:"unset",fontWeight:void 0===o?"bolder":"inherit"},onClick:i(void 0),children:[Object(l.jsx)(S.a,{})," \u6240\u6709",Object(l.jsx)(O.a,{className:j.a.tag,children:n+c})]}),Object(l.jsxs)(x.a,{size:"small",type:"link",style:{color:"green",fontWeight:o===N.a.OPEN?"bolder":"inherit"},onClick:i(N.a.OPEN),children:[Object(l.jsx)(g.a,{})," \u5f00\u542f\u7684",Object(l.jsx)(O.a,{className:j.a.tag,children:n})]}),Object(l.jsxs)(x.a,{size:"small",type:"link",style:{color:"red",fontWeight:o===N.a.CLOSED?"bolder":"inherit"},onClick:i(N.a.CLOSED),children:[Object(l.jsx)(P.a,{})," \u5df2\u5173\u95ed",Object(l.jsx)(O.a,{className:j.a.tag,children:c})]})]})}),Object(l.jsx)(f.b,{to:_.Function.generateRepositoryCreateIssueRoute({username:a,repositoryName:s}),children:Object(l.jsxs)(x.a,{type:"primary",children:[Object(l.jsx)(y.a,{}),"\u521b\u5efa Issue"]})})]}),Object(l.jsx)("div",{className:j.a.issueListWrapper,children:Object(l.jsx)(Z,{issues:v})}),Object(l.jsx)("div",{className:j.a.pageButtonWrapper,children:Object(l.jsxs)(h.b,{size:-1,children:[Object(l.jsx)(x.a,{disabled:0===u,onClick:p,children:"\u4e0a\u4e00\u9875"}),Object(l.jsx)(x.a,{onClick:m,disabled:d,children:"\u4e0b\u4e00\u9875"})]})})]})})})}))),F=a(30),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).loadOpenAmount=Object(n.a)(r.a.mark((function e(){var t,a,n,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.match.params,a=t.username,n=t.repositoryName,e.next=3,F.e.getAmountByRepository({username:a,name:n},N.a.OPEN);case 3:null!==(c=e.sent)&&(o=c.amount,s.setState({openAmount:o}));case 5:case"end":return e.stop()}}),e)}))),s.loadClosedAmount=Object(n.a)(r.a.mark((function e(){var t,a,n,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.match.params,a=t.username,n=t.repositoryName,e.next=3,F.e.getAmountByRepository({username:a,name:n},N.a.CLOSED);case 3:null!==(c=e.sent)&&(o=c.amount,s.setState({closedAmount:o}));case 5:case"end":return e.stop()}}),e)}))),s.onStatusButtonClick=function(e){return Object(n.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.setState({currentStatus:e,loading:!0,currentPageNumber:0}),t.t0=e,t.next=t.t0===N.a.OPEN?4:t.t0===N.a.CLOSED?7:10;break;case 4:return t.next=6,s.loadOpenAmount();case 6:return t.abrupt("break",13);case 7:return t.next=9,s.loadClosedAmount();case 9:return t.abrupt("break",13);case 10:return t.next=12,Promise.all([s.loadOpenAmount(),s.loadClosedAmount()]);case 12:return t.abrupt("break",13);case 13:return t.next=15,s.loadIssues(e,0,a.SIZE_PER_PAGE);case 15:s.setState({loading:!1});case 16:case"end":return t.stop()}}),t)})))},s.loadIssues=function(){var e=Object(n.a)(r.a.mark((function e(t,a,n){var c,o,i,u,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.props.match.params,o=c.username,i=c.repositoryName,e.next=3,F.e.getByRepository({username:o,name:i},t,a,n);case 3:null!==(u=e.sent)&&(l=u.issues,s.setState({issues:l}));case 5:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),s.onPrevButtonClick=Object(n.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.state,n=t.currentPageNumber,c=t.currentStatus,!(n>0)){e.next=7;break}return s.setState({loading:!0}),e.next=5,s.loadIssues(c,(n-1)*a.SIZE_PER_PAGE,a.SIZE_PER_PAGE);case 5:s.setState({currentPageNumber:n-1,loading:!1}),window.scrollTo({top:0,behavior:"smooth"});case 7:case"end":return e.stop()}}),e)}))),s.onNextButtonClick=Object(n.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.state,n=t.currentPageNumber,c=t.currentStatus,s.setState({loading:!0}),e.next=4,s.loadIssues(c,(n+1)*a.SIZE_PER_PAGE,a.SIZE_PER_PAGE);case 4:s.setState({currentPageNumber:n+1,loading:!1}),window.scrollTo({top:0,behavior:"smooth"});case 6:case"end":return e.stop()}}),e)}))),s.setNoNextPage=function(){var e=s.state,t=e.currentStatus,r=e.currentPageNumber,n=e.openAmount,c=e.closedAmount;switch(t){case N.a.CLOSED:return(r+1)*a.SIZE_PER_PAGE>=c;case N.a.OPEN:return(r+1)*a.SIZE_PER_PAGE>=n;default:return(r+1)*a.SIZE_PER_PAGE>=n+c}},s.state={loading:!1,openAmount:0,closedAmount:0,currentStatus:N.a.OPEN,issues:[],currentPageNumber:0},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.currentStatus,this.setState({loading:!0}),e.next=4,Promise.all([this.loadOpenAmount(),this.loadClosedAmount(),this.loadIssues(t,0,a.SIZE_PER_PAGE)]);case 4:this.setState({loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(n.a)(r.a.mark((function e(t,a,s){var n,c,o,i,u,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.match.params,c=n.username,o=n.repositoryName,i=t.match.params,u=i.username,l=i.repositoryName,c===u&&o===l){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,s){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.closedAmount,s=e.currentStatus,r=e.openAmount,n=e.issues,c=e.currentPageNumber;return Object(l.jsx)(z,{loading:t,closedAmount:a,currentStatus:s,onStatusButtonClick:this.onStatusButtonClick,openAmount:r,issues:n,currentPageNumber:c,noNextPage:this.setNoNextPage(),onNextButtonClick:this.onNextButtonClick,onPrevButtonClick:this.onPrevButtonClick})}}]),a}(p.PureComponent);T.SIZE_PER_PAGE=20;var M=Object(v.j)(T)}}]);
//# sourceMappingURL=31.90af61f2.chunk.js.map