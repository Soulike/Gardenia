(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[12],{1037:function(e,t,a){e.exports={CommitInfoBar:"Style_CommitInfoBar__AogMa",left:"Style_left__3aqnY",right:"Style_right__XNYqn",message:"Style_message__3Jq3M"}},1047:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),o=a(1037),i=a.n(o),s=a(15),c=a(117),m=a(21),u=a(232),l=a(76),p=a(325);var d=Object(c.f)(r.a.memo((function(e){var t=e.lastCommit,a=t.committerName,n=t.commitHash,o=t.message,c=t.timestamp,d=t.committerEmail,f=e.match.params,h=f.username,b=f.repository;return r.a.createElement("div",{className:i.a.CommitInfoBar},r.a.createElement("div",{className:i.a.left},r.a.createElement(p.a,{committerEmail:d,committerName:a}),r.a.createElement("div",{className:i.a.message},o)),r.a.createElement("div",{className:i.a.right},r.a.createElement("div",{className:i.a.time},l.b.parseTimestampToDifference(c)),r.a.createElement(u.a,{title:n},r.a.createElement("div",{className:i.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",r.a.createElement(s.b,{to:m.Function.generateRepositoryCommitRoute({username:h,repository:b,commitHash:n})},n.slice(0,7))))))})))},1048:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(1),r=a.n(n),o=a(323),i=a(3),s=a(8),c=a(10),m=a(17),u=a(18),l=a(0),p=a.n(l),d=a(117),f=a(21),h=a(324),b=a(1036),v=a.n(b),C=a(19),y=a(1013),x=a.n(y),k=a(233),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).objectURLs=[],n.loadMainBranchName=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,i,s,c,m,u,l,p,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.match.params,i=a.username,s=a.repository,e.next=3,h.a.branches({username:i,name:s});case 3:if(null===(c=e.sent)){e.next=24;break}m=c.branches,u=Object(o.a)(m),e.prev=7,u.s();case 9:if((l=u.n()).done){e.next=16;break}if(p=l.value,d=p.name,!p.isDefault){e.next=14;break}return n.setState({mainBranchName:d},(function(){return t()})),e.abrupt("break",16);case 14:e.next=9;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),u.e(e.t0);case 21:return e.prev=21,u.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[7,18,21,24]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),n.processHTML=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,s,c,m,u,l,p,d,f,h,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=document.implementation.createHTMLDocument(),(s=a.createElement("div")).innerHTML=t,c=s.getElementsByTagName("a"),m=s.getElementsByTagName("img"),u=[],l=Object(o.a)(c);try{for(d=function(){var e=p.value,t=e.getAttribute("href");null!==t&&u.push(Object(i.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=e,a.next=3,n.getCompleteLink(t);case 3:a.t1=a.sent,a.t0.setAttribute.call(a.t0,"href",a.t1);case 5:case"end":return a.stop()}}),a)})))())},l.s();!(p=l.n()).done;)d()}catch(v){l.e(v)}finally{l.f()}f=Object(o.a)(m);try{for(b=function(){var e=h.value,t=e.getAttribute("src");null!==t&&u.push(Object(i.a)(r.a.mark((function a(){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.getImageURL(t);case 2:o=a.sent,n.objectURLs.push(o),e.setAttribute("src",o);case 5:case"end":return a.stop()}}),a)})))())},f.s();!(h=f.n()).done;)b()}catch(v){f.e(v)}finally{f.f()}return e.next=12,Promise.all(u);case 12:return e.abrupt("return",s.innerHTML);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getCompleteLink=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,o,i,s,c,m,u,l,p,d,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length&&!v()(t)&&!x.a.isAbsolute(t)&&"#"!==t.charAt(0)&&"?"!==t.charAt(0)){e.next=4;break}return e.abrupt("return",t);case 4:return a=n.props.match.params,o=a.username,i=a.repository,s=a.objectType,c=a.branch,m=a.path,u=n.state.mainBranchName,l=m?s===C.b.BLOB?x.a.join(x.a.dirname(m),t):x.a.join(m,t):x.a.join("",t),e.next=9,h.a.fileInfo({username:o},{name:i},l,c||u);case 9:if(null===(p=e.sent)){e.next=19;break}if(d=p.exists,b=p.type,d&&b!==C.b.BLOB){e.next=16;break}return e.abrupt("return",f.Function.generateRepositoryCodeRoute({username:o,repository:i,branch:c||u,path:l,objectType:C.b.BLOB}));case 16:return e.abrupt("return",f.Function.generateRepositoryCodeRoute({username:o,repository:i,branch:c||u,path:l,objectType:C.b.TREE}));case 17:e.next=20;break;case 19:return e.abrupt("return",f.Function.generateRepositoryCodeRoute({username:o,repository:i,branch:c||u,path:l,objectType:C.b.BLOB}));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getImageURL=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,o,i,s,c,m,u,l,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v()(t)&&!x.a.isAbsolute(t)){e.next=4;break}return e.abrupt("return",t);case 4:return a=n.props.match.params,o=a.username,i=a.repository,s=a.objectType,c=a.branch,m=a.path,u=n.state.mainBranchName,l=m?s===C.b.BLOB?x.a.join(x.a.dirname(m),t):x.a.join(m,t):x.a.join("",t),e.next=9,h.a.rawFile({username:o},{name:i},l,c||u);case 9:if(null===(p=e.sent)){e.next=14;break}return e.abrupt("return",URL.createObjectURL(p));case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={mainBranchName:"",loading:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.branch,this.setState({loading:!0}),"string"===typeof t){e.next=5;break}return e.next=5,this.loadMainBranchName();case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(r.a.mark((function e(t,a,n){var o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.markdown,i=t.markdown,o===i){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.objectURLs.forEach((function(e){return URL.revokeObjectURL(e)}))}},{key:"render",value:function(){var e=this.state.loading,t=this.props.markdown;return p.a.createElement(k.a,{markdown:t,processHTML:this.processHTML,loading:e})}}]),a}(l.PureComponent),E=Object(d.f)(w)},1146:function(e,t,a){e.exports={FileReader:"Style_FileReader__3UwbJ",commitInfoBar:"Style_commitInfoBar__Q8via",contentWrapper:"Style_contentWrapper__WXjet",fileInfoBar:"Style_fileInfoBar__2tYVI",fileInfoWrapper:"Style_fileInfoWrapper__Z9ikA",fileNameWrapper:"Style_fileNameWrapper__21rUk",fileName:"Style_fileName__CCvcF",readerWrapper:"Style_readerWrapper__1-Blo",content:"Style_content___R5vO"}},1147:function(e,t,a){e.exports={CodeReader:"Style_CodeReader__yNPpi",line:"Style_line__2xQ8V",commentIcon:"Style_commentIcon__1fmDD",lineNumber:"Style_lineNumber__nX9YT",codeWrapper:"Style_codeWrapper__3J8o_",code:"Style_code__19ilK"}},1148:function(e,t,a){e.exports={MarkdownReader:"Style_MarkdownReader__2lNN5"}},1149:function(e,t,a){e.exports={CodeCommentDrawer:"Style_CodeCommentDrawer__1vYKD",top:"Style_top__1ZUZE",mid:"Style_mid__zKGSd",bottom:"Style_bottom__2avbu"}},1150:function(e,t,a){e.exports={CodeCommentForm:"Style_CodeCommentForm__1HwIU",textarea:"Style_textarea__3fx1d",buttonWrapper:"Style_buttonWrapper__3C6ZC"}},1151:function(e,t,a){e.exports={CodeCommentList:"Style_CodeCommentList__1G5Oh",itemWrapper:"Style_itemWrapper__3kY6G"}},1152:function(e,t,a){e.exports={CardTitle:"Style_CardTitle__271oV",modificationTimeWrapper:"Style_modificationTimeWrapper__2u105"}},1153:function(e,t,a){e.exports={CodeCommentItem:"Style_CodeCommentItem__3jXfA",contentWrapper:"Style_contentWrapper__3lLjk",bottomWrapper:"Style_bottomWrapper__AzNXW"}},1154:function(e,t,a){e.exports={CardBottom:"Style_CardBottom__52kk2"}},1200:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Ne}));var n={};a.r(n),a.d(n,"REFRESH",(function(){return J}));var r=a(1),o=a.n(r),i=a(3),s=a(8),c=a(10),m=a(17),u=a(18),l=a(0),p=a.n(l),d=a(1146),f=a.n(d),h=a(961),b=a(82),v=a(1047),C=a(21),y=a(15),x=a(117),k=a(973);var w=p.a.memo((function(){return p.a.createElement(k.a,{type:"warning",showIcon:!0,message:"\u4e8c\u8fdb\u5236\u6587\u4ef6\u65e0\u6cd5\u663e\u793a",description:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u67e5\u770b\u539f\u6587\u4ef6"})}));var E=p.a.memo((function(){return p.a.createElement(k.a,{type:"warning",showIcon:!0,message:"\u6587\u4ef6\u8fc7\u5927\uff0c\u4e0d\u80fd\u76f4\u63a5\u67e5\u770b",description:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u67e5\u770b\u539f\u6587\u4ef6"})})),_=a(1013),N=a(1147),g=a.n(N),O=a(76),j=a(1240),S=a(232);var L=p.a.memo((function(e){var t=e.code,a=e.onCodeLineClickFactory,n=e.hasCommentLineNumbers,r=e.hasComment,o=e.hasLineNumber,i=O.a.getHighlightedCodeLines(t);return p.a.createElement("table",{className:"".concat(g.a.CodeReader," hljs")},p.a.createElement("tbody",null,i.map((function(e,t){var i=p.a.createElement("tr",{key:t,className:g.a.line,style:r?{}:{cursor:"auto"},onClick:"function"===typeof a?a(t+1):void 0},p.a.createElement("td",{className:g.a.commentIcon},Array.isArray(n)&&n.includes(t+1)?p.a.createElement(j.a,null):null),o?p.a.createElement("td",null,p.a.createElement("div",{className:g.a.lineNumber},t+1)):null,p.a.createElement("td",{className:g.a.codeWrapper},p.a.createElement("pre",{className:g.a.code},p.a.createElement("code",{dangerouslySetInnerHTML:{__html:e}}))));return r?p.a.createElement(S.a,{key:t,title:"\u70b9\u51fb\u67e5\u770b\u548c\u6dfb\u52a0\u6279\u6ce8",placement:"left"},i):i}))))})),R=a(1148),B=a.n(R),P=a(1048);var F=p.a.memo((function(e){var t=e.markdown;return p.a.createElement("div",{className:B.a.MarkdownReader},p.a.createElement(P.a,{markdown:t}))})),D=a(1199),T=a(1149),W=a.n(T),H=a(1217),I=a(1150),U=a.n(I),M=a(967);var z=p.a.memo((function(e){var t=e.onSubmit,a=e.codeComment,n=e.onCodeCommentChange,r=e.submitting;return p.a.createElement("form",{className:U.a.CodeCommentForm,onSubmit:t},p.a.createElement(M.a.TextArea,{onChange:n,value:a,autoFocus:!0,placeholder:"\u60f3\u8981\u8865\u5145\u4e9b\u4ec0\u4e48\uff1f",className:U.a.textarea,disabled:r}),p.a.createElement("div",{className:U.a.buttonWrapper},p.a.createElement(b.a,{htmlType:"submit",type:"primary",disabled:r,loading:r},"\u63d0\u4ea4")))})),A=a(87),V=a(960),G=a(28),Y=a(248),J="REFRESH",X=new Y.EventEmitter,Z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(A.promisify)(r.setState),r.init=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setStatePromise({codeComment:""});case 2:case"end":return e.stop()}}),e)}))),r.onCodeCommentChange=function(e){r.setState({codeComment:e.target.value})},r.onSubmit=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,i,s,c,m,u,l,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==(a=r.state.codeComment).length){e.next=6;break}V.a.error({message:"\u4ee3\u7801\u6807\u6ce8\u4e0d\u80fd\u4e3a\u7a7a"}),e.next=19;break;case 6:return i=r.props,s=i.match.params,c=s.username,m=s.repository,u=s.path,l=i.lineNumber,p=i.commitHash,e.next=9,r.setStatePromise({submitting:!0});case 9:return e.next=11,G.b.add({repositoryUsername:c,repositoryName:m,filePath:u,columnNumber:l,creationCommitHash:p,content:a});case 11:if(null===e.sent){e.next=17;break}return V.a.success({message:"\u4ee3\u7801\u6807\u6ce8\u6dfb\u52a0\u6210\u529f"}),e.next=16,r.init();case 16:X.emit(n.REFRESH);case 17:return e.next=19,r.setStatePromise({submitting:!1});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={codeComment:"",submitting:!1},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,a,n){var r,i,s,c,m,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,i=r.commitHash,s=r.lineNumber,c=r.match.params.path,m=t.commitHash,u=t.lineNumber,l=t.match.params.path,i===m&&s===u&&c===l){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.codeComment,a=e.submitting;return p.a.createElement(z,{submitting:a,codeComment:t,onSubmit:this.onSubmit,onCodeCommentChange:this.onCodeCommentChange})}}]),a}(l.PureComponent),q=Object(x.f)(Z),K=a(1151),Q=a.n(K),$=a(1205),ee=a(168),te=a(970),ae=a(1152),ne=a.n(ae),re=a(325);var oe=p.a.memo((function(e){var t=e.profile,a=t.username,n=t.email,r=e.modificationTimestamp,o=e.loading;return p.a.createElement(h.a,{spinning:o},p.a.createElement("div",{className:ne.a.CardTitle},p.a.createElement("div",{className:ne.a.personalCenterLinkWrapper},p.a.createElement(re.a,{committerName:a,committerEmail:n})),p.a.createElement("div",{className:ne.a.modificationTimeWrapper},"\u6700\u540e\u7f16\u8f91\u4e8e ",O.b.parseTimestampToDate(r))))})),ie=a(126),se=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setStatePromise=Object(A.promisify)(n.setState),n.loadProfile=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.creatorUsername,e.next=3,G.f.get({username:t});case 3:if(null===(a=e.sent)){e.next=7;break}return e.next=7,n.setStatePromise({profile:a});case 7:case"end":return e.stop()}}),e)}))),n.state={profile:new ie.f("","","",""),loading:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadProfile();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,a,n){var r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props.creatorUsername,i=t.creatorUsername,r===i){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.profile,a=e.loading,n=this.props.modificationTimestamp;return p.a.createElement(oe,{loading:a,profile:t,modificationTimestamp:n})}}]),a}(l.PureComponent),ce=a(1153),me=a.n(ce),ue=a(1154),le=a.n(ue),pe=a(963);var de=p.a.memo((function(e){var t=e.onDeleteButtonClick,a=e.loading;return p.a.createElement("div",{className:le.a.CardBottom},p.a.createElement("div",{className:le.a.buttonWrapper},p.a.createElement(pe.a,{title:"\u786e\u8ba4\u5220\u9664\u4ee3\u7801\u6807\u6ce8",onConfirm:t,disabled:a},p.a.createElement(b.a,{size:"small",type:"danger",disabled:a,loading:a},"\u5220\u9664"))))})),fe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(A.promisify)(r.setState),r.onDeleteButtonClick=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.id,e.next=3,r.setStatePromise({loading:!0});case 3:return e.next=5,G.b.del({id:t});case 5:return null!==e.sent&&(V.a.success({message:"\u5220\u9664\u6807\u6ce8\u6210\u529f"}),X.emit(n.REFRESH)),e.next=9,r.setStatePromise({loading:!1});case 9:case"end":return e.stop()}}),e)}))),r.state={loading:!1},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.loading;return p.a.createElement(de,{loading:e,onDeleteButtonClick:this.onDeleteButtonClick})}}]),a}(l.PureComponent);var he=p.a.memo((function(e){var t=e.codeComment,a=t.creatorUsername,n=t.modificationTimestamp,r=t.content,o=t.id;return p.a.createElement("div",{className:me.a.CodeCommentItem},p.a.createElement(te.a,{title:p.a.createElement(se,{creatorUsername:a,modificationTimestamp:n})},p.a.createElement("div",{className:me.a.contentWrapper},r),p.a.createElement("div",{className:me.a.bottomWrapper},p.a.createElement(fe,{id:o}))))}));var be=p.a.memo((function(e){var t=e.codeComments,a=e.loading;return p.a.createElement("div",{className:Q.a.CodeCommentList},p.a.createElement($.a,{loading:a,locale:{emptyText:p.a.createElement(ee.a,{description:"\u6ca1\u6709\u6279\u6ce8"})},dataSource:t,renderItem:function(e){return p.a.createElement("div",{className:Q.a.itemWrapper,key:e.id},p.a.createElement(he,{codeComment:e}))}}))})),ve=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(A.promisify)(r.setState),r.onListRefresh=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.componentDidMount();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),r.loadCodeComments=Object(i.a)(o.a.mark((function e(){var t,a,n,i,s,c,m,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,a=t.lineNumber,n=t.commitHash,i=t.match.params,s=i.repository,c=i.path,m=i.username,e.next=3,G.b.get({repositoryUsername:m,repositoryName:s,columnNumber:a,filePath:c},n);case 3:if(null===(u=e.sent)){e.next=8;break}return l=u.codeComments,e.next=8,r.setStatePromise({codeComments:l});case 8:case"end":return e.stop()}}),e)}))),r.state={codeComments:[],loading:!1},X.on(n.REFRESH,r.onListRefresh),r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadCodeComments();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,a,n){var r,i,s,c,m,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,i=r.lineNumber,s=r.commitHash,c=r.match.params.path,m=t.lineNumber,u=t.commitHash,l=t.match.params.path,i===m&&s===u&&c===l){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){X.removeListener(n.REFRESH,this.onListRefresh)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.codeComments;return p.a.createElement(be,{loading:t,codeComments:a})}}]),a}(l.PureComponent),Ce=Object(x.f)(ve);var ye=p.a.memo((function(e){var t=e.visible,a=e.fileName,n=e.code,r=e.loading,o=e.onClose,i=e.lineNumber,s=e.commitHash;return p.a.createElement(h.a,{spinning:r},p.a.createElement(H.a,{destroyOnClose:!0,title:p.a.createElement("div",{className:W.a.title},"\u4ee3\u7801\u6279\u6ce8 - ",a,":",i),visible:t,placement:"right",onClose:o,width:"33%"},p.a.createElement("div",{className:W.a.CodeCommentDrawer},p.a.createElement("div",{className:W.a.top},p.a.createElement(L,{code:n,hasComment:!1,hasLineNumber:!1})),p.a.createElement("div",{className:W.a.mid},p.a.createElement(Ce,{commitHash:s,lineNumber:i})),p.a.createElement("div",{className:W.a.bottom},p.a.createElement(q,{lineNumber:i,commitHash:s})))))})),xe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loading:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.fileName,n=e.code,r=e.lineNumber,o=e.onClose,i=e.commitHash,s=this.state.loading;return p.a.createElement(ye,{visible:t,fileName:a,code:n,loading:s,lineNumber:r,onClose:o,commitHash:i})}}]),a}(l.PureComponent);var ke=Object(x.f)(p.a.memo((function(e){var t=[".json"],a=[".md",".markdown",".mdwn"],n=e.isBinary,r=e.isOversize,o=e.fileName,i=e.lastCommit,s=e.loading,c=e.onRawFileButtonClick,m=e.fileContent,u=e.fileSize,l=e.match.params,d=l.username,x=l.repository,k=l.branch,N=l.path,g=e.onCodeLineClickFactory,j=e.hasCommentLineNumbers,S=e.drawerCode,R=e.drawerLineNumber,B=e.drawerVisible,P=e.onDrawerClose,T=Object(_.extname)(o).toLowerCase();return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:f.a.FileReader},p.a.createElement(h.a,{spinning:s},p.a.createElement("div",{className:f.a.commitInfoBar},p.a.createElement(v.a,{lastCommit:i})),p.a.createElement("div",{className:f.a.contentWrapper},p.a.createElement("div",{className:f.a.fileInfoBar},p.a.createElement("div",{className:f.a.fileInfoWrapper},p.a.createElement("div",{className:f.a.fileNameWrapper},p.a.createElement(D.a,null),p.a.createElement("div",{className:f.a.fileName}," ",o)),p.a.createElement("div",{className:f.a.fileSize},O.c.parseFileSize(u))),p.a.createElement(b.a.Group,{className:f.a.buttonWrapper},p.a.createElement(b.a,null,p.a.createElement(y.b,{to:C.Function.generateRepositoryCommitsRoute({username:d,repository:x,branch:k,path:N})},"\u5386\u53f2")),p.a.createElement(b.a,{onClick:c},"\u4e0b\u8f7d"))),p.a.createElement("div",{className:f.a.readerWrapper},n?p.a.createElement(w,null):r?p.a.createElement(E,null):t.includes(T)?p.a.createElement(L,{code:m,hasComment:!0,hasLineNumber:!0,hasCommentLineNumbers:j,onCodeLineClickFactory:g}):a.includes(T)?p.a.createElement(F,{markdown:m}):p.a.createElement(L,{code:m,hasComment:!0,hasLineNumber:!0,onCodeLineClickFactory:g,hasCommentLineNumbers:j}))))),p.a.createElement(xe,{lineNumber:R,code:S,visible:B,fileName:o,onClose:P,commitHash:i.commitHash}))}))),we=C.CONFIG.PAGE_ID_TO_ROUTE,Ee=C.CONFIG.PAGE_ID,_e=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setStatePromise=Object(A.promisify)(n.setState),n.loadLastCommit=Object(i.a)(o.a.mark((function e(){var t,a,r,i,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,i=t.path,s=t.branch,e.next=3,G.i.lastBranchCommit({username:a},{name:r},s,i);case 3:if(null===(c=e.sent)){e.next=7;break}return e.next=7,n.setStatePromise({lastCommit:c});case 7:case"end":return e.stop()}}),e)}))),n.loadFileInfo=Object(i.a)(o.a.mark((function e(){var t,a,r,i,s,c,m,u,l,p,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.lastCommit.commitHash,a=n.props,r=a.match.params,i=r.username,s=r.repository,c=r.path,m=a.history,e.next=4,G.i.fileInfo({username:i},{name:s},c,t);case 4:if(null===(u=e.sent)){e.next=20;break}if(l=u.exists,p=u.size,d=u.isBinary,l){e.next=11;break}return e.abrupt("return",m.replace(we[Ee.NOT_FOUND]));case 11:return e.next=13,n.setStatePromise({fileSize:p});case 13:if(d||!(p>1048576)){e.next=18;break}return e.next=16,n.setStatePromise({isOversize:!0,isBinary:d});case 16:e.next=20;break;case 18:return e.next=20,n.setStatePromise({isOversize:!1,isBinary:d});case 20:case"end":return e.stop()}}),e)}))),n.loadFileContent=Object(i.a)(o.a.mark((function e(){var t,a,r,i,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,i=t.path,s=n.state.lastCommit.commitHash,e.next=4,G.i.rawFile({username:a},{name:r},i,s);case 4:if(null===(c=e.sent)){e.next=13;break}return e.t0=n,e.next=9,O.c.transformBlobToString(c);case 9:return e.t1=e.sent,e.t2={fileContent:e.t1},e.next=13,e.t0.setStatePromise.call(e.t0,e.t2);case 13:case"end":return e.stop()}}),e)}))),n.loadCodeComments=Object(i.a)(o.a.mark((function e(){var t,a,r,i,s,c,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,i=t.path,s=n.state.lastCommit.commitHash,e.next=4,G.b.get({repositoryUsername:a,repositoryName:r,filePath:i},s);case 4:if(null===(c=e.sent)){e.next=9;break}return m=c.codeComments,e.next=9,n.setStatePromise({codeComments:m});case 9:case"end":return e.stop()}}),e)}))),n.onRawFileButtonClick=Object(i.a)(o.a.mark((function e(){var t,a,r,i,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repository,i=t.path,s=n.state.lastCommit.commitHash,e.next=4,G.i.rawFile({username:a},{name:r},i,s);case 4:null!==(c=e.sent)&&n.startDownload(c);case 6:case"end":return e.stop()}}),e)}))),n.startDownload=function(e){var t=n.props.match.params.path,a=URL.createObjectURL(e);O.c.startDownload(a,Object(_.basename)(t)),URL.revokeObjectURL(a)},n.getFileNameFromPath=function(e){var t=e.split("/");return t[t.length-1]},n.onCodeLineClickFactory=function(e){return Object(i.a)(o.a.mark((function t(){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.setStatePromise({drawerLineNumber:e});case 2:return a=n.state.fileContent,r=a.split("\n"),t.next=6,n.setStatePromise({drawerCode:r[e-1],drawerVisible:!0});case 6:case"end":return t.stop()}}),t)})))},n.onDrawerClose=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setStatePromise({drawerVisible:!1});case 2:case"end":return e.stop()}}),e)}))),n.state={isBinary:!1,isOversize:!1,lastCommit:new ie.b("","","",0,"",""),loading:!0,fileContent:"",fileSize:0,codeComments:[],drawerCode:"",drawerLineNumber:1,drawerVisible:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadLastCommit();case 4:return e.next=6,Promise.all([this.loadFileInfo(),this.loadCodeComments()]);case 6:if(t=this.state,a=t.isBinary,n=t.isOversize,a||n){e.next=10;break}return e.next=10,this.loadFileContent();case 10:return e.next=12,this.setStatePromise({loading:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,a,n){var r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props.location.pathname,i=t.location.pathname,r===i){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match.params.path,t=this.state,a=t.isBinary,n=t.isOversize,r=t.lastCommit,o=t.loading,i=t.fileContent,s=t.fileSize,c=t.codeComments,m=t.drawerVisible,u=t.drawerLineNumber,l=t.drawerCode,d=this.getFileNameFromPath(e),f=c.map((function(e){return e.columnNumber}));return p.a.createElement(ke,{fileSize:s,fileContent:i,isBinary:a,isOversize:n,lastCommit:r,fileName:d,loading:o,onRawFileButtonClick:this.onRawFileButtonClick,hasCommentLineNumbers:f,onCodeLineClickFactory:this.onCodeLineClickFactory,drawerCode:l,drawerLineNumber:u,drawerVisible:m,onDrawerClose:this.onDrawerClose})}}]),a}(l.PureComponent),Ne=Object(x.f)(_e)}}]);
//# sourceMappingURL=12.1e8afaeb.chunk.js.map