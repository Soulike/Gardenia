(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[25],{1009:function(e,t,n){"use strict";var a=n(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},s=n(20),o=function(e,t){return a.createElement(s.a,Object.assign({},e,{ref:t,icon:r}))};o.displayName="LockOutlined";t.a=a.forwardRef(o)},1094:function(e,t,n){e.exports={Login:"Style_Login__2bEsG",registerTip:"Style_registerTip__10XWI",form:"Style_form__1Yzdr",inputWrapper:"Style_inputWrapper__2aFQQ",logo:"Style_logo__3bWtv",button:"Style_button__3L0sa"}},1410:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(4),o=n(14),i=n(15),c=n(39),u=n(38),p=n(1),l=n(0),d=n.n(l),g=n(1094),b=n.n(g),h=n(909),m=n(118),f=n(964),j=n(944),v=n(22),x=n(924),O=n(1009),_=n(954),S=n(3);function w(e){var t=e.username,n=e.password,a=e.onUsernameInputChange,r=e.onPasswordInputChange,s=e.onLoginFormSubmit,o=e.loading;return Object(p.jsx)("main",{className:b.a.Login,children:Object(p.jsxs)("form",{action:"#",className:b.a.form,onSubmit:s,children:[Object(p.jsx)("img",{className:b.a.logo,src:f.a,alt:"web_developer_logo"}),Object(p.jsxs)("div",{className:b.a.registerTip,children:["\u6ca1\u6709\u8d26\u53f7\uff1f",Object(p.jsx)(v.b,{to:S.d[S.b.REGISTER],children:"\u70b9\u6b64\u6ce8\u518c"})]}),Object(p.jsxs)("div",{className:b.a.inputWrapper,children:[Object(p.jsx)(j.a,{children:"\u7528\u6237\u540d"}),Object(p.jsx)(h.a,{type:"text",size:"large",onChange:a,autoFocus:!0,value:t,disabled:o,prefix:Object(p.jsx)(x.a,{})})]}),Object(p.jsxs)("div",{className:b.a.inputWrapper,children:[Object(p.jsx)(j.a,{children:"\u5bc6\u7801"}),Object(p.jsx)(h.a,{type:"password",size:"large",onChange:r,value:n,disabled:o,prefix:Object(p.jsx)(O.a,{})}),Object(p.jsxs)(_.a,{children:["\u5fd8\u8bb0\u5bc6\u7801\uff1f",Object(p.jsx)(v.b,{to:S.d[S.b.CHANGE_PASSWORD],children:"\u70b9\u6b64\u4fee\u6539\u5bc6\u7801"})]})]}),Object(p.jsx)(m.a,{htmlType:"submit",className:b.a.button,size:"large",type:"primary",disabled:o,loading:o,block:!0,children:"\u767b\u5f55"})]})})}var I=d.a.memo(w),L=n(62),k=n(30),y=n(336),N=n(160),C=n(50),T=n(148),P=n(225),F=n.n(P),E=n(167).b.Account,z=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setTitle=function(){document.title="\u767b\u5f55 - ".concat(S.a)},a.checkSession=Object(s.a)(r.a.mark((function e(){var t,n,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.setLoggedOut,s=t.setLoggedIn,e.next=3,k.a.checkSession();case 3:if(null===(o=e.sent)){e.next=15;break}if(!o.isValid){e.next=11;break}return e.next=9,s();case 9:e.next=13;break;case 11:return e.next=13,n();case 13:e.next=17;break;case 15:return e.next=17,n();case 17:case"end":return e.stop()}}),e)}))),a.onUsernameInputChange=function(e){a.setState({username:e.target.value})},a.onPasswordInputChange=function(e){a.setState({password:e.target.value})},a.onLoginFormSubmit=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.loginFormInputCheck()){e.next=4;break}return e.next=4,a.submitLoginForm();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.loginFormInputCheck=function(){var e=a.state,t=e.username,n=e.password;return!(!E.username(t)||!E.password(n))||(y.a.warn({message:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"}),!1)},a.submitLoginForm=Object(s.a)(r.a.mark((function e(){var t,n,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.username,s=t.password,o=T.a.calculateHash(n,s),a.setState({loading:!0}),e.next=5,k.a.login(new T.a(n,o));case 5:if(!e.sent){e.next=9;break}return e.next=9,a.onLoginSuccess();case 9:a.setState({loading:!1});case 10:case"end":return e.stop()}}),e)}))),a.onLoginSuccess=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,a.props.setLoggedIn)(),y.a.success({message:"\u767b\u5f55\u6210\u529f"}),a.returnToPreviousPage();case 4:case"end":return e.stop()}}),e)}))),a.returnToPreviousPage=function(){var e=a.props.location.search,t=F.a.parse(e.slice(1)).prev;return"string"===typeof t&&t!==S.d[S.b.LOGIN]&&t!==S.d[S.b.REGISTER]&&t!==S.d[S.b.NOT_FOUND]&&t!==S.d[S.b.CHANGE_PASSWORD]?a.props.history.push(t):a.props.history.push(S.d[S.b.INDEX])},a.state={username:"",password:"",loading:!1},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),e.next=3,this.checkSession();case 3:if(!this.props.isLoggedIn){e.next=6;break}return e.abrupt("return",this.props.history.push(S.d[S.b.INDEX]));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,a=e.loading;return Object(p.jsx)(I,{username:t,password:n,loading:a,onLoginFormSubmit:this.onLoginFormSubmit,onPasswordInputChange:this.onPasswordInputChange,onUsernameInputChange:this.onUsernameInputChange})}}]),n}(l.PureComponent),R={setLoggedIn:N.setLoggedInAction,setLoggedOut:N.setLoggedOutAction},W=Object(L.j)(Object(C.b)((function(e){return{isLoggedIn:e.Root.isLoggedIn}}),R)(z));t.default=W},944:function(e,t,n){"use strict";var a=n(1),r=n(0),s=n.n(r),o=n(945),i=n.n(o);function c(e){var t=e.children,n=e.required;return Object(a.jsxs)("div",{className:i.a.InputLabel,children:[t,Object(a.jsx)("span",{className:i.a.requiredSign,children:n?" *":""})]})}t.a=s.a.memo(c)},945:function(e,t,n){e.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},951:function(e,t,n){e.exports={InputTip:"Style_InputTip__KsPY_"}},954:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1),r=n(0),s=n.n(r),o=n(951),i=n.n(o);function c(e){var t=e.children;return Object(a.jsx)("div",{className:i.a.InputTip,children:t})}var u=s.a.memo(c)},964:function(e,t,n){"use strict";t.a=n.p+"static/media/developing_code.ac8fbd80.svg"}}]);
//# sourceMappingURL=25.e02118df.chunk.js.map