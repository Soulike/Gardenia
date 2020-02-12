(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[26],{1228:function(t,n,e){"use strict";e.r(n);e(79);var r=e(9),u=e(4),a=e.n(u),i=e(7),o=e(33),c=e(38),s=e(90),f=e(89),d=e(91),l=e(0),m=e.n(l),p=(e(413),e(133)),v=(e(414),e(277)),b=(e(879),e(881)),E=e(978),N=e.n(E),A=e(874),S=e(928),g=e(896);var h=m.a.memo((function(t){var n=t.name,e=t.onNameInputChange,r=t.onSubmit,u=t.submitting;return m.a.createElement("div",{className:N.a.CreateNewGroup},m.a.createElement(S.a,null,"\u521b\u5efa\u65b0\u5c0f\u7ec4"),m.a.createElement("form",{action:"#",className:N.a.form,onSubmit:r},m.a.createElement("label",{className:N.a.label},m.a.createElement(g.a,{required:!0},"\u5c0f\u7ec4\u540d"),m.a.createElement(v.a,{title:A.c.Group.NAME,trigger:"focus"},m.a.createElement(b.a,{autoFocus:!0,value:n,onChange:e}))),m.a.createElement(p.a,{htmlType:"submit",type:"primary",block:!0,className:N.a.submitButton,loading:u,disabled:u},"\u521b\u5efa\u5c0f\u7ec4")))})),M=e(207),_=e(102),w=e(92),C=e(168),y=function(t){function n(t){var e;return Object(o.a)(this,n),(e=Object(s.a)(this,Object(f.a)(n).call(this,t))).setTitle=function(){document.title="\u521b\u5efa\u5c0f\u7ec4 - ".concat(C.a.NAME)},e.onNameInputChange=function(t){e.setState({name:t.target.value})},e.onSubmit=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!e.validateFormInput()){t.next=4;break}return t.next=4,e.submitForm();case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),e.validateFormInput=function(){var t=e.state.name;return!!A.b.Group.name(t)||(r.a.warn({message:A.a.Group.NAME,description:A.c.Group.NAME}),!1)},e.submitForm=Object(i.a)(a.a.mark((function t(){var n,u,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.name,u=e.props.history,e.setState({submitting:!0}),t.next=5,M.c.add({name:n});case 5:i=t.sent,e.setState({submitting:!1}),null!==i&&(o=i.id,r.a.success({message:"\u5c0f\u7ec4\u521b\u5efa\u6210\u529f",description:"\u60a8\u5df2\u81ea\u52a8\u6210\u4e3a\u5c0f\u7ec4\u7ba1\u7406\u5458\uff0c\u9080\u8bf7\u66f4\u591a\u6210\u5458\u8fdb\u884c\u534f\u4f5c\u5427\uff01"}),u.push(w.b.generateGroupRoute({id:o.toString()})));case 8:case"end":return t.stop()}}),t)}))),e.state={name:"",submitting:!1},e}return Object(d.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setTitle();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,n=t.name,e=t.submitting;return m.a.createElement(h,{name:n,submitting:e,onSubmit:this.onSubmit,onNameInputChange:this.onNameInputChange})}}]),n}(l.PureComponent),I=Object(_.f)(y);e.d(n,"default",(function(){return I}))},873:function(t,n,e){"use strict";var r=e(0),u=e.n(r),a=e(880),i=e.n(a);n.a=u.a.memo((function(t){var n=t.children,e=t.required;return u.a.createElement("div",{className:i.a.InputLabel},n,u.a.createElement("span",{className:i.a.requiredSign},e?" *":""))}))},874:function(t,n,e){"use strict";var r={};e.r(r),e.d(r,"USERNAME",(function(){return w})),e.d(r,"PASSWORD",(function(){return C}));var u={};e.r(u),e.d(u,"NAME",(function(){return y}));var a={};e.r(a),e.d(a,"NICKNAME",(function(){return I})),e.d(a,"EMAIL",(function(){return O}));var i={};e.r(i),e.d(i,"NAME",(function(){return R}));var o={};e.r(o),e.d(o,"CODE",(function(){return k}));var c={};e.r(c),e.d(c,"username",(function(){return G})),e.d(c,"password",(function(){return P}));var s={};e.r(s),e.d(s,"name",(function(){return j}));var f={};e.r(f),e.d(f,"nickname",(function(){return x})),e.d(f,"email",(function(){return D}));var d={};e.r(d),e.d(d,"name",(function(){return L}));var l={};e.r(l),e.d(l,"code",(function(){return $}));var m={};e.r(m),e.d(m,"Account",(function(){return c})),e.d(m,"Group",(function(){return s})),e.d(m,"Profile",(function(){return f})),e.d(m,"Repository",(function(){return d})),e.d(m,"Collaborator",(function(){return l}));var p={};e.r(p),e.d(p,"USERNAME",(function(){return q})),e.d(p,"PASSWORD",(function(){return K}));var v={};e.r(v),e.d(v,"NAME",(function(){return T}));var b={};e.r(b),e.d(b,"NICKNAME",(function(){return F}));var E={};e.r(E),e.d(E,"NAME",(function(){return U}));var N={};e.r(N),e.d(N,"Account",(function(){return p})),e.d(N,"Group",(function(){return v})),e.d(N,"Profile",(function(){return b})),e.d(N,"Repository",(function(){return E}));var A={};e.r(A),e.d(A,"USERNAME",(function(){return W})),e.d(A,"PASSWORD",(function(){return z}));var S={};e.r(S),e.d(S,"NAME",(function(){return B}));var g={};e.r(g),e.d(g,"NICKNAME",(function(){return J})),e.d(g,"EMAIL",(function(){return Y}));var h={};e.r(h),e.d(h,"NAME",(function(){return Z}));var M={};e.r(M),e.d(M,"CODE",(function(){return H}));var _={};e.r(_),e.d(_,"Account",(function(){return A})),e.d(_,"Group",(function(){return S})),e.d(_,"Profile",(function(){return g})),e.d(_,"Repository",(function(){return h})),e.d(_,"Collaborator",(function(){return M}));var w=/^\w{1,20}$/,C=/^\S{6,}$/,y=/^\S{1,20}$/,I=/^\S{1,20}$/,O=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,R=/^\w{1,20}$/,k=/^\w+_\w+_\d+$/;function G(t){return r.USERNAME.test(t)}function P(t){return r.PASSWORD.test(t)}function j(t){return u.NAME.test(t)}function x(t){return a.NICKNAME.test(t)}function D(t){return a.EMAIL.test(t)}function L(t){return i.NAME.test(t)}function $(t){return o.CODE.test(t)}var q="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",K="6 \u4f4d\u4ee5\u4e0a",T="1~20 \u4f4d",F="1~20 \u4f4d",U="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",W="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",z="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",B="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",J="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Y="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",Z="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",H="\u9080\u8bf7\u7801\u65e0\u6548\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";e.d(n,"b",(function(){return m})),e.d(n,"a",(function(){return _})),e.d(n,"c",(function(){return N}))},880:function(t,n,e){t.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},896:function(t,n,e){"use strict";var r=e(873);e.d(n,"a",(function(){return r.a}))},921:function(t,n,e){t.exports={PageTitle:"Style_PageTitle__3R_vY"}},928:function(t,n,e){"use strict";var r=e(0),u=e.n(r),a=e(921),i=e.n(a);var o=function(t){var n=t.children;return u.a.createElement("h1",{className:i.a.PageTitle},n)};e.d(n,"a",(function(){return o}))},978:function(t,n,e){t.exports={CreateNewGroup:"Style_CreateNewGroup__L6ro3",label:"Style_label__1QfMY",submitButton:"Style_submitButton__qmKHf"}}}]);
//# sourceMappingURL=26.8a6ffe25.chunk.js.map