(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[15],{1189:function(e,a,t){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},1190:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n),o=t(1189),l=t.n(o);var c=r.a.memo((function(e){var a=e.children;return r.a.createElement("h2",{className:l.a.SettingsTitle},a)}))},1193:function(e,a,t){e.exports={InputTip:"Style_InputTip__KsPY_"}},1196:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n),o=t(1193),l=t.n(o);var c=r.a.memo((function(e){var a=e.children;return r.a.createElement("div",{className:l.a.InputTip},a)}))},1208:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),r=t.n(n),o=t(231);var l=r.a.memo((function(){return r.a.createElement(o.a,{avatar:""})}))},1304:function(e,a,t){e.exports={Collaborators:"Style_Collaborators__1C3aa",title:"Style_title__1b5Lj",alertWrapper:"Style_alertWrapper__3AH8e"}},1305:function(e,a,t){e.exports={AddCollaborationButton:"Style_AddCollaborationButton__XUfdf",loadingSpin:"Style_loadingSpin__1YQaP"}},1306:function(e,a,t){},1307:function(e,a,t){e.exports={CollaboratorCard:"Style_CollaboratorCard__2Upr7",cardContent:"Style_cardContent__2hQ3K",basicInfo:"Style_basicInfo___YOQ3",avatarWrapper:"Style_avatarWrapper__PNsZI",username:"Style_username__2gP0l",nickname:"Style_nickname__2DA1y"}},1400:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return V}));var n=t(18),r=t(21),o=t(46),l=t(45),c=t(0),i=t.n(c),s=t(1304),u=t.n(s),m=t(1190),p=t(1),d=t.n(p),f=t(4),v=t(540),b=t(1144),g=t(1150),E=t(118),_=t(1305),h=t.n(_),C=t(354),y=t.n(C),k=t(1196),S=t(1172),j=t(1163);var O=i.a.memo((function(e){var a=e.code,t=e.loading,n=e.onClick,r=e.onCopy;return i.a.createElement(v.a,{trigger:"click",title:"\u9080\u8bf7\u7801",placement:"bottomRight",content:i.a.createElement("div",{className:h.a.AddCollaborationButton},t?i.a.createElement("div",{className:h.a.loadingSpin},i.a.createElement(b.a,null)):i.a.createElement("div",null,i.a.createElement(g.a,{value:a,addonAfter:i.a.createElement(y.a,{text:a,onCopy:r},i.a.createElement(S.a,null))}),i.a.createElement(k.a,null,"\u9080\u8bf7\u7801\u6709\u6548\u671f\u4e00\u5468\uff0c\u4e14\u53ea\u53ef\u4f7f\u7528\u4e00\u6b21\u3002")))},i.a.createElement(E.a,{type:"primary",onClick:n},i.a.createElement(j.a,null),"\u6dfb\u52a0"))})),N=t(40),x=t(72),w=t(349),P=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).onClick=Object(f.a)(d.a.mark((function e(){var a,t,n,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.props.match.params,t=a.username,n=a.repositoryName,r.setState({loading:!0}),e.next=4,N.c.generateCode({username:t,name:n});case 4:null!==(o=e.sent)&&(l=o.code,r.setState({code:l,loading:!1}));case 6:case"end":return e.stop()}}),e)}))),r.onCopy=function(e,a){a?w.a.success({message:"\u9080\u8bf7\u7801\u5df2\u6210\u529f\u590d\u5236"}):w.a.warning({message:"\u9080\u8bf7\u7801\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"})},r.state={code:"",loading:!1},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.code,t=e.loading;return i.a.createElement(O,{code:a,loading:t,onClick:this.onClick,onCopy:this.onCopy})}}]),t}(c.PureComponent),I=Object(x.h)(P),T=t(1306),B=t.n(T),A=t(1433),R=t(199),W=t(1307),D=t.n(W),Q=t(1152),Y=t(1154),F=t(1145),J=t(1208),K=t(73),L=t(272);var U=i.a.memo((function(e){var a=e.profile,t=a.username,n=a.nickname,r=a.avatar,o=e.onRemoveButtonClick,l=e.loading;return i.a.createElement("div",{className:D.a.CollaboratorCard},i.a.createElement(Q.a,{bordered:!1},i.a.createElement("div",{className:D.a.cardContent},i.a.createElement(L.a,{to:K.Function.generatePersonalCenterRoute({username:t}),className:D.a.basicInfo},i.a.createElement("div",{className:D.a.avatarWrapper},r?i.a.createElement(Y.a,{src:r,shape:"square",size:48}):i.a.createElement(J.a,null)),i.a.createElement("div",{className:D.a.nickname},n),i.a.createElement("div",{className:D.a.username},t)),i.a.createElement(F.a,{disabled:l,title:i.a.createElement(i.a.Fragment,null,"\u786e\u8ba4\u53d6\u6d88 ",i.a.createElement("b",null,t)," \u7684\u5408\u4f5c\u8005\u8eab\u4efd\uff1f"),onConfirm:o},i.a.createElement(E.a,{type:"primary",danger:!0,disabled:l,loading:l},"\u79fb\u9664")))))})),q=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).onRemoveButtonClick=Object(f.a)(d.a.mark((function e(){var a,t,n,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.props,t=a.profile.username,n=a.match.params,o=n.username,l=n.repositoryName,r.setState({loading:!0}),e.next=4,N.c.remove({username:o,name:l},{username:t});case 4:null!==e.sent&&(w.a.success({message:"\u79fb\u9664\u5408\u4f5c\u8005\u6210\u529f"}),setTimeout((function(){window.location.reload()}),1e3)),r.setState({loading:!1});case 7:case"end":return e.stop()}}),e)}))),r.state={loading:!1},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state.loading,a=this.props.profile;return i.a.createElement(U,{profile:a,loading:e,onRemoveButtonClick:this.onRemoveButtonClick})}}]),t}(c.PureComponent),z=Object(x.h)(q);var H=i.a.memo((function(e){var a=e.profiles,t=e.loading;return i.a.createElement("div",{className:B.a.ProfileList},i.a.createElement(A.b,{locale:{emptyText:i.a.createElement(R.a,{description:"\u6ca1\u6709\u7528\u6237"})},loading:t,dataSource:a,renderItem:function(e){return i.a.createElement(z,{profile:e})}}))})),M=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).loadCollaborators=Object(f.a)(d.a.mark((function e(){var a,t,n,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.props.match.params,t=a.username,n=a.repositoryName,e.next=3,N.c.getCollaborators({username:t,name:n});case 3:null!==(o=e.sent)&&(l=o.collaborators,r.setState({profiles:l}));case 5:case"end":return e.stop()}}),e)}))),r.state={profiles:[],loading:!1},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadCollaborators();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.profiles,t=e.loading;return i.a.createElement(H,{profiles:a,loading:t})}}]),t}(c.PureComponent),X=Object(x.h)(M),Z=t(1156);var G=i.a.memo((function(){return i.a.createElement("div",{className:u.a.Collaborators},i.a.createElement(m.a,null,i.a.createElement("div",{className:u.a.title},"\u5408\u4f5c\u8005",i.a.createElement(I,null))),i.a.createElement("div",{className:u.a.alertWrapper},i.a.createElement(Z.a,{type:"info",message:"\u4ed3\u5e93\u5408\u4f5c\u8005\u53ef\u53d6\u5f97\u548c\u521b\u5efa\u8005\u76f8\u540c\u7684\u4ed3\u5e93\u8bbf\u95ee\u6743\u9650\u3002",showIcon:!0})),i.a.createElement(X,null))})),V=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(G,null)}}]),t}(c.PureComponent)}}]);
//# sourceMappingURL=15.c7c1e807.chunk.js.map