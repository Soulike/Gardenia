(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[20],{1159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1160),i=a.n(o);t.a=r.a.memo((function(e){var t=e.children,a=e.required;return r.a.createElement("div",{className:i.a.InputLabel},t,r.a.createElement("span",{className:i.a.requiredSign},a?" *":""))}))},1160:function(e,t,a){e.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},1161:function(e,t,a){"use strict";var n=a(1159);a.d(t,"a",(function(){return n.a}))},1167:function(e,t,a){e.exports={InputTip:"Style_InputTip__KsPY_"}},1168:function(e,t,a){e.exports={PageTitle:"Style_PageTitle__3R_vY"}},1169:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(1167),i=a.n(o);var u=r.a.memo((function(e){var t=e.children;return r.a.createElement("div",{className:i.a.InputTip},t)}))},1170:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(1168),i=a.n(o);var u=function(e){var t=e.children;return r.a.createElement("h1",{className:i.a.PageTitle},t)}},1237:function(e,t,a){e.exports={AddCollaboration:"Style_AddCollaboration__2lfZE",inputWrapper:"Style_inputWrapper__3EVaA",buttonWrapper:"Style_buttonWrapper__alhng"}},1387:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(1),r=a.n(n),o=a(3),i=a(10),u=a(11),c=a(20),l=a(19),s=a(0),d=a.n(s),p=a(1237),m=a.n(p),b=a(1170),f=a(1161),v=a(1169),g=a(1128),_=a(105);var C=d.a.memo((function(e){var t=e.code,a=e.onCodeInputChange,n=e.onSubmitButtonClick,r=e.loading;return d.a.createElement("div",{className:m.a.AddCollaboration},d.a.createElement(b.a,null,"\u6210\u4e3a\u4ed3\u5e93\u5408\u4f5c\u8005"),d.a.createElement("div",{className:m.a.inputWrapper},d.a.createElement(f.a,{required:!0},"\u9080\u8bf7\u7801"),d.a.createElement(g.a,{disabled:r,autoFocus:!0,type:"text",value:t,onChange:a}),d.a.createElement(v.a,null,"\u4ed3\u5e93\u5408\u4f5c\u9080\u8bf7\u7801\u53ef\u7531\u4ed3\u5e93\u521b\u5efa\u8005\u751f\u6210\uff0c\u63d0\u4ea4\u6210\u529f\u540e\u60a8\u5373\u53ef\u83b7\u5f97\u4ed3\u5e93\u7684 push \u6743\u9650\u3002")),d.a.createElement("div",{className:m.a.buttonWrapper},d.a.createElement(_.a,{disabled:r,loading:r,type:"primary",block:!0,onClick:n},"\u63d0\u4ea4")))})),h=a(158),S=a(328),E=a(38),k=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onCodeInputChange=function(e){n.setState({code:e.target.value})},n.onSubmitButtonClick=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state.code,h.b.Collaborator.code(t)){e.next=5;break}S.a.warn({message:h.a.Collaborator.CODE}),e.next=11;break;case 5:return n.setState({loading:!0}),e.next=8,E.c.add(t);case 8:a=e.sent,n.setState({loading:!1}),null!==a&&(S.a.success({message:"\u52a0\u5165\u4ed3\u5e93\u5408\u4f5c\u8005\u6210\u529f"}),n.setState({code:""}));case 11:case"end":return e.stop()}}),e)}))),n.state={code:"",loading:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.code,a=e.loading;return d.a.createElement(C,{code:t,loading:a,onCodeInputChange:this.onCodeInputChange,onSubmitButtonClick:this.onSubmitButtonClick})}}]),a}(s.PureComponent)}}]);
//# sourceMappingURL=20.e2b7b4ac.chunk.js.map