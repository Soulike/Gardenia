(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[10],{1086:function(e,t,a){e.exports={CommitInfoBar:"Style_CommitInfoBar__AogMa",left:"Style_left__3aqnY",right:"Style_right__XNYqn",message:"Style_message__3Jq3M"}},1097:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),o=a(1086),i=a.n(o),s=a(14),c=a(42),m=a(20),u=a(234),l=a(78),p=a(330);var d=Object(c.f)(r.a.memo((function(e){var t=e.lastCommit,a=t.committerName,n=t.commitHash,o=t.message,c=t.timestamp,d=t.committerEmail,f=e.match.params,h=f.username,b=f.repository;return r.a.createElement("div",{className:i.a.CommitInfoBar},r.a.createElement("div",{className:i.a.left},r.a.createElement(p.a,{committerEmail:d,committerName:a}),r.a.createElement("div",{className:i.a.message},o)),r.a.createElement("div",{className:i.a.right},r.a.createElement("div",{className:i.a.time},l.b.parseTimestampToDifference(c)),r.a.createElement(u.a,{title:n},r.a.createElement("div",{className:i.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",r.a.createElement(s.b,{to:m.Function.generateRepositoryCommitRoute({username:h,repository:b,commitHash:n})},n.slice(0,7))))))})))},1098:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var n=a(1),r=a.n(n),o=a(328),i=a(3),s=a(7),c=a(9),m=a(18),u=a(17),l=a(0),p=a.n(l),d=a(42),f=a(20),h=a(329),b=a(1085),C=a.n(b),v=a(19),y=a(1059),E=a.n(y),x=a(235),_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).objectURLs=[],n.loadMainBranchName=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,i,s,c,m,u,l,p,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.match.params,i=a.username,s=a.repository,e.next=3,h.a.branches({username:i,name:s});case 3:if(null===(c=e.sent)){e.next=24;break}m=c.branches,u=Object(o.a)(m),e.prev=7,u.s();case 9:if((l=u.n()).done){e.next=16;break}if(p=l.value,d=p.name,!p.isDefault){e.next=14;break}return n.setState({mainBranchName:d},(function(){return t()})),e.abrupt("break",16);case 14:e.next=9;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),u.e(e.t0);case 21:return e.prev=21,u.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[7,18,21,24]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),n.processHTML=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,s,c,m,u,l,p,d,f,h,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=document.implementation.createHTMLDocument(),(s=a.createElement("div")).innerHTML=t,c=s.getElementsByTagName("a"),m=s.getElementsByTagName("img"),u=[],l=Object(o.a)(c);try{for(d=function(){var e=p.value,t=e.getAttribute("href");null!==t&&u.push(Object(i.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=e,a.next=3,n.getCompleteLink(t);case 3:a.t1=a.sent,a.t0.setAttribute.call(a.t0,"href",a.t1);case 5:case"end":return a.stop()}}),a)})))())},l.s();!(p=l.n()).done;)d()}catch(C){l.e(C)}finally{l.f()}f=Object(o.a)(m);try{for(b=function(){var e=h.value,t=e.getAttribute("src");null!==t&&u.push(Object(i.a)(r.a.mark((function a(){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.getImageURL(t);case 2:o=a.sent,n.objectURLs.push(o),e.setAttribute("src",o);case 5:case"end":return a.stop()}}),a)})))())},f.s();!(h=f.n()).done;)b()}catch(C){f.e(C)}finally{f.f()}return e.next=12,Promise.all(u);case 12:return e.abrupt("return",s.innerHTML);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getCompleteLink=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,o,i,s,c,m,u,l,p,d,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length&&!C()(t)&&!E.a.isAbsolute(t)&&"#"!==t.charAt(0)&&"?"!==t.charAt(0)){e.next=4;break}return e.abrupt("return",t);case 4:return a=n.props.match.params,o=a.username,i=a.repository,s=a.objectType,c=a.branch,m=a.path,u=n.state.mainBranchName,l=m?s===v.b.BLOB?E.a.join(E.a.dirname(m),t):E.a.join(m,t):E.a.join("",t),e.next=9,h.a.fileInfo({username:o},{name:i},l,c||u);case 9:if(null===(p=e.sent)){e.next=19;break}if(d=p.exists,b=p.type,d&&b!==v.b.BLOB){e.next=16;break}return e.abrupt("return",f.Function.generateRepositoryCodeRoute({username:o,repository:i,branch:c||u,path:l,objectType:v.b.BLOB}));case 16:return e.abrupt("return",f.Function.generateRepositoryCodeRoute({username:o,repository:i,branch:c||u,path:l,objectType:v.b.TREE}));case 17:e.next=20;break;case 19:return e.abrupt("return",f.Function.generateRepositoryCodeRoute({username:o,repository:i,branch:c||u,path:l,objectType:v.b.BLOB}));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getImageURL=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,o,i,s,c,m,u,l,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C()(t)&&!E.a.isAbsolute(t)){e.next=4;break}return e.abrupt("return",t);case 4:return a=n.props.match.params,o=a.username,i=a.repository,s=a.objectType,c=a.branch,m=a.path,u=n.state.mainBranchName,l=m?s===v.b.BLOB?E.a.join(E.a.dirname(m),t):E.a.join(m,t):E.a.join("",t),e.next=9,h.a.rawFile({username:o},{name:i},l,c||u);case 9:if(null===(p=e.sent)){e.next=14;break}return e.abrupt("return",URL.createObjectURL(p));case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={mainBranchName:"",loading:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.branch,this.setState({loading:!0}),"string"===typeof t){e.next=5;break}return e.next=5,this.loadMainBranchName();case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(r.a.mark((function e(t,a,n){var o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.markdown,i=t.markdown,o===i){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.objectURLs.forEach((function(e){return URL.revokeObjectURL(e)}))}},{key:"render",value:function(){var e=this.state.loading,t=this.props.markdown;return p.a.createElement(x.a,{markdown:t,processHTML:this.processHTML,loading:e})}}]),a}(l.PureComponent),k=Object(d.f)(_)},1187:function(e,t,a){e.exports={FileReader:"Style_FileReader__3UwbJ",commitInfoBar:"Style_commitInfoBar__Q8via",contentWrapper:"Style_contentWrapper__WXjet",readerWrapper:"Style_readerWrapper__1-Blo",content:"Style_content___R5vO"}},1188:function(e,t,a){e.exports={CodeReader:"Style_CodeReader__yNPpi",line:"Style_line__2xQ8V",commentIcon:"Style_commentIcon__1fmDD",lineNumber:"Style_lineNumber__nX9YT",codeWrapper:"Style_codeWrapper__3J8o_",code:"Style_code__19ilK"}},1189:function(e,t,a){e.exports={MarkdownReader:"Style_MarkdownReader__2lNN5"}},1190:function(e,t,a){e.exports={CodeCommentDrawer:"Style_CodeCommentDrawer__1vYKD",top:"Style_top__1ZUZE",mid:"Style_mid__zKGSd",bottom:"Style_bottom__2avbu"}},1191:function(e,t,a){e.exports={CodeCommentForm:"Style_CodeCommentForm__1HwIU",textarea:"Style_textarea__3fx1d",buttonWrapper:"Style_buttonWrapper__3C6ZC"}},1192:function(e,t,a){e.exports={CodeCommentList:"Style_CodeCommentList__1G5Oh",itemWrapper:"Style_itemWrapper__3kY6G"}},1193:function(e,t,a){e.exports={CardTitle:"Style_CardTitle__271oV",modificationTimeWrapper:"Style_modificationTimeWrapper__2u105"}},1194:function(e,t,a){e.exports={CodeCommentItem:"Style_CodeCommentItem__3jXfA",contentWrapper:"Style_contentWrapper__3lLjk",bottomWrapper:"Style_bottomWrapper__AzNXW"}},1195:function(e,t,a){e.exports={CardBottom:"Style_CardBottom__52kk2"}},1196:function(e,t,a){e.exports={FileInfoBar:"Style_FileInfoBar__2_PqD",fileInfoWrapper:"Style_fileInfoWrapper__11WJK",fileNameWrapper:"Style_fileNameWrapper__AgwR-",fileName:"Style_fileName__3sh6Z"}},1243:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Re}));var n={};a.r(n),a.d(n,"CODE_COMMENT_CHANGE",(function(){return V}));var r=a(1),o=a.n(r),i=a(3),s=a(7),c=a(9),m=a(18),u=a(17),l=a(0),p=a.n(l),d=a(1187),f=a.n(d),h=a(1012),b=a(1097),C=a(42),v=a(1024);var y=p.a.memo((function(){return p.a.createElement(v.a,{type:"warning",showIcon:!0,message:"\u4e8c\u8fdb\u5236\u6587\u4ef6\u65e0\u6cd5\u663e\u793a",description:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u67e5\u770b\u539f\u6587\u4ef6"})}));var E=p.a.memo((function(){return p.a.createElement(v.a,{type:"warning",showIcon:!0,message:"\u6587\u4ef6\u8fc7\u5927\uff0c\u4e0d\u80fd\u76f4\u63a5\u67e5\u770b",description:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u67e5\u770b\u539f\u6587\u4ef6"})})),x=a(1059),_=a.n(x),k=a(1188),N=a.n(k),O=a(78),w=a(1282),g=a(234);var j=p.a.memo((function(e){var t=e.code,a=e.onCodeLineClickFactory,n=e.hasCommentLineNumbers,r=e.hasComment,o=e.hasLineNumber,i=O.a.getHighlightedCodeLines(t);return p.a.createElement("table",{className:"".concat(N.a.CodeReader," hljs")},p.a.createElement("tbody",null,i.map((function(e,t){var i=p.a.createElement("tr",{key:t,className:N.a.line,style:r?{}:{cursor:"auto"},onClick:"function"===typeof a?a(t+1):void 0},p.a.createElement("td",{className:N.a.commentIcon},Array.isArray(n)&&n.includes(t+1)?p.a.createElement(w.a,null):null),o?p.a.createElement("td",null,p.a.createElement("code",{className:N.a.lineNumber},t+1)):null,p.a.createElement("td",{className:N.a.codeWrapper},p.a.createElement("pre",{className:N.a.code},p.a.createElement("code",{dangerouslySetInnerHTML:{__html:e}}))));return r?p.a.createElement(g.a,{key:t,title:"\u70b9\u51fb\u67e5\u770b\u548c\u6dfb\u52a0\u6279\u6ce8",placement:"left"},i):i}))))})),S=a(1189),L=a.n(S),D=a(1098);var T=p.a.memo((function(e){var t=e.markdown;return p.a.createElement("div",{className:L.a.MarkdownReader},p.a.createElement(D.a,{markdown:t}))})),B=a(1190),P=a.n(B),R=a(1260),M=a(1191),W=a.n(M),H=a(1018),F=a(84);var I=p.a.memo((function(e){var t=e.onSubmit,a=e.codeComment,n=e.onCodeCommentChange,r=e.submitting;return p.a.createElement("form",{className:W.a.CodeCommentForm,onSubmit:t},p.a.createElement(H.a.TextArea,{onChange:n,value:a,autoFocus:!0,placeholder:"\u60f3\u8981\u8865\u5145\u4e9b\u4ec0\u4e48\uff1f",className:W.a.textarea,disabled:r}),p.a.createElement("div",{className:W.a.buttonWrapper},p.a.createElement(F.a,{htmlType:"submit",type:"primary",disabled:r,loading:r},"\u63d0\u4ea4")))})),U=a(89),A=a(1011),z=a(29),G=a(126),V="CODE_COMMENT_CHANGE",J=new G.EventEmitter,X=a(141),Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(U.promisify)(r.setState),r.init=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setStatePromise({codeComment:""});case 2:case"end":return e.stop()}}),e)}))),r.onCodeCommentChange=function(e){r.setState({codeComment:e.target.value})},r.onSubmit=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,i,s,c,m,u,l,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=r.state.codeComment,X.b.Repository.codeCommentContent(a)){e.next=6;break}A.a.error({message:X.a.Repository.CODE_COMMENT_CONTENT}),e.next=19;break;case 6:return i=r.props,s=i.match.params,c=s.username,m=s.repository,u=s.path,l=i.lineNumber,p=i.commitHash,e.next=9,r.setStatePromise({submitting:!0});case 9:return e.next=11,z.b.add({repositoryUsername:c,repositoryName:m,filePath:u,columnNumber:l,creationCommitHash:p,content:a});case 11:if(null===e.sent){e.next=17;break}return A.a.success({message:"\u4ee3\u7801\u6279\u6ce8\u6dfb\u52a0\u6210\u529f"}),e.next=16,r.init();case 16:J.emit(n.CODE_COMMENT_CHANGE);case 17:return e.next=19,r.setStatePromise({submitting:!1});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={codeComment:"",submitting:!1},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,a,n){var r,i,s,c,m,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,i=r.commitHash,s=r.lineNumber,c=r.match.params.path,m=t.commitHash,u=t.lineNumber,l=t.match.params.path,i===m&&s===u&&c===l){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.codeComment,a=e.submitting;return p.a.createElement(I,{submitting:a,codeComment:t,onSubmit:this.onSubmit,onCodeCommentChange:this.onCodeCommentChange})}}]),a}(l.PureComponent),q=Object(C.f)(Y),K=a(1192),Z=a.n(K),Q=a(1249),$=a(170),ee=a(1021),te=a(1193),ae=a.n(te),ne=a(330);var re=p.a.memo((function(e){var t=e.profile,a=t.username,n=t.email,r=e.modificationTimestamp,o=e.loading;return p.a.createElement(h.a,{spinning:o},p.a.createElement("div",{className:ae.a.CardTitle},p.a.createElement("div",{className:ae.a.personalCenterLinkWrapper},p.a.createElement(ne.a,{committerName:a,committerEmail:n})),p.a.createElement("div",{className:ae.a.modificationTimeWrapper},"\u6700\u540e\u7f16\u8f91\u4e8e ",O.b.parseTimestampToDate(r))))})),oe=a(125),ie=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setStatePromise=Object(U.promisify)(n.setState),n.loadProfile=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.creatorUsername,e.next=3,z.f.get({username:t});case 3:if(null===(a=e.sent)){e.next=7;break}return e.next=7,n.setStatePromise({profile:a});case 7:case"end":return e.stop()}}),e)}))),n.state={profile:new oe.f("","","",""),loading:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadProfile();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,a,n){var r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props.creatorUsername,i=t.creatorUsername,r===i){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.profile,a=e.loading,n=this.props.modificationTimestamp;return p.a.createElement(re,{loading:a,profile:t,modificationTimestamp:n})}}]),a}(l.PureComponent),se=a(1194),ce=a.n(se),me=a(1195),ue=a.n(me),le=a(1014);var pe=p.a.memo((function(e){var t=e.onDeleteButtonClick,a=e.loading;return p.a.createElement("div",{className:ue.a.CardBottom},p.a.createElement("div",{className:ue.a.buttonWrapper},p.a.createElement(le.a,{title:"\u786e\u8ba4\u5220\u9664\u4ee3\u7801\u6807\u6ce8\uff1f",placement:"topLeft",onConfirm:t,disabled:a},p.a.createElement(F.a,{size:"small",type:"primary",danger:!0,disabled:a,loading:a},"\u5220\u9664"))))})),de=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(U.promisify)(r.setState),r.onDeleteButtonClick=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.id,e.next=3,r.setStatePromise({loading:!0});case 3:return e.next=5,z.b.del({id:t});case 5:return null!==e.sent&&(A.a.success({message:"\u5220\u9664\u6807\u6ce8\u6210\u529f"}),J.emit(n.CODE_COMMENT_CHANGE)),e.next=9,r.setStatePromise({loading:!1});case 9:case"end":return e.stop()}}),e)}))),r.state={loading:!1},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.loading;return p.a.createElement(pe,{loading:e,onDeleteButtonClick:this.onDeleteButtonClick})}}]),a}(l.PureComponent);var fe=p.a.memo((function(e){var t=e.codeComment,a=t.creatorUsername,n=t.modificationTimestamp,r=t.content,o=t.id;return p.a.createElement("div",{className:ce.a.CodeCommentItem},p.a.createElement(ee.a,{title:p.a.createElement(ie,{creatorUsername:a,modificationTimestamp:n})},p.a.createElement("div",{className:ce.a.contentWrapper},r),p.a.createElement("div",{className:ce.a.bottomWrapper},p.a.createElement(de,{id:o}))))}));var he=p.a.memo((function(e){var t=e.codeComments,a=e.loading;return p.a.createElement("div",{className:Z.a.CodeCommentList},p.a.createElement(Q.b,{loading:a,locale:{emptyText:p.a.createElement($.a,{description:"\u6ca1\u6709\u6279\u6ce8"})},dataSource:t,renderItem:function(e){return p.a.createElement("div",{className:Z.a.itemWrapper,key:e.id},p.a.createElement(fe,{codeComment:e}))}}))})),be=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(U.promisify)(r.setState),r.onListChange=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.componentDidMount();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),r.loadCodeComments=Object(i.a)(o.a.mark((function e(){var t,a,n,i,s,c,m,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,a=t.lineNumber,n=t.commitHash,i=t.match.params,s=i.repository,c=i.path,m=i.username,e.next=3,z.b.get({repositoryUsername:m,repositoryName:s,columnNumber:a,filePath:c},n);case 3:if(null===(u=e.sent)){e.next=8;break}return l=u.codeComments,e.next=8,r.setStatePromise({codeComments:l});case 8:case"end":return e.stop()}}),e)}))),r.state={codeComments:[],loading:!1},J.on(n.CODE_COMMENT_CHANGE,r.onListChange),r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadCodeComments();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,a,n){var r,i,s,c,m,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,i=r.lineNumber,s=r.commitHash,c=r.match.params.path,m=t.lineNumber,u=t.commitHash,l=t.match.params.path,i===m&&s===u&&c===l){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){J.removeListener(n.CODE_COMMENT_CHANGE,this.onListChange)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.codeComments;return p.a.createElement(he,{loading:t,codeComments:a})}}]),a}(l.PureComponent),Ce=Object(C.f)(be);var ve=p.a.memo((function(e){var t=e.visible,a=e.fileName,n=e.code,r=e.loading,o=e.onClose,i=e.lineNumber,s=e.commitHash;return p.a.createElement(h.a,{spinning:r},p.a.createElement(R.a,{destroyOnClose:!0,title:p.a.createElement("div",{className:P.a.title},"\u4ee3\u7801\u6279\u6ce8 - ",a,":",i),visible:t,placement:"right",onClose:o,width:"33%"},p.a.createElement("div",{className:P.a.CodeCommentDrawer},p.a.createElement("div",{className:P.a.top},p.a.createElement(j,{code:n,hasComment:!1,hasLineNumber:!1})),p.a.createElement("div",{className:P.a.mid},p.a.createElement(Ce,{commitHash:s,lineNumber:i})),p.a.createElement("div",{className:P.a.bottom},p.a.createElement(q,{lineNumber:i,commitHash:s})))))})),ye=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loading:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.fileName,n=e.code,r=e.lineNumber,o=e.onClose,i=e.commitHash,s=this.state.loading;return p.a.createElement(ve,{visible:t,fileName:a,code:n,loading:s,lineNumber:r,onClose:o,commitHash:i})}}]),a}(l.PureComponent),Ee=a(1196),xe=a.n(Ee),_e=a(14),ke=a(20),Ne=a(1283),Oe=a(1241),we=a(19);var ge=Object(C.f)((function(e){var t=e.fileSize,a=e.onRawFileButtonClick,n=e.match.params,r=n.username,o=n.repository,i=n.branch,s=n.path,c=_.a.basename(s);return p.a.createElement("div",{className:xe.a.FileInfoBar},p.a.createElement("div",{className:xe.a.fileInfoWrapper},p.a.createElement("div",{className:xe.a.backLinkWrapper},p.a.createElement(_e.b,{to:ke.Function.generateRepositoryCodeRoute({username:r,repository:o,branch:i,objectType:we.b.TREE,path:_.a.join(s,"..")})},p.a.createElement(F.a,{size:"small"},p.a.createElement(Ne.a,null)))),p.a.createElement("div",{className:xe.a.fileNameWrapper},p.a.createElement(Oe.a,null),p.a.createElement("div",{className:xe.a.fileName}," ",c)),p.a.createElement("div",{className:xe.a.fileSize},O.c.parseFileSize(t))),p.a.createElement(F.a.Group,{className:xe.a.buttonWrapper},p.a.createElement(F.a,null,p.a.createElement(_e.b,{to:ke.Function.generateRepositoryCommitsRoute({username:r,repository:o,branch:i,path:s})},"\u5386\u53f2")),p.a.createElement(F.a,{onClick:a},"\u4e0b\u8f7d")))})),je=a(329),Se=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onRawFileButtonClick=Object(i.a)(o.a.mark((function t(){var a,n,r,i,s,c,m;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props,n=a.match.params,r=n.username,i=n.repository,s=n.path,c=a.lastCommitHash,t.next=3,je.a.rawFile({username:r},{name:i},s,c);case 3:null!==(m=t.sent)&&e.startDownload(m);case 5:case"end":return t.stop()}}),t)}))),e.startDownload=function(t){var a=e.props.match.params.path,n=URL.createObjectURL(t);O.c.startDownload(n,_.a.basename(a)),URL.revokeObjectURL(n)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.fileSize;return p.a.createElement(ge,{fileSize:e,onRawFileButtonClick:this.onRawFileButtonClick})}}]),a}(l.PureComponent),Le=Object(C.f)(Se);var De=Object(C.f)(p.a.memo((function(e){var t=[".json"],a=[".md",".markdown",".mdwn"],n=e.isBinary,r=e.isOversize,o=e.lastCommit,i=e.loading,s=e.fileContent,c=e.fileSize,m=e.match.params.path,u=e.onCodeLineClickFactory,l=e.hasCommentLineNumbers,d=e.drawerCode,C=e.drawerLineNumber,v=e.drawerVisible,_=e.onDrawerClose,k=Object(x.basename)(m),N=Object(x.extname)(k).toLowerCase();return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:f.a.FileReader},p.a.createElement(h.a,{spinning:i},p.a.createElement("div",{className:f.a.commitInfoBar},p.a.createElement(b.a,{lastCommit:o})),p.a.createElement("div",{className:f.a.contentWrapper},p.a.createElement("div",{className:f.a.fileInfoBarWrapper},p.a.createElement(Le,{fileSize:c,lastCommitHash:o.commitHash})),p.a.createElement("div",{className:f.a.readerWrapper},n?p.a.createElement(y,null):r?p.a.createElement(E,null):t.includes(N)?p.a.createElement(j,{code:s,hasComment:!0,hasLineNumber:!0,hasCommentLineNumbers:l,onCodeLineClickFactory:u}):a.includes(N)?p.a.createElement(T,{markdown:s}):p.a.createElement(j,{code:s,hasComment:!0,hasLineNumber:!0,onCodeLineClickFactory:u,hasCommentLineNumbers:l}))))),p.a.createElement(ye,{lineNumber:C,code:d,visible:v,fileName:k,onClose:_,commitHash:o.commitHash}))}))),Te=ke.CONFIG.PAGE_ID_TO_ROUTE,Be=ke.CONFIG.PAGE_ID,Pe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setStatePromise=Object(U.promisify)(n.setState),n.loadLastCommit=Object(i.a)(o.a.mark((function e(){var t,a,r,i,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,i=t.path,s=t.branch,e.next=3,z.i.lastBranchCommit({username:a},{name:r},s,i);case 3:if(null===(c=e.sent)){e.next=7;break}return e.next=7,n.setStatePromise({lastCommit:c});case 7:case"end":return e.stop()}}),e)}))),n.loadFileInfo=Object(i.a)(o.a.mark((function e(){var t,a,r,i,s,c,m,u,l,p,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.lastCommit.commitHash,a=n.props,r=a.match.params,i=r.username,s=r.repository,c=r.path,m=a.history,e.next=4,z.i.fileInfo({username:i},{name:s},c,t);case 4:if(null===(u=e.sent)){e.next=20;break}if(l=u.exists,p=u.size,d=u.isBinary,l){e.next=11;break}return e.abrupt("return",m.replace(Te[Be.NOT_FOUND]));case 11:return e.next=13,n.setStatePromise({fileSize:p});case 13:if(d||!(p>1048576)){e.next=18;break}return e.next=16,n.setStatePromise({isOversize:!0,isBinary:d});case 16:e.next=20;break;case 18:return e.next=20,n.setStatePromise({isOversize:!1,isBinary:d});case 20:case"end":return e.stop()}}),e)}))),n.loadFileContent=Object(i.a)(o.a.mark((function e(){var t,a,r,i,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,i=t.path,s=n.state.lastCommit.commitHash,e.next=4,z.i.rawFile({username:a},{name:r},i,s);case 4:if(null===(c=e.sent)){e.next=13;break}return e.t0=n,e.next=9,O.c.transformBlobToString(c);case 9:return e.t1=e.sent,e.t2={fileContent:e.t1},e.next=13,e.t0.setStatePromise.call(e.t0,e.t2);case 13:case"end":return e.stop()}}),e)}))),n.loadCodeComments=Object(i.a)(o.a.mark((function e(){var t,a,r,i,s,c,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,i=t.path,s=n.state.lastCommit.commitHash,e.next=4,z.b.get({repositoryUsername:a,repositoryName:r,filePath:i},s);case 4:if(null===(c=e.sent)){e.next=9;break}return m=c.codeComments,e.next=9,n.setStatePromise({codeComments:m});case 9:case"end":return e.stop()}}),e)}))),n.onCodeCommentChange=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setStatePromise({loading:!0});case 2:return e.next=4,n.loadCodeComments();case 4:return e.next=6,n.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e)}))),n.onCodeLineClickFactory=function(e){return Object(i.a)(o.a.mark((function t(){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.setStatePromise({drawerLineNumber:e});case 2:return a=n.state.fileContent,r=a.split("\n"),t.next=6,n.setStatePromise({drawerCode:r[e-1].trim(),drawerVisible:!0});case 6:case"end":return t.stop()}}),t)})))},n.onDrawerClose=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setStatePromise({drawerVisible:!1});case 2:case"end":return e.stop()}}),e)}))),n.state={isBinary:!1,isOversize:!1,lastCommit:new oe.b("","","",0,"",""),loading:!0,fileContent:"",fileSize:0,codeComments:[],drawerCode:"",drawerLineNumber:1,drawerVisible:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadLastCommit();case 4:return e.next=6,Promise.all([this.loadFileInfo(),this.loadCodeComments()]);case 6:if(t=this.state,a=t.isBinary,r=t.isOversize,a||r){e.next=10;break}return e.next=10,this.loadFileContent();case 10:return e.next=12,this.setStatePromise({loading:!1});case 12:J.on(n.CODE_COMMENT_CHANGE,this.onCodeCommentChange);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){J.removeListener(n.CODE_COMMENT_CHANGE,this.onCodeCommentChange)}},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,a,n){var r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props.location.pathname,i=t.location.pathname,r===i){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isBinary,a=e.isOversize,n=e.lastCommit,r=e.loading,o=e.fileContent,i=e.fileSize,s=e.codeComments,c=e.drawerVisible,m=e.drawerLineNumber,u=e.drawerCode,l=s.map((function(e){return e.columnNumber}));return p.a.createElement(De,{fileSize:i,fileContent:o,isBinary:t,isOversize:a,lastCommit:n,loading:r,hasCommentLineNumbers:l,onCodeLineClickFactory:this.onCodeLineClickFactory,drawerCode:u,drawerLineNumber:m,drawerVisible:c,onDrawerClose:this.onDrawerClose})}}]),a}(l.PureComponent),Re=Object(C.f)(Pe)}}]);
//# sourceMappingURL=10.d6a51225.chunk.js.map