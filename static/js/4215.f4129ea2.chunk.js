"use strict";(self.webpackChunksoulike_git=self.webpackChunksoulike_git||[]).push([[4215],{29188:function(S,m,t){t.d(m,{Z:function(){return U}});var e=t(89526),n={menuWrapper:"Style_menuWrapper__CPJGr",menu:"Style_menu__sQY7N",menuItem:"Style_menuItem__h9YDX",checkIconWrapper:"Style_checkIconWrapper__-0p03",name:"Style_name__lSjEP",fullListLinkWrapper:"Style_fullListLinkWrapper__aSwSN"},d=t(46044),c=t(73622),l=t(37109),i=t(30592),v=t(42218),O=t(1413),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 000 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]},name:"tag",theme:"outlined"},s=r,g=t(36593),E=function(h,o){return e.createElement(g.Z,(0,O.Z)((0,O.Z)({},h),{},{ref:o,icon:s}))};E.displayName="TagOutlined";var f=e.forwardRef(E),I=t(26190),R=t(24874),P=t(31439),H=t(18440),L=t(565),D=t(65092);function j(M){const h=e.createElement(v.Z,null),o=e.createElement(f,null),B=e.createElement(I.Z,null),p=10,T=10,{branches:k,tagNames:N,visible:K,currentBranchOrTagOrCommitHash:u,onButtonClick:Y,onBranchOrTagClickFactory:A,match:{params:{username:F,repositoryName:W}}}=M,z=k.map(a=>a.name),b=z.includes(u),V=N.includes(u),J=b?h:V?o:B,y=[],Z=[];if(b){y.push(u);let a=1;for(const C of z){if(a===T)break;C!==u&&(y.push(C),a++)}}else y.push(...z.slice(0,T));if(V){Z.push(u);let a=1;for(const C of N){if(a===p)break;C!==u&&(Z.push(C),a++)}}else Z.push(...N.slice(0,p));return e.createElement("div",{className:n.BranchOrTagMenu},e.createElement(d.Z,{placement:"bottomLeft",visible:K,trigger:["click"],content:e.createElement("div",{className:n.menuWrapper},e.createElement(c.Z,{defaultOpenKeys:["branch"],selectedKeys:[u],selectable:!1,className:n.menu,mode:"inline",inlineIndent:12,forceSubMenuRender:!0},e.createElement(c.Z.SubMenu,{title:e.createElement("b",null,"\u5206\u652F"),key:"branch",icon:h},k.length===0?e.createElement(l.Z,{description:"\u6682\u65E0\u5206\u652F",image:l.Z.PRESENTED_IMAGE_SIMPLE}):y.map(a=>e.createElement(c.Z.Item,{onClick:A(a),key:a},e.createElement("div",{className:n.menuItem},e.createElement("span",{className:n.checkIconWrapper},u===a?e.createElement(R.Z,null):null),e.createElement("span",{className:n.name},a))))),e.createElement(c.Z.Divider,null),e.createElement(c.Z.Item,null,e.createElement("div",{className:n.fullListLinkWrapper},e.createElement(L.rU,{to:H.Function.generateRepositoryBranchesRoute({username:F,repositoryName:W})},"\u67E5\u770B\u6240\u6709\u5206\u652F"))),e.createElement(c.Z.Divider,null),e.createElement(c.Z.SubMenu,{title:e.createElement("b",null,"\u6807\u7B7E"),key:"tag",icon:o},N.length===0?e.createElement(l.Z,{description:"\u6682\u65E0\u6807\u7B7E",image:l.Z.PRESENTED_IMAGE_SIMPLE}):Z.map(a=>e.createElement(c.Z.Item,{onClick:A(a),key:a},e.createElement("div",{className:n.menuItem},e.createElement("span",{className:n.checkIconWrapper},u===a?e.createElement(R.Z,null):null),e.createElement("span",{className:n.name},a))))),e.createElement(c.Z.Item,null,e.createElement("div",{className:n.fullListLinkWrapper},e.createElement(L.rU,{to:H.Function.generateRepositoryTagsRoute({username:F,repositoryName:W})},"\u67E5\u770B\u6240\u6709\u6807\u7B7E")))))},e.createElement(i.Z,{onClick:Y},J,u,e.createElement(P.Z,null))))}var G=e.memo((0,D.EN)(j));class x extends e.PureComponent{constructor(h){super(h);this.onButtonClick=()=>{const{visible:o}=this.state;this.setState({visible:!o})},this.onBranchOrTagClickFactory=o=>{const{onBranchOrTagClickFactory:B}=this.props;return p=>{this.setState({visible:!1});const T=B(o);T&&T(p)}},this.state={visible:!1}}render(){const{branches:h,tagNames:o,currentBranchOrTagOrCommitHash:B}=this.props,{visible:p}=this.state;return e.createElement(G,{visible:p,tagNames:o,branches:h,currentBranchOrTagOrCommitHash:B,onBranchOrTagClickFactory:this.onBranchOrTagClickFactory,onButtonClick:this.onButtonClick})}}var U=x},24215:function(S,m,t){t.r(m),t.d(m,{default:function(){return v}});var e=t(89526),n=t(65092),d=t(18440),c=t(76320),l=t(29188);class i extends e.PureComponent{constructor(){super(...arguments);this.onBranchOrTagClickFactory=r=>()=>{const{history:s,match:{params:{username:g,repositoryName:E,objectType:f,path:I}}}=this.props;return s.replace(d.Function.generateRepositoryCodeRoute({username:g,repositoryName:E,objectType:f||c.LP.TREE,commitHash:r,path:I}))}}render(){const{match:{params:{commitHash:r}},branches:s,tagNames:g}=this.props;let E="";if(r===void 0)for(const f of s)f.isDefault&&(E=f.name);return e.createElement(l.Z,{branches:s,tagNames:g,currentBranchOrTagOrCommitHash:r||E,onBranchOrTagClickFactory:this.onBranchOrTagClickFactory})}}var v=(0,n.EN)(i)},26190:function(S,m,t){t.d(m,{Z:function(){return v}});var e=t(1413),n=t(89526),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}}]},name:"barcode",theme:"outlined"},c=d,l=t(36593),i=function(r,s){return n.createElement(l.Z,(0,e.Z)((0,e.Z)({},r),{},{ref:s,icon:c}))};i.displayName="BarcodeOutlined";var v=n.forwardRef(i)},42218:function(S,m,t){t.d(m,{Z:function(){return v}});var e=t(1413),n=t(89526),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0034.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm96 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm408-491a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"branches",theme:"outlined"},c=d,l=t(36593),i=function(r,s){return n.createElement(l.Z,(0,e.Z)((0,e.Z)({},r),{},{ref:s,icon:c}))};i.displayName="BranchesOutlined";var v=n.forwardRef(i)}}]);

//# sourceMappingURL=4215.f4129ea2.chunk.js.map