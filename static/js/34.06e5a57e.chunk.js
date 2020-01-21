(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[34],{1077:function(e,t,a){e.exports={Repository:"Style_Repository__3C5oN",header:"Style_header__2LCJa",tabContent:"Style_tabContent__1JPyK",basicInfo:"Style_basicInfo__1CY_5",usernameAndName:"Style_usernameAndName__21Dhj"}},1290:function(e,t,a){"use strict";a.r(t);var n,r=a(4),s=a.n(r),o=a(36),i=a(48),c=a(89),l=a(88),u=a(90),m=a(0),p=a.n(m),E=(a(982),a(985)),b=(a(282),a(22)),y=a(1077),S=a.n(y),h=a(987),d=a(39),v=a(91);!function(e){e.CODE="CODE",e.ISSUES="ISSUES",e.PULL_REQUESTS="PULL_REQUESTS",e.SETTINGS="SETTINGS"}(n||(n={}));var g=n;var T=p.a.memo((function(e){var t=e.repository,a=t.username,n=t.name,r=t.isPublic,s=e.loading,o=e.onTabChange,i=e.tabActiveKey,c=e.showSettings,l=e.children;return s?null:p.a.createElement("div",{className:S.a.Repository},p.a.createElement("div",{className:S.a.header},p.a.createElement("div",{className:S.a.basicInfo},p.a.createElement(h.a,{isPublic:r}),p.a.createElement("div",{className:S.a.usernameAndName},p.a.createElement(d.b,{to:v.b.generatePersonalCenterRoute({username:a})},a)," / ",p.a.createElement(d.b,{to:v.b.generateRepositoryRoute({username:a,repository:n})},p.a.createElement("b",null,n))))),p.a.createElement(E.a,{defaultActiveKey:g.CODE,type:"card",className:S.a.tab,tabBarStyle:{padding:"0 calc(50% - 500px)",margin:"0"},onChange:o,activeKey:i},p.a.createElement(E.a.TabPane,{tab:p.a.createElement(p.a.Fragment,null,p.a.createElement(b.a,{type:"code"}),"\u4ee3\u7801"),key:g.CODE},p.a.createElement("div",{className:S.a.tabContent},l)),p.a.createElement(E.a.TabPane,{tab:p.a.createElement(p.a.Fragment,null,p.a.createElement(b.a,{type:"exclamation-circle"}),"Issues"),key:g.ISSUES},p.a.createElement("div",{className:S.a.tabContent},l)),p.a.createElement(E.a.TabPane,{tab:p.a.createElement(p.a.Fragment,null,p.a.createElement(b.a,{type:"pull-request"}),"Pull Requests"),key:g.PULL_REQUESTS},p.a.createElement("div",{className:S.a.tabContent},l)),c?p.a.createElement(E.a.TabPane,{tab:p.a.createElement(p.a.Fragment,null,p.a.createElement(b.a,{type:"setting"}),"\u8bbe\u7f6e"),key:g.SETTINGS},p.a.createElement("div",{className:S.a.tabContent},l)):null))})),f=a(283),_=a(210),R=a(3),P=a(100),I=a(169),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).setTitle=function(){var e=a.props.match.params,t=e.username,n=e.repository;document.title="".concat(t,"/").concat(n," - ").concat(I.a.NAME)},a.loadRepository=function(){var e,t,n,r;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=a.props.match.params,t=e.username,n=e.repository,o.next=3,s.a.awrap(_.e.repository({username:t},{name:n}));case 3:null!==(r=o.sent)&&a.setState({repository:r});case 5:case"end":return o.stop()}}))},a.loadVisitorProfile=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(_.c.get());case 2:null!==(e=t.sent)&&a.setState({visitorProfile:e});case 4:case"end":return t.stop()}}))},a.setTabActiveKey=function(){var e=a.props.match.path,t=R.PAGE_ID.REPOSITORY,n=t.REPOSITORY,r=t.CODE,s=t.ISSUES,o=t.PULL_REQUESTS,i=t.SETTINGS;switch(e){case R.PAGE_ID_TO_ROUTE[r]:case R.PAGE_ID_TO_ROUTE[n]:a.setState({tabActiveKey:g.CODE});break;case R.PAGE_ID_TO_ROUTE[s]:a.setState({tabActiveKey:g.ISSUES});break;case R.PAGE_ID_TO_ROUTE[o]:a.setState({tabActiveKey:g.PULL_REQUESTS});break;case R.PAGE_ID_TO_ROUTE[i.SETTINGS]:a.setState({tabActiveKey:g.SETTINGS})}},a.onTabChange=function(e){var t=a.props.history,n=a.state.repository,r=n.username,s=n.name;switch(e){case g.CODE:t.push(v.b.generateRepositoryRoute({username:r,repository:s}));break;case g.ISSUES:t.push(v.b.generateRepositoryIssuesRoute({username:r,repository:s}));break;case g.PULL_REQUESTS:t.push(v.b.generateRepositoryPullRequestsRoute({username:r,repository:s}));break;case g.SETTINGS:t.push(v.b.generateRepositorySettingsRoute({username:r,repository:s}));break;default:return}},a.state={repository:new f.e("","","",!0),loading:!0,tabActiveKey:g.CODE,visitorProfile:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.isLoggedIn,this.setTitle(),this.setTabActiveKey(),this.setState({loading:!0}),t.next=6,s.a.awrap(this.loadRepository());case 6:if(!e){t.next=9;break}return t.next=9,s.a.awrap(this.loadVisitorProfile());case 9:this.setState({loading:!1});case 10:case"end":return t.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(e,t,a){var n,r,o,i,c,l,u,m,p,E,b;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.props,r=n.location.pathname,o=n.isLoggedIn,i=n.match.params,c=i.repository,l=i.username,u=e.location.pathname,m=e.isLoggedIn,p=e.match.params,E=p.repository,b=p.username,c===E&&l===b){t.next=5;break}return t.next=5,s.a.awrap(this.componentDidMount());case 5:if(r!==u&&this.setTabActiveKey(),!o||m){t.next=9;break}return t.next=9,s.a.awrap(this.loadVisitorProfile());case 9:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.repository,a=e.loading,n=e.tabActiveKey,r=e.visitorProfile,s=this.props,o=s.children,i=s.isLoggedIn;return p.a.createElement(T,{showSettings:i&&null!==r&&t.username===r.username,repository:t,loading:a,onTabChange:this.onTabChange,tabActiveKey:n},o)}}]),t}(m.PureComponent),C=Object(P.b)((function(e){return{isLoggedIn:e.Root.isLoggedIn}}))(O);a.d(t,"default",(function(){return C}))},987:function(e,t,a){"use strict";a(977);var n=a(979),r=a(996),s=a(0),o=a.n(s);var i=o.a.memo((function(e){var t=e.isPublic,a=Object(r.a)(e,["isPublic"]);return t?o.a.createElement(n.a,Object.assign({color:"blue"},a),"\u516c\u5171"):o.a.createElement(n.a,Object.assign({color:"gold"},a),"\u79c1\u4eba")}));a.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=34.06e5a57e.chunk.js.map