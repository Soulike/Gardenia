(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[31],{1050:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(14);t.a=r.a.memo((function(e){return r.a.createElement(s.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}))},1052:function(e,t,n){"use strict";var a=n(1050);n.d(t,"a",(function(){return a.a}))},1167:function(e,t,n){e.exports={Members:"Style_Members__1A1TA",topArea:"Style_topArea__2Rqcb",cardContent:"Style_cardContent__3XM0M",titleWrapper:"Style_titleWrapper__30lrm",name:"Style_name__35BXt",isAdminTagWrapper:"Style_isAdminTagWrapper__h56El",isAdminTag:"Style_isAdminTag__3vPt2",avatarWrapper:"Style_avatarWrapper__31DG6",avatar:"Style_avatar__39V_0"}},1168:function(e,t,n){e.exports={modalContent:"Style_modalContent__2QoB9",usernameInput:"Style_usernameInput__2TSrf"}},1255:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var a={};n.r(a),n.d(a,"addMember",(function(){return D}));var r=n(328),s=n(1),o=n.n(s),i=n(3),c=n(7),u=n(9),m=n(18),l=n(17),d=n(0),p=n.n(d),f=n(71),v=n(1167),b=n.n(v),h=n(1024),x=n(1249),k=n(170),A=n(1021),g=n(1022),C=n(84),w=n(1014),S=n(20),O=n(1052),E=n(1017),_=n(1018),y=n(1028),M=n(1168),j=n.n(M);var P=p.a.memo((function(e){var t=e.onClick,n=e.showModal,a=e.username,r=e.loading,s=e.onModalCancelClick,o=e.onModalOkClick,i=e.onUsernameChange;return p.a.createElement(p.a.Fragment,null,p.a.createElement(C.a,{type:"primary",onClick:t,loading:r,disabled:r},p.a.createElement(y.a,null),"\u6dfb\u52a0\u6210\u5458"),p.a.createElement(E.a,{destroyOnClose:!0,width:300,title:"\u6dfb\u52a0\u5c0f\u7ec4\u6210\u5458",visible:n,onOk:o,onCancel:s,confirmLoading:r},p.a.createElement("div",{className:j.a.modalContent},p.a.createElement(_.a,{value:a,onChange:i,autoFocus:!0,placeholder:"\u65b0\u5c0f\u7ec4\u6210\u5458\u7684\u7528\u6237\u540d",className:j.a.usernameInput}))))})),N=n(89),I=n(42),W=n(29),R=n(141),T=n(1011),U=new(n(126).EventEmitter),D="addMember",L=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).setStatePromise=Object(N.promisify)(r.setState),r.initModal=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setStatePromise({username:""});case 1:case"end":return e.stop()}}),e)}))),r.onClick=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setStatePromise({showModal:!0});case 2:return e.next=4,r.initModal();case 4:case"end":return e.stop()}}),e)}))),r.onModalOkClick=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.props.match.params.id,n=r.state.username,R.b.Account.username(n)){e.next=6;break}T.a.error({message:"\u7528\u6237 ".concat(n," \u4e0d\u5b58\u5728")}),e.next=18;break;case 6:return e.next=8,r.setStatePromise({loading:!0});case 8:return e.next=10,W.d.addAccounts({id:Number.parseInt(t)},[n]);case 10:if(null===e.sent){e.next=16;break}return T.a.success({message:"\u6dfb\u52a0\u6210\u5458 ".concat(n," \u6210\u529f")}),e.next=15,r.setStatePromise({showModal:!1});case 15:U.emit(a.addMember);case 16:return e.next=18,r.setStatePromise({loading:!1});case 18:case"end":return e.stop()}}),e)}))),r.onModalCancelClick=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setStatePromise({showModal:!1});case 2:case"end":return e.stop()}}),e)}))),r.onUsernameChange=function(e){r.setState({username:e.target.value})},r.state={showModal:!1,username:"",loading:!1},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.showModal,n=e.username,a=e.loading;return p.a.createElement(P,{loading:a,showModal:t,username:n,onClick:this.onClick,onModalCancelClick:this.onModalCancelClick,onModalOkClick:this.onModalOkClick,onUsernameChange:this.onUsernameChange})}}]),n}(d.PureComponent),B=Object(I.f)(L),F=n(203);var G=p.a.memo((function(e){var t=e.profiles,n=e.loading,a=e.isAdmin,r=e.adminUsernames,s=e.onSetAdminConfirm,o=e.onRemoveAccountConfirm,i=e.onRemoveAdminConfirm;return p.a.createElement("div",{className:b.a.Members},p.a.createElement("div",{className:b.a.topArea},p.a.createElement(h.a,{type:"info",showIcon:!0,message:"\u53ea\u6709\u5c0f\u7ec4\u6210\u5458\u53ef\u5c06\u4ed3\u5e93\u52a0\u5165\u5c0f\u7ec4"}),p.a.createElement("div",{className:b.a.addMemberButtonWrapper},a?p.a.createElement(B,null):null)),p.a.createElement(x.b,{loading:n,locale:{emptyText:p.a.createElement(k.a,{description:"\u6ca1\u6709\u6210\u5458"})},dataSource:Object(f.a)(t),renderItem:function(e){if(null!==e){var t=e.nickname,c=e.username,u=e.avatar;return p.a.createElement(A.a,{size:"small",key:c},p.a.createElement("div",{className:b.a.cardContent},p.a.createElement(O.a,{className:b.a.titleWrapper,to:S.Function.generatePersonalCenterRoute({username:c})},p.a.createElement("div",{className:b.a.avatarWrapper},p.a.createElement(F.a,{avatar:u})),p.a.createElement("div",{className:b.a.name},t,"(",c,")"),p.a.createElement("div",{className:b.a.isAdminTagWrapper},r.includes(c)?p.a.createElement(g.a,{color:"blue",className:b.a.isAdminTag},"\u7ba1\u7406\u5458"):null)),a?p.a.createElement("div",{className:b.a.buttonWrapper},p.a.createElement(C.a.Group,null,r.includes(c)?p.a.createElement(w.a,{title:"\u786e\u8ba4\u64a4\u9500\u6210\u5458 ".concat(c," \u7684\u7ba1\u7406\u5458\u6743\u9650\uff1f"),onConfirm:i(c),disabled:n},p.a.createElement(C.a,{loading:n,disabled:n},"\u64a4\u9500\u7ba1\u7406\u5458")):p.a.createElement(w.a,{title:"\u786e\u8ba4\u8bbe\u7f6e\u6210\u5458 ".concat(c," \u4e3a\u7ba1\u7406\u5458\uff1f"),onConfirm:s(c),disabled:n},p.a.createElement(C.a,{type:"primary",loading:n,disabled:n},"\u8bbe\u4e3a\u7ba1\u7406\u5458")),p.a.createElement(w.a,{title:"\u786e\u8ba4\u79fb\u9664\u6210\u5458 ".concat(c,"\uff1f"),onConfirm:o(c),disabled:n},p.a.createElement(C.a,{type:"primary",danger:!0,loading:n,disabled:n},"\u79fb\u9664")))):null))}return null}}))})),J=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).setStatePromise=Object(N.promisify)(s.setState),s.onAddMemberListener=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.componentDidMount();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),s.removeAccount=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,r,i,c,u,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.state,a=n.accounts,r=n.profiles,i=n.admins,c=a.filter((function(e){return e.username!==t})),u=r.filter((function(e){return null!==e&&e.username!==t})),m=i.filter((function(e){return e.username!==t})),e.next=6,s.setStatePromise({accounts:c,profiles:u,admins:m});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.addAdmin=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,i,c,u,m,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=s.state,a=n.accounts,i=n.admins,c=Array.from(i),u=Object(r.a)(a),e.prev=3,u.s();case 5:if((m=u.n()).done){e.next=12;break}if((l=m.value).username!==t){e.next=10;break}return c.push(l),e.abrupt("break",12);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),u.e(e.t0);case 17:return e.prev=17,u.f(),e.finish(17);case 20:return e.next=22,s.setStatePromise({admins:c});case 22:case"end":return e.stop()}}),e,null,[[3,14,17,20]])})));return function(t){return e.apply(this,arguments)}}(),s.removeAdmin=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.state.admins,a=n.filter((function(e){return e.username!==t})),e.next=4,s.setStatePromise({admins:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.loadIsAdmin=Object(i.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.match.params.id,e.next=3,W.d.isAdmin({id:Number.parseInt(t)});case 3:if(null===(n=e.sent)){e.next=8;break}return a=n.isAdmin,e.next=8,s.setStatePromise({isAdmin:a});case 8:case"end":return e.stop()}}),e)}))),s.loadAccounts=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.match.params.id,e.next=3,W.d.accounts({id:Number.parseInt(t)});case 3:if(null===(n=e.sent)){e.next=7;break}return e.next=7,s.setStatePromise({accounts:n});case 7:case"end":return e.stop()}}),e)}))),s.loadAdmins=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.match.params.id,e.next=3,W.d.admins({id:Number.parseInt(t)});case 3:if(null===(n=e.sent)){e.next=7;break}return e.next=7,s.setStatePromise({admins:n});case 7:case"end":return e.stop()}}),e)}))),s.loadProfiles=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.state.accounts,e.next=3,Promise.all(t.map((function(e){var t=e.username;return W.f.get({username:t})})));case 3:return n=e.sent,e.next=6,s.setStatePromise({profiles:n});case 6:case"end":return e.stop()}}),e)}))),s.onRemoveAccountConfirm=function(e){var t=s.props.match.params.id;return Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.setStatePromise({loading:!0});case 2:return n.next=4,W.d.removeAccounts({id:Number.parseInt(t)},[e]);case 4:if(null===n.sent){n.next=9;break}return T.a.success({message:"\u79fb\u9664\u6210\u5458\u6210\u529f"}),n.next=9,s.removeAccount(e);case 9:return n.next=11,s.setStatePromise({loading:!1});case 11:case"end":return n.stop()}}),n)})))},s.onSetAdminConfirm=function(e){var t=s.props.match.params.id;return Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.setStatePromise({loading:!0});case 2:return n.next=4,W.d.addAdmins({id:Number.parseInt(t)},[e]);case 4:if(null===n.sent){n.next=9;break}return T.a.success({message:"\u6210\u529f\u8bbe\u7f6e ".concat(e," \u4e3a\u7ba1\u7406\u5458")}),n.next=9,s.addAdmin(e);case 9:return n.next=11,s.setStatePromise({loading:!1});case 11:case"end":return n.stop()}}),n)})))},s.onRemoveAdminConfirm=function(e){var t=s.props.match.params.id;return Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.setStatePromise({loading:!0});case 2:return n.next=4,W.d.removeAdmins({id:Number.parseInt(t)},[e]);case 4:if(null===n.sent){n.next=9;break}return T.a.success({message:"\u6210\u529f\u64a4\u9500 ".concat(e," \u7684\u7ba1\u7406\u5458\u8eab\u4efd")}),n.next=9,s.removeAdmin(e);case 9:return n.next=11,s.setStatePromise({loading:!1});case 11:case"end":return n.stop()}}),n)})))},s.state={accounts:[],admins:[],profiles:[],loading:!0,isAdmin:!1},U.on(a.addMember,s.onAddMemberListener),s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,Promise.all([this.loadAccounts(),this.loadAdmins(),this.loadIsAdmin()]);case 4:return e.next=6,this.loadProfiles();case 6:return e.next=8,this.setStatePromise({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n,a){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props.match.params.id,s=t.match.params.id,r===s){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){U.removeListener(a.addMember,this.onAddMemberListener)}},{key:"render",value:function(){var e=this.state,t=e.profiles,n=e.loading,a=e.isAdmin,r=e.admins;return p.a.createElement(G,{profiles:t,loading:n,isAdmin:a,adminUsernames:r.map((function(e){return e.username})),onRemoveAccountConfirm:this.onRemoveAccountConfirm,onSetAdminConfirm:this.onSetAdminConfirm,onRemoveAdminConfirm:this.onRemoveAdminConfirm})}}]),n}(d.PureComponent),X=Object(I.f)(J)}}]);
//# sourceMappingURL=31.79f8560a.chunk.js.map