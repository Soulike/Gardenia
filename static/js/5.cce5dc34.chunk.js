(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[5],{1006:function(e,n,t){e.exports={Profile:"Style_Profile__1P2aC",item:"Style_item__1F9QO",form:"Style_form__1PS4O",inputWrapper:"Style_inputWrapper__fOuXC",saveButtonWrapper:"Style_saveButtonWrapper__2AiWe",emailForm:"Style_emailForm__7P4eQ"}},1231:function(e,n,t){"use strict";t.r(n);t(78);var r=t(9),a=t(4),i=t.n(a),u=t(36),c=t(47),o=t(89),s=t(88),l=t(90),m=t(0),f=t.n(m),d=(t(412),t(132)),p=(t(413),t(277)),v=(t(879),t(881)),E=t(1006),S=t.n(E),N=t(910),g=t(890),A=t(874);var b=f.a.memo((function(e){var n=e.nickname,t=e.email,r=e.onEmailInputChange,a=e.onNicknameInputChange,i=e.onEmailSubmit,u=e.onNicknameSubmit,c=e.loading;return f.a.createElement("div",{className:S.a.Profile},f.a.createElement(N.a,null,"\u4e2a\u4eba\u8d44\u6599"),f.a.createElement("div",{className:S.a.item},f.a.createElement(g.a,null,"\u6635\u79f0"),f.a.createElement("div",{className:S.a.form},f.a.createElement("div",{className:S.a.inputWrapper},f.a.createElement(p.a,{title:A.c.Profile.NICKNAME,trigger:"focus"},f.a.createElement(v.a,{onChange:a,value:n,disabled:c}))),f.a.createElement("div",{className:S.a.saveButtonWrapper},f.a.createElement(d.a,{type:"primary",onClick:u,loading:c,disabled:c},"\u4fdd\u5b58")))),f.a.createElement("div",{className:S.a.item},f.a.createElement(g.a,null,"\u90ae\u7bb1"),f.a.createElement("div",{className:"".concat(S.a.form," ").concat(S.a.emailForm)},f.a.createElement("div",{className:"".concat(S.a.inputWrapper," ").concat(S.a.emailInputWrapper)},f.a.createElement(v.a,{type:"email",onChange:r,value:t,disabled:c})),f.a.createElement("div",{className:S.a.saveButtonWrapper},f.a.createElement(d.a,{type:"primary",onClick:i,loading:c,disabled:c},"\u4fdd\u5b58")))))})),k=t(206),_=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).loadProfile=function(){var e,n,r;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t.setState({loading:!0}),a.next=3,i.a.awrap(k.d.get());case 3:null!==(e=a.sent)&&(n=e.nickname,r=e.email,t.setState({nickname:n,email:r,loading:!1}));case 5:case"end":return a.stop()}}))},t.onNicknameInputChange=function(e){t.setState({nickname:e.target.value})},t.onEmailInputChange=function(e){t.setState({email:e.target.value})},t.onNicknameSubmit=function(){var e;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.state.nickname,!A.b.Profile.nickname(e)){n.next=10;break}return t.setState({loading:!0}),n.next=5,i.a.awrap(k.d.set({nickname:e}));case 5:null!==n.sent&&r.a.success({message:"\u6635\u79f0\u4fee\u6539\u6210\u529f"}),t.setState({loading:!1}),n.next=11;break;case 10:r.a.warn({message:A.a.Profile.NICKNAME,description:A.c.Profile.NICKNAME});case 11:case"end":return n.stop()}}))},t.onEmailSubmit=function(){var e;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.state.email,!A.b.Profile.email(e)){n.next=10;break}return t.setState({loading:!0}),n.next=5,i.a.awrap(k.d.set({email:e}));case 5:null!==n.sent&&r.a.success({message:"\u90ae\u7bb1\u4fee\u6539\u6210\u529f"}),t.setState({loading:!1}),n.next=11;break;case 10:r.a.warn({message:A.a.Profile.EMAIL});case 11:case"end":return n.stop()}}))},t.state={nickname:"",email:"",loading:!1},t}return Object(l.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(this.loadProfile());case 2:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,n=e.nickname,t=e.email,r=e.loading;return f.a.createElement(b,{nickname:n,email:t,loading:r,onEmailInputChange:this.onEmailInputChange,onEmailSubmit:this.onEmailSubmit,onNicknameInputChange:this.onNicknameInputChange,onNicknameSubmit:this.onNicknameSubmit})}}]),n}(m.PureComponent);t.d(n,"default",(function(){return _}))},873:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(880),u=t.n(i);n.a=a.a.memo((function(e){var n=e.children,t=e.required;return a.a.createElement("div",{className:u.a.InputLabel},n,a.a.createElement("span",{className:u.a.requiredSign},t?" *":""))}))},874:function(e,n,t){"use strict";var r={};t.r(r),t.d(r,"USERNAME",(function(){return C})),t.d(r,"PASSWORD",(function(){return I}));var a={};t.r(a),t.d(a,"NAME",(function(){return M}));var i={};t.r(i),t.d(i,"NICKNAME",(function(){return y})),t.d(i,"EMAIL",(function(){return P}));var u={};t.r(u),t.d(u,"NAME",(function(){return w}));var c={};t.r(c),t.d(c,"CODE",(function(){return x}));var o={};t.r(o),t.d(o,"username",(function(){return O})),t.d(o,"password",(function(){return W}));var s={};t.r(s),t.d(s,"name",(function(){return R}));var l={};t.r(l),t.d(l,"nickname",(function(){return D})),t.d(l,"email",(function(){return K}));var m={};t.r(m),t.d(m,"name",(function(){return L}));var f={};t.r(f),t.d(f,"code",(function(){return $}));var d={};t.r(d),t.d(d,"Account",(function(){return o})),t.d(d,"Group",(function(){return s})),t.d(d,"Profile",(function(){return l})),t.d(d,"Repository",(function(){return m})),t.d(d,"Collaborator",(function(){return f}));var p={};t.r(p),t.d(p,"USERNAME",(function(){return j})),t.d(p,"PASSWORD",(function(){return q}));var v={};t.r(v),t.d(v,"NAME",(function(){return B}));var E={};t.r(E),t.d(E,"NICKNAME",(function(){return F}));var S={};t.r(S),t.d(S,"NAME",(function(){return U}));var N={};t.r(N),t.d(N,"Account",(function(){return p})),t.d(N,"Group",(function(){return v})),t.d(N,"Profile",(function(){return E})),t.d(N,"Repository",(function(){return S}));var g={};t.r(g),t.d(g,"USERNAME",(function(){return z})),t.d(g,"PASSWORD",(function(){return G}));var A={};t.r(A),t.d(A,"NAME",(function(){return J}));var b={};t.r(b),t.d(b,"NICKNAME",(function(){return T})),t.d(b,"EMAIL",(function(){return Q}));var k={};t.r(k),t.d(k,"NAME",(function(){return Z}));var _={};t.r(_),t.d(_,"CODE",(function(){return X}));var h={};t.r(h),t.d(h,"Account",(function(){return g})),t.d(h,"Group",(function(){return A})),t.d(h,"Profile",(function(){return b})),t.d(h,"Repository",(function(){return k})),t.d(h,"Collaborator",(function(){return _}));var C=/^\w{1,20}$/,I=/^\S{6,}$/,M=/^\S{1,20}$/,y=/^\S{1,20}$/,P=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,w=/^\w{1,20}$/,x=/^\w+_\w+_\d+$/;function O(e){return r.USERNAME.test(e)}function W(e){return r.PASSWORD.test(e)}function R(e){return a.NAME.test(e)}function D(e){return i.NICKNAME.test(e)}function K(e){return i.EMAIL.test(e)}function L(e){return u.NAME.test(e)}function $(e){return c.CODE.test(e)}var j="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",q="6 \u4f4d\u4ee5\u4e0a",B="1~20 \u4f4d",F="1~20 \u4f4d",U="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",z="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",G="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",J="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",T="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Q="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",Z="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",X="\u9080\u8bf7\u7801\u65e0\u6548\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return h})),t.d(n,"c",(function(){return N}))},880:function(e,n,t){e.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},890:function(e,n,t){"use strict";var r=t(873);t.d(n,"a",(function(){return r.a}))},906:function(e,n,t){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},910:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(906),u=t.n(i);var c=a.a.memo((function(e){var n=e.children;return a.a.createElement("h2",{className:u.a.SettingsTitle},n)}));t.d(n,"a",(function(){return c}))}}]);
//# sourceMappingURL=5.cce5dc34.chunk.js.map