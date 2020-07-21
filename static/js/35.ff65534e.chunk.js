(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[35],{1261:function(e,t,a){e.exports={Commit:"Style_Commit__1ccZI",diffWrapper:"Style_diffWrapper__1Xmub",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__-rw5j"}},1262:function(e,t,a){e.exports={CommitInfoCard:"Style_CommitInfoCard__1hAXa",messageWrapper:"Style_messageWrapper__3JI_C",message:"Style_message__2pxOG",body:"Style_body__bWu93",infoWrapper:"Style_infoWrapper__1ZWk5",info:"Style_info__29oAa",committerWrapper:"Style_committerWrapper__vzZYZ"}},1377:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var r=a(91),n=a(1),o=a.n(n),i=a(3),m=a(10),s=a(11),c=a(20),u=a(19),f=a(0),l=a.n(f),p=a(1261),d=a.n(p),h=a(1121),_=a(105),v=a(1262),b=a.n(v),E=a(99),y=a(18),g=a(62),C=a(25),k=a(23),w=a(330);var W=Object(g.f)(l.a.memo((function(e){var t=e.commit,a=t.message,r=t.body,n=t.committerName,o=t.timestamp,i=t.commitHash,m=t.committerEmail,s=e.match.params,c=s.username,u=s.repository;return l.a.createElement("div",{className:b.a.CommitInfoCard},l.a.createElement("div",{className:b.a.messageWrapper},l.a.createElement("div",{className:b.a.message},a),r.length?l.a.createElement("pre",{className:b.a.body},r):null),l.a.createElement("div",{className:b.a.infoWrapper},l.a.createElement("div",{className:b.a.info},l.a.createElement("div",{className:b.a.committerWrapper},l.a.createElement(w.a,{committerEmail:m,committerName:n})),"\u5728 ",E.b.parseTimestampToDifference(o),"\u63d0\u4ea4"),l.a.createElement("div",{className:b.a.hashWrapper},l.a.createElement(y.b,{className:b.a.hash,to:C.Function.generateRepositoryCodeRoute({username:c,repository:u,branch:i,objectType:k.b.TREE})},l.a.createElement(_.a,{size:"small"},l.a.createElement("code",null,i))))))}))),x=a(338);var O=l.a.memo((function(e){var t=e.loading,a=e.diff,r=e.commit,n=e.diffAmount,o=e.onLoadMoreButtonClick;return l.a.createElement("div",{className:d.a.Commit},l.a.createElement(h.a,{spinning:t},l.a.createElement("div",{className:d.a.commitInfoCardWrapper},l.a.createElement(W,{commit:r})),l.a.createElement("div",{className:d.a.diffWrapper},l.a.createElement(x.a,{fileDiffs:a,fileDiffAmount:n}),l.a.createElement("div",{className:d.a.loadMoreButtonWrapper},l.a.createElement(_.a,{disabled:t,loading:t,onClick:o,size:"large",type:"primary"},"\u52a0\u8f7d\u66f4\u591a\u6587\u4ef6\u66f4\u6539")))))})),S=a(144),j=a(38),N=a(328),A=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).init=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){n.setState({diff:[]},(function(){return e()}))})));case 1:case"end":return e.stop()}}),e)}))),n.loadCommit=Object(i.a)(o.a.mark((function e(){var t,a,r,i,m,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,i=t.commitHash,e.next=3,j.i.commit({username:a,name:r},i);case 3:null!==(m=e.sent)&&(s=m.commit,n.setState({commit:s}));case 5:case"end":return e.stop()}}),e)}))),n.loadMoreCommitDiff=Object(i.a)(o.a.mark((function e(){var t,i,m,s,c,u,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,i=t.username,m=t.repository,s=t.commitHash,c=n.state.diff,e.next=4,j.i.commitDiff({username:i,name:m},s,c.length,a.FILE_DIFF_AMOUNT_PER_PAGE);case 4:null!==(u=e.sent)&&(0===(f=u.diff).length?N.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u88ab\u4fee\u6539\u6587\u4ef6"}):n.setState({diff:[].concat(Object(r.a)(c),Object(r.a)(f))}));case 6:case"end":return e.stop()}}),e)}))),n.loadCommitDiffAmount=Object(i.a)(o.a.mark((function e(){var t,a,r,i,m,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,i=t.commitHash,e.next=3,j.i.commitDiffAmount({username:a,name:r},i);case 3:null!==(m=e.sent)&&(s=m.amount,n.setState({diffAmount:s}));case 5:case"end":return e.stop()}}),e)}))),n.onLoadMoreButtonClick=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.next=3,n.loadMoreCommitDiff();case 3:n.setState({loading:!1});case 4:case"end":return e.stop()}}),e)}))),n.state={commit:new S.b("","","a@b.com",0,"",""),diff:[],diffAmount:0,loading:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return this.setState({loading:!0}),e.next=5,Promise.all([this.loadCommit(),this.loadCommitDiffAmount(),this.loadMoreCommitDiff()]);case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,a,r){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.location.pathname,i=t.location.pathname,n===i){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.commit,a=e.diff,r=e.loading,n=e.diffAmount;return l.a.createElement(O,{commit:t,diff:a,loading:r,diffAmount:n,onLoadMoreButtonClick:this.onLoadMoreButtonClick})}}]),a}(f.PureComponent);A.FILE_DIFF_AMOUNT_PER_PAGE=10;var D=Object(g.f)(A)}}]);
//# sourceMappingURL=35.ff65534e.chunk.js.map