(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[25],{1058:function(e,t,a){e.exports={FileReader:"Style_FileReader__1hW4w",commitInfoBar:"Style_commitInfoBar__2xvVY",committerName:"Style_committerName__2t1--",fileName:"Style_fileName__3GaRF",message:"Style_message__3QiGK",commitHash:"Style_commitHash__3NVQF",time:"Style_time__25NhI",contentWrapper:"Style_contentWrapper__3jWFR",fileInfoBar:"Style_fileInfoBar__2iqjb",content:"Style_content__3_Ute"}},1271:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),i=a(9),s=a(50),o=a(73),c=a(270),m=a(269),l=a(271),u=a(0),p=a.n(u),f=(a(966),a(969)),h=(a(982),a(996)),d=(a(409),a(205)),v=a(1058),w=a.n(v);a(1059);var x=p.a.memo((function(e){var t=e.isBinary,a=e.isOversize,n=e.exists,r=e.fileName,i=e.html,s=e.lastCommit,o=s.committerName,c=s.message,m=s.time,l=s.commitHash,u=e.loading,v=e.onRawFileButtonClick;return p.a.createElement("div",{className:w.a.FileReader},p.a.createElement(f.a,{spinning:u},p.a.createElement("div",{className:w.a.commitInfoBar},p.a.createElement("div",{className:w.a.committerName},o),p.a.createElement("div",{className:w.a.message},c),p.a.createElement("div",{className:w.a.time},m),p.a.createElement("div",{className:w.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",l.slice(0,7))),p.a.createElement("div",{className:w.a.contentWrapper},p.a.createElement("div",{className:w.a.fileInfoBar},p.a.createElement("div",{className:w.a.fileName},r),p.a.createElement("div",{className:w.a.buttonWrapper},p.a.createElement(d.a,{onClick:v},"\u4e0b\u8f7d"))),n?t?p.a.createElement(h.a,{type:"info",showIcon:!0,message:"\u4e8c\u8fdb\u5236\u6587\u4ef6\u65e0\u6cd5\u663e\u793a",description:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u67e5\u770b\u539f\u6587\u4ef6"}):a?p.a.createElement(h.a,{type:"info",showIcon:!0,message:"\u6587\u4ef6\u592a\u5927",description:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u67e5\u770b\u539f\u6587\u4ef6"}):p.a.createElement("div",{className:w.a.content,dangerouslySetInnerHTML:{__html:i}}):p.a.createElement(h.a,{type:"error",showIcon:!0,message:"\u6587\u4ef6\u4e0d\u5b58\u5728"}))))})),k=a(93),b=a(272),y=a(164),_=a(1060),g=a.n(_),C=a(1001),N=a.n(C),O=a(997),j=a(998),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).loadLastCommit=Object(i.a)(r.a.mark((function e(){var t,n,i,s,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,i=t.repository,s=t.path,o=t.branch,e.next=3,y.e.lastCommit(n,i,o,s);case 3:if(null===(c=e.sent)){e.next=7;break}return e.next=7,a.onLastCommitLoaded(c);case 7:case"end":return e.stop()}}),e)}))),a.onLastCommitLoaded=function(){var e=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({lastCommit:t}),n=t.commitHash,e.next=4,a.loadFileInfo(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.loadFileInfo=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,i,s,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.match.params,i=n.username,s=n.repository,o=n.path,e.next=3,y.e.fileInfo(i,s,o,t);case 3:if(null===(c=e.sent)){e.next=7;break}return e.next=7,a.onFileInfoLoaded(c,t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onFileInfoLoaded=function(){var e=Object(i.a)(r.a.mark((function e(t,n){var i,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.exists,s=t.size,o=t.isBinary,a.setState({exists:i}),!i){e.next=11;break}if(a.setState({isBinary:o}),o){e.next=11;break}if(!(s>1048576)){e.next=9;break}a.setState({isOversize:!0}),e.next=11;break;case 9:return e.next=11,a.loadRawContent(n);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.loadRawContent=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,i,s,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.match.params,i=n.username,s=n.repository,o=n.path,e.next=3,y.e.rawFile(i,s,o,t);case 3:if(null===(c=e.sent)){e.next=11;break}return e.t0=a,e.next=8,j.a.transformBlobToString(c);case 8:e.t1=e.sent,e.t2={rawContent:e.t1},e.t0.setState.call(e.t0,e.t2);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onRawFileButtonClick=Object(i.a)(r.a.mark((function e(){var t,n,i,s,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,i=t.repository,s=t.path,o=a.state.lastCommit.commitHash,e.next=4,y.e.rawFile(n,i,s,o);case 4:null!==(c=e.sent)&&a.startDownload(c);case 6:case"end":return e.stop()}}),e)}))),a.startDownload=function(e){var t=a.props.match.params.path,n=URL.createObjectURL(e);j.a.startDownload(n,Object(C.basename)(t)),URL.revokeObjectURL(n)},a.getFileNameFromPath=function(e){var t=e.split("/");return t[t.length-1]},a.getHighlightedHtml=function(){var e=a.state,t=e.isBinary,n=e.rawContent;if(!t){var r=document.createElement("pre"),i=document.createElement("div");return i.append(r),r.innerText=n,n.length<=51200?(g.a.highlightBlock(r),i.innerHTML):i.innerHTML}return n},a.isMarkdown=function(e){var t=N.a.extname(e);return".md"===t||".markdown"===t},a.state={exists:!0,isBinary:!1,isOversize:!1,lastCommit:new b.b("","","","",""),loading:!0,rawContent:""},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadLastCommit();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(r.a.mark((function e(t,a,n){var i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.props.location.pathname,s=t.location.pathname,i===s){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match.params.path,t=this.state,a=t.isBinary,n=t.exists,r=t.isOversize,i=t.rawContent,s=t.lastCommit,o=t.loading,c=this.getFileNameFromPath(e),m="";return!n||r||a||(m=this.isMarkdown(c)?O.a.makeHtml(i):this.getHighlightedHtml()),p.a.createElement(x,{html:m,exists:n,isBinary:a,isOversize:r,lastCommit:s,fileName:c,loading:o,onRawFileButtonClick:this.onRawFileButtonClick})}}]),t}(u.PureComponent),B=Object(k.f)(F);a.d(t,"default",(function(){return B}))},997:function(e,t,a){"use strict";var n=a(1002),r=new(a.n(n).a.Converter)({tables:!0,strikethrough:!0,tasklists:!0,emoji:!0});a.d(t,"a",(function(){return r}))},998:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"transformBlobToString",(function(){return o})),a.d(n,"startDownload",(function(){return m}));var r=a(4),i=a.n(r),s=a(9);function o(e){return c.apply(this,arguments)}function c(){return(c=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var n=new FileReader;n.readAsText(t),n.onloadend=function(){e(n.result)},n.onerror=function(e){a(e)}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){var a=document.createElement("a");a.href=e,a.download=t,a.click()}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=25.529111ca.chunk.js.map