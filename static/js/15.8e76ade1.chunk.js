(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[15],{1035:function(e,t,a){e.exports={Options:"Style_Options__162uQ",itemWrapper:"Style_itemWrapper__3pX3S"}},1036:function(e,t,a){e.exports={RepositoryName:"Style_RepositoryName__1WTF0",label:"Style_label__K0aLr",input:"Style_input__LnETk"}},1037:function(e,t,a){e.exports={SettingLabel:"Style_SettingLabel__27G0I"}},1038:function(e,t,a){e.exports={Description:"Style_Description__3N46g",textarea:"Style_textarea__324Su",buttonWrapper:"Style_buttonWrapper__1ug3r"}},1039:function(e,t,a){},1040:function(e,t,a){e.exports={CriticalOperationConfirmModal:"Style_CriticalOperationConfirmModal__1LREa",content:"Style_content__15AF6",warningWrapper:"Style_warningWrapper__1Wnxv",input:"Style_input__dIid9"}},1252:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),o=a(9),s=a(50),i=a(73),l=a(270),c=a(269),u=a(271),m=a(0),p=a.n(m),d=a(1035),h=a.n(d),b=a(996),f=(a(99),a(15)),g=(a(412),a(279)),v=(a(410),a(205)),y=(a(948),a(949)),C=a(1036),w=a.n(C),k=a(1037),O=a.n(k);var E=p.a.memo((function(e){var t=e.children;return p.a.createElement("div",{className:O.a.SettingLabel},t)}));function S(e,t){return 0===e.length||t}var N=p.a.memo((function(e){var t=e.repositoryName,a=e.onRenameConfirm,n=e.onRepositoryNameInputChange,r=e.submitting;return p.a.createElement("div",{className:w.a.RepositoryName},p.a.createElement("label",{className:w.a.label},p.a.createElement(E,null,"\u4ed3\u5e93\u540d"),p.a.createElement(y.a,{className:w.a.input,value:t,onChange:n,disabled:r}),p.a.createElement(g.a,{title:"\u91cd\u547d\u540d\u4ed3\u5e93\u4f1a\u5bfc\u81f4\u539f\u4ed3\u5e93\u7f51\u5740\u4e0e\u514b\u9686\u8def\u5f84\u5931\u6548\uff0c\u786e\u5b9a\u7ee7\u7eed\uff1f",onConfirm:a},p.a.createElement(v.a,{className:w.a.button,loading:r,disabled:S(t,r)},"\u91cd\u547d\u540d"))))})),x=a(93),P=a(115),j=a(273),_=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).onRepositoryNameInputChange=function(e){a.setState({repositoryName:e.target.value})},a.onRenameConfirm=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.validateParameters()){e.next=5;break}return a.setState({submitting:!0}),e.next=4,a.submit();case 4:a.setState({submitting:!1});case 5:case"end":return e.stop()}}),e)}))),a.validateParameters=function(){return 0!==a.state.repositoryName.length||(f.a.warn({message:"\u4ed3\u5e93\u540d\u4e0d\u80fd\u4e3a\u7a7a"}),!1)},a.submit=Object(o.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.repositoryName,n=a.props.match.params.repository,e.next=4,j.a.setName(n,t);case 4:null!==e.sent&&a.onSubmitSuccess();case 6:case"end":return e.stop()}}),e)}))),a.onSubmitSuccess=function(){f.a.success({message:"\u4ed3\u5e93\u91cd\u547d\u540d\u6210\u529f"});var e=a.props.history,t=a.props.match.params.username,n=a.state.repositoryName;e.replace(P.b.generateRepositorySettingsOptionsRoute({username:t,repository:n}))};var n=e.match.params.repository;return a.state={repositoryName:n,submitting:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.repositoryName,a=e.submitting;return p.a.createElement(N,{repositoryName:t,onRenameConfirm:this.onRenameConfirm,onRepositoryNameInputChange:this.onRepositoryNameInputChange,submitting:a})}}]),t}(m.PureComponent),R=Object(x.f)(_),I=(a(970),a(973)),M=a(1038),V=a.n(M);var L=p.a.memo((function(e){var t=e.description,a=e.onSubmit,n=e.onTextareaChange,r=e.loading,o=e.submitting;return p.a.createElement("div",{className:V.a.Description},p.a.createElement("label",null,p.a.createElement(E,null,"\u4ed3\u5e93\u63cf\u8ff0"),p.a.createElement(I.a,{spinning:r},p.a.createElement(y.a.TextArea,{disabled:r||o,value:t,className:V.a.textarea,onChange:n}))),p.a.createElement("div",{className:V.a.buttonWrapper},p.a.createElement(v.a,{loading:o,disabled:r||o,className:V.a.button,onClick:a},"\u786e\u5b9a")))})),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).onTextareaChange=function(e){a.setState({description:e.target.value})},a.onSubmit=Object(o.a)(r.a.mark((function e(){var t,n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.description,n=a.props.match.params.repository,a.setState({submitting:!0}),e.next=5,j.a.setDescription(n,t);case 5:o=e.sent,a.setState({submitting:!1}),null!==o&&f.a.success({message:"\u4ed3\u5e93\u63cf\u8ff0\u4fee\u6539\u6210\u529f"});case 8:case"end":return e.stop()}}),e)}))),a.state={description:"",submitting:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.repository.description,o=n.loading;e.loading&&o&&this.setState({description:r})}},{key:"render",value:function(){var e=this.props.loading,t=this.state,a=t.description,n=t.submitting;return p.a.createElement(L,{submitting:n,loading:e,description:a,onTextareaChange:this.onTextareaChange,onSubmit:this.onSubmit})}}]),t}(m.PureComponent),W=Object(x.f)(T),B=(a(978),a(980)),D=(a(409),a(38)),F=a(1039),A=a.n(F),H=(a(987),a(993)),J=a(1040),U=a.n(J);var X=p.a.memo((function(e){var t=e.warning,a=e.validateText,n=e.password,r=e.validateInputPlaceholder,o=e.onValidateInputChange,s=e.onPasswordInputChange,i=e.visible,l=e.onOk,c=e.onCancel,u=e.title,m=e.confirmLoading;return p.a.createElement(H.a,{confirmLoading:m,title:u,className:U.a.CriticalOperationConfirmModal,visible:i,onOk:l,onCancel:c},p.a.createElement("div",{className:U.a.content},p.a.createElement("div",{className:U.a.warningWrapper},t),p.a.createElement(y.a,{className:U.a.input,value:a,onChange:o,placeholder:r,autoFocus:!0}),p.a.createElement(y.a,{className:U.a.input,placeholder:"\u8d26\u6237\u5bc6\u7801",type:"password",value:n,onChange:s})))}));var G=p.a.memo((function(e){var t=e.loading,a=e.isPublic,n=e.onSwitchChange,r=e.modalRepositoryName,o=e.modalPassword,s=e.onModalRepositoryNameInputChange,i=e.onModalPasswordInputChange,l=e.modalVisible,c=e.onModalOk,u=e.onModalCancel;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:A.a.AccessibilitySwitch},p.a.createElement(E,null,"\u662f\u5426\u516c\u5f00"),p.a.createElement(B.a,{loading:t,checked:a,disabled:t,onChange:n,checkedChildren:p.a.createElement(p.a.Fragment,null,p.a.createElement(D.a,{type:"unlock"})," \u516c\u5f00"),unCheckedChildren:p.a.createElement(p.a.Fragment,null,p.a.createElement(D.a,{type:"lock"})," \u79c1\u6709")})),p.a.createElement(X,{confirmLoading:t,title:"\u53ef\u89c1\u6027\u5207\u6362\u786e\u8ba4",warning:p.a.createElement("strong",null,"\u5c06\u4ed3\u5e93\u6539\u4e3a\u516c\u6709\u5c06\u4f1a\u8ba9",p.a.createElement("span",{style:{color:"red"}},"\u6240\u6709\u4eba"),"\u770b\u5230\u4ed3\u5e93\u5185\u7684\u4ee3\u7801\uff0c\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u672c\u4ed3\u5e93\u7684\u540d\u5b57\u548c\u60a8\u7684\u5bc6\u7801\u4ee5\u786e\u8ba4\u64cd\u4f5c\u3002"),validateInputPlaceholder:"\u4ed3\u5e93\u540d",validateText:r,password:o,visible:l,onPasswordInputChange:i,onValidateInputChange:s,onOk:c,onCancel:u}))})),K=a(164),Q=a(272),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).onSwitchChange=function(){var e=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=a.state.isPublic)||!t){e.next=5;break}a.setState({modalVisible:!0}),e.next=8;break;case 5:if(!n||t){e.next=8;break}return e.next=8,a.setIsPublic(t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onModalRepositoryNameInputChange=function(e){a.setState({modalRepositoryName:e.target.value})},a.onModalPasswordInputChange=function(e){a.setState({modalPassword:e.target.value})},a.onModalOk=Object(o.a)(r.a.mark((function e(){var t,n,o,s,i,l,c,u,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.match.params,n=t.repository,o=t.username,s=a.state,i=s.modalRepositoryName,l=s.modalPassword,c=s.isPublic,n===i){e.next=6;break}f.a.warn({message:"\u4ed3\u5e93\u540d\u4e0d\u6b63\u786e"}),e.next=19;break;case 6:return u=Q.a.calculateHash(o,l),e.next=9,K.a.checkPassword({hash:u});case 9:if(null===(m=e.sent)){e.next=19;break}if(!m.isCorrect){e.next=18;break}return e.next=15,a.setIsPublic(!c);case 15:a.setState({modalVisible:!1,modalRepositoryName:"",modalPassword:""}),e.next=19;break;case 18:f.a.warn({message:"\u5bc6\u7801\u4e0d\u6b63\u786e"});case 19:case"end":return e.stop()}}),e)}))),a.onModalCancel=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({modalVisible:!1,modalRepositoryName:"",modalPassword:""});case 1:case"end":return e.stop()}}),e)}))),a.setIsPublic=function(){var e=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.props.match.params.repository,a.state.isPublic===t){e.next=9;break}return a.setState({submitting:!0}),e.next=6,K.e.setIsPublic({name:n,isPublic:t});case 6:null!==e.sent&&window.location.reload(),a.setState({submitting:!1});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={submitting:!1,isPublic:!0,modalRepositoryName:"",modalPassword:"",modalVisible:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.repository.isPublic,o=n.loading;e.loading&&o&&this.setState({isPublic:r})}},{key:"render",value:function(){var e=this.state,t=e.submitting,a=e.isPublic,n=e.modalRepositoryName,r=e.modalPassword,o=e.modalVisible,s=this.props.loading;return p.a.createElement(G,{loading:t||s,isPublic:a,modalRepositoryName:n,modalPassword:r,modalVisible:o,onSwitchChange:this.onSwitchChange,onModalOk:this.onModalOk,onModalCancel:this.onModalCancel,onModalPasswordInputChange:this.onModalPasswordInputChange,onModalRepositoryNameInputChange:this.onModalRepositoryNameInputChange})}}]),t}(m.PureComponent),z=Object(x.f)(q),Y=(a(947),a(946));var Z=p.a.memo((function(e){var t=e.title,a=e.description,n=e.onButtonClick;return p.a.createElement(Y.a.Item,{extra:p.a.createElement(v.a,{type:"danger",onClick:n},t)},p.a.createElement(Y.a.Item.Meta,{title:t,description:a}))}));var $=p.a.memo((function(e){var t=e.onButtonClick,a=e.modalRepositoryName,n=e.modalPassword,r=e.onModalRepositoryNameInputChange,o=e.onModalPasswordInputChange,s=e.onModalOk,i=e.onModalCancel,l=e.modalVisible,c=e.modalConfirmLoading;return p.a.createElement(p.a.Fragment,null,p.a.createElement(Z,{title:"\u5220\u9664\u4ed3\u5e93",description:"\u5220\u9664\u4ed3\u5e93\u7684\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d\uff0c\u8bf7\u614e\u91cd\u3002",onButtonClick:t}),p.a.createElement(X,{warning:p.a.createElement("strong",null,"\u5982\u679c\u4ed3\u5e93\u88ab\u5220\u9664\uff0c\u60a8\u5c06\u4e22\u5931\u4ed3\u5e93\u7684\u6587\u4ef6\u3001\u63d0\u4ea4\u8bb0\u5f55\u7b49",p.a.createElement("span",{style:{color:"red"}},"\u6240\u6709\u4fe1\u606f"),"\uff0c\u4e14\u5220\u9664\u6210\u529f\u540e\u6ca1\u6709\u6062\u590d\u7684\u53ef\u80fd\u3002\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u672c\u4ed3\u5e93\u7684\u540d\u5b57\u548c\u60a8\u7684\u5bc6\u7801\u4ee5\u786e\u8ba4\u64cd\u4f5c\u3002"),validateInputPlaceholder:"\u4ed3\u5e93\u7684\u540d\u5b57",title:"\u5220\u9664\u4ed3\u5e93\u786e\u8ba4",validateText:a,password:n,onValidateInputChange:r,onPasswordInputChange:o,onOk:s,onCancel:i,visible:l,confirmLoading:c}))})),ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).onButtonClick=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({modalRepositoryName:"",modalPassword:"",modalVisible:!0});case 1:case"end":return e.stop()}}),e)}))),a.onModalRepositoryNameInputChange=function(e){a.setState({modalRepositoryName:e.target.value})},a.onModalPasswordInputChange=function(e){a.setState({modalPassword:e.target.value})},a.onModalOk=Object(o.a)(r.a.mark((function e(){var t,n,o,s,i,l,c,u,m,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.match.params,o=n.repository,s=n.username,i=t.history,l=a.state,c=l.modalRepositoryName,u=l.modalPassword,o===c){e.next=6;break}f.a.warn({message:"\u4ed3\u5e93\u540d\u4e0d\u6b63\u786e"}),e.next=22;break;case 6:return m=Q.a.calculateHash(s,u),a.setState({modalConfirmLoading:!0}),e.next=10,K.a.checkPassword({hash:m});case 10:if(null===(p=e.sent)){e.next=21;break}if(!p.isCorrect){e.next=20;break}return e.next=16,K.d.del(o);case 16:null!==e.sent&&(f.a.success({message:"\u4ed3\u5e93\u5220\u9664\u6210\u529f"}),a.setState({modalVisible:!1}),i.replace(P.b.generatePersonalCenterRoute({username:s}))),e.next=21;break;case 20:f.a.warn({message:"\u5bc6\u7801\u4e0d\u6b63\u786e"});case 21:a.setState({modalConfirmLoading:!1});case 22:case"end":return e.stop()}}),e)}))),a.onModalCancel=function(){a.setState({modalVisible:!1})},a.state={modalRepositoryName:"",modalPassword:"",modalVisible:!1,modalConfirmLoading:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.modalConfirmLoading,a=e.modalVisible,n=e.modalPassword,r=e.modalRepositoryName;return p.a.createElement($,{onButtonClick:this.onButtonClick,modalConfirmLoading:t,modalVisible:a,modalPassword:n,modalRepositoryName:r,onModalOk:this.onModalOk,onModalCancel:this.onModalCancel,onModalPasswordInputChange:this.onModalPasswordInputChange,onModalRepositoryNameInputChange:this.onModalRepositoryNameInputChange})}}]),t}(m.PureComponent),te=Object(x.f)(ee);var ae=p.a.memo((function(e){var t=e.onButtonClick;return p.a.createElement(Z,{title:"\u8f6c\u79fb\u4ed3\u5e93\u6240\u6709\u4eba",description:"\u5c06\u4ed3\u5e93\u6240\u6709\u4eba\u8f6c\u79fb\u4e3a\u5176\u4ed6\u4eba\u3002",onButtonClick:t})})),ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),u=0;u<n;u++)i[u]=arguments[u];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).onButtonClick=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement(ae,{onButtonClick:this.onButtonClick})}}]),t}(m.PureComponent),re=Object(x.f)(ne);var oe=p.a.memo((function(){return p.a.createElement(Y.a,{bordered:!0,split:!0},p.a.createElement(re,null),p.a.createElement(te,null))}));var se=p.a.memo((function(e){var t=e.repository,a=e.loading;return p.a.createElement("div",{className:h.a.Options},p.a.createElement(b.a,null,"\u9009\u9879"),p.a.createElement("div",{className:h.a.itemWrapper},p.a.createElement(R,null)),p.a.createElement("div",{className:h.a.itemWrapper},p.a.createElement(z,{repository:t,loading:a})),p.a.createElement("div",{className:h.a.itemWrapper},p.a.createElement(W,{repository:t,loading:a})),p.a.createElement(b.a,null,p.a.createElement("span",{style:{color:"red"}},"\u5371\u9669\u533a")),p.a.createElement(oe,null))})),ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).loadRepository=Object(o.a)(r.a.mark((function e(){var t,n,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.repository,o=t.username,e.next=3,j.a.repository(o,n);case 3:null!==(s=e.sent)&&a.setState({repository:s});case 5:case"end":return e.stop()}}),e)}))),a.state={repository:new Q.e("","","",!0),loading:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadRepository();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repository,a=e.loading;return p.a.createElement(se,{repository:t,loading:a})}}]),t}(m.PureComponent),le=Object(x.f)(ie);a.d(t,"default",(function(){return le}))},986:function(e,t,a){e.exports={SettingsTitle:"Style_SettingsTitle__387Xe"}},996:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(986),s=a.n(o);var i=r.a.memo((function(e){var t=e.children;return r.a.createElement("h2",{className:s.a.SettingsTitle},t)}));a.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=15.8e76ade1.chunk.js.map