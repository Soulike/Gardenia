(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[28],{1120:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(14);var s=n.a.memo((function(e){return n.a.createElement(i.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}));a.d(t,"a",(function(){return s}))},1132:function(e,t,a){e.exports={AccessibilityTag:"Style_AccessibilityTag__4cAHc"}},1137:function(e,t,a){"use strict";a(181);var r=a(55),n=a(1138),i=a(0),s=a.n(i),o=a(1132),c=a.n(o);var l=s.a.memo((function(e){var t=e.isPublic,a=Object(n.a)(e,["isPublic"]);return t?s.a.createElement(r.a,Object.assign({className:c.a.AccessibilityTag,color:"blue"},a),"\u516c\u5171"):s.a.createElement(r.a,Object.assign({className:c.a.AccessibilityTag,color:"gold"},a),"\u79c1\u4eba")}));a.d(t,"a",(function(){return l}))},1142:function(e,t,a){"use strict";a(1124);var r=a(1123),n=(a(505),a(342)),i=(a(339),a(103)),s=a(1127),o=a(0),c=a.n(o),l=a(1143),u=a.n(l),m=a(32),p=a(1137),d=a(1120);var b=function(e){var t=e.repositories,a=e.loading,o=e.showUsername;return c.a.createElement(r.a,{className:u.a.RepositoryList,dataSource:Object(s.a)(t),loading:a,locale:{emptyText:c.a.createElement(i.a,{description:"\u6ca1\u6709\u4ed3\u5e93"})},renderItem:function(e){var t=e.username,a=e.name,r=e.description,i=e.isPublic;return c.a.createElement(d.a,{className:u.a.repositoryWrapper,to:m.Function.generateRepositoryCodeRoute({username:t,repository:a})},c.a.createElement(n.a,{className:u.a.repository},c.a.createElement(n.a.Meta,{title:c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:u.a.tag},c.a.createElement(p.a,{isPublic:i})),o?"".concat(t,"/"):"",a),description:c.a.createElement("div",null,0===r.length?c.a.createElement("i",null,"\u6ca1\u6709\u63cf\u8ff0"):r)})))}})};a.d(t,"a",(function(){return b}))},1143:function(e,t,a){e.exports={RepositoryList:"Style_RepositoryList__3Ox2N",repositoryWrapper:"Style_repositoryWrapper__8uUYD",repository:"Style_repository__snu_K",tag:"Style_tag__3JMWU"}},1183:function(e,t,a){e.exports={Index:"Style_Index__3aRmg",alertWrapper:"Style_alertWrapper__1vm7c",description:"Style_description__Fp3il",memeWrapper:"Style_memeWrapper__2TD3N",meme:"Style_meme__gsx9j",repositoryWrapper:"Style_repositoryWrapper__mjMAI"}},1198:function(e,t,a){e.exports=a.p+"static/media/\u4f59\u88d5\u4f59\u88d5.4aa86cd4.jpg"},1340:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a.n(r),i=a(1127),s=a(7),o=a(1114),c=a(1115),l=a(1117),u=a(1116),m=a(1118),p=a(0),d=a.n(p),b=a(45),f=(a(340),a(157)),y=a(1183),g=a.n(y),E=a(1184),h=a.n(E),v=a(1142),_=a(330),k=a(1198),x=a.n(k);var j=function(e){var t=e.repositoryList,a=e.loadMore,r=e.loading,n=e.hasMore,i=e.onMemeDoubleClick,s=e.showMeme;return d.a.createElement("div",{className:g.a.Index},d.a.createElement("div",{className:g.a.alertWrapper},d.a.createElement(f.a,{type:"warning",message:"\u9879\u76ee\u4ecd\u5728\u5f00\u53d1\u4e2d",closable:!0,description:d.a.createElement("div",{className:g.a.description},d.a.createElement("div",{className:g.a.text},d.a.createElement("div",null,"\u672c\u9879\u76ee\u7531\u7ec3\u4e60\u65f6\u957f\u4e24\u5e74\u534a\u5e72\u5565\u5565\u4e0d\u884c\u5403\u996d\u7b2c\u4e00\u540d\u7684\u524d\u7aef\u5f00\u53d1\uff0c\u4e14\u540e\u7aef\u8fd0\u884c\u5728\u6bcf\u6708\u4ec5\u9700 9.5 \u5143\u4eba\u6c11\u5e01\u7684\u8fa3\u9e21\u670d\u52a1\u5668\u4e0a\u3002"),d.a.createElement("div",null,d.a.createElement("strong",null,"\u8bf7\u5927\u5bb6\u5907\u4efd\u597d\u81ea\u5df1\u7684\u4ee3\u7801"),"\uff0c\u51fa\u73b0 BUG \u8bf7",d.a.createElement(_.a,{href:"https://github.com/Soulike/Gardenia/issues"},"\u63d0 Issue"),"\u3002"),d.a.createElement("div",null,"\u7531\u4e8e\u4ecd\u5904\u4e8e\u5f00\u53d1\u72b6\u6001\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e0d\u517c\u5bb9\u66f4\u6539\u3002",d.a.createElement("strong",null,"\u51fa\u73b0\u95ee\u9898\u8bf7\u5148\u5c1d\u8bd5\u6e05\u9664\u7f13\u5b58\u5237\u65b0\u9875\u9762"),"\u3002"),d.a.createElement("div",null,"\u8bf7\u5404\u4f4d\u591a\u62c5\u5f85\uff0c\u7528\u6b63\u5e38\u7684\u59ff\u52bf\u4f7f\u7528\u672c\u5e73\u53f0\uff0c\u4e0d\u80dc\u611f\u8c22",d.a.createElement("span",{role:"img","aria-label":"emoji","aria-labelledby":"emoji"},"\ud83d\ude00"),"\u3002")),s?d.a.createElement("div",{className:g.a.memeWrapper,onDoubleClick:i},d.a.createElement("img",{src:x.a,alt:"meme",className:g.a.meme})):d.a.createElement("div",{className:g.a.memeWrapper})),banner:!0}),d.a.createElement(f.a,{type:"info",message:"Git \u81ea\u52a8\u4fdd\u5b58\u5bc6\u7801\u7684\u65b9\u6cd5",description:d.a.createElement("div",{className:g.a.text},d.a.createElement("div",null,"\u5728\u547d\u4ee4\u884c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53ef\u81ea\u52a8\u4fdd\u5b58\u5bc6\u7801\uff0c\u514d\u53bb\u6bcf\u6b21\u8f93\u5165\u5bc6\u7801\u7684\u9ebb\u70e6\u3002"),d.a.createElement("code",null,"git config --global credential.helper cache && git config --global credential.helper 'cache --timeout=31556926'"),d.a.createElement("div",null,"SSH \u8fde\u63a5\u65b9\u5f0f\u4ecd\u5728\u5f00\u53d1\u4e2d\uff0c\u7ed9\u5927\u5bb6\u5e26\u6765\u7684\u4e0d\u4fbf\u6df1\u8868\u6b49\u610f\u3002")),banner:!0})),d.a.createElement(h.a,{loadMore:a,initialLoad:!1,pageStart:1,hasMore:n},d.a.createElement(v.a,{repositories:t,loading:r,showUsername:!0})))},M=a(215),S=a(1139),w=a.n(S),N=a(1126),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setStatePromise=Object(N.promisify)(a.setState),a.forceUpdatePromise=Object(N.promisify)(a.forceUpdate),a.setTitle=function(){document.title=M.a.NAME},a.loadMoreRepositories=function(){var e=Object(s.a)(n.a.mark((function e(r){var s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.state.repositories,a.setState({loading:!0}),e.next=4,b.g.getRepositories((r-1)*t.PAGE_SIZE,r*t.PAGE_SIZE);case 4:if(o=e.sent,a.setState({loading:!1}),null===o){e.next=13;break}if(s.push.apply(s,Object(i.a)(o)),!(o.length<t.PAGE_SIZE)){e.next=11;break}return e.next=11,a.setStatePromise({hasMore:!1});case 11:return e.next=13,a.forceUpdatePromise();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onMemeDoubleClickFactory=function(){var e=0,t=new Audio(w.a.join("","mp3","rikairikai.mp3")),r=new Audio(w.a.join("","mp3","subeteorikaishidawa.mp3")),i=new Audio(w.a.join("","mp3","arikairikairikairikairikai.mp3")),o=new Audio(w.a.join("","mp3","wurusaiwurusaiwurusai.mp3")),c=new Audio(w.a.join("","mp3","damaraseteitadakimasu.mp3"));return Object(s.a)(n.a.mark((function s(){return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(1!==e){n.next=5;break}return n.next=3,t.play();case 3:n.next=24;break;case 5:if(2!==e){n.next=10;break}return n.next=8,r.play();case 8:n.next=24;break;case 10:if(3!==e){n.next=15;break}return n.next=13,i.play();case 13:n.next=24;break;case 15:if(!(e>3&&e<6)){n.next=20;break}return n.next=18,o.play();case 18:n.next=24;break;case 20:if(6!==e){n.next=24;break}return n.next=23,c.play();case 23:c.onended=function(){return a.setState({showMeme:!1})};case 24:e++;case 25:case"end":return n.stop()}}),s)})))},a.state={repositories:[],loading:!0,hasMore:!0,showMeme:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),e.next=3,this.loadMoreRepositories(1);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repositories,a=e.hasMore,r=e.loading,n=e.showMeme;return d.a.createElement(j,{onMemeDoubleClick:this.onMemeDoubleClickFactory(),repositoryList:t,loadMore:this.loadMoreRepositories,hasMore:a,loading:r,showMeme:n})}}]),t}(p.PureComponent);O.PAGE_SIZE=10;var A=O;a.d(t,"default",(function(){return A}))}}]);
//# sourceMappingURL=28.fd2c23b1.chunk.js.map