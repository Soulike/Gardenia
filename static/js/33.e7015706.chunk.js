(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[33],{1217:function(t,n,e){"use strict";e.r(n);e(91);var r=e(13),u=e(4),a=e.n(u),i=e(35),o=e(47),c=e(88),s=e(87),f=e(89),m=e(0),d=e.n(m),l=(e(412),e(132)),p=(e(413),e(277)),v=(e(878),e(880)),E=e(976),N=e.n(E),b=e(873);var A=d.a.memo((function(t){var n=t.name,e=t.onNameInputChange,r=t.onSubmit,u=t.submitting;return d.a.createElement("div",{className:N.a.CreateNewGroup},d.a.createElement("h1",{className:N.a.title},"\u521b\u5efa\u65b0\u5c0f\u7ec4"),d.a.createElement("form",{action:"#",className:N.a.form,onSubmit:r},d.a.createElement("label",{className:N.a.label},d.a.createElement("div",{className:N.a.text},"\u5c0f\u7ec4\u540d"),d.a.createElement(p.a,{title:b.c.Group.NAME,trigger:"focus"},d.a.createElement(v.a,{autoFocus:!0,value:n,onChange:e}))),d.a.createElement(l.a,{htmlType:"submit",type:"primary",block:!0,className:N.a.submitButton,loading:u,disabled:u},"\u521b\u5efa\u5c0f\u7ec4")))})),S=e(206),M=e(101),h=e(90),g=e(167),y=function(t){function n(t){var e;return Object(i.a)(this,n),(e=Object(c.a)(this,Object(s.a)(n).call(this,t))).setTitle=function(){document.title="\u521b\u5efa\u5c0f\u7ec4 - ".concat(g.a.NAME)},e.onNameInputChange=function(t){e.setState({name:t.target.value})},e.onSubmit=function(t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),!e.validateFormInput()){n.next=4;break}return n.next=4,a.a.awrap(e.submitForm());case 4:case"end":return n.stop()}}))},e.validateFormInput=function(){var t=e.state.name;return!!b.b.Group.name(t)||(r.a.warn({message:b.a.Group.NAME,description:b.c.Group.NAME}),!1)},e.submitForm=function(){var t,n,u,i;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.state.name,n=e.props.history,e.setState({submitting:!0}),o.next=5,a.a.awrap(S.b.add({name:t}));case 5:u=o.sent,e.setState({submitting:!1}),null!==u&&(i=u.id,r.a.success({message:"\u5c0f\u7ec4\u521b\u5efa\u6210\u529f",description:"\u60a8\u5df2\u81ea\u52a8\u6210\u4e3a\u5c0f\u7ec4\u7ba1\u7406\u5458\uff0c\u9080\u8bf7\u66f4\u591a\u6210\u5458\u8fdb\u884c\u534f\u4f5c\u5427\uff01"}),n.push(h.b.generateGroupRoute({id:i.toString()})));case 8:case"end":return o.stop()}}))},e.state={name:"",submitting:!1},e}return Object(f.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setTitle();case 1:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var t=this.state,n=t.name,e=t.submitting;return d.a.createElement(A,{name:n,submitting:e,onSubmit:this.onSubmit,onNameInputChange:this.onNameInputChange})}}]),n}(m.PureComponent),_=Object(M.f)(y);e.d(n,"default",(function(){return _}))},873:function(t,n,e){"use strict";var r={};e.r(r),e.d(r,"USERNAME",(function(){return h})),e.d(r,"PASSWORD",(function(){return g}));var u={};e.r(u),e.d(u,"NAME",(function(){return y}));var a={};e.r(a),e.d(a,"NICKNAME",(function(){return _})),e.d(a,"EMAIL",(function(){return w}));var i={};e.r(i),e.d(i,"NAME",(function(){return C}));var o={};e.r(o),e.d(o,"username",(function(){return I})),e.d(o,"password",(function(){return R}));var c={};e.r(c),e.d(c,"name",(function(){return x}));var s={};e.r(s),e.d(s,"nickname",(function(){return G})),e.d(s,"email",(function(){return O}));var f={};e.r(f),e.d(f,"name",(function(){return k}));var m={};e.r(m),e.d(m,"Account",(function(){return o})),e.d(m,"Group",(function(){return c})),e.d(m,"Profile",(function(){return s})),e.d(m,"Repository",(function(){return f}));var d={};e.r(d),e.d(d,"USERNAME",(function(){return P})),e.d(d,"PASSWORD",(function(){return j}));var l={};e.r(l),e.d(l,"NAME",(function(){return D}));var p={};e.r(p),e.d(p,"NICKNAME",(function(){return $}));var v={};e.r(v),e.d(v,"NAME",(function(){return F}));var E={};e.r(E),e.d(E,"Account",(function(){return d})),e.d(E,"Group",(function(){return l})),e.d(E,"Profile",(function(){return p})),e.d(E,"Repository",(function(){return v}));var N={};e.r(N),e.d(N,"USERNAME",(function(){return K})),e.d(N,"PASSWORD",(function(){return U}));var b={};e.r(b),e.d(b,"NAME",(function(){return L}));var A={};e.r(A),e.d(A,"NICKNAME",(function(){return T})),e.d(A,"EMAIL",(function(){return W}));var S={};e.r(S),e.d(S,"NAME",(function(){return z}));var M={};e.r(M),e.d(M,"Account",(function(){return N})),e.d(M,"Group",(function(){return b})),e.d(M,"Profile",(function(){return A})),e.d(M,"Repository",(function(){return S}));var h=/^\w{1,20}$/,g=/^\S{6,}$/,y=/^\S{1,20}$/,_=/^\S{1,20}$/,w=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,C=/^\w{1,20}$/;function I(t){return r.USERNAME.test(t)}function R(t){return r.PASSWORD.test(t)}function x(t){return u.NAME.test(t)}function G(t){return a.NICKNAME.test(t)}function O(t){return a.EMAIL.test(t)}function k(t){return i.NAME.test(t)}var P="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",j="6 \u4f4d\u4ee5\u4e0a",D="1~20 \u4f4d",$="1~20 \u4f4d",F="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",K="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",U="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",L="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",T="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",W="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",z="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";e.d(n,"b",(function(){return m})),e.d(n,"a",(function(){return M})),e.d(n,"c",(function(){return E}))},976:function(t,n,e){t.exports={CreateNewGroup:"Style_CreateNewGroup__L6ro3",title:"Style_title__2xmTc",label:"Style_label__1QfMY",submitButton:"Style_submitButton__qmKHf",text:"Style_text__1gEUv"}}}]);
//# sourceMappingURL=33.e7015706.chunk.js.map