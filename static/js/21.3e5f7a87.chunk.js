(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[21],{1227:function(n,t,r){"use strict";r.r(t);var e=r(4),u=r.n(e),a=(r(78),r(9)),o=r(36),i=r(47),c=r(89),d=r(88),l=r(90),s=r(0),f=r.n(s),p=(r(412),r(132)),v=(r(879),r(881)),E=r(985),m=r.n(E),A=r(923),S=r(890),b=r(922);var C=f.a.memo((function(n){var t=n.code,r=n.onCodeInputChange,e=n.onSubmitButtonClick,u=n.loading;return f.a.createElement("div",{className:m.a.AddCollaboration},f.a.createElement(A.a,null,"\u6210\u4e3a\u4ed3\u5e93\u5408\u4f5c\u8005"),f.a.createElement("div",{className:m.a.inputWrapper},f.a.createElement(S.a,{required:!0},"\u9080\u8bf7\u7801"),f.a.createElement(v.a,{disabled:u,autoFocus:!0,type:"text",value:t,onChange:r}),f.a.createElement(b.a,null,"\u4ed3\u5e93\u5408\u4f5c\u9080\u8bf7\u7801\u53ef\u7531\u4ed3\u5e93\u521b\u5efa\u8005\u751f\u6210\uff0c\u63d0\u4ea4\u6210\u529f\u540e\u60a8\u5373\u53ef\u83b7\u5f97\u4ed3\u5e93\u7684 push \u6743\u9650\u3002")),f.a.createElement("div",{className:m.a.buttonWrapper},f.a.createElement(p.a,{disabled:u,loading:u,type:"primary",block:!0,onClick:e},"\u63d0\u4ea4")))})),N=r(874),_=r(206),g=function(n){function t(n){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(d.a)(t).call(this,n))).onCodeInputChange=function(n){r.setState({code:n.target.value})},r.onSubmitButtonClick=function(){var n,t;return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.state.code,N.b.Collaborator.code(n)){e.next=5;break}a.a.warn({message:N.a.Collaborator.CODE}),e.next=11;break;case 5:return r.setState({loading:!0}),e.next=8,u.a.awrap(_.b.add(n));case 8:t=e.sent,r.setState({loading:!1}),null!==t&&(a.a.success({message:"\u52a0\u5165\u4ed3\u5e93\u5408\u4f5c\u8005\u6210\u529f"}),r.setState({code:""}));case 11:case"end":return e.stop()}}))},r.state={code:"",loading:!1},r}return Object(l.a)(t,n),Object(i.a)(t,[{key:"render",value:function(){var n=this.state,t=n.code,r=n.loading;return f.a.createElement(C,{code:t,loading:r,onCodeInputChange:this.onCodeInputChange,onSubmitButtonClick:this.onSubmitButtonClick})}}]),t}(s.PureComponent);r.d(t,"default",(function(){return g}))},873:function(n,t,r){"use strict";var e=r(0),u=r.n(e),a=r(880),o=r.n(a);t.a=u.a.memo((function(n){var t=n.children,r=n.required;return u.a.createElement("div",{className:o.a.InputLabel},t,u.a.createElement("span",{className:o.a.requiredSign},r?" *":""))}))},874:function(n,t,r){"use strict";var e={};r.r(e),r.d(e,"USERNAME",(function(){return M})),r.d(e,"PASSWORD",(function(){return I}));var u={};r.r(u),r.d(u,"NAME",(function(){return y}));var a={};r.r(a),r.d(a,"NICKNAME",(function(){return k})),r.d(a,"EMAIL",(function(){return O}));var o={};r.r(o),r.d(o,"NAME",(function(){return P}));var i={};r.r(i),r.d(i,"CODE",(function(){return R}));var c={};r.r(c),r.d(c,"username",(function(){return w})),r.d(c,"password",(function(){return W}));var d={};r.r(d),r.d(d,"name",(function(){return x}));var l={};r.r(l),r.d(l,"nickname",(function(){return D})),r.d(l,"email",(function(){return L}));var s={};r.r(s),r.d(s,"name",(function(){return $}));var f={};r.r(f),r.d(f,"code",(function(){return K}));var p={};r.r(p),r.d(p,"Account",(function(){return c})),r.d(p,"Group",(function(){return d})),r.d(p,"Profile",(function(){return l})),r.d(p,"Repository",(function(){return s})),r.d(p,"Collaborator",(function(){return f}));var v={};r.r(v),r.d(v,"USERNAME",(function(){return T})),r.d(v,"PASSWORD",(function(){return j}));var E={};r.r(E),r.d(E,"NAME",(function(){return q}));var m={};r.r(m),r.d(m,"NICKNAME",(function(){return B}));var A={};r.r(A),r.d(A,"NAME",(function(){return U}));var S={};r.r(S),r.d(S,"Account",(function(){return v})),r.d(S,"Group",(function(){return E})),r.d(S,"Profile",(function(){return m})),r.d(S,"Repository",(function(){return A}));var b={};r.r(b),r.d(b,"USERNAME",(function(){return z})),r.d(b,"PASSWORD",(function(){return G}));var C={};r.r(C),r.d(C,"NAME",(function(){return J}));var N={};r.r(N),r.d(N,"NICKNAME",(function(){return Z})),r.d(N,"EMAIL",(function(){return Y}));var _={};r.r(_),r.d(_,"NAME",(function(){return F}));var g={};r.r(g),r.d(g,"CODE",(function(){return V}));var h={};r.r(h),r.d(h,"Account",(function(){return b})),r.d(h,"Group",(function(){return C})),r.d(h,"Profile",(function(){return N})),r.d(h,"Repository",(function(){return _})),r.d(h,"Collaborator",(function(){return g}));var M=/^\w{1,20}$/,I=/^\S{6,}$/,y=/^\S{1,20}$/,k=/^\S{1,20}$/,O=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,P=/^\w{1,20}$/,R=/^\w+_\w+_\d+$/;function w(n){return e.USERNAME.test(n)}function W(n){return e.PASSWORD.test(n)}function x(n){return u.NAME.test(n)}function D(n){return a.NICKNAME.test(n)}function L(n){return a.EMAIL.test(n)}function $(n){return o.NAME.test(n)}function K(n){return i.CODE.test(n)}var T="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",j="6 \u4f4d\u4ee5\u4e0a",q="1~20 \u4f4d",B="1~20 \u4f4d",U="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",z="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",G="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",J="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Z="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Y="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",F="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",V="\u9080\u8bf7\u7801\u65e0\u6548\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return h})),r.d(t,"c",(function(){return S}))},880:function(n,t,r){n.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},890:function(n,t,r){"use strict";var e=r(873);r.d(t,"a",(function(){return e.a}))},915:function(n,t,r){n.exports={InputTip:"Style_InputTip__KsPY_"}},916:function(n,t,r){n.exports={PageTitle:"Style_PageTitle__3R_vY"}},922:function(n,t,r){"use strict";var e=r(0),u=r.n(e),a=r(915),o=r.n(a);var i=u.a.memo((function(n){var t=n.children;return u.a.createElement("div",{className:o.a.InputTip},t)}));r.d(t,"a",(function(){return i}))},923:function(n,t,r){"use strict";var e=r(0),u=r.n(e),a=r(916),o=r.n(a);var i=function(n){var t=n.children;return u.a.createElement("h1",{className:o.a.PageTitle},t)};r.d(t,"a",(function(){return i}))},985:function(n,t,r){n.exports={AddCollaboration:"Style_AddCollaboration__2lfZE",inputWrapper:"Style_inputWrapper__3EVaA",buttonWrapper:"Style_buttonWrapper__alhng"}}}]);
//# sourceMappingURL=21.3e5f7a87.chunk.js.map