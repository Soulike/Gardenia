(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[27],{1028:function(e,t,a){e.exports={FileList:"Style_FileList__2OQFJ",lastCommitInfoBar:"Style_lastCommitInfoBar__7Haom",readmeWrapper:"Style_readmeWrapper__3CalM"}},1029:function(e,t,a){e.exports={Item:"Style_Item__2vv2j",icon:"Style_icon__3Brt4",fileName:"Style_fileName__3Xcz8",message:"Style_message__1lvb5",time:"Style_time__1hBMM"}},1030:function(e,t,a){e.exports={Readme:"Style_Readme__1yCKv",title:"Style_title__BO69S",content:"Style_content__3Rr6k"}},1233:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),s=a(887),i=a(7),o=a(31),c=a(34),m=a(90),l=a(89),u=a(91),p=a(0),f=a.n(p),h=(a(898),a(896)),d=(a(895),a(119)),v=a(1028),b=a.n(v),g=(a(276),a(20)),y=a(907),_=a(38),S=a(102),x=a(1029),E=a.n(x),w=a(92),j=a(900);var k=Object(S.f)(f.a.memo((function(e){var t=e.fileInfo,a=t.type,n=t.path,r=t.commit,s=r.message,i=r.timestamp,o=r.commitHash,c=e.match.params,m=c.username,l=c.repository,u=c.branch,p=function(e){var t=e.split("/");return t[t.length-1]}(n);return f.a.createElement(h.a.Item,{className:E.a.Item},a===y.a.BLOB?f.a.createElement(g.a,{className:E.a.icon,type:"file-text"}):f.a.createElement(g.a,{className:E.a.icon,type:"folder"}),f.a.createElement("div",{className:E.a.fileName},f.a.createElement(_.b,{to:w.b.generateRepositoryCodeRoute({username:m,repository:l,objectType:a,branch:u||"master",path:n})},p)),f.a.createElement(_.b,{className:E.a.message,to:w.b.generateRepositoryCommitRoute({username:m,repository:l,commitHash:o})},s),f.a.createElement("div",{className:E.a.time},j.a.parseTimestampToDifference(i)))}))),O=(a(889),a(890)),C=a(1030),N=a.n(C);var D=f.a.memo((function(e){var t=e.html,a=e.exists,n=e.loading;return a?f.a.createElement("div",{className:N.a.Readme},f.a.createElement(O.a,{spinning:n},f.a.createElement("div",{className:N.a.title},"README.md"),f.a.createElement("div",{className:N.a.content,dangerouslySetInnerHTML:{__html:t}}))):null})),M=a(280),R=a(954),H=a(949),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).readmeExists=Object(i.a)(r.a.mark((function e(){var t,n,s,i,o,c,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.match.params,s=n.username,i=n.repository,o=n.path,c=t.commitHash,e.next=3,M.a.fileInfo({username:s},{name:i},Object(R.join)(o||"","README.md"),c);case 3:return m=e.sent,e.abrupt("return",null!==m&&m.exists);case 5:case"end":return e.stop()}}),e)}))),a.loadRawReadme=Object(i.a)(r.a.mark((function e(){var t,n,s,i,o,c,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.match.params,s=n.username,i=n.repository,o=n.path,c=t.commitHash,e.next=3,M.a.rawFile({username:s},{name:i},Object(R.join)(o||"","README.md"),c);case 3:if(null===(m=e.sent)){e.next=11;break}return e.t0=a,e.next=8,j.b.transformBlobToString(m);case 8:e.t1=e.sent,e.t2={readme:e.t1,exists:!0},e.t0.setState.call(e.t0,e.t2);case 11:case"end":return e.stop()}}),e)}))),a.state={exists:!1,readme:"",loading:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(i.a)(r.a.mark((function e(t,a,n){var s,i,o,c,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.props,i=s.match.params.path,o=s.commitHash,c=t.match.params.path,m=t.commitHash,0===o.length||c===i&&m===o){e.next=13;break}return this.setState({loading:!0}),e.next=6,this.readmeExists();case 6:if(!e.sent){e.next=11;break}return e.next=9,this.loadRawReadme();case 9:e.next=12;break;case 11:this.setState({exists:!1});case 12:this.setState({loading:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.readme,a=e.exists,n=e.loading;return f.a.createElement(D,{exists:a,html:H.a.makeHtml(t),loading:n})}}]),t}(p.PureComponent),T=Object(S.f)(I),B=a(950),L=f.a.lazy((function(){return a.e(46).then(a.bind(null,1254))}));var F=f.a.memo((function(e){var t=e.fileList,a=e.lastCommit,n=e.loading,r=e.showPreviousFolderItem,s=a.commitHash;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:b.a.FileList},f.a.createElement("div",{className:b.a.lastCommitInfoBar},f.a.createElement(B.a,{lastCommit:a})),f.a.createElement(h.a,{locale:{emptyText:f.a.createElement(d.a,{description:"\u6ca1\u6709\u6587\u4ef6"})},loading:n,className:b.a.fileList},r?f.a.createElement(L,null):null,t.map((function(e){return f.a.createElement(k,{fileInfo:e,key:e.path})})))),f.a.createElement("div",{className:b.a.readmeWrapper},f.a.createElement(T,{commitHash:s})))})),A=a(207),P=a(278),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).loadDirectory=Object(i.a)(r.a.mark((function e(){var t,n,i,o,c,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,i=t.repository,o=t.path,c=t.branch,e.next=3,A.f.directory({username:n},{name:i},c||"master",void 0===o?"":o+"/");case 3:null!==(m=e.sent)&&a.setState({fileList:Object(s.a)(m)});case 5:case"end":return e.stop()}}),e)}))),a.loadLastCommit=Object(i.a)(r.a.mark((function e(){var t,n,s,i,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,s=t.repository,i=t.branch,o=t.path,e.next=3,A.f.lastCommit({username:n},{name:s},i||"master",o);case 3:null!==(c=e.sent)&&a.setState({lastCommit:c});case 5:case"end":return e.stop()}}),e)}))),a.state={fileList:[],lastCommit:new P.b("","","",0,"",""),loading:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,Promise.all([this.loadDirectory(),this.loadLastCommit()]);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(r.a.mark((function e(t,a,n){var s,i,o,c,m,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.match.params,i=s.branch,o=s.path,c=this.props.match.params,m=c.branch,l=c.path,i===m){e.next=9;break}return this.setState({loading:!0}),e.next=6,Promise.all([this.loadDirectory(),this.loadLastCommit()]);case 6:this.setState({loading:!1}),e.next=14;break;case 9:if(o===l){e.next=14;break}return this.setState({loading:!0}),e.next=13,this.loadDirectory();case 13:this.setState({loading:!1});case 14:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fileList,a=e.lastCommit,n=e.loading,r=this.props.match.params.path;return f.a.createElement(F,{fileList:t,lastCommit:a,loading:n,showPreviousFolderItem:void 0!==r})}}]),t}(p.Component),W=Object(S.f)(J);a.d(t,"default",(function(){return W}))},887:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return n}))},900:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"transformBlobToString",(function(){return c})),a.d(n,"startDownload",(function(){return l}));var r={};a.r(r),a.d(r,"parseTimestampToDifference",(function(){return u})),a.d(r,"parseTimestampToDate",(function(){return p}));var s=a(4),i=a.n(s),o=a(7);function c(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var n=new FileReader;n.readAsText(t),n.onloadend=function(){e(n.result)},n.onerror=function(e){a(e)}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){var a=document.createElement("a");a.href=e,a.download=t,a.click()}function u(e){var t=new Date(e),a=new Date,n=a.getFullYear()-t.getFullYear(),r=a.getMonth()-t.getMonth(),s=a.getDate()-t.getDate(),i=a.getHours()-t.getHours(),o=a.getMinutes()-t.getMinutes(),c=a.getSeconds()-t.getSeconds();return Math.abs(n)>=1?"".concat(n," \u5e74\u524d"):Math.abs(r)>=1?"".concat(r," \u4e2a\u6708\u524d"):Math.abs(s)>=1?"".concat(s," \u5929\u524d"):Math.abs(i)>=1?"".concat(i," \u5c0f\u65f6\u524d"):Math.abs(o)>=1?"".concat(o," \u5206\u949f\u524d"):Math.abs(c)>=1?"".concat(c," \u79d2\u524d"):"\u521a\u521a"}function p(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),s=t.getHours(),i=t.getMinutes(),o=t.getSeconds();return"".concat(a,"-").concat(n.toString().padStart(2,"0"),"-").concat(r.toString().padStart(2,"0")," ").concat(s.toString().padStart(2,"0"),":").concat(i.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0"))}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},945:function(e,t,a){e.exports={CommitInfoBar:"Style_CommitInfoBar__1-ElH",left:"Style_left__1syWH",right:"Style_right__3RBYJ",avatar:"Style_avatar__290nj",name:"Style_name__3xcxA"}},949:function(e,t,a){"use strict";var n=a(955),r=new(a.n(n).a.Converter)({tables:!0,strikethrough:!0,tasklists:!0,emoji:!0});a.d(t,"a",(function(){return r}))},950:function(e,t,a){"use strict";a(414);var n=a(277),r=a(0),s=a.n(r),i=a(945),o=a.n(i),c=a(38),m=a(102),l=a(92),u=a(900);var p=Object(m.f)(s.a.memo((function(e){var t=e.lastCommit,a=t.committerName,r=t.commitHash,i=t.message,m=t.timestamp,p=e.match.params,f=p.username,h=p.repository;return s.a.createElement("div",{className:o.a.CommitInfoBar},s.a.createElement("div",{className:o.a.left},s.a.createElement(c.b,{className:o.a.name,to:l.b.generatePersonalCenterRoute({username:a})},a),s.a.createElement("div",{className:o.a.message},i)),s.a.createElement("div",{className:o.a.right},s.a.createElement("div",{className:o.a.time},u.a.parseTimestampToDifference(m)),s.a.createElement(n.a,{title:r},s.a.createElement("div",{className:o.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",s.a.createElement(c.b,{to:l.b.generateRepositoryCommitRoute({username:f,repository:h,commitHash:r})},r.slice(0,7))))))})));a.d(t,"a",(function(){return p}))}}]);
//# sourceMappingURL=27.e887a462.chunk.js.map