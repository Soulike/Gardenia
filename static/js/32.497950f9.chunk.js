(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[32],{647:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(7);var i=r.a.memo((function(e){return r.a.createElement(s.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}));a.d(t,"a",(function(){return i}))},756:function(e,t,a){e.exports={Members:"Style_Members__1A1TA",cardContent:"Style_cardContent__3XM0M",titleWrapper:"Style_titleWrapper__30lrm",title:"Style_title__BuxVP"}},809:function(e,t,a){"use strict";a.r(t);a(52);var n=a(22),r=a(0),s=a.n(r),i=(a(652),a(651)),o=(a(324),a(211)),l=(a(215),a(90)),c=(a(51),a(14)),m=(a(210),a(58)),u=a(756),d=a.n(u),p=a(20),f=a(628),h=a(647);var b=s.a.memo((function(e){const{profiles:t,loading:a,onRemoveAccountConfirm:n,isAdmin:r}=e;return s.a.createElement("div",{className:d.a.Members},s.a.createElement(i.a,{loading:a,locale:{emptyText:s.a.createElement(m.a,{description:"\u6ca1\u6709\u6210\u5458"})},dataSource:[...t],renderItem:e=>{if(null!==e){const{nickname:t,username:a}=e;return s.a.createElement(o.a,{size:"small"},s.a.createElement("div",{className:d.a.cardContent},s.a.createElement("div",{className:d.a.titleWrapper},s.a.createElement(f.a,null),s.a.createElement(h.a,{to:p.Function.generatePersonalCenterRoute({username:a}),className:d.a.title},t,"(",a,")")),r?s.a.createElement("div",{className:d.a.buttonWrapper},s.a.createElement(l.a,{title:"\u786e\u8ba4\u79fb\u9664\u6210\u5458 ".concat(t,"\uff1f"),onConfirm:n(a)},s.a.createElement(c.a,{type:"danger"},"\u79fb\u9664"))):null))}return null}}))})),A=a(76),g=a(23);class v extends r.PureComponent{constructor(e){super(e),this.loadMemberProfiles=async()=>{const{match:{params:{id:e}}}=this.props,t=await g.c.accounts({id:Number.parseInt(e)});if(null!==t){const e=await Promise.all(t.map(({username:e})=>g.e.get({username:e})));this.setState({profiles:e})}},this.loadIsAdmin=async()=>{const{match:{params:{id:e}}}=this.props,t=await g.c.isAdmin({id:Number.parseInt(e)});if(null!==t){const{isAdmin:e}=t;this.setState({isAdmin:e})}},this.onRemoveAccountConfirm=e=>{const{match:{params:{id:t}}}=this.props;return async()=>{null!==await g.c.removeAccounts({id:Number.parseInt(t)},[e])&&(n.a.success({message:"\u79fb\u9664\u6210\u5458\u6210\u529f"}),await this.loadMemberProfiles())}},this.state={profiles:[],loading:!0,isAdmin:!1}}async componentDidMount(){this.setState({loading:!0}),await Promise.all([this.loadMemberProfiles(),this.loadIsAdmin()]),this.setState({loading:!1})}render(){const{profiles:e,loading:t,isAdmin:a}=this.state;return s.a.createElement(b,{profiles:e,loading:t,isAdmin:a,onRemoveAccountConfirm:this.onRemoveAccountConfirm})}}var E=Object(A.f)(v);a.d(t,"default",(function(){return E}))}}]);
//# sourceMappingURL=32.497950f9.chunk.js.map