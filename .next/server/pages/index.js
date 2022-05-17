"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/header/Header.tsx
var Header = __webpack_require__(7906);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/section/mainpage/Introduce.tsx






const Introduce = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ContentBox, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "This page is my develop blog. "
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "I usally use Typescript, React, Redux."
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Thanks for look"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(InrtoduceImgBox, {
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: '/Introduce.png',
        alt: "Introduce_Logo",
        width: 400,
        height: 400
      })
    })]
  });
};

/* harmony default export */ const mainpage_Introduce = (Introduce);
const Container = external_styled_components_default().section.withConfig({
  displayName: "Introduce__Container",
  componentId: "sc-9iw18q-0"
})(["display:flex;margin:0 auto;padding:20px 60px;height:100vh;background-color:#121212;align-items:center;"]);
const ContentBox = external_styled_components_default().div.withConfig({
  displayName: "Introduce__ContentBox",
  componentId: "sc-9iw18q-1"
})(["margin-right:100px;font-family:monospace;& > p{color:white;& > span{display:block;font-size:20px;margin:20px 0;}}"]);
const InrtoduceImgBox = external_styled_components_default().div.withConfig({
  displayName: "Introduce__InrtoduceImgBox",
  componentId: "sc-9iw18q-2"
})([""]);
;// CONCATENATED MODULE: ./components/templetes/MainPageTemplate.tsx

 //Import Components






const MainPageTemplate = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainPageTemplate_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(mainpage_Introduce, {})]
  });
};

/* harmony default export */ const templetes_MainPageTemplate = (MainPageTemplate);
const MainPageTemplate_Container = external_styled_components_default().div.withConfig({
  displayName: "MainPageTemplate__Container",
  componentId: "sc-1j3iczq-0"
})(["position:relative;min-width:884px;min-height:100%;padding-left:23%;height:auto !important;"]);
;// CONCATENATED MODULE: ./pages/index.tsx
//components




const Home = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(templetes_MainPageTemplate, {})
  });
};

/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,906], () => (__webpack_exec__(9979)));
module.exports = __webpack_exports__;

})();