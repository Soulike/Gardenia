(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[44],{1242:function(e,r,t){"use strict";t.r(r);var n=t(33),a=t(38),c=t(90),o=t(89),i=t(91),u=t(0),s=t.n(u),h=t(102),l=t(92),p=t(931),m=t(944),b=function(e){function r(){var e,t;Object(n.a)(this,r);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(t=Object(c.a)(this,(e=Object(o.a)(r)).call.apply(e,[this].concat(i)))).onBranchClick=function(e){return function(){var r=t.props,n=r.history,a=r.match.params,c=a.username,o=a.repository,i=a.objectType,u=a.path,s=r.branches;n.replace(l.b.generateRepositoryCodeRoute({username:c,repository:o,objectType:i||p.a.TREE,branch:e||s[0],path:u}))}},t}return Object(i.a)(r,e),Object(a.a)(r,[{key:"render",value:function(){var e=this.props,r=e.match.params.branch,t=e.branches;return s.a.createElement(m.a,{branches:t,currentBranch:void 0===r||"master"===r?t[0]:r,onBranchClick:this.onBranchClick})}}]),r}(u.PureComponent),f=Object(h.f)(b);t.d(r,"default",(function(){return f}))},944:function(e,r,t){"use strict";t(950);var n=t(953),a=(t(413),t(133)),c=(t(276),t(20)),o=(t(208),t(41)),i=t(0),u=t.n(i);var s=u.a.memo((function(e){var r=e.branches,t=e.currentBranch,i=e.onBranchClick;return u.a.createElement(n.a,{trigger:["click"],overlay:u.a.createElement(o.a,null,r.map((function(e){return u.a.createElement(o.a.Item,{key:e,onClick:i(e)},e)})))},u.a.createElement(a.a,null,t,u.a.createElement(c.a,{type:"caret-down"})))}));t.d(r,"a",(function(){return s}))}}]);
//# sourceMappingURL=44.c13339b2.chunk.js.map