(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[19],{1008:function(e,t,a){e.exports={FileList:"Style_FileList__2OQFJ",lastCommitInfoBar:"Style_lastCommitInfoBar__7Haom",readmeWrapper:"Style_readmeWrapper__3CalM"}},1009:function(e,t,a){e.exports={Item:"Style_Item__2vv2j",icon:"Style_icon__3Brt4",fileName:"Style_fileName__3Xcz8",message:"Style_message__1lvb5",time:"Style_time__1hBMM"}},1010:function(e,t,a){e.exports={Readme:"Style_Readme__1yCKv",title:"Style_title__BO69S",content:"Style_content__3Rr6k"}},1210:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),s=a(874),i=a(35),c=a(47),o=a(88),m=a(87),l=a(89),u=a(0),p=a.n(u),f=(a(881),a(879)),d=(a(886),a(118)),h=a(1008),v=a.n(h),_=(a(275),a(21)),y=a(937),b=a(38),E=a(101),x=a(1009),g=a.n(x),w=a(90);var S=Object(E.f)(p.a.memo((function(e){var t=e.fileInfo,a=t.type,n=t.path,r=t.commit,s=r.message,i=r.time,c=e.match.params,o=c.username,m=c.repository,l=c.branch,u=function(e){var t=e.split("/");return t[t.length-1]}(n);return p.a.createElement(f.a.Item,{className:g.a.Item},a===y.a.BLOB?p.a.createElement(_.a,{className:g.a.icon,type:"file-text"}):p.a.createElement(_.a,{className:g.a.icon,type:"folder"}),p.a.createElement("div",{className:g.a.fileName},p.a.createElement(b.b,{to:w.b.generateRepositoryRoute({username:o,repository:m,objectType:a,branch:l||"master",path:n})},u)),p.a.createElement("div",{className:g.a.message},s),p.a.createElement("div",{className:g.a.time},i))}))),N=(a(899),a(902)),j=a(1010),C=a.n(j);var k=p.a.memo((function(e){var t=e.html,a=e.exists,n=e.loading;return a?p.a.createElement("div",{className:C.a.Readme},p.a.createElement(N.a,{spinning:n},p.a.createElement("div",{className:C.a.title},"README.md"),p.a.createElement("div",{className:C.a.content,dangerouslySetInnerHTML:{__html:t}}))):null})),O=a(278),I=a(946),R=a(939),B=a(940),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).readmeExists=function(){var e,t,n,s,i,c,o;return r.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return e=a.props,t=e.match.params,n=t.username,s=t.repository,i=t.path,c=e.commitHash,m.next=3,r.a.awrap(O.a.fileInfo({username:n},{name:s},Object(I.join)(i||"","README.md"),c));case 3:return o=m.sent,m.abrupt("return",null!==o&&o.exists);case 5:case"end":return m.stop()}}))},a.loadRawReadme=function(){var e,t,n,s,i,c,o;return r.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return e=a.props,t=e.match.params,n=t.username,s=t.repository,i=t.path,c=e.commitHash,m.next=3,r.a.awrap(O.a.rawFile({username:n},{name:s},Object(I.join)(i||"","README.md"),c));case 3:if(null===(o=m.sent)){m.next=11;break}return m.t0=a,m.next=8,r.a.awrap(B.a.transformBlobToString(o));case 8:m.t1=m.sent,m.t2={readme:m.t1,exists:!0},m.t0.setState.call(m.t0,m.t2);case 11:case"end":return m.stop()}}))},a.state={exists:!1,readme:"",loading:!0},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var n,s,i,c,o;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.props,s=n.match.params.path,i=n.commitHash,c=e.match.params.path,o=e.commitHash,0===i.length||c===s&&o===i){t.next=13;break}return this.setState({loading:!0}),t.next=6,r.a.awrap(this.readmeExists());case 6:if(!t.sent){t.next=11;break}return t.next=9,r.a.awrap(this.loadRawReadme());case 9:t.next=12;break;case 11:this.setState({exists:!1});case 12:this.setState({loading:!1});case 13:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.readme,a=e.exists,n=e.loading;return p.a.createElement(k,{exists:a,html:R.a.makeHtml(t),loading:n})}}]),t}(u.PureComponent),L=Object(E.f)(H),M=a(941),D=p.a.lazy((function(){return a.e(37).then(a.bind(null,1230))}));var F=p.a.memo((function(e){var t=e.fileList,a=e.lastCommit,n=e.loading,r=e.showPreviousFolderItem,s=a.commitHash;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:v.a.FileList},p.a.createElement("div",{className:v.a.lastCommitInfoBar},p.a.createElement(M.a,{lastCommit:a})),p.a.createElement(f.a,{locale:{emptyText:p.a.createElement(d.a,{description:"\u6ca1\u6709\u6587\u4ef6"})},loading:n,className:v.a.fileList},r?p.a.createElement(D,null):null,t.map((function(e){return p.a.createElement(S,{fileInfo:e,key:e.path})})))),p.a.createElement("div",{className:v.a.readmeWrapper},p.a.createElement(L,{commitHash:s})))})),P=a(206),T=a(276),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).loadDirectory=function(){var e,t,n,i,c,o;return r.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return e=a.props.match.params,t=e.username,n=e.repository,i=e.path,c=e.branch,m.next=3,r.a.awrap(P.e.directory({username:t},{name:n},c||"master",void 0===i?"":i+"/"));case 3:null!==(o=m.sent)&&a.setState({fileList:Object(s.a)(o)});case 5:case"end":return m.stop()}}))},a.loadLastCommit=function(){var e,t,n,s,i,c;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=a.props.match.params,t=e.username,n=e.repository,s=e.branch,i=e.path,o.next=3,r.a.awrap(P.e.lastCommit({username:t},{name:n},s||"master",i));case 3:null!==(c=o.sent)&&a.setState({lastCommit:c});case 5:case"end":return o.stop()}}))},a.state={fileList:[],lastCommit:new T.b("","","","",""),loading:!0},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,r.a.awrap(Promise.all([this.loadDirectory(),this.loadLastCommit()]));case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(e,t,a){var n,s,i,c,o,m;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.match.params,s=n.branch,i=n.path,c=this.props.match.params,o=c.branch,m=c.path,s===o&&i===m){t.next=5;break}return t.next=5,r.a.awrap(this.componentDidMount());case 5:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.fileList,a=e.lastCommit,n=e.loading,r=this.props.match.params.path;return p.a.createElement(F,{fileList:t,lastCommit:a,loading:n,showPreviousFolderItem:void 0!==r})}}]),t}(u.Component),J=Object(E.f)(A);a.d(t,"default",(function(){return J}))},909:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return r.default.Children.forEach(e,(function(e){t.push(e)})),t};var n,r=(n=a(0))&&n.__esModule?n:{default:n}},930:function(e,t,a){e.exports={CommitInfoBar:"Style_CommitInfoBar__1-ElH",left:"Style_left__1syWH",right:"Style_right__3RBYJ",avatar:"Style_avatar__290nj",name:"Style_name__3xcxA"}},939:function(e,t,a){"use strict";var n=a(947),r=new(a.n(n).a.Converter)({tables:!0,strikethrough:!0,tasklists:!0,emoji:!0});a.d(t,"a",(function(){return r}))},940:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"transformBlobToString",(function(){return i})),a.d(n,"startDownload",(function(){return c}));var r=a(4),s=a.n(r);function i(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){var n=new FileReader;n.readAsText(e),n.onloadend=function(){t(n.result)},n.onerror=function(e){a(e)}})));case 1:case"end":return t.stop()}}))}function c(e,t){var a=document.createElement("a");a.href=e,a.download=t,a.click()}a.d(t,"a",(function(){return n}))},941:function(e,t,a){"use strict";a(413);var n=a(277),r=a(0),s=a.n(r),i=a(930),c=a.n(i),o=a(38),m=a(90);var l=s.a.memo((function(e){var t=e.lastCommit,a=t.committerName,r=t.commitHash,i=t.message,l=t.time;return s.a.createElement("div",{className:c.a.CommitInfoBar},s.a.createElement("div",{className:c.a.left},s.a.createElement(o.b,{className:c.a.name,to:m.b.generatePersonalCenterRoute({username:a})},a),s.a.createElement("div",{className:c.a.message},i)),s.a.createElement("div",{className:c.a.right},s.a.createElement("div",{className:c.a.time},l),s.a.createElement(n.a,{title:r},s.a.createElement("div",{className:c.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",r.slice(0,7)))))}));a.d(t,"a",(function(){return l}))}}]);
//# sourceMappingURL=19.698c7182.chunk.js.map