(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[21],{1001:function(e,t){e.exports=function(e){if("string"!==typeof e)return!1;var t=e.match(a);if(!t)return!1;var s=t[1];if(!s)return!1;if(r.test(s)||n.test(s))return!0;return!1};var a=/^(?:\w+:)?\/\/(\S+)$/,r=/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,n=/^[^\s\.]+\.\S{2,}$/},1002:function(e,t,a){e.exports={CommitInfoBar:"Style_CommitInfoBar__AogMa",left:"Style_left__3aqnY",right:"Style_right__XNYqn",message:"Style_message__3Jq3M"}},1014:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(0),n=a.n(r),s=a(1002),c=a.n(s),i=a(23),o=a(55),u=a(57),m=a(176),l=a(72),p=a(347),f=a(1);function h(e){var t=e.lastCommit,a=t.committerName,r=t.commitHash,n=t.message,s=t.timestamp,o=t.committerEmail,h=e.match.params,b=h.username,d=h.repositoryName;return Object(f.jsxs)("div",{className:c.a.CommitInfoBar,children:[Object(f.jsxs)("div",{className:c.a.left,children:[Object(f.jsx)(p.a,{committerEmail:o,committerName:a}),Object(f.jsx)("div",{className:c.a.message,children:n})]}),Object(f.jsxs)("div",{className:c.a.right,children:[Object(f.jsx)("div",{className:c.a.time,children:l.b.parseTimestampToDifference(s)}),Object(f.jsx)(m.a,{title:r,children:Object(f.jsxs)("div",{className:c.a.commitHash,children:["\u6700\u540e\u63d0\u4ea4\uff1a",Object(f.jsx)(i.b,{to:u.Function.generateRepositoryCommitRoute({username:b,repositoryName:d,commitHash:r}),children:r.slice(0,7)})]})})]})]})}var b=Object(o.j)(n.a.memo(h))},1015:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var r=a(2),n=a.n(r),s=a(215),c=a(7),i=a(15),o=a(16),u=a(40),m=a(39),l=a(0),p=a(55),f=a(57),h=a(344),b=a(1001),d=a.n(b),j=a(29),v=a(955),x=a.n(v),O=a(251),y=a(1),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).objectURLs=[],r.loadMainBranchName=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(n.a.mark((function e(t){var a,c,i,o,u,m,l,p,f;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.props.match.params,c=a.username,i=a.repositoryName,e.next=3,h.a.branches({username:c,name:i});case 3:if(null===(o=e.sent)){e.next=24;break}u=o.branches,m=Object(s.a)(u),e.prev=7,m.s();case 9:if((l=m.n()).done){e.next=16;break}if(p=l.value,f=p.name,!p.isDefault){e.next=14;break}return r.setState({mainBranchName:f},(function(){return t()})),e.abrupt("break",16);case 14:e.next=9;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),m.e(e.t0);case 21:return e.prev=21,m.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[7,18,21,24]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),r.processHTML=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,i,o,u,m,l,p,f,h,b,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=document.implementation.createHTMLDocument(),(i=a.createElement("div")).innerHTML=t,o=i.getElementsByTagName("a"),u=i.getElementsByTagName("img"),m=[],l=Object(s.a)(o);try{for(f=function(){var e=p.value,t=e.getAttribute("href");null!==t&&m.push(Object(c.a)(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=e,a.next=3,r.getCompleteLink(t);case 3:a.t1=a.sent,a.t0.setAttribute.call(a.t0,"href",a.t1);case 5:case"end":return a.stop()}}),a)})))())},l.s();!(p=l.n()).done;)f()}catch(j){l.e(j)}finally{l.f()}h=Object(s.a)(u);try{for(d=function(){var e=b.value,t=e.getAttribute("src");null!==t&&m.push(Object(c.a)(n.a.mark((function a(){var s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.getImageURL(t);case 2:s=a.sent,r.objectURLs.push(s),e.setAttribute("src",s);case 5:case"end":return a.stop()}}),a)})))())},h.s();!(b=h.n()).done;)d()}catch(j){h.e(j)}finally{h.f()}return e.next=12,Promise.all(m);case 12:return e.abrupt("return",i.innerHTML);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.getCompleteLink=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,s,c,i,o,u,m,l,p,b;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length&&!d()(t)&&!x.a.isAbsolute(t)&&"#"!==t.charAt(0)&&"?"!==t.charAt(0)){e.next=4;break}return e.abrupt("return",t);case 4:return a=r.props.match.params,s=a.username,c=a.repositoryName,i=a.objectType,o=a.commitHash,u=a.path,m=r.state.mainBranchName,l=u?i===j.b.BLOB?x.a.join(x.a.dirname(u),t):x.a.join(u,t):x.a.join("",t),e.next=9,h.a.fileInfo({username:s},{name:c},l,o||m);case 9:if(null===(p=e.sent)){e.next=23;break}if((b=p.objectType)!==j.b.BLOB){e.next=16;break}return e.abrupt("return",f.Function.generateRepositoryCodeRoute({username:s,repositoryName:c,commitHash:o||m,path:l,objectType:j.b.BLOB}));case 16:if(b!==j.b.TREE){e.next=20;break}return e.abrupt("return",f.Function.generateRepositoryCodeRoute({username:s,repositoryName:c,commitHash:o||m,path:l,objectType:j.b.TREE}));case 20:return e.abrupt("return",f.Function.generateRepositoryCodeRoute({username:s,repositoryName:c,commitHash:o||m,path:l,objectType:j.b.COMMIT}));case 21:e.next=24;break;case 23:return e.abrupt("return",f.Function.generateRepositoryCodeRoute({username:s,repositoryName:c,commitHash:o||m,path:l,objectType:j.b.BLOB}));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.getImageURL=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,s,c,i,o,u,m,l,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d()(t)&&!x.a.isAbsolute(t)){e.next=4;break}return e.abrupt("return",t);case 4:return a=r.props.match.params,s=a.username,c=a.repositoryName,i=a.objectType,o=a.commitHash,u=a.path,m=r.state.mainBranchName,l=u?i===j.b.BLOB?x.a.join(x.a.dirname(u),t):x.a.join(u,t):x.a.join("",t),e.next=9,h.a.rawFile({username:s},{name:c},l,o||m);case 9:if(null===(p=e.sent)){e.next=14;break}return e.abrupt("return",URL.createObjectURL(p));case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={mainBranchName:"",loading:!1},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.commitHash,this.setState({loading:!0}),"string"===typeof t){e.next=5;break}return e.next=5,this.loadMainBranchName();case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(c.a)(n.a.mark((function e(t,a,r){var s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.props.markdown,c=t.markdown,s===c){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.objectURLs.forEach((function(e){return URL.revokeObjectURL(e)}))}},{key:"render",value:function(){var e=this.state.loading,t=this.props.markdown;return Object(y.jsx)(O.a,{markdown:t,processHTML:this.processHTML,loading:e})}}]),a}(l.PureComponent),k=Object(p.j)(g)},1295:function(e,t,a){e.exports={FileList:"Style_FileList__3rWIg",lastCommitInfoBar:"Style_lastCommitInfoBar__2XW39",readmeWrapper:"Style_readmeWrapper__25GwL"}},1296:function(e,t,a){e.exports={Item:"Style_Item__2qcqg",icon:"Style_icon__1TlO4",fileName:"Style_fileName__zs9qY",message:"Style_message__1rBHL",time:"Style_time__2cJ9G"}},1297:function(e,t,a){e.exports={Readme:"Style_Readme__2e1Tq",titleWrapper:"Style_titleWrapper__2ExlZ",title:"Style_title__2mCc5",contentWrapper:"Style_contentWrapper__3fQZA"}},1364:function(e,t,a){"use strict";var r=a(5),n=a(0),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},c=a(13),i=function(e,t){return n.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:s}))};i.displayName="FileTextOutlined";t.a=n.forwardRef(i)},1373:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ae}));var r=a(92),n=a(2),s=a.n(n),c=a(215),i=a(7),o=a(15),u=a(16),m=a(40),l=a(39),p=a(0),f=a.n(p),h=a(1295),b=a.n(h),d=a(1407),j=a(183),v=a(29),x=a(23),O=a(55),y=a(1296),g=a.n(y),k=a(57),N=a(72),w=a(1364),_=a(5),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"},B=a(13),M=function(e,t){return p.createElement(B.a,Object(_.a)(Object(_.a)({},e),{},{ref:t,icon:H}))};M.displayName="FolderOutlined";var L=p.forwardRef(M),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"container",theme:"outlined"},S=function(e,t){return p.createElement(B.a,Object(_.a)(Object(_.a)({},e),{},{ref:t,icon:R}))};S.displayName="ContainerOutlined";var C=p.forwardRef(S),T=a(1);function D(e){var t=e.masterBranchName,a=e.fileInfo,r=a.type,n=a.path,s=a.commit,c=s.message,i=s.timestamp,o=s.commitHash,u=e.match.params,m=u.username,l=u.repositoryName,p=u.commitHash,f=function(e){var t=e.split("/");return t[t.length-1]}(n);return Object(T.jsxs)(d.b.Item,{className:g.a.Item,children:[r===v.b.BLOB?Object(T.jsx)(w.a,{className:g.a.icon}):r===v.b.TREE?Object(T.jsx)(L,{className:g.a.icon}):Object(T.jsx)(C,{className:g.a.icon}),Object(T.jsx)("div",{className:g.a.fileName,children:r===v.b.COMMIT?f:Object(T.jsx)(x.b,{to:k.Function.generateRepositoryCodeRoute({username:m,repositoryName:l,objectType:r,commitHash:p||t,path:n}),children:f})}),Object(T.jsx)(x.b,{className:g.a.message,to:k.Function.generateRepositoryCommitRoute({username:m,repositoryName:l,commitHash:o}),children:c}),Object(T.jsx)("div",{className:g.a.time,children:N.b.parseTimestampToDifference(i)})]})}var A=Object(O.j)(f.a.memo(D)),E=a(1297),I=a.n(E),F=a(907),P=a(1015);function z(e){var t=e.readme,a=e.exists,r=e.loading;return a?Object(T.jsx)("div",{className:I.a.Readme,children:Object(T.jsxs)(F.a,{spinning:r,children:[Object(T.jsxs)("div",{className:I.a.titleWrapper,children:[Object(T.jsx)(w.a,{}),Object(T.jsx)("div",{className:I.a.title,children:"README.md"})]}),Object(T.jsx)("div",{className:I.a.contentWrapper,children:Object(T.jsx)(P.a,{markdown:t})})]})}):null}var U=f.a.memo(z),W=a(344),V=a(955),q=a(104),J=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(q.promisify)(r.setState),r.loadRawReadme=Object(i.a)(s.a.mark((function e(){var t,a,n,c,i,o,u,m,l,p,f,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setStatePromise({exists:!1});case 2:t=["README.md","readme.md","readMe.md","ReadMe.md","README.MD","readme.MD","readMe.MD","ReadMe.MD"],a=r.props,n=a.match.params,c=n.username,i=n.repositoryName,o=n.path,u=a.commitHash,m=0,l=t;case 5:if(!(m<l.length)){e.next=26;break}return p=l[m],e.next=9,W.a.fileInfo({username:c},{name:i},Object(V.join)(o||"",p),u);case 9:if(null===(f=e.sent)||f.objectType!==v.b.BLOB){e.next=23;break}return e.next=13,W.a.rawFile({username:c},{name:i},Object(V.join)(o||"",p),u);case 13:if(null===(h=e.sent)){e.next=22;break}return e.t0=r,e.next=18,N.c.transformBlobToString(h);case 18:return e.t1=e.sent,e.t2={readme:e.t1,exists:!0},e.next=22,e.t0.setStatePromise.call(e.t0,e.t2);case 22:return e.abrupt("break",26);case 23:m++,e.next=5;break;case 26:case"end":return e.stop()}}),e)}))),r.state={exists:!1,readme:"",loading:!1},r}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.commitHash){e.next=8;break}return e.next=4,this.setStatePromise({loading:!0});case 4:return e.next=6,this.loadRawReadme();case 6:return e.next=8,this.setStatePromise({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(s.a.mark((function e(t,a,r){var n,c,i,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,c=n.location.pathname,i=n.commitHash,o=t.location.pathname,u=t.commitHash,c===o&&i===u){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.readme,a=e.exists,r=e.loading;return Object(T.jsx)(U,{exists:a,readme:t,loading:r})}}]),a}(p.PureComponent),Y=Object(O.j)(J),$=a(1014),G=f.a.lazy((function(){return a.e(49).then(a.bind(null,1406))}));function X(e){var t=e.fileList,a=e.lastCommit,r=e.loading,n=e.showPreviousFolderItem,s=e.masterBranchName,c=a.commitHash;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:b.a.FileList,children:[Object(T.jsx)("div",{className:b.a.lastCommitInfoBar,children:Object(T.jsx)($.a,{lastCommit:a})}),Object(T.jsxs)(d.b,{locale:{emptyText:Object(T.jsx)(j.a,{description:"\u6ca1\u6709\u6587\u4ef6"})},loading:r,className:b.a.fileList,children:[n?Object(T.jsx)(G,{}):null,t.map((function(e){return Object(T.jsx)(A,{masterBranchName:s,fileInfo:e},e.path)}))]})]}),Object(T.jsx)("div",{className:b.a.readmeWrapper,children:Object(T.jsx)(Y,{commitHash:c})})]})}var Z=f.a.memo(X),Q=a(34),K=a(138),ee=a(3),te=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setStatePromise=Object(q.promisify)(n.setState),n.loadMasterBranchName=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,i,o,u,m,l,p,f,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.match.params,r=a.username,i=a.repositoryName,e.next=3,Q.j.branches({username:r,name:i});case 3:if(null===(o=e.sent)){e.next=26;break}u=o.branches,m="",l=Object(c.a)(u),e.prev=8,l.s();case 10:if((p=l.n()).done){e.next=17;break}if(f=p.value,h=f.name,!f.isDefault){e.next=15;break}return m=h,e.abrupt("break",17);case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),l.e(e.t0);case 22:return e.prev=22,l.f(),e.finish(22);case 25:n.setState({masterBranchName:m},(function(){return t()}));case 26:case"end":return e.stop()}}),e,null,[[8,19,22,25]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),n.loadDirectory=Object(i.a)(s.a.mark((function e(){var t,a,c,i,o,u,m,l,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,a=t.match.params,c=a.username,i=a.repositoryName,o=a.path,u=a.commitHash,m=t.history,l=n.state.masterBranchName,e.next=4,Q.j.directory({username:c},{name:i},u||l,void 0===o?"":o+"/");case 4:if(null===(p=e.sent)){e.next=10;break}return e.next=8,n.setStatePromise({fileList:Object(r.a)(p)});case 8:e.next=11;break;case 10:m.replace(ee.d[ee.b.NOT_FOUND]);case 11:case"end":return e.stop()}}),e)}))),n.loadLastCommit=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,c,i,o,u,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.match.params,r=a.username,c=a.repositoryName,i=a.commitHash,o=a.path,u=n.state.masterBranchName,e.next=4,Q.j.lastBranchCommit({username:r},{name:c},i||u,o);case 4:null!==(m=e.sent)?n.setState({lastCommit:m},(function(){return t()})):t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),n.state={fileList:[],lastCommit:new K.b("","","",0,"",""),loading:!0,masterBranchName:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadMasterBranchName();case 3:return e.next=5,this.loadLastCommit();case 5:return e.next=7,this.loadDirectory();case 7:this.setState({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(s.a.mark((function e(t,a,r){var n,c,i,o,u,m,l,p,f,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.match.params,c=n.username,i=n.repositoryName,o=n.commitHash,u=n.path,m=this.props.match.params,l=m.username,p=m.repositoryName,f=m.commitHash,h=m.path,c===l&&i===p){e.next=7;break}return e.next=5,this.componentDidMount();case 5:e.next=19;break;case 7:if(o===f){e.next=14;break}return this.setState({loading:!0}),e.next=11,Promise.all([this.loadDirectory(),this.loadLastCommit()]);case 11:this.setState({loading:!1}),e.next=19;break;case 14:if(u===h){e.next=19;break}return this.setState({loading:!0}),e.next=18,this.loadDirectory();case 18:this.setState({loading:!1});case 19:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fileList,a=e.lastCommit,r=e.loading,n=e.masterBranchName,s=this.props.match.params.path;return Object(T.jsx)(Z,{fileList:t,masterBranchName:n,lastCommit:a,loading:r,showPreviousFolderItem:void 0!==s&&"."!==s})}}]),a}(p.Component),ae=Object(O.j)(te)},955:function(e,t,a){(function(e){function a(e,t){for(var a=0,r=e.length-1;r>=0;r--){var n=e[r];"."===n?e.splice(r,1):".."===n?(e.splice(r,1),a++):a&&(e.splice(r,1),a--)}if(t)for(;a--;a)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var a=[],r=0;r<e.length;r++)t(e[r],r,e)&&a.push(e[r]);return a}t.resolve=function(){for(var t="",n=!1,s=arguments.length-1;s>=-1&&!n;s--){var c=s>=0?arguments[s]:e.cwd();if("string"!==typeof c)throw new TypeError("Arguments to path.resolve must be strings");c&&(t=c+"/"+t,n="/"===c.charAt(0))}return(n?"/":"")+(t=a(r(t.split("/"),(function(e){return!!e})),!n).join("/"))||"."},t.normalize=function(e){var s=t.isAbsolute(e),c="/"===n(e,-1);return(e=a(r(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&c&&(e+="/"),(s?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,a){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var a=e.length-1;a>=0&&""===e[a];a--);return t>a?[]:e.slice(t,a-t+1)}e=t.resolve(e).substr(1),a=t.resolve(a).substr(1);for(var n=r(e.split("/")),s=r(a.split("/")),c=Math.min(n.length,s.length),i=c,o=0;o<c;o++)if(n[o]!==s[o]){i=o;break}var u=[];for(o=i;o<n.length;o++)u.push("..");return(u=u.concat(s.slice(i))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,r=-1,n=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!n){r=s;break}}else n=!1;return-1===r?a?"/":".":a&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var a=function(e){"string"!==typeof e&&(e+="");var t,a=0,r=-1,n=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!n){a=t+1;break}}else-1===r&&(n=!1,r=t+1);return-1===r?"":e.slice(a,r)}(e);return t&&a.substr(-1*t.length)===t&&(a=a.substr(0,a.length-t.length)),a},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,a=0,r=-1,n=!0,s=0,c=e.length-1;c>=0;--c){var i=e.charCodeAt(c);if(47!==i)-1===r&&(n=!1,r=c+1),46===i?-1===t?t=c:1!==s&&(s=1):-1!==t&&(s=-1);else if(!n){a=c+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===a+1?"":e.slice(t,r)};var n="b"==="ab".substr(-1)?function(e,t,a){return e.substr(t,a)}:function(e,t,a){return t<0&&(t=e.length+t),e.substr(t,a)}}).call(this,a(53))}}]);
//# sourceMappingURL=21.7dda88f7.chunk.js.map