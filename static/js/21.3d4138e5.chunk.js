(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[21],{1e3:function(e,t,a){"use strict";var n=a(1005),r=new(a.n(n).a.Converter)({tables:!0,strikethrough:!0,tasklists:!0,emoji:!0});a.d(t,"a",(function(){return r}))},1001:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"transformBlobToString",(function(){return c})),a.d(n,"startDownload",(function(){return m}));var r=a(4),s=a.n(r),i=a(10);function c(e){return o.apply(this,arguments)}function o(){return(o=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var n=new FileReader;n.readAsText(t),n.onloadend=function(){e(n.result)},n.onerror=function(e){a(e)}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){var a=document.createElement("a");a.href=e,a.download=t,a.click()}a.d(t,"a",(function(){return n}))},1057:function(e,t,a){e.exports={FileList:"Style_FileList__2OQFJ",lastCommitInfoBar:"Style_lastCommitInfoBar__7Haom",committerName:"Style_committerName__2Janu",message:"Style_message__cL0hI",commitHash:"Style_commitHash__33yq2",time:"Style_time__1GrHJ",readmeWrapper:"Style_readmeWrapper__3CalM"}},1058:function(e,t,a){e.exports={Item:"Style_Item__2vv2j",icon:"Style_icon__3Brt4",fileName:"Style_fileName__3Xcz8",message:"Style_message__1lvb5",time:"Style_time__1hBMM"}},1059:function(e,t,a){e.exports={Readme:"Style_Readme__1yCKv",title:"Style_title__BO69S",content:"Style_content__3Rr6k"}},1259:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),s=a(943),i=a(10),c=a(53),o=a(73),m=a(271),l=a(270),u=a(272),p=a(0),f=a.n(p),h=(a(948),a(947)),d=(a(954),a(119)),v=a(1057),b=a.n(v),_=(a(412),a(25)),y=a(997),E=a(49),x=a(95),g=a(1058),j=a.n(g),w=a(118);var k=Object(x.f)(f.a.memo((function(e){var t=e.fileInfo,a=t.type,n=t.path,r=t.commit,s=r.message,i=r.time,c=e.match.params,o=c.username,m=c.repository,l=c.branch,u=function(e){var t=e.split("/");return t[t.length-1]}(n);return f.a.createElement(h.a.Item,{className:j.a.Item},a===y.a.BLOB?f.a.createElement(_.a,{className:j.a.icon,type:"file-text"}):f.a.createElement(_.a,{className:j.a.icon,type:"folder"}),f.a.createElement("div",{className:j.a.fileName},f.a.createElement(E.b,{to:w.b.generateRepositoryRoute({username:o,repository:m,objectType:a,branch:l||"HEAD",path:n})},u)),f.a.createElement("div",{className:j.a.message},s),f.a.createElement("div",{className:j.a.time},i))}))),O=(a(971),a(974)),S=a(1059),N=a.n(S);var C=f.a.memo((function(e){var t=e.html,a=e.exists,n=e.loading;return a?f.a.createElement("div",{className:N.a.Readme},f.a.createElement(O.a,{spinning:n},f.a.createElement("div",{className:N.a.title},"README.md"),f.a.createElement("div",{className:N.a.content,dangerouslySetInnerHTML:{__html:t}}))):null})),H=a(275),I=a(1004),L=a(1e3),R=a(1001),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).readmeExists=Object(i.a)(r.a.mark((function e(){var t,n,s,i,c,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.match.params,s=n.username,i=n.repository,c=n.path,o=t.commitHash,e.next=3,H.a.fileInfo({username:s},{name:i},Object(I.join)(c||"","README.md"),o);case 3:return m=e.sent,e.abrupt("return",null!==m&&m.exists);case 5:case"end":return e.stop()}}),e)}))),a.loadRawReadme=Object(i.a)(r.a.mark((function e(){var t,n,s,i,c,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.match.params,s=n.username,i=n.repository,c=n.path,o=t.commitHash,e.next=3,H.a.rawFile({username:s},{name:i},Object(I.join)(c||"","README.md"),o);case 3:if(null===(m=e.sent)){e.next=11;break}return e.t0=a,e.next=8,R.a.transformBlobToString(m);case 8:e.t1=e.sent,e.t2={readme:e.t1,exists:!0},e.t0.setState.call(e.t0,e.t2);case 11:case"end":return e.stop()}}),e)}))),a.state={exists:!1,readme:"",loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(i.a)(r.a.mark((function e(t,a,n){var s,i,c,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.props,i=s.match.params.path,c=s.commitHash,o=t.match.params.path,m=t.commitHash,0===c.length||o===i&&m===c){e.next=13;break}return this.setState({loading:!0}),e.next=6,this.readmeExists();case 6:if(!e.sent){e.next=11;break}return e.next=9,this.loadRawReadme();case 9:e.next=12;break;case 11:this.setState({exists:!1});case 12:this.setState({loading:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.readme,a=e.exists,n=e.loading;return f.a.createElement(C,{exists:a,html:L.a.makeHtml(t),loading:n})}}]),t}(p.PureComponent),B=Object(x.f)(D),F=f.a.lazy((function(){return a.e(34).then(a.bind(null,1277))}));var M=f.a.memo((function(e){var t=e.fileList,a=e.lastCommit,n=a.commitHash,r=a.committerName,s=a.message,i=a.time,c=e.loading,o=e.showPreviousFolderItem;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:b.a.FileList},f.a.createElement("div",{className:b.a.lastCommitInfoBar},f.a.createElement("div",{className:b.a.committerName},r),f.a.createElement("div",{className:b.a.message},s),f.a.createElement("div",{className:b.a.time},i),f.a.createElement("div",{className:b.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",n.slice(0,7))),f.a.createElement(h.a,{locale:{emptyText:f.a.createElement(d.a,{description:"\u6ca1\u6709\u6587\u4ef6"})},loading:c,className:b.a.fileList},o?f.a.createElement(F,null):null,t.map((function(e){return f.a.createElement(k,{fileInfo:e,key:e.path})})))),f.a.createElement("div",{className:b.a.readmeWrapper},f.a.createElement(B,{commitHash:n})))})),A=a(166),T=a(273),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).loadDirectory=Object(i.a)(r.a.mark((function e(){var t,n,i,c,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,i=t.repository,c=t.path,o=t.branch,e.next=3,A.e.directory({username:n},{name:i},o||"HEAD",void 0===c?"":c+"/");case 3:null!==(m=e.sent)&&a.setState({fileList:Object(s.a)(m)});case 5:case"end":return e.stop()}}),e)}))),a.loadLastCommit=Object(i.a)(r.a.mark((function e(){var t,n,s,i,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,s=t.repository,i=t.branch,c=t.path,e.next=3,A.e.lastCommit({username:n},{name:s},i||"HEAD",c);case 3:null!==(o=e.sent)&&a.setState({lastCommit:o});case 5:case"end":return e.stop()}}),e)}))),a.state={fileList:[],lastCommit:new T.b("","","","",""),loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,Promise.all([this.loadDirectory(),this.loadLastCommit()]);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(r.a.mark((function e(t,a,n){var s,i,c,o,m,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.match.params,i=s.branch,c=s.path,o=this.props.match.params,m=o.branch,l=o.path,i===m&&c===l){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fileList,a=e.lastCommit,n=e.loading,r=this.props.match.params.path;return f.a.createElement(M,{fileList:t,lastCommit:a,loading:n,showPreviousFolderItem:void 0!==r})}}]),t}(p.Component),P=Object(x.f)(J);a.d(t,"default",(function(){return P}))}}]);
//# sourceMappingURL=21.3d4138e5.chunk.js.map