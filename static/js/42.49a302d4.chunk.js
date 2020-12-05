(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[42],{1128:function(e,t,a){e.exports={Commit:"Style_Commit__1ccZI",diffWrapper:"Style_diffWrapper__1Xmub",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__-rw5j"}},1129:function(e,t,a){e.exports={CommitInfoCard:"Style_CommitInfoCard__1hAXa",messageWrapper:"Style_messageWrapper__3JI_C",message:"Style_message__2pxOG",body:"Style_body__bWu93",infoWrapper:"Style_infoWrapper__1ZWk5",info:"Style_info__29oAa",committerWrapper:"Style_committerWrapper__vzZYZ"}},1404:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return B}));var r=a(98),n=a(2),i=a.n(n),o=a(4),s=a(14),c=a(15),m=a(39),u=a(38),f=a(1),p=a(0),l=a.n(p),d=a(1128),j=a.n(d),h=a(902),b=a(118),x=a(1129),O=a.n(x),_=a(81),v=a(22),y=a(62),g=a(66),C=a(26),N=a(339);function k(e){var t=e.commit,a=t.message,r=t.body,n=t.committerName,i=t.timestamp,o=t.commitHash,s=t.committerEmail,c=e.match.params,m=c.username,u=c.repositoryName;return Object(f.jsxs)("div",{className:O.a.CommitInfoCard,children:[Object(f.jsxs)("div",{className:O.a.messageWrapper,children:[Object(f.jsx)("div",{className:O.a.message,children:a}),r.length?Object(f.jsx)("pre",{className:O.a.body,children:r}):null]}),Object(f.jsxs)("div",{className:O.a.infoWrapper,children:[Object(f.jsxs)("div",{className:O.a.info,children:[Object(f.jsx)("div",{className:O.a.committerWrapper,children:Object(f.jsx)(N.a,{committerEmail:s,committerName:n})}),"\u5728 ",_.b.parseTimestampToDifference(i),"\u63d0\u4ea4"]}),Object(f.jsx)("div",{className:O.a.hashWrapper,children:Object(f.jsx)(v.b,{className:O.a.hash,to:g.Function.generateRepositoryCodeRoute({username:m,repositoryName:u,commitHash:o,objectType:C.b.TREE}),children:Object(f.jsx)(b.a,{size:"small",children:Object(f.jsx)("code",{children:o})})})})]})]})}var w=Object(y.j)(l.a.memo(k)),W=a(344);function S(e){var t=e.loading,a=e.diff,r=e.commit,n=e.diffAmount,i=e.onLoadMoreButtonClick;return Object(f.jsx)("div",{className:j.a.Commit,children:Object(f.jsxs)(h.a,{spinning:t,children:[Object(f.jsx)("div",{className:j.a.commitInfoCardWrapper,children:Object(f.jsx)(w,{commit:r})}),Object(f.jsxs)("div",{className:j.a.diffWrapper,children:[Object(f.jsx)(W.a,{fileDiffs:a,fileDiffAmount:n}),Object(f.jsx)("div",{className:j.a.loadMoreButtonWrapper,children:Object(f.jsx)(b.a,{disabled:t,loading:t,onClick:i,size:"large",type:"primary",children:"\u52a0\u8f7d\u66f4\u591a\u6587\u4ef6\u66f4\u6539"})})]})]})})}var A=l.a.memo(S),D=a(148),M=a(30),E=a(336),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).init=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){n.setState({diff:[]},(function(){return e()}))})));case 1:case"end":return e.stop()}}),e)}))),n.loadCommit=Object(o.a)(i.a.mark((function e(){var t,a,r,o,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repositoryName,o=t.commitHash,e.next=3,M.j.commit({username:a,name:r},o);case 3:null!==(s=e.sent)&&(c=s.commit,n.setState({commit:c}));case 5:case"end":return e.stop()}}),e)}))),n.loadMoreCommitDiff=Object(o.a)(i.a.mark((function e(){var t,o,s,c,m,u,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,o=t.username,s=t.repositoryName,c=t.commitHash,m=n.state.diff,e.next=4,M.j.commitDiff({username:o,name:s},c,m.length,a.FILE_DIFF_AMOUNT_PER_PAGE);case 4:null!==(u=e.sent)&&(0===(f=u.diff).length?E.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u88ab\u4fee\u6539\u6587\u4ef6"}):n.setState({diff:[].concat(Object(r.a)(m),Object(r.a)(f))}));case 6:case"end":return e.stop()}}),e)}))),n.loadCommitDiffAmount=Object(o.a)(i.a.mark((function e(){var t,a,r,o,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repositoryName,o=t.commitHash,e.next=3,M.j.commitDiffAmount({username:a,name:r},o);case 3:null!==(s=e.sent)&&(c=s.amount,n.setState({diffAmount:c}));case 5:case"end":return e.stop()}}),e)}))),n.onLoadMoreButtonClick=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.next=3,n.loadMoreCommitDiff();case 3:n.setState({loading:!1});case 4:case"end":return e.stop()}}),e)}))),n.state={commit:new D.b("","","a@b.com",0,"",""),diff:[],diffAmount:0,loading:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return this.setState({loading:!0}),e.next=5,Promise.all([this.loadCommit(),this.loadCommitDiffAmount(),this.loadMoreCommitDiff()]);case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(i.a.mark((function e(t,a,r){var n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.location.pathname,o=t.location.pathname,n===o){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.commit,a=e.diff,r=e.loading,n=e.diffAmount;return Object(f.jsx)(A,{commit:t,diff:a,loading:r,diffAmount:n,onLoadMoreButtonClick:this.onLoadMoreButtonClick})}}]),a}(p.PureComponent);I.FILE_DIFF_AMOUNT_PER_PAGE=10;var B=Object(y.j)(I)}}]);
//# sourceMappingURL=42.49a302d4.chunk.js.map