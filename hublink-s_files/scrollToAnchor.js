(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[97],{277:function(t,n,e){"use strict";e.r(n),e.d(n,"page",(function(){return A})),e.d(n,"name",(function(){return i.d})),e.d(n,"SamePageScrollSymbol",(function(){return i.b}));var o=e(397),r=e(404),c=e(0),a=e(22),u=e(214),i=e(221),l=e(8),d=e.n(l),b=Object(a.h)([Object(a.f)(u.e,i.d),Object(a.f)(u.c,i.d),i.c],(function(t,n,e){var o=t.anchorDataIdToCompIdMap;return{pageWillMount:function(){n.update((function(t){return Object(c.a)(Object(c.a)({},t),o)}))},scrollToAnchor:(0,e.getHandler)(),pageWillUnmount:function(){n.update((function(t){return d.a.omit(t,Object.keys(o))}))}}})),O=e(399),p=e(228),h=["SCROLL_TO_TOP","SCROLL_TO_BOTTOM"],f=Object(a.h)([Object(a.f)(u.e,i.d),O.a,p.b],(function(t,n,e){var o=t.nicknameToCompIdMap,r=t.anchorDataIdToCompIdMap;return{appDidLoadPage:function(){var t=n.getCurrentRouteInfo(),c=t&&t.anchorDataId;if(c){var a=h.includes(c)?c:r[c]||o[c];e.scrollToComponent(a)}}}})),j=Object(a.h)([Object(a.f)(u.c,i.d)],(function(t){return{getAnchorCompId:function(n){return t.get()[n]}}})),m=e(18),g=e(5),s=Object(a.h)([i.b,g.i],(function(t,n){return{handleClick:function(e){var o=e.getAttribute("data-anchor-comp-id")||"",r=e.getAttribute("data-anchor")||"",c=n.getFullUrlWithoutQueryParams(),a=e.getAttribute("href"),u=a&&Object(m.c)(a),i="#"===u;return o||r||!(c===u)&&!i?t.scrollToAnchor({anchorDataId:r,anchorCompId:o}):(i||n.pushUrlState(new URL(a)),t.scrollToAnchor({anchorDataId:"SCROLL_TO_TOP"}))}}})),C=e(132),I=e(398),T=e(269),_=Object(a.h)([Object(a.f)(u.e,i.d),Object(a.f)(u.d,i.d),C.p,I.b,I.d,g.i],(function(t,n,e,o,r,a){return{pageWillMount:function(){return Object(c.b)(void 0,void 0,void 0,(function(){var e,u,i,l,d;return Object(c.d)(this,(function(b){return e=a.getRelativeUrl(),u=a.getFullUrlWithoutQueryParams(),i="./"===e?[]:n.compsWithTopBottomAnchor,(l=Object(c.h)(Object(c.h)(Object(c.h)([],Object(c.e)(t.compsWithCurrentInnerRouteDynamicPageLink)),Object(c.e)(n.compsWithCurrentInnerRouteDynamicPageLink)),Object(c.e)(i))).length>0&&(d=l.reduce((function(t,n){var e,a="QuickActionBarItem"===function(t){var n=Object(T.c)(t)?Object(T.b)(t):t;return r.get(n).componentType}(n),i=a?"QUICK_ACTION_BAR":n,l=a?function(t,n){return{items:o.get("QUICK_ACTION_BAR").items.map((function(e){return e.compId===t?Object(c.a)(Object(c.a)({},e),{link:Object(c.a)(Object(c.a)({},e.link),{href:n})}):e}))}}(n,u):{link:Object(c.a)(Object(c.a)({},o.get(i).link),{href:u})};return Object(c.a)(Object(c.a)({},t),((e={})[i]=l,e))}),{}),o.update(d)),[2]}))}))}}})),v=Object(a.h)([i.a,p.b],(function(t,n){var e=t.getAnchorCompId;return{getHandler:function(){return function(t){var o=t.anchorCompId,r=t.anchorDataId;return r&&h.includes(r)?(n.scrollToComponent(r),!0):o?(n.scrollToComponent(o),!0):!(!r||!e(r))&&(n.scrollToComponent(e(r)),!0)}}}})),A=function(t){t(o.a.AppDidLoadPageHandler).to(f),t(i.c).to(v),t(i.a).to(j),t(i.b,o.a.PageWillMountHandler,o.a.PageWillUnmountHandler).to(b),t(r.a).to(s),t(o.a.PageWillMountHandler).to(_)}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/scrollToAnchor.4fb084fa.chunk.min.js.map