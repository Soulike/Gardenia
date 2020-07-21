(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[19],{1162:function(e,t,a){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},1163:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),o=a(1162),i=a.n(o);var s=r.a.memo((function(e){var t=e.children;return r.a.createElement("h2",{className:i.a.SettingsTitle},t)}))},1164:function(e,t,a){"use strict";var n=a(217),r=a(0),o=a.n(r),i=a(1133),s=a(1165),c=a.n(s);t.a=o.a.memo((function(e){var t=e.isPublic,a=Object(n.a)(e,["isPublic"]);return t?o.a.createElement(i.a,Object.assign({className:c.a.AccessibilityTag,color:"blue"},a),"\u516c\u5171"):o.a.createElement(i.a,Object.assign({className:c.a.AccessibilityTag,color:"gold"},a),"\u79c1\u4eba")}))},1165:function(e,t,a){e.exports={AccessibilityTag:"Style_AccessibilityTag__4cAHc"}},1191:function(e,t,a){"use strict";var n=a(1164);a.d(t,"a",(function(){return n.a}))},1213:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},o=a(16),i=function(e,t){return n.createElement(o.a,Object.assign({},e,{ref:t,icon:r}))};i.displayName="HomeOutlined";t.a=n.forwardRef(i)},1283:function(e,t,a){},1284:function(e,t,a){e.exports={RepositoryItem:"Style_RepositoryItem__3S19U",infoWrapper:"Style_infoWrapper__21Bg0",icon:"Style_icon__2v4YP",tag:"Style_tag__1PcJi"}},1368:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var n={};a.r(n),a.d(n,"repositoryChange",(function(){return T}));var r=a(1),o=a.n(r),i=a(3),s=a(10),c=a(11),u=a(20),l=a(19),m=a(0),p=a.n(m),d=a(1283),f=a.n(d),v=a(1163),h=a(1364),g=a(184),y=a(1123),b=a(105),E=a(1284),O=a.n(E),j=a(1213),k=a(261),x=a(25),S=a(1191);var R=p.a.memo((function(e){var t=e.repository,a=t.username,n=t.name,r=t.isPublic,o=e.onRemoveButtonClick,i=e.loading;return p.a.createElement(h.b.Item,null,p.a.createElement("div",{className:O.a.RepositoryItem},p.a.createElement("div",{className:O.a.infoWrapper},p.a.createElement("div",{className:O.a.icon},p.a.createElement(j.a,null)),p.a.createElement("div",{className:O.a.tag},p.a.createElement(S.a,{isPublic:r})),p.a.createElement("div",{className:O.a.repositoryName},p.a.createElement(k.a,{to:x.Function.generatePersonalCenterRoute({username:a})},a),"/",p.a.createElement(k.a,{to:x.Function.generateRepositoryCodeRoute({username:a,repository:n})},p.a.createElement("span",{style:{fontWeight:"bold"}},n)))),p.a.createElement("div",{className:O.a.buttonWrapper},p.a.createElement(y.a,{title:"\u786e\u8ba4\u4ece\u5c0f\u7ec4\u4e2d\u5220\u9664\u4ed3\u5e93 ".concat(a,"/").concat(n," \uff1f"),onConfirm:o,disabled:i},p.a.createElement(b.a,{type:"primary",danger:!0,disabled:i,loading:i},"\u4ece\u5c0f\u7ec4\u4e2d\u5220\u9664")))))})),_=a(62),C=a(70),P=a(38),w=a(328),N=new(a(145).EventEmitter),T="repositoryChange",I=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(C.promisify)(r.setState),r.onRemoveButtonClick=Object(i.a)(o.a.mark((function e(){var t,a,i,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,a=t.match.params.id,i=t.repository,s=i.username,c=i.name,e.next=3,r.setStatePromise({loading:!0});case 3:return e.next=5,P.d.removeRepositories({id:Number.parseInt(a)},[{username:s,name:c}]);case 5:return null!==e.sent&&(w.a.success({message:"\u4ed3\u5e93 ".concat(s,"/").concat(c," \u5df2\u4ece #").concat(a," \u5c0f\u7ec4\u4e2d\u5220\u9664")}),N.emit(n.repositoryChange)),e.next=9,r.setStatePromise({loading:!1});case 9:case"end":return e.stop()}}),e)}))),r.state={loading:!1},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.repository,t=this.state.loading;return p.a.createElement(R,{loading:t,onRemoveButtonClick:this.onRemoveButtonClick,repository:e})}}]),a}(m.PureComponent),W=Object(_.f)(I);var A=p.a.memo((function(e){var t=e.repositories,a=e.loading;return p.a.createElement(h.b,{loading:a,locale:{emptyText:p.a.createElement(g.a,{description:"\u5c0f\u7ec4\u5185\u6ca1\u6709\u4ed3\u5e93"})},dataSource:t,renderItem:function(e){return p.a.createElement(W,{repository:e,key:"".concat(e.username,"/").concat(e.name)})}})}));var B=p.a.memo((function(e){var t=e.repositories,a=e.loading;return p.a.createElement("div",{className:f.a.Repositories},p.a.createElement(v.a,null,"\u4ed3\u5e93\u7ba1\u7406"),p.a.createElement("div",{className:f.a.repositoryListWrapper},p.a.createElement(A,{repositories:t,loading:a})))})),H=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(C.promisify)(r.setState),r.onRepositoryChange=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.componentDidMount();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),r.loadRepositories=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params.id,e.next=3,P.d.repositories({id:Number.parseInt(t)});case 3:null!==(a=e.sent)&&r.setStatePromise({repositories:Array.from(a)});case 5:case"end":return e.stop()}}),e)}))),r.state={repositories:[],loading:!1},N.on(n.repositoryChange,r.onRepositoryChange),r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadRepositories();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,a,n){var r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props.match.params.id,i=t.match.params.id,r===i){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){N.removeListener(n.repositoryChange,this.onRepositoryChange)}},{key:"render",value:function(){var e=this.state,t=e.repositories,a=e.loading;return p.a.createElement(B,{repositories:t,loading:a})}}]),a}(m.PureComponent),V=Object(_.f)(H)}}]);
//# sourceMappingURL=19.979d7d30.chunk.js.map