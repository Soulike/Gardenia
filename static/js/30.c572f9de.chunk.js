(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[30],{1063:function(e,a,t){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},1064:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n),i=t(1063),l=t.n(i);var c=r.a.memo((function(e){var a=e.children;return r.a.createElement("h2",{className:l.a.SettingsTitle},a)}))},1081:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),r=t.n(n),i=t(209);var l=r.a.memo((function(){return r.a.createElement(i.a,{avatar:""})}))},1187:function(e,a,t){e.exports={Avatar:"Style_Avatar__2TmQb",alertWrapper:"Style_alertWrapper__3gZd7",body:"Style_body__eN9Pm",avatarWrapper:"Style_avatarWrapper__3wqvg",avatar:"Style_avatar__hT7wZ",fileInput:"Style_fileInput__1gSjB",buttonWrapper:"Style_buttonWrapper__1rFvY"}},1288:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return x}));var n=t(1),r=t.n(n),i=t(3),l=t(8),c=t(10),s=t(19),o=t(18),u=t(0),p=t.n(u),f=t(1187),v=t.n(f),m=t(1064),d=t(1081),g=t(1032),_=t(1020),h=t(240),E=t(87);var b=p.a.memo((function(e){var a=e.avatar,t=e.loading,n=e.fileInputRef,r=e.onAvatarClick,i=e.onAvatarInputChange,l=e.fileChanged,c=e.onUploadButtonClick,s=e.accept;return p.a.createElement("div",{className:v.a.Avatar},p.a.createElement(m.a,null,"\u5934\u50cf"),p.a.createElement("div",{className:v.a.alertWrapper},p.a.createElement(g.a,{message:"\u70b9\u51fb\u56fe\u7247\u9009\u62e9\u65b0\u7684\u5934\u50cf\uff0c\u56fe\u50cf\u6587\u4ef6\u5927\u5c0f 2M \u4ee5\u5185\u3002\u63a8\u8350\u4e0a\u4f20\u65b9\u5f62\u56fe\u50cf\uff0c\u5426\u5219\u56fe\u50cf\u4f1a\u88ab\u62c9\u4f38\u3002",banner:!0,type:"info",showIcon:!0})),p.a.createElement("div",{className:v.a.body},p.a.createElement(_.a,{spinning:t},p.a.createElement(h.a,{title:"\u70b9\u51fb\u66f4\u6362\u5934\u50cf"},p.a.createElement("div",{className:v.a.avatarWrapper,onClick:r},a?p.a.createElement("img",{src:a,alt:"avatar",className:v.a.avatar}):p.a.createElement(d.a,null)))),p.a.createElement("input",{type:"file",accept:s,multiple:!1,className:v.a.fileInput,ref:n,onChange:i}),p.a.createElement("div",{className:v.a.buttonWrapper},p.a.createElement(E.a,{type:"primary",block:!0,disabled:t||!l,loading:t,onClick:c},"\u4e0a\u4f20"))))})),k=t(28),y=t(1019),C=t(21),I=t(92),S=C.CONFIG.PAGE_ID,A=C.CONFIG.PAGE_ID_TO_ROUTE,O=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).fileInputRef=p.a.createRef(),n.setStatePromise=Object(I.promisify)(n.setState),n.loadAvatar=Object(i.a)(r.a.mark((function e(){var a,t,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.f.get();case 2:if(null===(a=e.sent)){e.next=9;break}return t=a.avatar,e.next=7,n.setStatePromise({avatar:t});case 7:e.next=11;break;case 9:return i=n.props.history,e.abrupt("return",i.replace(A[S.NOT_FOUND]));case 11:case"end":return e.stop()}}),e)}))),n.onAvatarClick=function(){var e=n.fileInputRef.current;null!==e&&e.click()},n.onAvatarInputChange=function(e){var a=e.target.files;if(null!==a)if(1===a.length){var r=a[0],i=r.type;r.size<=2097152&&t.ALLOWED_MIME_TYPE.includes(i)?n.setState({file:r,avatar:URL.createObjectURL(r)}):y.a.error({message:"\u53ea\u80fd\u4e0a\u4f20 2M \u4ee5\u5185\u7684 JPG \u6216 PNG \u56fe\u50cf\u6587\u4ef6\u4f5c\u4e3a\u5934\u50cf"})}else y.a.error({message:"\u53ea\u80fd\u4e0a\u4f20\u4e00\u4e2a\u6587\u4ef6\u4f5c\u4e3a\u5934\u50cf"})},n.onUploadButtonClick=Object(i.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(a=n.state.file)){e.next=5;break}y.a.warn({message:"\u8bf7\u5148\u9009\u62e9\u5934\u50cf"}),e.next=11;break;case 5:return n.setState({loading:!0}),e.next=8,k.f.uploadAvatar(a);case 8:null!==e.sent&&(y.a.success({message:"\u4e0a\u4f20\u5934\u50cf\u6210\u529f"}),setTimeout((function(){window.location.reload()}),1e3)),n.setState({loading:!1});case 11:case"end":return e.stop()}}),e)}))),n.state={avatar:"",loading:!1,file:null},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadAvatar();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.avatar,n=e.loading,r=e.file;return p.a.createElement(b,{onAvatarInputChange:this.onAvatarInputChange,onAvatarClick:this.onAvatarClick,fileInputRef:this.fileInputRef,avatar:a,loading:n,fileChanged:null!==r,onUploadButtonClick:this.onUploadButtonClick,accept:t.ALLOWED_MIME_TYPE.join(",")})}}]),t}(u.PureComponent);O.ALLOWED_MIME_TYPE=["image/jpeg","image/png"];var x=O}}]);
//# sourceMappingURL=30.c572f9de.chunk.js.map