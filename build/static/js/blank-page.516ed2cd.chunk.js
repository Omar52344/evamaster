(this.webpackJsonpeva=this.webpackJsonpeva||[]).push([[34],{109:function(e,a,t){"use strict";var n=t(1),l=t.n(n),c=t(114),r=t(115),s=t(81),m=t(105),i=t(4),u=function(e){return"/"+e===i.a?l.a.createElement(m.a,{id:"menu.home"}):l.a.createElement(m.a,{id:"menu.".concat(e)})},o=function(e,a,t){return e.split(a)[0]+a},b=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,n){return l.a.createElement(r.a,{key:n,active:t.length===n+1},t.length!==n+1?l.a.createElement(s.b,{to:"/".concat(o(a,e))},u(e)):u(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement("h1",null,l.a.createElement(m.a,{id:a})),l.a.createElement(b,{match:t}))}},1126:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(315),r=t(105),s=t(108),m=t(109);a.default=function(e){var a=e.match;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement(s.a,{xxs:"12"},l.a.createElement(m.a,{heading:"menu.blank-page",match:a}),l.a.createElement(s.b,{className:"mb-5"}))),l.a.createElement(c.a,null,l.a.createElement(s.a,{xxs:"12",className:"mb-4"},l.a.createElement("p",null,l.a.createElement(r.a,{id:"menu.blank-page"})))))}},114:function(e,a,t){"use strict";var n=t(5),l=t(11),c=t(1),r=t.n(c),s=t(17),m=t.n(s),i=t(102),u=t.n(i),o=t(103),b={tag:o.tagPropType,listTag:o.tagPropType,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,children:m.a.node,"aria-label":m.a.string},d=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,s=e.children,m=e.tag,i=e.listTag,b=e["aria-label"],d=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(o.mapToCssModules)(u()(a),c),p=Object(o.mapToCssModules)(u()("breadcrumb",t),c);return r.a.createElement(m,Object(n.a)({},d,{className:g,"aria-label":b}),r.a.createElement(i,{className:p},s))};d.propTypes=b,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=d},115:function(e,a,t){"use strict";var n=t(5),l=t(11),c=t(1),r=t.n(c),s=t(17),m=t.n(s),i=t(102),u=t.n(i),o=t(103),b={tag:o.tagPropType,active:m.a.bool,className:m.a.string,cssModule:m.a.object},d=function(e){var a=e.className,t=e.cssModule,c=e.active,s=e.tag,m=Object(l.a)(e,["className","cssModule","active","tag"]),i=Object(o.mapToCssModules)(u()(a,!!c&&"active","breadcrumb-item"),t);return r.a.createElement(s,Object(n.a)({},m,{className:i,"aria-current":c?"page":void 0}))};d.propTypes=b,d.defaultProps={tag:"li"},a.a=d}}]);
//# sourceMappingURL=blank-page.516ed2cd.chunk.js.map