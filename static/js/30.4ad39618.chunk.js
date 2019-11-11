(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[30],{1050:function(e,t,a){e.exports={Repository:"Style_Repository__3C5oN",header:"Style_header__2LCJa",tabContent:"Style_tabContent__1JPyK",basicInfo:"Style_basicInfo__1CY_5",usernameAndName:"Style_usernameAndName__21Dhj"}},1260:function(e,t,a){"use strict";a.r(t);var n,r=a(4),s=a.n(r),o=a(9),i=a(50),c=a(73),u=a(270),l=a(269),m=a(271),p=a(0),E=a.n(p),b=(a(960),a(969)),S=(a(411),a(38)),y=a(1050),h=a.n(y),d=a(970),v=a(62),f=a(116);!function(e){e.CODE="CODE",e.ISSUES="ISSUES",e.PULL_REQUESTS="PULL_REQUESTS",e.SETTINGS="SETTINGS"}(n||(n={}));var g=n;var T=E.a.memo((function(e){var t=e.repository,a=t.username,n=t.name,r=t.isPublic,s=e.loading,o=e.onTabChange,i=e.tabActiveKey,c=e.showSettings,u=e.children;return s?null:E.a.createElement("div",{className:h.a.Repository},E.a.createElement("div",{className:h.a.header},E.a.createElement("div",{className:h.a.basicInfo},E.a.createElement(d.a,{isPublic:r}),E.a.createElement("div",{className:h.a.usernameAndName},E.a.createElement(v.b,{to:f.b.generatePersonalCenterRoute({username:a})},a)," / ",E.a.createElement(v.b,{to:f.b.generateRepositoryRoute({username:a,repository:n})},E.a.createElement("b",null,n))))),E.a.createElement(b.a,{defaultActiveKey:g.CODE,type:"card",className:h.a.tab,tabBarStyle:{padding:"0 calc(50% - 500px)",margin:"0"},onChange:o,activeKey:i},E.a.createElement(b.a.TabPane,{tab:E.a.createElement(E.a.Fragment,null,E.a.createElement(S.a,{type:"code"}),"\u4ee3\u7801"),key:g.CODE},E.a.createElement("div",{className:h.a.tabContent},u)),E.a.createElement(b.a.TabPane,{tab:E.a.createElement(E.a.Fragment,null,E.a.createElement(S.a,{type:"exclamation-circle"}),"Issues"),key:g.ISSUES},E.a.createElement("div",{className:h.a.tabContent},u)),E.a.createElement(b.a.TabPane,{tab:E.a.createElement(E.a.Fragment,null,E.a.createElement(S.a,{type:"pull-request"}),"Pull Requests"),key:g.PULL_REQUESTS},E.a.createElement("div",{className:h.a.tabContent},u)),c?E.a.createElement(b.a.TabPane,{tab:E.a.createElement(E.a.Fragment,null,E.a.createElement(S.a,{type:"setting"}),"\u8bbe\u7f6e"),key:g.SETTINGS},E.a.createElement("div",{className:h.a.tabContent},u)):null))})),_=a(272),O=a(164),R=a(3),P=a(199),I=a(273),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).setTitle=function(){var e=a.props.match.params,t=e.username,n=e.repository;document.title="".concat(t,"/").concat(n," - ").concat(I.a.NAME)},a.loadRepository=Object(o.a)(s.a.mark((function e(){var t,n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,r=t.repository,e.next=3,O.e.repository({username:n},{name:r});case 3:null!==(o=e.sent)&&a.setState({repository:o});case 5:case"end":return e.stop()}}),e)}))),a.loadVisitorProfile=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.c.get();case 2:null!==(t=e.sent)&&a.setState({visitorProfile:t});case 4:case"end":return e.stop()}}),e)}))),a.setTabActiveKey=function(){var e=a.props.match.path,t=R.PAGE_ID.REPOSITORY,n=t.REPOSITORY,r=t.CODE,s=t.ISSUES,o=t.PULL_REQUESTS,i=t.SETTINGS;switch(e){case R.PAGE_ID_TO_ROUTE[r]:case R.PAGE_ID_TO_ROUTE[n]:a.setState({tabActiveKey:g.CODE});break;case R.PAGE_ID_TO_ROUTE[s]:a.setState({tabActiveKey:g.ISSUES});break;case R.PAGE_ID_TO_ROUTE[o]:a.setState({tabActiveKey:g.PULL_REQUESTS});break;case R.PAGE_ID_TO_ROUTE[i.SETTINGS]:a.setState({tabActiveKey:g.SETTINGS})}},a.onTabChange=function(e){var t=a.props.history,n=a.state.repository,r=n.username,s=n.name;switch(e){case g.CODE:t.push(f.b.generateRepositoryRoute({username:r,repository:s}));break;case g.ISSUES:t.push(f.b.generateRepositoryIssuesRoute({username:r,repository:s}));break;case g.PULL_REQUESTS:t.push(f.b.generateRepositoryPullRequestsRoute({username:r,repository:s}));break;case g.SETTINGS:t.push(f.b.generateRepositorySettingsRoute({username:r,repository:s}));break;default:return}},a.state={repository:new _.e("","","",!0),loading:!0,tabActiveKey:g.CODE,visitorProfile:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.isLoggedIn,this.setTitle(),this.setTabActiveKey(),this.setState({loading:!0}),e.next=6,this.loadRepository();case 6:if(!t){e.next=9;break}return e.next=9,this.loadVisitorProfile();case 9:this.setState({loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(s.a.mark((function e(t,a,n){var r,o,i,c,u,l,m,p,E,b,S;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,o=r.location.pathname,i=r.isLoggedIn,c=r.match.params,u=c.repository,l=c.username,m=t.location.pathname,p=t.isLoggedIn,E=t.match.params,b=E.repository,S=E.username,u===b&&l===S){e.next=5;break}return e.next=5,this.componentDidMount();case 5:if(o!==m&&this.setTabActiveKey(),!i||p){e.next=9;break}return e.next=9,this.loadVisitorProfile();case 9:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repository,a=e.loading,n=e.tabActiveKey,r=e.visitorProfile,s=this.props,o=s.children,i=s.isLoggedIn;return E.a.createElement(T,{showSettings:i&&null!==r&&t.username===r.username,repository:t,loading:a,onTabChange:this.onTabChange,tabActiveKey:n},o)}}]),t}(p.PureComponent),C=Object(P.b)((function(e){return{isLoggedIn:e.Root.isLoggedIn}}))(k);a.d(t,"default",(function(){return C}))},970:function(e,t,a){"use strict";a(957);var n=a(958),r=a(977),s=a(0),o=a.n(s);var i=o.a.memo((function(e){var t=e.isPublic,a=Object(r.a)(e,["isPublic"]);return t?o.a.createElement(n.a,Object.assign({color:"blue"},a),"\u516c\u5171"):o.a.createElement(n.a,Object.assign({color:"gold"},a),"\u79c1\u4eba")}));a.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=30.4ad39618.chunk.js.map