(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[18],{1079:function(e,t,a){e.exports={Collaborators:"Style_Collaborators__1C3aa",title:"Style_title__1b5Lj",alertWrapper:"Style_alertWrapper__3AH8e"}},1080:function(e,t,a){e.exports={AddCollaborationButton:"Style_AddCollaborationButton__XUfdf",loadingSpin:"Style_loadingSpin__1YQaP"}},1081:function(e,t,a){},1082:function(e,t,a){e.exports={CollaboratorCard:"Style_CollaboratorCard__2Upr7",cardContent:"Style_cardContent__2hQ3K",basicInfo:"Style_basicInfo___YOQ3",avatarWrapper:"Style_avatarWrapper__PNsZI",username:"Style_username__2gP0l",nickname:"Style_nickname__2DA1y"}},1376:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ne}));var n=a(15),r=a(16),o=a(40),c=a(39),s=a(0),i=a.n(s),l=a(1079),u=a.n(l),d=a(952),j=a(2),p=a.n(j),b=a(6),m=a(482),f=a(911),O=a(918),v=a(111),h=a(1080),x=a.n(h),g=a(351),_=a.n(g),C=a(957),y=a(931),k=a(497),S=a(1);function N(e){var t=e.code,a=e.loading,n=e.onClick,r=e.onCopy;return Object(S.jsx)(m.a,{trigger:"click",title:"\u9080\u8bf7\u7801",placement:"bottomRight",content:Object(S.jsx)("div",{className:x.a.AddCollaborationButton,children:a?Object(S.jsx)("div",{className:x.a.loadingSpin,children:Object(S.jsx)(f.a,{})}):Object(S.jsxs)("div",{children:[Object(S.jsx)(O.a,{value:t,addonAfter:Object(S.jsx)(_.a,{text:t,onCopy:r,children:Object(S.jsx)(y.a,{})})}),Object(S.jsx)(C.a,{children:"\u9080\u8bf7\u7801\u6709\u6548\u671f\u4e00\u5468\uff0c\u4e14\u53ea\u53ef\u4f7f\u7528\u4e00\u6b21\u3002"})]})}),children:Object(S.jsxs)(v.a,{type:"primary",onClick:n,children:[Object(S.jsx)(k.a,{}),"\u6dfb\u52a0"]})})}var w=i.a.memo(N),P=a(34),I=a(55),T=a(344),B=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).onClick=Object(b.a)(p.a.mark((function e(){var t,a,n,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.username,n=t.repositoryName,r.setState({loading:!0}),e.next=4,P.c.generateCode({username:a,name:n});case 4:null!==(o=e.sent)&&(c=o.code,r.setState({code:c,loading:!1}));case 6:case"end":return e.stop()}}),e)}))),r.onCopy=function(e,t){t?T.a.success({message:"\u9080\u8bf7\u7801\u5df2\u6210\u529f\u590d\u5236"}):T.a.warning({message:"\u9080\u8bf7\u7801\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"})},r.state={code:"",loading:!1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.code,a=e.loading;return Object(S.jsx)(w,{code:t,loading:a,onClick:this.onClick,onCopy:this.onCopy})}}]),a}(s.PureComponent),A=Object(I.j)(B),R=a(1081),W=a.n(R),D=a(1411),Q=a(184),Y=a(1082),F=a.n(Y),J=a(923),K=a(924),L=a(915),U=a(976),q=a(57),z=a(279);function H(e){var t=e.profile,a=t.username,n=t.nickname,r=t.avatar,o=e.onRemoveButtonClick,c=e.loading;return Object(S.jsx)("div",{className:F.a.CollaboratorCard,children:Object(S.jsx)(J.a,{bordered:!1,children:Object(S.jsxs)("div",{className:F.a.cardContent,children:[Object(S.jsxs)(z.a,{to:q.Function.generatePersonalCenterRoute({username:a}),className:F.a.basicInfo,children:[Object(S.jsx)("div",{className:F.a.avatarWrapper,children:r?Object(S.jsx)(K.a,{src:r,shape:"square",size:48}):Object(S.jsx)(U.a,{})}),Object(S.jsx)("div",{className:F.a.nickname,children:n}),Object(S.jsx)("div",{className:F.a.username,children:a})]}),Object(S.jsx)(L.a,{disabled:c,title:Object(S.jsxs)(S.Fragment,{children:["\u786e\u8ba4\u53d6\u6d88 ",Object(S.jsx)("b",{children:a})," \u7684\u5408\u4f5c\u8005\u8eab\u4efd\uff1f"]}),onConfirm:o,children:Object(S.jsx)(v.a,{type:"primary",danger:!0,disabled:c,loading:c,children:"\u79fb\u9664"})})]})})})}var M=i.a.memo(H),X=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).onRemoveButtonClick=Object(b.a)(p.a.mark((function e(){var t,a,n,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,a=t.profile.username,n=t.match.params,o=n.username,c=n.repositoryName,r.setState({loading:!0}),e.next=4,P.c.remove({username:o,name:c},{username:a});case 4:null!==e.sent&&(T.a.success({message:"\u79fb\u9664\u5408\u4f5c\u8005\u6210\u529f"}),setTimeout((function(){window.location.reload()}),1e3)),r.setState({loading:!1});case 7:case"end":return e.stop()}}),e)}))),r.state={loading:!1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.loading,t=this.props.profile;return Object(S.jsx)(M,{profile:t,loading:e,onRemoveButtonClick:this.onRemoveButtonClick})}}]),a}(s.PureComponent),Z=Object(I.j)(X);function E(e){var t=e.profiles,a=e.loading;return Object(S.jsx)("div",{className:W.a.ProfileList,children:Object(S.jsx)(D.b,{locale:{emptyText:Object(S.jsx)(Q.a,{description:"\u6ca1\u6709\u7528\u6237"})},loading:a,dataSource:t,renderItem:function(e){return Object(S.jsx)(Z,{profile:e})}})})}var G=i.a.memo(E),V=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).loadCollaborators=Object(b.a)(p.a.mark((function e(){var t,a,n,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.username,n=t.repositoryName,e.next=3,P.c.getCollaborators({username:a,name:n});case 3:null!==(o=e.sent)&&(c=o.collaborators,r.setState({profiles:c}));case 5:case"end":return e.stop()}}),e)}))),r.state={profiles:[],loading:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadCollaborators();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.profiles,a=e.loading;return Object(S.jsx)(G,{profiles:t,loading:a})}}]),a}(s.PureComponent),$=Object(I.j)(V),ee=a(926);function te(){return Object(S.jsxs)("div",{className:u.a.Collaborators,children:[Object(S.jsx)(d.a,{children:Object(S.jsxs)("div",{className:u.a.title,children:["\u5408\u4f5c\u8005",Object(S.jsx)(A,{})]})}),Object(S.jsx)("div",{className:u.a.alertWrapper,children:Object(S.jsx)(ee.a,{type:"info",message:"\u4ed3\u5e93\u5408\u4f5c\u8005\u53ef\u53d6\u5f97\u548c\u521b\u5efa\u8005\u76f8\u540c\u7684\u4ed3\u5e93\u8bbf\u95ee\u6743\u9650\u3002",showIcon:!0})}),Object(S.jsx)($,{})]})}var ae=i.a.memo(te),ne=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(S.jsx)(ae,{})}}]),a}(s.PureComponent)},951:function(e,t,a){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},952:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),o=a(951),c=a.n(o),s=a(1);function i(e){var t=e.children;return Object(s.jsx)("h2",{className:c.a.SettingsTitle,children:t})}var l=r.a.memo(i)},954:function(e,t,a){e.exports={InputTip:"Style_InputTip__KsPY_"}},957:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),o=a(954),c=a.n(o),s=a(1);function i(e){var t=e.children;return Object(s.jsx)("div",{className:c.a.InputTip,children:t})}var l=r.a.memo(i)},976:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),o=a(220),c=a(1);function s(){return Object(c.jsx)(o.a,{avatar:""})}var i=r.a.memo(s)}}]);
//# sourceMappingURL=18.06e9ae91.chunk.js.map