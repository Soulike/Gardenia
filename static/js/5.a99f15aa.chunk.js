(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[5],{1109:function(m,c,t){m.exports={Profile:"Style_Profile__1P2aC",item:"Style_item__1F9QO",form:"Style_form__1PS4O",inputWrapper:"Style_inputWrapper__fOuXC",saveButtonWrapper:"Style_saveButtonWrapper__2AiWe",emailForm:"Style_emailForm__7P4eQ"}},1110:function(m,c,t){m.exports={Nickname:"Style_Nickname__3gWvC",form:"Style_form__3g0-l",inputWrapper:"Style_inputWrapper__3jj-P",saveButtonWrapper:"Style_saveButtonWrapper__3Sif2"}},1111:function(m,c,t){m.exports={Email:"Style_Email__2JMj1",form:"Style_form__2tgBD",inputWrapper:"Style_inputWrapper__3g6em",emailInput:"Style_emailInput__3T16m",verificationCodeInput:"Style_verificationCodeInput__1vRUB",getVerificationCodeButton:"Style_getVerificationCodeButton__3OBFz",saveButtonWrapper:"Style_saveButtonWrapper__1JiaX"}},1397:function(m,c,t){"use strict";t.r(c),t.d(c,"default",function(){return te});var v=t(0),a=t.n(v),y=t(1109),E=t.n(y),S=t(988),g=t(985),P=t(962),B=t(271),G=t(1110),I=t.n(G),x=t(983),_=t(170),V=t(954),A=t(101),p=t(146);function b(r){const{nickname:n,loading:e,onNicknameInputChange:i,onNicknameSubmit:o}=r;return a.a.createElement("div",{className:I.a.Nickname},a.a.createElement(x.a,null,"\u6635\u79F0"),a.a.createElement("div",{className:I.a.form},a.a.createElement("div",{className:I.a.inputWrapper},a.a.createElement(_.a,{title:p.c.Profile.NICKNAME,trigger:"focus"},a.a.createElement(V.a,{onChange:i,value:n,disabled:e}))),a.a.createElement("div",{className:I.a.saveButtonWrapper},a.a.createElement(A.a,{type:"primary",onClick:o,loading:e,disabled:e},"\u4FDD\u5B58"))))}var K=a.a.memo(b),O=t(96),T=t(344),h=t(339),F,ae=typeof F!="undefined"?F:r=>{throw new Error('Dynamic require of "'+r+'" is not supported')},W=(r,n,e)=>new Promise((i,o)=>{var s=l=>{try{u(e.next(l))}catch(d){o(d)}},f=l=>{try{u(e.throw(l))}catch(d){o(d)}},u=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,f);u((e=e.apply(r,n)).next())});class U extends v.PureComponent{constructor(n){super(n);this.setStatePromise=Object(O.promisify)(this.setState),this.onNicknameInputChange=e=>W(this,null,function*(){yield this.setStatePromise({nickname:e.target.value})}),this.onNicknameSubmit=()=>W(this,null,function*(){const{nickname:e}=this.state;p.b.Profile.nickname(e)?(yield this.setStatePromise({loading:!0}),(yield T.a.setNickname(e))!==null&&h.a.success({message:"\u6635\u79F0\u4FEE\u6539\u6210\u529F"}),yield this.setStatePromise({loading:!1})):h.a.warn({message:p.a.Profile.NICKNAME,description:p.c.Profile.NICKNAME})}),this.state={nickname:"",loading:!1}}componentDidUpdate(n,e,i){return W(this,null,function*(){const{defaultNickname:o}=this.props,{defaultNickname:s}=n;o!==s&&o!==void 0&&(yield this.setStatePromise({nickname:o}))})}render(){const{nickname:n,loading:e}=this.state,{loadingDefaultNickname:i}=this.props;return a.a.createElement(K,{nickname:n,loading:e||!!i,onNicknameInputChange:this.onNicknameInputChange,onNicknameSubmit:this.onNicknameSubmit})}}var j=U,R=t(1111),C=t.n(R);function J(r){const{email:n,loading:e,onEmailInputChange:i,onEmailSubmit:o,disableGetVerificationCodeButton:s,getVerificationCodeButtonText:f,onGetVerificationCodeButtonClick:u,onVerificationCodeInputChange:l,verificationCode:d}=r;return a.a.createElement("div",{className:C.a.Email},a.a.createElement(x.a,null,"\u90AE\u7BB1"),a.a.createElement("div",{className:C.a.form},a.a.createElement("div",{className:C.a.inputWrapper},a.a.createElement(V.a,{type:"email",onChange:i,value:n,disabled:e,className:C.a.emailInput}),a.a.createElement(V.a,{type:"text",onChange:l,value:d,placeholder:"\u90AE\u7BB1\u9A8C\u8BC1\u7801",addonAfter:a.a.createElement(A.a,{type:"link",size:"small",disabled:s||e,className:C.a.getVerificationCodeButton,onClick:u},f),className:C.a.verificationCodeInput})),a.a.createElement("div",{className:C.a.saveButtonWrapper},a.a.createElement(A.a,{type:"primary",onClick:o,loading:e,disabled:e},"\u4FDD\u5B58"))))}var w=a.a.memo(J),M,ie=typeof M!="undefined"?M:r=>{throw new Error('Dynamic require of "'+r+'" is not supported')},N=(r,n,e)=>new Promise((i,o)=>{var s=l=>{try{u(e.next(l))}catch(d){o(d)}},f=l=>{try{u(e.throw(l))}catch(d){o(d)}},u=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,f);u((e=e.apply(r,n)).next())});const{Profile:z}=p.b;class Q extends v.PureComponent{constructor(n){super(n);this.setStatePromise=Object(O.promisify)(this.setState),this.onEmailInputChange=e=>N(this,null,function*(){yield this.setStatePromise({email:e.target.value})}),this.onVerificationCodeInputChange=e=>N(this,null,function*(){yield this.setStatePromise({verificationCode:e.target.value})}),this.onGetVerificationCodeButtonClick=()=>N(this,null,function*(){const e=30,{getVerificationCodeButtonText:i,email:o}=this.state;if(!z.email(o))h.a.warn({message:p.a.Profile.EMAIL});else{yield this.setStatePromise({disableGetVerificationCodeButton:!0});let s=0;const f=setInterval(()=>{s++,this.setState({getVerificationCodeButtonText:`${e-s} \u79D2\u540E\u518D\u83B7\u53D6`})},1e3),u=setTimeout(()=>{clearInterval(f),this.setState({disableGetVerificationCodeButton:!1,getVerificationCodeButtonText:i})},e*1e3);(yield T.a.sendSetEmailVerificationCodeToEmail(o))!==null?h.a.success({message:"\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F",description:`\u8BF7\u5230 ${o} \u67E5\u770B`}):(clearInterval(f),clearTimeout(u),yield this.setStatePromise({disableGetVerificationCodeButton:!1,getVerificationCodeButtonText:i}))}}),this.onEmailSubmit=()=>N(this,null,function*(){const{email:e,verificationCode:i}=this.state;p.b.Account.verificationCode(i)?p.b.Profile.email(e)?(yield this.setStatePromise({loading:!0}),(yield T.a.setEmail(e,i))!==null&&(h.a.success({message:"\u90AE\u7BB1\u4FEE\u6539\u6210\u529F"}),yield this.setStatePromise({verificationCode:""})),yield this.setStatePromise({loading:!1})):h.a.warn({message:p.a.Profile.EMAIL}):h.a.warn({message:p.a.Account.VERIFICATION_CODE})}),this.state={email:"",verificationCode:"",getVerificationCodeButtonText:"\u83B7\u53D6\u9A8C\u8BC1\u7801",disableGetVerificationCodeButton:!1,loading:!1}}componentDidUpdate(n,e,i){return N(this,null,function*(){const{defaultEmail:o}=this.props,{defaultEmail:s}=n;o!==s&&o!==void 0&&(yield this.setStatePromise({email:o}))})}render(){const{loadingDefaultEmail:n}=this.props,{email:e,loading:i,verificationCode:o,disableGetVerificationCodeButton:s,getVerificationCodeButtonText:f}=this.state;return a.a.createElement(w,{email:e,loading:i||!!n,disableGetVerificationCodeButton:s,getVerificationCodeButtonText:f,onGetVerificationCodeButtonClick:this.onGetVerificationCodeButtonClick,onVerificationCodeInputChange:this.onVerificationCodeInputChange,verificationCode:o,onEmailInputChange:this.onEmailInputChange,onEmailSubmit:this.onEmailSubmit})}}var X=Q,D=t(1);function $(r){const{defaultNickname:n,defaultEmail:e,loading:i}=r;return a.a.createElement("div",{className:E.a.Profile},a.a.createElement(S.a,null,"\u4E2A\u4EBA\u8D44\u6599"),a.a.createElement("div",{className:E.a.item},a.a.createElement(j,{defaultNickname:n,loadingDefaultNickname:i})),a.a.createElement("div",{className:E.a.item},a.a.createElement(X,{defaultEmail:e,loadingDefaultEmail:i})),a.a.createElement("div",{className:E.a.item},a.a.createElement(g.a,null,"\u5BC6\u7801"),a.a.createElement(P.a,{type:"info",showIcon:!0,message:a.a.createElement("div",null,"\u524D\u5F80",a.a.createElement(B.a,{to:D.d[D.b.CHANGE_PASSWORD]},"\u4FEE\u6539\u5BC6\u7801\u9875\u9762"),"\u4FEE\u6539\u5BC6\u7801")})))}var H=a.a.memo($),Y=t(27),Z=t(46),q=t(132),k,ne=typeof k!="undefined"?k:r=>{throw new Error('Dynamic require of "'+r+'" is not supported')},L=(r,n,e)=>new Promise((i,o)=>{var s=l=>{try{u(e.next(l))}catch(d){o(d)}},f=l=>{try{u(e.throw(l))}catch(d){o(d)}},u=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,f);u((e=e.apply(r,n)).next())});class ee extends v.PureComponent{constructor(n){super(n);this.setStatePromise=Object(O.promisify)(this.setState),this.loadProfile=()=>L(this,null,function*(){const e=yield Y.g.get();if(e!==null)yield this.setStatePromise({currentProfile:e});else{const{history:i}=this.props;return i.replace(D.d[D.b.NOT_FOUND])}}),this.state={currentProfile:new q.g("","","",""),loading:!1}}componentDidMount(){return L(this,null,function*(){yield this.setStatePromise({loading:!0}),yield this.loadProfile(),yield this.setStatePromise({loading:!1})})}render(){const{currentProfile:{nickname:n,email:e},loading:i}=this.state;return a.a.createElement(H,{defaultNickname:n,defaultEmail:e,loading:i})}}var te=Object(Z.j)(ee)},983:function(m,c,t){"use strict";var v=t(0),a=t.n(v),y=t(984),E=t.n(y);function S(g){const{children:P,required:B}=g;return a.a.createElement("div",{className:E.a.InputLabel},P,a.a.createElement("span",{className:E.a.requiredSign},B?" *":""))}c.a=a.a.memo(S)},984:function(m,c,t){m.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},985:function(m,c,t){"use strict";var v=t(983);t.d(c,"a",function(){return v.a})},987:function(m,c,t){m.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},988:function(m,c,t){"use strict";t.d(c,"a",function(){return g});var v=t(0),a=t.n(v),y=t(987),E=t.n(y);function S(P){const{children:B}=P;return a.a.createElement("h2",{className:E.a.SettingsTitle},B)}var g=a.a.memo(S)}}]);

//# sourceMappingURL=5.a99f15aa.chunk.js.map