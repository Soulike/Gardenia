(window["webpackJsonpsoulike-git"]=window["webpackJsonpsoulike-git"]||[]).push([[6],{100:function(e,t,r){e.exports={Repository:"Style_Repository__3C5oN",header:"Style_header__2LCJa",basicInfo:"Style_basicInfo__1CY_5",usernameAndName:"Style_usernameAndName__21Dhj",description:"Style_description__1iOUk",buttonWrapper:"Style_buttonWrapper__3rI5T"}},117:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n=Symbol("SET_LOGGED_IN"),a=Symbol("SET_LOGGED_OUT")},140:function(e,t,r){e.exports={Root:"Style_Root__1cSwI",menu:"Style_menu__wkrK2",title:"Style_title__2hC_R",accountMenu:"Style_accountMenu__3DilR"}},145:function(e,t,r){"use strict";var n=r(46),a=r(62),c=function e(t,r,a,c,u){Object(n.a)(this,e),this.commitHash=void 0,this.committerName=void 0,this.committerEmail=void 0,this.time=void 0,this.message=void 0,this.commitHash=t,this.committerName=r,this.committerEmail=a,this.time=c,this.message=u},u=function(){function e(t,r,a,c){Object(n.a)(this,e),this.username=void 0,this.name=void 0,this.description=void 0,this.isPublic=void 0,this.username=t,this.name=r,this.description=a,this.isPublic=c}return Object(a.a)(e,null,[{key:"from",value:function(t){return new e(t.username,t.name,t.description,t.isPublic)}}]),e}(),s=r(297),i=r.n(s),o=function(){function e(t,r,a,c){Object(n.a)(this,e),this.username=void 0,this.nickname=void 0,this.avatar=void 0,this._email="",this.username=t,this.nickname=r,this.email=a,this.avatar=c}return Object(a.a)(e,[{key:"toJSON",value:function(){var e=this.username,t=this.nickname,r=this.avatar;return{username:e,nickname:t,email:this._email,avatar:r}}},{key:"email",get:function(){return this._email},set:function(e){if(!i.a.isEmail(e))throw new Error('Property "email" of a profile should be an email address');this._email=e}}],[{key:"from",value:function(t){return new e(t.username,t.nickname,t.email,t.avatar)}}]),e}();r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return o}))},172:function(e,t,r){"use strict";r.r(t),r.d(t,"setLoggedInAction",(function(){return a})),r.d(t,"setLoggedOutAction",(function(){return c}));var n=r(117);function a(){return{type:n.a}}function c(){return{type:n.b}}},173:function(e,t,r){"use strict";r.r(t),r.d(t,"setBranchAction",(function(){return a}));var n=r(178);function a(e){return{type:n.a,branch:e}}},178:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=Symbol("SET_BRANCH")},179:function(e,t,r){e.exports={InfoBar:"Style_InfoBar__2XaVV",info:"Style_info___q9kM"}},234:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"get",(function(){return f}));var a=r(12),c=r.n(a),u=(r(144),r(22)),s=r(26),i=r(31),o=r.n(i),l=r(85);var p,m=(p="/get",Object(l.a)("/profile".concat(p)));function f(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(t){var r,n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get(m,{params:{json:JSON.stringify({username:t})}});case 3:if(r=e.sent,n=r.data,a=n.isSuccessful,s=n.message,i=n.data,!a){e.next=12;break}return e.abrupt("return",i);case 12:return u.a.warn({message:s}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),u.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}r.d(t,"a",(function(){return n}))},235:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"getList",(function(){return d})),r.d(n,"create",(function(){return y})),r.d(n,"del",(function(){return O})),r.d(n,"getFile",(function(){return j}));var a=r(12),c=r.n(a),u=(r(144),r(22)),s=r(26),i=r(31),o=r.n(i),l=r(85);function p(e){return Object(l.a)("/repository".concat(e))}var m=p("/getList"),f=p("/create"),b=p("/del"),h=p("/getFile");function d(e,t,r){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(c.a.mark((function e(t,r,n){var a,s,i,l,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get(m,{params:{json:JSON.stringify({start:t,end:r,username:n})}});case 3:if(a=e.sent,s=a.data,i=s.isSuccessful,l=s.message,p=s.data,!i){e.next=12;break}return e.abrupt("return",p);case 12:return u.a.warn({message:l}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),u.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(c.a.mark((function e(t){var r,n,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post(f,t);case 3:if(r=e.sent,n=r.data,a=n.isSuccessful,s=n.message,!a){e.next=11;break}return e.abrupt("return",!0);case 11:return u.a.warn({message:s}),e.abrupt("return",null);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),u.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function O(e){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(c.a.mark((function e(t){var r,n,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post(b,{name:t});case 3:if(r=e.sent,n=r.data,a=n.isSuccessful,s=n.message,!a){e.next=11;break}return e.abrupt("return",!0);case 11:return u.a.warn({message:s}),e.abrupt("return",null);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),u.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function j(e,t,r,n){return k.apply(this,arguments)}function k(){return(k=Object(s.a)(c.a.mark((function e(t,r,n,a){var s,i,l,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get(h,{params:{json:JSON.stringify({username:t,repositoryName:r,filePath:n,hash:a})}});case 3:if(s=e.sent,i=s.data,l=i.isSuccessful,p=i.message,m=i.data,!l){e.next=12;break}return e.abrupt("return",m);case 12:return u.a.warn({message:p}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),u.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}r.d(t,"a",(function(){return n}))},236:function(e,t,r){"use strict";r(770);var n=r(228),a=r(326),c=r(0),u=r.n(c);var s=u.a.memo((function(e){var t=e.isPublic,r=Object(a.a)(e,["isPublic"]);return u.a.createElement(u.a.Fragment,null,t?u.a.createElement(n.a,Object.assign({color:"blue"},r),"\u516c\u5171"):u.a.createElement(n.a,Object.assign({color:"gold"},r),"\u79c1\u4eba"))}));r.d(t,"a",(function(){return s}))},321:function(e,t,r){},322:function(e,t,r){"use strict";r.r(t);var n=r(35),a=r(178);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e,t){switch(t.type){case a.a:return u({},e,{branch:t.branch});default:return u({},e)}},i=r(173),o=r(12),l=r.n(o),p=r(233),m=r(26),f=r(46),b=r(62),h=r(142),d=r(141),v=r(143),y=r(0),g=r.n(y),O=(r(768),r(325)),E=r(100),j=r.n(E),k=r(236),w=r(63),S=r(87),x=r(44),R=(r(229),r(32)),_=r(179),I=r.n(_);var P=g.a.memo((function(e){var t=e.commitCount,r=e.branchCount;return g.a.createElement("div",{className:I.a.InfoBar},g.a.createElement("div",{className:I.a.info},g.a.createElement(R.a,{type:"clock-circle"})," ",t," \u6b21\u63d0\u4ea4"),g.a.createElement("div",{className:I.a.info},g.a.createElement(R.a,{type:"branches"})," ",r," \u4e2a\u5206\u652f"))})),N=g.a.lazy((function(){return Promise.all([r.e(0),r.e(18),r.e(21)]).then(r.bind(null,1197))})),C=g.a.lazy((function(){return Promise.all([r.e(2),r.e(3),r.e(17)]).then(r.bind(null,1190))})),L=g.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(15)]).then(r.bind(null,1192))})),T=g.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(4),r.e(14)]).then(r.bind(null,1199))})),D=g.a.lazy((function(){return Promise.all([r.e(9),r.e(20)]).then(r.bind(null,1198))}));var A=Object(S.f)(g.a.memo((function(e){var t=e.repository,r=t.username,n=t.name,a=t.description,c=t.isPublic,u=e.loading,s=e.commitCount,i=e.branches,o=e.location.pathname,l=e.match.params.path,p=e.isEmpty;return g.a.createElement("div",{className:j.a.Repository},g.a.createElement(O.a,{loading:u,active:!0,paragraph:{rows:15}},g.a.createElement("div",{className:j.a.header},g.a.createElement("div",{className:j.a.basicInfo},g.a.createElement(k.a,{isPublic:c}),g.a.createElement("div",{className:j.a.usernameAndName},g.a.createElement(w.b,{to:x.c[x.a.PERSONAL_CENTER].replace(":username",r)},r)," / ",g.a.createElement(w.b,{to:x.c[x.a.REPOSITORY].replace(":username",r).replace(":repository",n).replace(":path*","")},g.a.createElement("b",null,n))))),g.a.createElement("div",{className:j.a.description},a),g.a.createElement(P,{commitCount:s,branchCount:i.length}),p?g.a.createElement(T,null):g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:j.a.buttonWrapper},g.a.createElement(N,{branches:i}),g.a.createElement(L,{username:r,repository:n})),void 0===l||"/"===o.slice(-1)?g.a.createElement(C,null):g.a.createElement(D,null))))}))),z=r(145),G=r(74),J=r(103),Y=function(e){function t(e){var r;return Object(f.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={repository:new z.c("","","",!0),branches:[],commitCount:0,loading:!0,isEmpty:!1},r}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(l.a.mark((function e(){var t,r,n,a,c,u,s,i,o,m,f,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params,r=t.username,n=t.repository,e.next=3,Promise.all([G.d.commitCount(r,n,"HEAD"),G.d.repository(r,n)]);case 3:if(a=e.sent,c=Object(p.a)(a,2),u=c[0],null!==(s=c[1])&&(this.setState({repository:s}),i=s.name,o=s.description,document.title="".concat(i," - ").concat(0===o.length?"Git Demo":o)),null===u){e.next=16;break}if(0!==(m=u.commitCount)){e.next=15;break}return this.setState({isEmpty:!0,loading:!1}),e.abrupt("return");case 15:this.setState({commitCount:m});case 16:return e.next=18,G.d.branch(r,n);case 18:null!==(f=e.sent)&&(b=this.props.setBranch,this.setState({branches:f}),b(f[0])),this.setState({loading:!1});case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(m.a)(l.a.mark((function e(t,r,n){var a,c,u,s,i,o,p,m,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.branch,c=this.props.branch,a===c){e.next=9;break}return u=this.props,s=u.match.params,i=s.username,o=s.repository,p=u.branch,e.next=6,G.d.commitCount(i,o,p);case 6:null!==(m=e.sent)&&(f=m.commitCount,this.setState({commitCount:f})),this.setState({loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repository,r=e.commitCount,n=e.branches,a=e.loading,c=e.isEmpty;return g.a.createElement(A,{repository:t,commitCount:r,loading:a,branches:n,isEmpty:c})}}]),t}(y.PureComponent),B={setBranch:i.setBranchAction},M=Object(S.f)(Object(J.b)((function(e){return{branch:e.Repository.branch}}),B)(Y));r.d(t,"default",(function(){return M})),r.d(t,"Reducer",(function(){return s})),r.d(t,"Action",(function(){return i}))},324:function(e,t,r){"use strict";r.r(t);var n=r(12),a=r.n(n),c=r(26),u=r(46),s=r(62),i=r(142),o=r(141),l=r(143),p=r(0),m=r.n(p),f=(r(229),r(32)),b=(r(329),r(69)),h=r(140),d=r.n(h),v=r(63),y=r(44);var g=m.a.memo((function(e){var t=e.children,r=e.isLoggedIn,n=e.username;return m.a.createElement("div",{className:d.a.Root},m.a.createElement(b.a,{mode:"horizontal",theme:"dark",className:d.a.menu,selectable:!1},m.a.createElement(b.a.Item,{className:d.a.title},m.a.createElement(v.b,{to:y.c[y.a.INDEX]},"Git Demo")),m.a.createElement(b.a.Item,{className:d.a.accountMenu},r?m.a.createElement(b.a,{mode:"horizontal",theme:"dark",selectable:!1},m.a.createElement(b.a.Item,null,m.a.createElement(v.b,{to:y.c[y.a.CREATE_REPOSITORY]},m.a.createElement(f.a,{type:"plus"}),"\u521b\u5efa\u4ed3\u5e93")),m.a.createElement(b.a.Item,null,m.a.createElement(v.b,{to:y.c[y.a.PERSONAL_CENTER].replace(":username",n)},m.a.createElement(f.a,{type:"user"}),"\u4e2a\u4eba\u4e2d\u5fc3"))):m.a.createElement(b.a,{mode:"horizontal",theme:"dark",selectable:!1},m.a.createElement(b.a.Item,null,m.a.createElement(v.b,{to:y.c[y.a.LOGIN]},m.a.createElement(f.a,{type:"login"}),"\u767b\u5f55")),m.a.createElement(b.a.Item,null,m.a.createElement(v.b,{to:y.c[y.a.REGISTER]},m.a.createElement(f.a,{type:"user-add"}),"\u6ce8\u518c"))))),t)})),O=r(103),E=r(145),j=r(74),k=r(172),w=function(e){function t(e){var r;return Object(u.a)(this,t),(r=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={profile:new E.b("","","example@example.com","")},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.checkSession();case 2:if(null===(t=e.sent)||!t.isValid){e.next=10;break}return(0,this.props.setLoggedIn)(),e.next=8,j.b.get();case 8:null!==(r=e.sent)&&this.setState({profile:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(c.a)(a.a.mark((function e(t,r,n){var c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=this.props.isLoggedIn,t.isLoggedIn||!c){e.next=7;break}return e.next=5,j.b.get();case 5:null!==(u=e.sent)&&this.setState({profile:u});case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.children,r=e.isLoggedIn,n=this.state.profile.username;return m.a.createElement(g,{isLoggedIn:r,username:n},t)}}]),t}(p.PureComponent),S={setLoggedIn:k.setLoggedInAction},x=Object(O.b)((function(e){return{isLoggedIn:e.Root.isLoggedIn}}),S)(w),R=r(35),_=r(117);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(r,!0).forEach((function(t){Object(R.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e,t){switch(t.type){case _.a:return P({},e,{isLoggedIn:!0});case _.b:return P({},e,{isLoggedIn:!1});default:return P({},e)}};r.d(t,"Reducer",(function(){return N})),r.d(t,"Action",(function(){return k}));t.default=x},331:function(e,t,r){e.exports=r(772)},44:function(e,t,r){"use strict";var n,a,c={INDEX:"INDEX",LOGIN:"LOGIN",REGISTER:"REGISTER",CREATE_REPOSITORY:"CREATE_REPOSITORY",PERSONAL_CENTER:"PERSONAL_CENTER",REPOSITORY:"REPOSITORY"},u=r(35),s=r(0),i=r.n(s),o=i.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(5),r.e(12)]).then(r.bind(null,1194))})),l=i.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(5),r.e(13)]).then(r.bind(null,1195))})),p=i.a.lazy((function(){return Promise.all([r.e(2),r.e(3),r.e(4),r.e(10)]).then(r.bind(null,1196))})),m=i.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(16)]).then(r.bind(null,1191))})),f=i.a.lazy((function(){return Promise.all([r.e(2),r.e(3),r.e(4),r.e(11)]).then(r.bind(null,1200))})),b=i.a.lazy((function(){return Promise.resolve().then(r.bind(null,322))})),h=(n={},Object(u.a)(n,c.INDEX,p),Object(u.a)(n,c.LOGIN,o),Object(u.a)(n,c.REGISTER,l),Object(u.a)(n,c.CREATE_REPOSITORY,m),Object(u.a)(n,c.PERSONAL_CENTER,f),Object(u.a)(n,c.REPOSITORY,b),n),d=(a={},Object(u.a)(a,c.INDEX,"/"),Object(u.a)(a,c.LOGIN,"/login"),Object(u.a)(a,c.REGISTER,"/register"),Object(u.a)(a,c.CREATE_REPOSITORY,"/createRepository"),Object(u.a)(a,c.PERSONAL_CENTER,"/:username"),Object(u.a)(a,c.REPOSITORY,"/:username/:repository/:path*"),a);r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return d}))},626:function(e,t,r){},74:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"login",(function(){return d})),r.d(n,"register",(function(){return y})),r.d(n,"checkSession",(function(){return O}));var a={};r.r(a),r.d(a,"repository",(function(){return I})),r.d(a,"branch",(function(){return N})),r.d(a,"lastCommit",(function(){return L})),r.d(a,"directory",(function(){return D})),r.d(a,"commitCount",(function(){return z}));var c=r(31),u=r.n(c);u.a.defaults.timeout=5e3,u.a.defaults.validateStatus=function(){return!0};var s=r(12),i=r.n(s),o=(r(144),r(22)),l=r(26),p=r(85);function m(e){return Object(p.a)("/account".concat(e))}var f=m("/login"),b=m("/register"),h=m("/checkSession");function d(e,t){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(i.a.mark((function e(t,r){var n,a,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post(f,{username:t,hash:r});case 3:if(n=e.sent,a=n.data,c=a.isSuccessful,s=a.message,!c){e.next=11;break}return e.abrupt("return",!0);case 11:return o.a.warn({message:s}),e.abrupt("return",null);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function y(e,t,r){return g.apply(this,arguments)}function g(){return(g=Object(l.a)(i.a.mark((function e(t,r,n){var a,c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post(b,{username:t,hash:r,email:n});case 3:if(a=e.sent,c=a.data,s=c.isSuccessful,l=c.message,!s){e.next=11;break}return e.abrupt("return",!0);case 11:return o.a.warn({message:l}),e.abrupt("return",null);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function O(){return E.apply(this,arguments)}function E(){return(E=Object(l.a)(i.a.mark((function e(){var t,r,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(h);case 3:if(t=e.sent,r=t.data,n=r.isSuccessful,a=r.data,!n){e.next=11;break}return e.abrupt("return",a);case 11:return e.abrupt("return",null);case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}var j=r(235);function k(e){return Object(p.a)("/repositoryInfo".concat(e))}var w=k("/repository"),S=k("/branch"),x=k("/lastCommit"),R=k("/directory"),_=k("/commitCount");function I(e,t){return P.apply(this,arguments)}function P(){return(P=Object(l.a)(i.a.mark((function e(t,r){var n,a,c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(w,{params:{json:JSON.stringify({username:t,name:r})}});case 3:if(n=e.sent,a=n.data,c=a.isSuccessful,s=a.message,l=a.data,!c){e.next=12;break}return e.abrupt("return",l);case 12:return o.a.warn({message:s}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function N(e,t){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(i.a.mark((function e(t,r){var n,a,c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(S,{params:{json:JSON.stringify({username:t,name:r})}});case 3:if(n=e.sent,a=n.data,c=a.isSuccessful,s=a.message,l=a.data,!c){e.next=12;break}return e.abrupt("return",l);case 12:return o.a.warn({message:s}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function L(e,t,r,n){return T.apply(this,arguments)}function T(){return(T=Object(l.a)(i.a.mark((function e(t,r,n,a){var c,s,l,p,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(x,{params:{json:JSON.stringify({username:t,name:r,branch:n,file:a})}});case 3:if(c=e.sent,s=c.data,l=s.isSuccessful,p=s.message,m=s.data,!l){e.next=12;break}return e.abrupt("return",m);case 12:return o.a.warn({message:p}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function D(e,t,r,n){return A.apply(this,arguments)}function A(){return(A=Object(l.a)(i.a.mark((function e(t,r,n,a){var c,s,l,p,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(R,{params:{json:JSON.stringify({username:t,name:r,branch:n,path:a})}});case 3:if(c=e.sent,s=c.data,l=s.isSuccessful,p=s.message,m=s.data,!l){e.next=12;break}return e.abrupt("return",m);case 12:return o.a.warn({message:p}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function z(e,t,r){return G.apply(this,arguments)}function G(){return(G=Object(l.a)(i.a.mark((function e(t,r,n){var a,c,s,l,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(_,{params:{json:JSON.stringify({username:t,name:r,branch:n})}});case 3:if(a=e.sent,c=a.data,s=c.isSuccessful,l=c.message,p=c.data,!s){e.next=12;break}return e.abrupt("return",p);case 12:return o.a.warn({message:l}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}var J=r(234);r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return j.a})),r.d(t,"d",(function(){return a})),r.d(t,"b",(function(){return J.a}))},772:function(e,t,r){"use strict";r.r(t);r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(343),r(344),r(345),r(346),r(347),r(348),r(349),r(350),r(351),r(352),r(353),r(354),r(355),r(356),r(357),r(358),r(149),r(359),r(360),r(361),r(362),r(363),r(364),r(365),r(366),r(367),r(368),r(369),r(370),r(371),r(372),r(373),r(374),r(375),r(376),r(377),r(379),r(380),r(382),r(383),r(384),r(385),r(195),r(386),r(387),r(388),r(389),r(390),r(391),r(392),r(393),r(394),r(395),r(396),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(417),r(418),r(419),r(420),r(421),r(422),r(423),r(424),r(425),r(426),r(427),r(428),r(429),r(430),r(431),r(432),r(433),r(434),r(435),r(436),r(437),r(438),r(440),r(441),r(442),r(443),r(444),r(445),r(446),r(448),r(449),r(450),r(451),r(452),r(453),r(454),r(455),r(456),r(457),r(458),r(459),r(460),r(461),r(462),r(269),r(463),r(464),r(465),r(466),r(270),r(467),r(468),r(469),r(470),r(471),r(472),r(473),r(474),r(475),r(476),r(477),r(478),r(479),r(480),r(481),r(482),r(483),r(484),r(485),r(486),r(487),r(488),r(489),r(490),r(491),r(492),r(493),r(494),r(495),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(505),r(506),r(507),r(508),r(509),r(510),r(511),r(512),r(513),r(514),r(515),r(516),r(517),r(518),r(519),r(520),r(521),r(522),r(523),r(524),r(525),r(205),r(526),r(527),r(528),r(529),r(530),r(531),r(532),r(533),r(534),r(535),r(536),r(537),r(538),r(539),r(540),r(542),r(543),r(544),r(545),r(546),r(547),r(548),r(549),r(550),r(551),r(552),r(553),r(554),r(555),r(556),r(557),r(558),r(559),r(560),r(561),r(562),r(563),r(564),r(565),r(566),r(568),r(569),r(570),r(571),r(572),r(573),r(574),r(575),r(576),r(577),r(578),r(579),r(580),r(581),r(582),r(583),r(584),r(585),r(586),r(587),r(588),r(589),r(590),r(591),r(592),r(593),r(594),r(595),r(596),r(597),r(598),r(599),r(602),r(603),r(604),r(605),r(606),r(607),r(608),r(609),r(610),r(611),r(612),r(613),r(614),r(615),r(616),r(617),r(619),r(280),r(620);var n=r(29),a=r(0),c=r.n(a),u=r(13),s=r.n(u),i=(r(626),r(103)),o=r(99),l=r(324),p=r(322),m=Object(o.d)(o.a.apply(void 0,[])),f=Object(o.c)({Root:l.Reducer,Repository:p.Reducer}),b=Object(o.e)(f,{Root:{isLoggedIn:!1},Repository:{branch:""}},m),h=r(321),d=r.n(h);var v=c.a.memo((function(){return c.a.createElement("div",{className:d.a.Loading})})),y=r(138);r.n(y).a.locale("zh-cn");var g=r(323);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=c.a.lazy((function(){return r.e(19).then(r.bind(null,1193))}));s.a.render(c.a.createElement(a.Suspense,{fallback:c.a.createElement(v,null)},c.a.createElement(i.a,{store:b},c.a.createElement(n.b,{locale:g.a},c.a.createElement(O,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,t,r){"use strict";function n(e){return"/server".concat(e)}r.d(t,"a",(function(){return n}))}},[[331,7,8]]]);
//# sourceMappingURL=main.fa538850.chunk.js.map