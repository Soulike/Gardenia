(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[32],{1207:function(e,t,a){e.exports={Commit:"Style_Commit__1ccZI",diffWrapper:"Style_diffWrapper__1Xmub",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__-rw5j"}},1208:function(e,t,a){e.exports={CommitInfoCard:"Style_CommitInfoCard__1hAXa",messageWrapper:"Style_messageWrapper__3JI_C",message:"Style_message__2pxOG",body:"Style_body__bWu93",infoWrapper:"Style_infoWrapper__1ZWk5",info:"Style_info__29oAa",username:"Style_username__BHLQr"}},1265:function(e,t,a){"use strict";a.r(t);a(94);var o=a(41),i=a(0),s=a.n(i),n=(a(140),a(74)),m=(a(93),a(25)),r=a(1207),c=a.n(r),l=a(1208),f=a.n(l),p=a(95),d=a(13),u=a(131),h=a(36),_=a(18);var y=Object(u.f)(s.a.memo((function(e){const{commit:{message:t,body:a,committerName:o,timestamp:i,commitHash:n},match:{params:{username:r,repository:c}}}=e;return s.a.createElement("div",{className:f.a.CommitInfoCard},s.a.createElement("div",{className:f.a.messageWrapper},s.a.createElement("div",{className:f.a.message},t),a.length?s.a.createElement("pre",{className:f.a.body},a):null),s.a.createElement("div",{className:f.a.infoWrapper},s.a.createElement("div",{className:f.a.info},s.a.createElement(d.b,{to:h.Function.generatePersonalCenterRoute({username:o}),className:f.a.username},o),"\u5728 ",p.b.parseTimestampToDifference(i),"\u63d0\u4ea4"),s.a.createElement("div",{className:f.a.hashWrapper},s.a.createElement(d.b,{className:f.a.hash,to:h.Function.generateRepositoryCodeRoute({username:r,repository:c,branch:n,objectType:_.b.TREE})},s.a.createElement(m.a,{size:"small"},s.a.createElement("code",null,n))))))}))),E=a(350);var g=s.a.memo((function(e){const{loading:t,diff:a,commit:o,diffAmount:i,onLoadMoreButtonClick:r}=e;return s.a.createElement("div",{className:c.a.Commit},s.a.createElement(n.a,{spinning:t},s.a.createElement("div",{className:c.a.commitInfoCardWrapper},s.a.createElement(y,{commit:o})),s.a.createElement("div",{className:c.a.diffWrapper},s.a.createElement(E.a,{fileDiffs:a,fileDiffAmount:i}),s.a.createElement("div",{className:c.a.loadMoreButtonWrapper},s.a.createElement(m.a,{disabled:t,loading:t,onClick:r,size:"large",type:"primary"},"\u52a0\u8f7d\u66f4\u591a\u6587\u4ef6\u66f4\u6539")))))})),C=a(113),b=a(43);class S extends i.PureComponent{constructor(e){super(e),this.init=async()=>new Promise(e=>{this.setState({diff:[]},()=>e())}),this.loadCommit=async()=>{const{match:{params:{username:e,repository:t,commitHash:a}}}=this.props,o=await b.h.commit({username:e,name:t},a);if(null!==o){const{commit:e}=o;this.setState({commit:e})}},this.loadMoreCommitDiff=async()=>{const{match:{params:{username:e,repository:t,commitHash:a}}}=this.props,{diff:i}=this.state,s=await b.h.commitDiff({username:e,name:t},a,i.length,S.FILE_DIFF_AMOUNT_PER_PAGE);if(null!==s){const{diff:e}=s;0===e.length?o.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u88ab\u4fee\u6539\u6587\u4ef6"}):this.setState({diff:[...i,...e]})}},this.loadCommitDiffAmount=async()=>{const{match:{params:{username:e,repository:t,commitHash:a}}}=this.props,o=await b.h.commitDiffAmount({username:e,name:t},a);if(null!==o){const{amount:e}=o;this.setState({diffAmount:e})}},this.onLoadMoreButtonClick=async()=>{this.setState({loading:!0}),await this.loadMoreCommitDiff(),this.setState({loading:!1})},this.state={commit:new C.b("","","a@b.com",0,"",""),diff:[],diffAmount:0,loading:!1}}async componentDidMount(){await this.init(),this.setState({loading:!0}),await Promise.all([this.loadCommit(),this.loadCommitDiffAmount(),this.loadMoreCommitDiff()]),this.setState({loading:!1})}async componentDidUpdate(e,t,a){const{location:{pathname:o}}=this.props,{location:{pathname:i}}=e;o!==i&&await this.componentDidMount()}render(){const{commit:e,diff:t,loading:a,diffAmount:o}=this.state;return s.a.createElement(g,{commit:e,diff:t,loading:a,diffAmount:o,onLoadMoreButtonClick:this.onLoadMoreButtonClick})}}S.FILE_DIFF_AMOUNT_PER_PAGE=10;var N=Object(u.f)(S);a.d(t,"default",(function(){return N}))}}]);
//# sourceMappingURL=32.cd07f56b.chunk.js.map