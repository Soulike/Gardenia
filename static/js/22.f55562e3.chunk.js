(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[22],{669:function(a,t,e){a.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},670:function(a,t,e){"use strict";var n=e(0),r=e.n(n),l=e(669),i=e.n(l);var c=r.a.memo((function(a){var t=a.children;return r.a.createElement("h2",{className:i.a.SettingsTitle},t)}));e.d(t,"a",(function(){return c}))},675:function(a,t,e){a.exports={DefaultAvatar:"Style_DefaultAvatar__1F6EL",img:"Style_img__2bePj"}},677:function(a,t,e){"use strict";var n=e(0),r=e.n(n),l=e(675),i=e.n(l),c=e(228),u=e.n(c);var o=r.a.memo((function(){return r.a.createElement("div",{className:i.a.DefaultAvatar},r.a.createElement("img",{src:u.a,alt:"default_avatar",className:i.a.img}))}));e.d(t,"a",(function(){return o}))},772:function(a,t,e){a.exports={Avatar:"Style_Avatar__2TmQb",body:"Style_body__eN9Pm",avatarWrapper:"Style_avatarWrapper__3wqvg",avatar:"Style_avatar__hT7wZ",fileInput:"Style_fileInput__1gSjB",buttonWrapper:"Style_buttonWrapper__1rFvY"}},823:function(a,t,e){"use strict";e.r(t);e(61);var n=e(26),r=e(23),l=e.n(r),i=e(39),c=e(8),u=e(13),o=e(44),s=e(43),v=e(45),f=e(0),p=e.n(f),m=(e(60),e(16)),d=(e(94),e(46)),g=(e(224),e(105)),h=e(772),_=e.n(h),b=e(670),k=e(677);var S=p.a.memo((function(a){var t=a.avatar,e=a.loading,n=a.fileInputRef,r=a.onAvatarClick,l=a.onAvatarInputChange,i=a.fileChanged,c=a.onUploadButtonClick;return p.a.createElement("div",{className:_.a.Avatar},p.a.createElement(b.a,null,"\u5934\u50cf"),p.a.createElement("div",{className:_.a.body},p.a.createElement(d.a,{spinning:e},p.a.createElement(g.a,{title:"\u70b9\u51fb\u66f4\u6362\u5934\u50cf"},p.a.createElement("div",{className:_.a.avatarWrapper,onClick:r},t?p.a.createElement("img",{src:t,alt:"avatar",className:_.a.avatar}):p.a.createElement(k.a,null)))),p.a.createElement("input",{type:"file",accept:"image/*",multiple:!1,className:_.a.fileInput,ref:n,onChange:l}),p.a.createElement("div",{className:_.a.buttonWrapper},p.a.createElement(m.a,{type:"primary",block:!0,disabled:e||!i,loading:e,onClick:c},"\u4e0a\u4f20"))))})),y=e(27),C=function(a){function t(a){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(s.a)(t).call(this,a))).fileInputRef=p.a.createRef(),e.loadAvatar=Object(i.a)(l.a.mark((function a(){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.e.get();case 2:null!==(t=a.sent)&&(n=t.avatar,e.setState({avatar:n}));case 4:case"end":return a.stop()}}),a)}))),e.onAvatarClick=function(){var a=e.fileInputRef.current;null!==a&&a.click()},e.onAvatarInputChange=function(a){var t=a.target.files;if(null!==t&&t.length>0){var n=t[0];e.setState({file:n,avatar:URL.createObjectURL(n)})}},e.onUploadButtonClick=Object(i.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(null!==(t=e.state.file)){a.next=5;break}n.a.warn({message:"\u8bf7\u5148\u9009\u62e9\u5934\u50cf"}),a.next=11;break;case 5:return e.setState({loading:!0}),a.next=8,y.e.uploadAvatar(t);case 8:null!==a.sent&&(n.a.success({message:"\u4e0a\u4f20\u5934\u50cf\u6210\u529f"}),setTimeout((function(){window.location.reload()}),1e3)),e.setState({loading:!1});case 11:case"end":return a.stop()}}),a)}))),e.state={avatar:"",loading:!1,file:null},e}return Object(v.a)(t,a),Object(u.a)(t,[{key:"componentDidMount",value:function(){var a=Object(i.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return this.setState({loading:!0}),a.next=3,this.loadAvatar();case 3:this.setState({loading:!1});case 4:case"end":return a.stop()}}),a,this)})));return function(){return a.apply(this,arguments)}}()},{key:"render",value:function(){var a=this.state,t=a.avatar,e=a.loading,n=a.file;return p.a.createElement(S,{onAvatarInputChange:this.onAvatarInputChange,onAvatarClick:this.onAvatarClick,fileInputRef:this.fileInputRef,avatar:t,loading:e,fileChanged:null!==n,onUploadButtonClick:this.onUploadButtonClick})}}]),t}(f.PureComponent);e.d(t,"default",(function(){return C}))}}]);
//# sourceMappingURL=22.f55562e3.chunk.js.map