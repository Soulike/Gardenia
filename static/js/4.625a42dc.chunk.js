(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[4],{1e3:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(15);a.a=r.a.memo((function(e){return r.a.createElement(i.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}))},1001:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1003),c=t.n(i);a.a=r.a.memo((function(e){var a=e.children,t=e.required;return r.a.createElement("div",{className:c.a.InputLabel},a,r.a.createElement("span",{className:c.a.requiredSign},t?" *":""))}))},1002:function(e,a,t){"use strict";var n=t(1e3);t.d(a,"a",(function(){return n.a}))},1003:function(e,a,t){e.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},1004:function(e,a,t){"use strict";var n=t(1001);t.d(a,"a",(function(){return n.a}))},1005:function(e,a,t){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},1006:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),i=t(1005),c=t.n(i);var s=r.a.memo((function(e){var a=e.children;return r.a.createElement("h2",{className:c.a.SettingsTitle},a)}))},1132:function(e,a,t){e.exports={Profile:"Style_Profile__1P2aC",item:"Style_item__1F9QO",form:"Style_form__1PS4O",inputWrapper:"Style_inputWrapper__fOuXC",saveButtonWrapper:"Style_saveButtonWrapper__2AiWe",emailForm:"Style_emailForm__7P4eQ"}},1233:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return W}));var n=t(1),r=t.n(n),i=t(3),c=t(8),s=t(10),l=t(17),o=t(18),m=t(0),u=t.n(m),p=t(1132),f=t.n(p),d=t(1006),E=t(1004),v=t(234),g=t(968),b=t(82),_=t(974),k=t(140),S=t(1002),h=t(21),N=h.CONFIG.PAGE_ID,I=h.CONFIG.PAGE_ID_TO_ROUTE;var O=u.a.memo((function(e){var a=e.nickname,t=e.email,n=e.onEmailInputChange,r=e.onNicknameInputChange,i=e.onEmailSubmit,c=e.onNicknameSubmit,s=e.loading;return u.a.createElement("div",{className:f.a.Profile},u.a.createElement(d.a,null,"\u4e2a\u4eba\u8d44\u6599"),u.a.createElement("div",{className:f.a.item},u.a.createElement(E.a,null,"\u6635\u79f0"),u.a.createElement("div",{className:f.a.form},u.a.createElement("div",{className:f.a.inputWrapper},u.a.createElement(v.a,{title:k.c.Profile.NICKNAME,trigger:"focus"},u.a.createElement(g.a,{onChange:r,value:a,disabled:s}))),u.a.createElement("div",{className:f.a.saveButtonWrapper},u.a.createElement(b.a,{type:"primary",onClick:c,loading:s,disabled:s},"\u4fdd\u5b58")))),u.a.createElement("div",{className:f.a.item},u.a.createElement(E.a,null,"\u90ae\u7bb1"),u.a.createElement("div",{className:"".concat(f.a.form," ").concat(f.a.emailForm)},u.a.createElement("div",{className:"".concat(f.a.inputWrapper," ").concat(f.a.emailInputWrapper)},u.a.createElement(g.a,{type:"email",onChange:n,value:t,disabled:s})),u.a.createElement("div",{className:f.a.saveButtonWrapper},u.a.createElement(b.a,{type:"primary",onClick:i,loading:s,disabled:s},"\u4fdd\u5b58")))),u.a.createElement("div",{className:f.a.item},u.a.createElement(E.a,null,"\u5bc6\u7801"),u.a.createElement(_.a,{type:"info",showIcon:!0,message:u.a.createElement("div",null,"\u524d\u5f80",u.a.createElement(S.a,{to:I[N.CHANGE_PASSWORD]},"\u4fee\u6539\u5bc6\u7801\u9875\u9762"),"\u4fee\u6539\u5bc6\u7801")})))})),P=t(28),C=t(961),x=t(87),y=t(117),w=h.CONFIG.PAGE_ID,j=h.CONFIG.PAGE_ID_TO_ROUTE,A=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).setStatePromise=Object(x.promisify)(n.setState),n.loadProfile=Object(i.a)(r.a.mark((function e(){var a,t,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.f.get();case 2:if(null===(a=e.sent)){e.next=9;break}return t=a.nickname,i=a.email,e.next=7,n.setStatePromise({nickname:t,email:i});case 7:e.next=11;break;case 9:return c=n.props.history,e.abrupt("return",c.replace(j[w.NOT_FOUND]));case 11:case"end":return e.stop()}}),e)}))),n.onNicknameInputChange=function(e){n.setState({nickname:e.target.value})},n.onEmailInputChange=function(e){n.setState({email:e.target.value})},n.onNicknameSubmit=Object(i.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state.nickname,!k.b.Profile.nickname(a)){e.next=10;break}return n.setState({loading:!0}),e.next=5,P.f.set({nickname:a});case 5:null!==e.sent&&C.a.success({message:"\u6635\u79f0\u4fee\u6539\u6210\u529f"}),n.setState({loading:!1}),e.next=11;break;case 10:C.a.warn({message:k.a.Profile.NICKNAME,description:k.c.Profile.NICKNAME});case 11:case"end":return e.stop()}}),e)}))),n.onEmailSubmit=Object(i.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state.email,!k.b.Profile.email(a)){e.next=10;break}return n.setState({loading:!0}),e.next=5,P.f.set({email:a});case 5:null!==e.sent&&C.a.success({message:"\u90ae\u7bb1\u4fee\u6539\u6210\u529f"}),n.setState({loading:!1}),e.next=11;break;case 10:C.a.warn({message:k.a.Profile.EMAIL});case 11:case"end":return e.stop()}}),e)}))),n.state={nickname:"",email:"",loading:!1},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadProfile();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.nickname,t=e.email,n=e.loading;return u.a.createElement(O,{nickname:a,email:t,loading:n,onEmailInputChange:this.onEmailInputChange,onEmailSubmit:this.onEmailSubmit,onNicknameInputChange:this.onNicknameInputChange,onNicknameSubmit:this.onNicknameSubmit})}}]),t}(m.PureComponent),W=Object(y.f)(A)}}]);
//# sourceMappingURL=4.625a42dc.chunk.js.map