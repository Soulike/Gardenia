(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[13],{1006:function(e,t,a){e.exports={FileList:"Style_FileList__AHBJP",lastCommitInfoBar:"Style_lastCommitInfoBar__on2r_",committerName:"Style_committerName__3a6Im",message:"Style_message__2digV",commitHash:"Style_commitHash__1Plmw",time:"Style_time__U0Mic",readmeWrapper:"Style_readmeWrapper__1WFyI"}},1007:function(e,t,a){e.exports={Item:"Style_Item__1krDe",icon:"Style_icon__3-VCb",fileName:"Style_fileName__3dMnx",message:"Style_message__2OjNO",time:"Style_time__38uF6"}},1008:function(e,t,a){e.exports={Readme:"Style_Readme___kAEH",title:"Style_title__yVMgF",content:"Style_content__18RVy"}},1207:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),s=a(29),i=a(60),c=a(83),o=a(262),m=a(261),l=a(263),u=a(0),p=a.n(u),f=(a(951),a(949)),d=(a(933),a(122)),h=a(1006),v=a.n(h),_=(a(402),a(47)),b=a(968),y=a(61),x=a(95),E=a(1007),g=a.n(E),k=a(194);var j=Object(x.f)(p.a.memo((function(e){var t=e.fileInfo,a=t.type,n=t.path,r=t.commit,s=r.message,i=r.time,c=e.match.params,o=c.username,m=c.repository,l=c.branch,u=function(e){var t=e.split("/");return t[t.length-1]}(n);return p.a.createElement(f.a.Item,{className:g.a.Item},a===b.a.BLOB?p.a.createElement(_.a,{className:g.a.icon,type:"file-text"}):p.a.createElement(_.a,{className:g.a.icon,type:"folder"}),p.a.createElement("div",{className:g.a.fileName},p.a.createElement(y.b,{to:k.Function.generateRepositoryRoute({username:o,repository:m,objectType:a,branch:l||"HEAD",path:n})},u)),p.a.createElement("div",{className:g.a.message},s),p.a.createElement("div",{className:g.a.time},i))}))),w=(a(946),a(948)),O=a(1008),S=a.n(O);var N=p.a.memo((function(e){var t=e.html,a=e.exists,n=e.loading;return a?p.a.createElement("div",{className:S.a.Readme},p.a.createElement(w.a,{spinning:n},p.a.createElement("div",{className:S.a.title},"README.md"),p.a.createElement("div",{className:S.a.content,dangerouslySetInnerHTML:{__html:t}}))):null})),H=a(265),C=a(973),D=a(967),R=a(966),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).readmeExists=Object(s.a)(r.a.mark((function e(){var t,n,s,i,c,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.match.params,s=n.username,i=n.repository,c=n.path,o=t.commitHash,e.next=3,H.a.fileInfo(s,i,Object(C.join)(c||"","README.md"),o);case 3:return m=e.sent,e.abrupt("return",null!==m&&m.exists);case 5:case"end":return e.stop()}}),e)}))),a.loadRawReadme=Object(s.a)(r.a.mark((function e(){var t,n,s,i,c,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.match.params,s=n.username,i=n.repository,c=n.path,o=t.commitHash,e.next=3,H.a.rawFile(s,i,Object(C.join)(c||"","README.md"),o);case 3:if(null===(m=e.sent)){e.next=11;break}return e.t0=a,e.next=8,R.a.transformBlobToString(m);case 8:e.t1=e.sent,e.t2={readme:e.t1,exists:!0},e.t0.setState.call(e.t0,e.t2);case 11:case"end":return e.stop()}}),e)}))),a.state={exists:!1,readme:"",loading:!0},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(s.a)(r.a.mark((function e(t,a,n){var s,i,c,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.props,i=s.match.params.path,c=s.commitHash,o=t.match.params.path,m=t.commitHash,0===c.length||o===i&&m===c){e.next=13;break}return this.setState({loading:!0}),e.next=6,this.readmeExists();case 6:if(!e.sent){e.next=11;break}return e.next=9,this.loadRawReadme();case 9:e.next=12;break;case 11:this.setState({exists:!1});case 12:this.setState({loading:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.readme,a=e.exists,n=e.loading;return p.a.createElement(N,{exists:a,html:D.a.makeHtml(t),loading:n})}}]),t}(u.PureComponent),L=Object(x.f)(I);var F=p.a.memo((function(e){var t=e.fileList,a=e.lastCommit,n=a.commitHash,r=a.committerName,s=a.message,i=a.time,c=e.loading;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:v.a.FileList},p.a.createElement("div",{className:v.a.lastCommitInfoBar},p.a.createElement("div",{className:v.a.committerName},r),p.a.createElement("div",{className:v.a.message},s),p.a.createElement("div",{className:v.a.time},i),p.a.createElement("div",{className:v.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",n.slice(0,7))),p.a.createElement(f.a,{locale:{emptyText:p.a.createElement(d.a,{description:"\u6ca1\u6709\u6587\u4ef6"})},loading:c,className:v.a.fileList},t.map((function(e){return p.a.createElement(j,{fileInfo:e,key:e.path})})))),p.a.createElement("div",{className:v.a.readmeWrapper},p.a.createElement(L,{commitHash:n})))})),A=a(195),M=a(264),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).loadDirectory=Object(s.a)(r.a.mark((function e(){var t,n,s,i,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,s=t.repository,i=t.path,c=t.branch,e.next=3,A.d.directory(n,s,c||"HEAD",void 0===i?"":i+"/");case 3:null!==(o=e.sent)&&a.setState({fileList:o});case 5:case"end":return e.stop()}}),e)}))),a.loadLastCommit=Object(s.a)(r.a.mark((function e(){var t,n,s,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,s=t.repository,i=t.branch,e.next=3,A.d.lastCommit(n,s,i||"HEAD");case 3:null!==(c=e.sent)&&a.setState({lastCommit:c});case 5:case"end":return e.stop()}}),e)}))),a.state={fileList:[],lastCommit:new M.b("","","","",""),loading:!0},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,Promise.all([this.loadDirectory(),this.loadLastCommit()]);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(s.a)(r.a.mark((function e(t,a,n){var s,i,c,o,m,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.match.params,i=s.branch,c=s.path,o=this.props.match.params,m=o.branch,l=o.path,i===m&&c===l){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fileList,a=e.lastCommit,n=e.loading;return p.a.createElement(F,{fileList:t,lastCommit:a,loading:n})}}]),t}(u.Component),T=Object(x.f)(B);a.d(t,"default",(function(){return T}))},966:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"transformBlobToString",(function(){return c})),a.d(n,"startDownload",(function(){return m}));var r=a(8),s=a.n(r),i=a(29);function c(e){return o.apply(this,arguments)}function o(){return(o=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var n=new FileReader;n.readAsText(t),n.onloadend=function(){e(n.result)},n.onerror=function(e){a(e)}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){var a=document.createElement("a");a.href=e,a.download=t,a.click()}a.d(t,"a",(function(){return n}))},967:function(e,t,a){"use strict";var n=a(974),r=new(a.n(n).a.Converter)({tables:!0,strikethrough:!0,tasklists:!0,emoji:!0});a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=13.74c0a92f.chunk.js.map