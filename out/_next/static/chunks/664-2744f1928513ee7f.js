(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{5235:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7913:function(e,t,o){"use strict";var n=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,u=r(o(7294)),l=o(2199),f=o(1630),c=o(9541),i=o(6163),s=o(7215),d=o(5235),p=o(729),v={};function y(e,t,o,n){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch(function(e){});var r=n&&void 0!==n.locale?n.locale:e&&e.locale;v[t+"%"+o+(r?"%"+r:"")]=!0}}var h=u.default.forwardRef(function(e,t){var o,r,h=e.href,b=e.as,C=e.children,g=e.prefetch,_=e.passHref,m=e.replace,x=e.shallow,M=e.scroll,L=e.locale,R=e.onClick,j=e.onMouseEnter,E=e.onTouchStart,O=e.legacyBehavior,k=void 0===O?!0!==Boolean(!0):O,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=C,k&&("string"==typeof o||"number"==typeof o)&&(o=u.default.createElement("a",null,o));var w=!1!==g,T=u.default.useContext(c.RouterContext),I=u.default.useContext(i.AppRouterContext);I&&(T=I);var S=u.default.useMemo(function(){var e=n(l.resolveHref(T,h,!0),2),t=e[0],o=e[1];return{href:t,as:b?l.resolveHref(T,b):o||t}},[T,h,b]),U=S.href,B=S.as,N=u.default.useRef(U),A=u.default.useRef(B);k&&(r=u.default.Children.only(o));var D=k?r&&"object"==typeof r&&r.ref:t,H=n(s.useIntersection({rootMargin:"200px"}),3),K=H[0],Z=H[1],G=H[2],q=u.default.useCallback(function(e){(A.current!==B||N.current!==U)&&(G(),A.current=B,N.current=U),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[B,D,U,G,K]);u.default.useEffect(function(){var e=Z&&w&&l.isLocalURL(U),t=void 0!==L?L:T&&T.locale,o=v[U+"%"+B+(t?"%"+t:"")];e&&!o&&y(T,U,B,{locale:t})},[B,U,Z,L,w,T]);var z={ref:q,onClick:function(e){k||"function"!=typeof R||R(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,a,f,c,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&l.isLocalURL(o)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:f}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?u.default.startTransition(v):v()}}(e,T,U,B,m,x,M,L,Boolean(I),w)},onMouseEnter:function(e){k||"function"!=typeof j||j(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!w&&I)&&l.isLocalURL(U)&&y(T,U,B,{priority:!0})},onTouchStart:function(e){k||"function"!=typeof E||E(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!w&&I)&&l.isLocalURL(U)&&y(T,U,B,{priority:!0})}};if(!k||_||"a"===r.type&&!("href"in r.props)){var F=void 0!==L?L:T&&T.locale,J=T&&T.isLocaleDomain&&d.getDomainLocale(B,F,T.locales,T.domainLocales);z.href=J||p.addBasePath(f.addLocale(B,F,T&&T.defaultLocale))}return k?u.default.cloneElement(r,z):u.default.createElement("a",Object.assign({},P,z),o)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,o){"use strict";var n=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,c=e.disabled||!u,i=n(r.useState(!1),2),s=i[0],d=i[1],p=n(r.useState(null),2),v=p[0],y=p[1];return r.useEffect(function(){if(u){if(!c&&!s&&v&&v.tagName){var e,n,r,i,p;return e=function(e){return e&&d(e)},r=(n=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=f.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=l.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},f.push(o),l.set(o,t),t}({root:null==t?void 0:t.current,rootMargin:o})).id,i=n.observer,(p=n.elements).set(v,e),i.observe(v),function(){if(p.delete(v),i.unobserve(v),0===p.size){i.disconnect(),l.delete(r);var e=f.findIndex(function(e){return e.root===r.root&&e.margin===r.margin});e>-1&&f.splice(e,1)}}}}else if(!s){var y=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(y)}}},[v,c,o,t,s]),[y,s,r.useCallback(function(){d(!1)},[])]};var r=o(7294),a=o(8065),u="function"==typeof IntersectionObserver,l=new Map,f=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6163:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var a=n.default.createContext(null);t.LayoutRouterContext=a;var u=n.default.createContext(null);t.GlobalLayoutRouterContext=u;var l=n.default.createContext(null);t.TemplateContext=l},1664:function(e,t,o){e.exports=o(7913)}}]);