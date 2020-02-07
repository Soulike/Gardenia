(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[29],{1226:function(n,e,t){"use strict";t.r(e);t(78);var r=t(9),a=t(4),u=t.n(a),o=t(36),i=t(47),s=t(89),c=t(88),p=t(90),f=t(0),d=t.n(f),l=(t(412),t(132)),m=(t(879),t(881)),g=(t(275),t(19)),E=t(975),v=t.n(E),_=t(933),h=t.n(_),I=t(873),S=t(35),A=t(91),b=A.a.PAGE_ID,N=A.a.PAGE_ID_TO_ROUTE;var w=d.a.memo((function(n){var e=n.username,t=n.password,r=n.onUsernameInputChange,a=n.onPasswordInputChange,u=n.onLoginFormSubmit;return d.a.createElement("main",{className:v.a.Login},d.a.createElement("form",{action:"#",className:v.a.form,onSubmit:u},d.a.createElement("img",{className:v.a.logo,src:h.a,alt:"web_developer_logo"}),d.a.createElement("div",{className:v.a.registerTip},"\u6ca1\u6709\u8d26\u53f7\uff1f",d.a.createElement(S.b,{to:N[b.REGISTER]},"\u70b9\u6b64\u6ce8\u518c")),d.a.createElement("div",{className:v.a.inputWrapper},d.a.createElement(I.a,null,"\u7528\u6237\u540d"),d.a.createElement(m.a,{type:"text",size:"large",onChange:r,autoFocus:!0,value:e,prefix:d.a.createElement(g.a,{type:"user"})})),d.a.createElement("div",{className:v.a.inputWrapper},d.a.createElement(I.a,null,"\u5bc6\u7801"),d.a.createElement(m.a,{type:"password",size:"large",onChange:a,value:t,prefix:d.a.createElement(g.a,{type:"lock"})})),d.a.createElement(l.a,{htmlType:"submit",className:v.a.button,size:"large",type:"primary",block:!0},"\u767b\u5f55")))})),y=t(101),L=t(206),C=t(128),M=t(100),O=t(277),P=t(281),R=t.n(P),D=t(167),T=t(874),x=A.a.PAGE_ID,k=A.a.PAGE_ID_TO_ROUTE,F=T.b.Account,G=function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(c.a)(e).call(this,n))).setTitle=function(){document.title="\u767b\u5f55 - ".concat(D.a.NAME)},t.onUsernameInputChange=function(n){t.setState({username:n.target.value})},t.onPasswordInputChange=function(n){t.setState({password:n.target.value})},t.onLoginFormSubmit=function(n){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!t.loginFormInputCheck()){e.next=4;break}return e.next=4,u.a.awrap(t.submitLoginForm());case 4:case"end":return e.stop()}}))},t.loginFormInputCheck=function(){var n=t.state,e=n.username,a=n.password;return!(!F.username(e)||!F.password(a))||(r.a.warn({message:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"}),!1)},t.submitLoginForm=function(){var n,e,r,a;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.state,e=n.username,r=n.password,a=O.a.calculateHash(e,r),o.next=4,u.a.awrap(L.a.login(new O.a(e,a)));case 4:if(!o.sent){o.next=8;break}return o.next=8,u.a.awrap(t.onLoginSuccess());case 8:case"end":return o.stop()}}))},t.onLoginSuccess=function(){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:(0,t.props.setLoggedIn)(),r.a.success({message:"\u767b\u5f55\u6210\u529f"}),t.returnToPreviousPage();case 4:case"end":return n.stop()}}))},t.returnToPreviousPage=function(){var n=t.props.location.search,e=R.a.parse(n.slice(1)).prev;"string"===typeof e&&e!==k[x.LOGIN]&&e!==k[x.REGISTER]&&e!==k[x.NOT_FOUND]?t.props.history.push(e):t.props.history.push(k[x.INDEX])},t.state={username:"",password:""},t}return Object(p.a)(e,n),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.setTitle(),this.props.isLoggedIn&&this.props.history.push(k[x.INDEX])}},{key:"render",value:function(){var n=this.state,e=n.username,t=n.password;return d.a.createElement(w,{username:e,password:t,onLoginFormSubmit:this.onLoginFormSubmit,onPasswordInputChange:this.onPasswordInputChange,onUsernameInputChange:this.onUsernameInputChange})}}]),e}(f.PureComponent),U={setLoggedIn:C.setLoggedInAction},W=Object(y.f)(Object(M.b)((function(n){return{isLoggedIn:n.Root.isLoggedIn}}),U)(G));e.default=W},873:function(n,e,t){"use strict";var r=t(0),a=t.n(r),u=t(880),o=t.n(u);e.a=a.a.memo((function(n){var e=n.children,t=n.required;return a.a.createElement("div",{className:o.a.InputLabel},e,a.a.createElement("span",{className:o.a.requiredSign},t?" *":""))}))},874:function(n,e,t){"use strict";var r={};t.r(r),t.d(r,"USERNAME",(function(){return w})),t.d(r,"PASSWORD",(function(){return y}));var a={};t.r(a),t.d(a,"NAME",(function(){return L}));var u={};t.r(u),t.d(u,"NICKNAME",(function(){return C})),t.d(u,"EMAIL",(function(){return M}));var o={};t.r(o),t.d(o,"NAME",(function(){return O}));var i={};t.r(i),t.d(i,"CODE",(function(){return P}));var s={};t.r(s),t.d(s,"username",(function(){return R})),t.d(s,"password",(function(){return D}));var c={};t.r(c),t.d(c,"name",(function(){return T}));var p={};t.r(p),t.d(p,"nickname",(function(){return x})),t.d(p,"email",(function(){return k}));var f={};t.r(f),t.d(f,"name",(function(){return F}));var d={};t.r(d),t.d(d,"code",(function(){return G}));var l={};t.r(l),t.d(l,"Account",(function(){return s})),t.d(l,"Group",(function(){return c})),t.d(l,"Profile",(function(){return p})),t.d(l,"Repository",(function(){return f})),t.d(l,"Collaborator",(function(){return d}));var m={};t.r(m),t.d(m,"USERNAME",(function(){return U})),t.d(m,"PASSWORD",(function(){return W}));var g={};t.r(g),t.d(g,"NAME",(function(){return j}));var E={};t.r(E),t.d(E,"NICKNAME",(function(){return z}));var v={};t.r(v),t.d(v,"NAME",(function(){return $}));var _={};t.r(_),t.d(_,"Account",(function(){return m})),t.d(_,"Group",(function(){return g})),t.d(_,"Profile",(function(){return E})),t.d(_,"Repository",(function(){return v}));var h={};t.r(h),t.d(h,"USERNAME",(function(){return K})),t.d(h,"PASSWORD",(function(){return q}));var I={};t.r(I),t.d(I,"NAME",(function(){return J}));var S={};t.r(S),t.d(S,"NICKNAME",(function(){return X})),t.d(S,"EMAIL",(function(){return Q}));var A={};t.r(A),t.d(A,"NAME",(function(){return Z}));var b={};t.r(b),t.d(b,"CODE",(function(){return H}));var N={};t.r(N),t.d(N,"Account",(function(){return h})),t.d(N,"Group",(function(){return I})),t.d(N,"Profile",(function(){return S})),t.d(N,"Repository",(function(){return A})),t.d(N,"Collaborator",(function(){return b}));var w=/^\w{1,20}$/,y=/^\S{6,}$/,L=/^\S{1,20}$/,C=/^\S{1,20}$/,M=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,O=/^\w{1,20}$/,P=/^\w+_\w+_\d+$/;function R(n){return r.USERNAME.test(n)}function D(n){return r.PASSWORD.test(n)}function T(n){return a.NAME.test(n)}function x(n){return u.NICKNAME.test(n)}function k(n){return u.EMAIL.test(n)}function F(n){return o.NAME.test(n)}function G(n){return i.CODE.test(n)}var U="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",W="6 \u4f4d\u4ee5\u4e0a",j="1~20 \u4f4d",z="1~20 \u4f4d",$="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",K="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",q="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",J="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",X="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Q="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",Z="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",H="\u9080\u8bf7\u7801\u65e0\u6548\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";t.d(e,"b",(function(){return l})),t.d(e,"a",(function(){return N})),t.d(e,"c",(function(){return _}))},880:function(n,e,t){n.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},933:function(n,e,t){n.exports=t.p+"static/media/developing_code.240e8e0f.svg"},975:function(n,e,t){n.exports={Login:"Style_Login__2bEsG",registerTip:"Style_registerTip__10XWI",form:"Style_form__1Yzdr",inputWrapper:"Style_inputWrapper__2aFQQ",logo:"Style_logo__3bWtv",button:"Style_button__3L0sa"}}}]);
//# sourceMappingURL=29.3d8dbe43.chunk.js.map