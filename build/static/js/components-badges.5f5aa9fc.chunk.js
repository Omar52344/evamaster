(this.webpackJsonpeva=this.webpackJsonpeva||[]).push([[38],{109:function(e,a,t){"use strict";var l=t(1),c=t.n(l),r=t(114),n=t(115),s=t(81),m=t(105),o=t(4),i=function(e){return"/"+e===o.a?c.a.createElement(m.a,{id:"menu.home"}):c.a.createElement(m.a,{id:"menu.".concat(e)})},d=function(e,a,t){return e.split(a)[0]+a},b=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,l){return c.a.createElement(n.a,{key:l,active:t.length===l+1},t.length!==l+1?c.a.createElement(s.b,{to:"/".concat(d(a,e))},i(e)):i(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement("h1",null,c.a.createElement(m.a,{id:a})),c.a.createElement(b,{match:t}))}},114:function(e,a,t){"use strict";var l=t(5),c=t(11),r=t(1),n=t.n(r),s=t(17),m=t.n(s),o=t(102),i=t.n(o),d=t(103),b={tag:d.tagPropType,listTag:d.tagPropType,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,children:m.a.node,"aria-label":m.a.string},u=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,s=e.children,m=e.tag,o=e.listTag,b=e["aria-label"],u=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),E=Object(d.mapToCssModules)(i()(a),r),g=Object(d.mapToCssModules)(i()("breadcrumb",t),r);return n.a.createElement(m,Object(l.a)({},u,{className:E,"aria-label":b}),n.a.createElement(o,{className:g},s))};u.propTypes=b,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},115:function(e,a,t){"use strict";var l=t(5),c=t(11),r=t(1),n=t.n(r),s=t(17),m=t.n(s),o=t(102),i=t.n(o),d=t(103),b={tag:d.tagPropType,active:m.a.bool,className:m.a.string,cssModule:m.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.active,s=e.tag,m=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(d.mapToCssModules)(i()(a,!!r&&"active","breadcrumb-item"),t);return n.a.createElement(s,Object(l.a)({},m,{className:o,"aria-current":r?"page":void 0}))};u.propTypes=b,u.defaultProps={tag:"li"},a.a=u},117:function(e,a,t){"use strict";var l=t(5),c=t(11),r=t(1),n=t.n(r),s=t(17),m=t.n(s),o=t(102),i=t.n(o),d=t(103),b={tag:d.tagPropType,inverse:m.a.bool,color:m.a.string,body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},u=function(e){var a=e.className,t=e.cssModule,r=e.color,s=e.body,m=e.inverse,o=e.outline,b=e.tag,u=e.innerRef,E=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(d.mapToCssModules)(i()(a,"card",!!m&&"text-white",!!s&&"card-body",!!r&&(o?"border":"bg")+"-"+r),t);return n.a.createElement(b,Object(l.a)({},E,{className:g,ref:u}))};u.propTypes=b,u.defaultProps={tag:"div"},a.a=u},119:function(e,a,t){"use strict";var l=t(5),c=t(11),r=t(1),n=t.n(r),s=t(17),m=t.n(s),o=t(102),i=t.n(o),d=t(103),b={tag:d.tagPropType,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},u=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,s=e.tag,m=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(d.mapToCssModules)(i()(a,"card-body"),t);return n.a.createElement(s,Object(l.a)({},m,{className:o,ref:r}))};u.propTypes=b,u.defaultProps={tag:"div"},a.a=u},122:function(e,a,t){"use strict";var l=t(5),c=t(11),r=t(1),n=t.n(r),s=t(17),m=t.n(s),o=t(102),i=t.n(o),d=t(103),b={tag:d.tagPropType,className:m.a.string,cssModule:m.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.tag,s=Object(c.a)(e,["className","cssModule","tag"]),m=Object(d.mapToCssModules)(i()(a,"card-title"),t);return n.a.createElement(r,Object(l.a)({},s,{className:m}))};u.propTypes=b,u.defaultProps={tag:"div"},a.a=u},170:function(e,a,t){"use strict";var l=t(5),c=t(11),r=t(1),n=t.n(r),s=t(17),m=t.n(s),o=t(102),i=t.n(o),d=t(103),b={color:m.a.string,pill:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),children:m.a.node,className:m.a.string,cssModule:m.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.color,s=e.innerRef,m=e.pill,o=e.tag,b=Object(c.a)(e,["className","cssModule","color","innerRef","pill","tag"]),u=Object(d.mapToCssModules)(i()(a,"badge","badge-"+r,!!m&&"badge-pill"),t);return b.href&&"span"===o&&(o="a"),n.a.createElement(o,Object(l.a)({},b,{className:u,ref:s}))};u.propTypes=b,u.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=u},999:function(e,a,t){"use strict";t.r(a);var l=t(1),c=t.n(l),r=t(315),n=t(117),s=t(119),m=t(122),o=t(170),i=t(263),d=t(105),b=t(108),u=t(109);a.default=function(e){var a=e.match;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,c.a.createElement(b.a,{xxs:"12"},c.a.createElement(u.a,{heading:"menu.badges",match:a}),c.a.createElement(b.b,{className:"mb-5"}))),c.a.createElement(r.a,null,c.a.createElement(b.a,{xxs:"12",className:"mb-4"},c.a.createElement(n.a,null,c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement(d.a,{id:"badge.sizes"})),c.a.createElement("h1",null,"Example Heading ",c.a.createElement(o.a,{color:"secondary"},"New")),c.a.createElement("h2",null,"Example Heading ",c.a.createElement(o.a,{color:"secondary"},"New")),c.a.createElement("h3",null,"Example Heading ",c.a.createElement(o.a,{color:"secondary"},"New")),c.a.createElement("h4",null,"Example Heading ",c.a.createElement(o.a,{color:"secondary"},"New")),c.a.createElement("h5",null,"Example Heading ",c.a.createElement(o.a,{color:"secondary"},"New")),c.a.createElement("h6",null,"Example Heading ",c.a.createElement(o.a,{color:"secondary"},"New"))))),c.a.createElement(b.a,{xxs:"12",className:"mb-4"},c.a.createElement(n.a,null,c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement(d.a,{id:"badge.colors"})),c.a.createElement(o.a,{color:"primary",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.primary"}))," ",c.a.createElement(o.a,{color:"secondary",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.secondary"}))," ",c.a.createElement(o.a,{color:"success",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.success"}))," ",c.a.createElement(o.a,{color:"danger",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.danger"}))," ",c.a.createElement(o.a,{color:"warning",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.warning"}))," ",c.a.createElement(o.a,{color:"info",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.info"}))," ",c.a.createElement(o.a,{color:"light",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.light"}))," ",c.a.createElement(o.a,{color:"dark",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.dark"}))))),c.a.createElement(b.a,{xxs:"12",className:"mb-4"},c.a.createElement(n.a,null,c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement(d.a,{id:"badge.outline"})),c.a.createElement(o.a,{color:"outline-primary",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.primary"}))," ",c.a.createElement(o.a,{color:"outline-secondary",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.secondary"}))," ",c.a.createElement(o.a,{color:"outline-success",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.success"}))," ",c.a.createElement(o.a,{color:"outline-danger",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.danger"}))," ",c.a.createElement(o.a,{color:"outline-warning",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.warning"}))," ",c.a.createElement(o.a,{color:"outline-info",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.info"}))," ",c.a.createElement(o.a,{color:"outline-light",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.light"}))," ",c.a.createElement(o.a,{color:"outline-dark",pill:!0,className:"mb-1"},c.a.createElement(d.a,{id:"badge.dark"}))))),c.a.createElement(b.a,{xxs:"12",className:"mb-4"},c.a.createElement(n.a,null,c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement(d.a,{id:"badge.links"})),c.a.createElement(o.a,{href:"#",color:"primary",className:"mb-1"},c.a.createElement(d.a,{id:"badge.primary"}))," ",c.a.createElement(o.a,{href:"#",color:"secondary",className:"mb-1"},c.a.createElement(d.a,{id:"badge.secondary"}))," ",c.a.createElement(o.a,{href:"#",color:"success",className:"mb-1"},c.a.createElement(d.a,{id:"badge.success"}))," ",c.a.createElement(o.a,{href:"#",color:"danger",className:"mb-1"},c.a.createElement(d.a,{id:"badge.danger"}))," ",c.a.createElement(o.a,{href:"#",color:"warning",className:"mb-1"},c.a.createElement(d.a,{id:"badge.warning"}))," ",c.a.createElement(o.a,{href:"#",color:"info",className:"mb-1"},c.a.createElement(d.a,{id:"badge.info"}))," ",c.a.createElement(o.a,{href:"#",color:"light",className:"mb-1"},c.a.createElement(d.a,{id:"badge.light"}))," ",c.a.createElement(o.a,{href:"#",color:"dark",className:"mb-1"},c.a.createElement(d.a,{id:"badge.dark"}))))),c.a.createElement(b.a,{xxs:"12",className:"mb-4"},c.a.createElement(n.a,null,c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement(d.a,{id:"badge.counter-badges"})),c.a.createElement(i.a,{color:"primary"},"Notifications ",c.a.createElement(o.a,{color:"light"},"4"))," ",c.a.createElement(i.a,{color:"primary",outline:!0},"Notifications ",c.a.createElement(o.a,{color:"secondary"},"4"))))),c.a.createElement(b.a,{xxs:"12",className:"mb-4"},c.a.createElement(n.a,null,c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement(d.a,{id:"badge.bootstrap-default"})),c.a.createElement(o.a,{color:"primary",className:"mb-1"},c.a.createElement(d.a,{id:"badge.primary"}))," ",c.a.createElement(o.a,{color:"secondary",className:"mb-1"},c.a.createElement(d.a,{id:"badge.secondary"}))," ",c.a.createElement(o.a,{color:"success",className:"mb-1"},c.a.createElement(d.a,{id:"badge.success"}))," ",c.a.createElement(o.a,{color:"danger",className:"mb-1"},c.a.createElement(d.a,{id:"badge.danger"}))," ",c.a.createElement(o.a,{color:"warning",className:"mb-1"},c.a.createElement(d.a,{id:"badge.warning"}))," ",c.a.createElement(o.a,{color:"info",className:"mb-1"},c.a.createElement(d.a,{id:"badge.info"}))," ",c.a.createElement(o.a,{color:"light",className:"mb-1"},c.a.createElement(d.a,{id:"badge.light"}))," ",c.a.createElement(o.a,{color:"dark",className:"mb-1"},c.a.createElement(d.a,{id:"badge.dark"}))," ")))))}}}]);
//# sourceMappingURL=components-badges.5f5aa9fc.chunk.js.map