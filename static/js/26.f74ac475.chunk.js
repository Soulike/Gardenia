(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[26],{1021:function(e,t,n){e.exports={Login:"Style_Login__2bEsG",form:"Style_form__1Yzdr",logo:"Style_logo__3bWtv",button:"Style_button__3L0sa"}},1265:function(e,t,n){"use strict";n.r(t);n(101);var a=n(14),s=n(4),o=n.n(s),r=n(52),i=n(70),u=n(273),c=n(272),p=n(274),g=n(0),l=n.n(g),m=(n(417),n(127)),h=(n(950),n(951)),f=(n(418),n(23)),d=n(1021),b=n.n(d),v=n(981),w=n.n(v);var y=l.a.memo((function(e){var t=e.username,n=e.password,a=e.onUsernameInputChange,s=e.onPasswordInputChange,o=e.onLoginFormSubmit;return l.a.createElement("main",{className:b.a.Login},l.a.createElement("form",{action:"#",className:b.a.form,onSubmit:o},l.a.createElement("img",{className:b.a.logo,src:w.a,alt:"web_developer_logo"}),l.a.createElement(h.a,{type:"text",size:"large",onChange:a,autoFocus:!0,value:t,placeholder:"\u7528\u6237\u540d",prefix:l.a.createElement(f.a,{type:"user"})}),l.a.createElement(h.a,{type:"password",size:"large",onChange:s,value:n,placeholder:"\u5bc6\u7801",prefix:l.a.createElement(f.a,{type:"lock"})}),l.a.createElement(m.a,{htmlType:"submit",className:b.a.button,size:"large",type:"primary",block:!0},"\u767b\u5f55")))})),I=n(115),_=n(94),L=n(162),E=n(155),x=n(195),C=n(275),S=n(280),k=n.n(S),P=n(276),F=I.a.PAGE_ID,O=I.a.PAGE_ID_TO_ROUTE,j=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).setTitle=function(){document.title="\u767b\u5f55 - ".concat(P.a.NAME)},n.onUsernameInputChange=function(e){n.setState({username:e.target.value})},n.onPasswordInputChange=function(e){n.setState({password:e.target.value})},n.onLoginFormSubmit=function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!n.loginFormInputCheck()){t.next=4;break}return t.next=4,o.a.awrap(n.submitLoginForm());case 4:case"end":return t.stop()}}))},n.loginFormInputCheck=function(){var e=n.state,t=e.username,s=e.password;return 0===t.length?(a.a.warn({message:"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"}),!1):0!==s.length||(a.a.warn({message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"}),!1)},n.submitLoginForm=function(){var e,t,a,s;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.state,t=e.username,a=e.password,s=C.a.calculateHash(t,a),r.next=4,o.a.awrap(L.a.login(new C.a(t,s)));case 4:if(!r.sent){r.next=8;break}return r.next=8,o.a.awrap(n.onLoginSuccess());case 8:case"end":return r.stop()}}))},n.onLoginSuccess=function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:(0,n.props.setLoggedIn)(),a.a.success({message:"\u767b\u5f55\u6210\u529f"}),n.returnToPreviousPage();case 4:case"end":return e.stop()}}))},n.returnToPreviousPage=function(){var e=n.props.location.search,t=k.a.parse(e.slice(1)).prev;"string"===typeof t?n.props.history.push(t):n.props.history.push(O[F.INDEX])},n.state={username:"",password:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setTitle(),this.props.isLoggedIn&&this.props.history.push(O[F.INDEX])}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return l.a.createElement(y,{username:t,password:n,onLoginFormSubmit:this.onLoginFormSubmit,onPasswordInputChange:this.onPasswordInputChange,onUsernameInputChange:this.onUsernameInputChange})}}]),t}(g.PureComponent),N={setLoggedIn:E.setLoggedInAction},T=Object(_.f)(Object(x.b)((function(e){return{isLoggedIn:e.Root.isLoggedIn}}),N)(j));t.default=T},981:function(e,t,n){e.exports=n.p+"static/media/developing_code.240e8e0f.svg"}}]);
//# sourceMappingURL=26.f74ac475.chunk.js.map