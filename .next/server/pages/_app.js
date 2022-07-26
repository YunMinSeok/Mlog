"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./modules/slice/user.ts":
/*!*******************************!*\
  !*** ./modules/slice/user.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUser\": () => (/* binding */ addUser),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'users',\n  initialState: [{\n    id: 1,\n    name: '은지'\n  }],\n  reducers: {\n    addUser: (state, action) => {\n      const {\n        id,\n        name\n      } = action.payload;\n      state.push({\n        id,\n        name\n      });\n    }\n  }\n});\nconst {\n  actions,\n  reducer\n} = userSlice;\nconst {\n  addUser\n} = actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3NsaWNlL3VzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQU9PLE1BQU1DLFNBQVMsR0FBR0QsNkRBQVcsQ0FBQztBQUNuQ0UsRUFBQUEsSUFBSSxFQUFFLE9BRDZCO0FBRW5DQyxFQUFBQSxZQUFZLEVBQUUsQ0FBQztBQUFFQyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTRixJQUFBQSxJQUFJLEVBQUU7QUFBZixHQUFELENBRnFCO0FBR25DRyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUF3QztBQUMvQyxZQUFNO0FBQUVKLFFBQUFBLEVBQUY7QUFBTUYsUUFBQUE7QUFBTixVQUFlTSxNQUFNLENBQUNDLE9BQTVCO0FBQ0FGLE1BQUFBLEtBQUssQ0FBQ0csSUFBTixDQUFXO0FBQUVOLFFBQUFBLEVBQUY7QUFBTUYsUUFBQUE7QUFBTixPQUFYO0FBQ0Q7QUFKTztBQUh5QixDQUFELENBQTdCO0FBV1AsTUFBTTtBQUFFUyxFQUFBQSxPQUFGO0FBQVdDLEVBQUFBO0FBQVgsSUFBdUJYLFNBQTdCO0FBQ08sTUFBTTtBQUFFSyxFQUFBQTtBQUFGLElBQWNLLE9BQXBCO0FBRVAsaUVBQWVDLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tbG9nLy4vbW9kdWxlcy9zbGljZS91c2VyLnRzP2I0NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAndXNlcnMnLFxuICBpbml0aWFsU3RhdGU6IFt7IGlkOiAxLCBuYW1lOiAn7J2A7KeAJyB9XSBhcyBVc2VyW10sXG4gIHJlZHVjZXJzOiB7XG4gICAgYWRkVXNlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlcj4pID0+IHtcbiAgICAgIGNvbnN0IHsgaWQsIG5hbWUgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3RhdGUucHVzaCh7IGlkLCBuYW1lIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgeyBhY3Rpb25zLCByZWR1Y2VyIH0gPSB1c2VyU2xpY2U7XG5leHBvcnQgY29uc3QgeyBhZGRVc2VyIH0gPSBhY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwidXNlclNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImlkIiwicmVkdWNlcnMiLCJhZGRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicHVzaCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/slice/user.ts\n");

/***/ }),

/***/ "./modules/store.ts":
/*!**************************!*\
  !*** ./modules/store.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slice_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice/user */ \"./modules/slice/user.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    user: _slice_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3N0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsTUFBTUUsS0FBSyxHQUFHRixnRUFBYyxDQUFDO0FBQzNCRyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsSUFBSSxFQUFFSCxtREFBV0E7QUFEVjtBQURrQixDQUFELENBQTVCO0FBTUEsaUVBQWVDLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tbG9nLy4vbW9kdWxlcy9zdG9yZS50cz8wODU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3NsaWNlL3VzZXInO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidXNlclJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/store */ \"./modules/store.ts\");\n/* harmony import */ var _styles_global_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global-styles */ \"./styles/global-styles.ts\");\nvar _jsxFileName = \"/Users/yunminseok/Desktop/study/Mlog/pages/_app.tsx\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/React.createElement(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {\n    store: _modules_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/React.createElement(_styles_global_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/React.createElement(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0csS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQW1EO0FBQ2pELHNCQUNFLG9CQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFSixzREFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSxvQkFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsZUFFRSxvQkFBQyxTQUFELGVBQWVJLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZGLENBREY7QUFNRDs7QUFFRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL21sb2cvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL21vZHVsZXMvc3RvcmUnO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uL3N0eWxlcy9nbG9iYWwtc3R5bGVzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIkdsb2JhbFN0eWxlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global-styles.ts":
/*!*********************************!*\
  !*** ./styles/global-styles.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ \"styled-reset\");\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\"\", \" *{box-sizing:border-box;}body{width:100%;height:100%;font-family:-apple-system,system-ui,BlinkMacSystemFont,\\\"Segoe UI\\\",Roboto,\\\"Helvetica Neue\\\",Arial,sans-serif;}a{color:inherit;text-decoration:none;}input,button{background-color:transparent;border:none;outline:none;}h1,h2,h3,h4,h5,h6{font-family:'Maven Pro',sans-serif;}@media only screen and (max-width:768px){body{font-size:12px;}}@media only screen and (max-width:576px){body{font-size:10px;}}\"], (styled_reset__WEBPACK_IMPORTED_MODULE_1___default()));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsLXN0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxXQUFXLEdBQUdGLG9FQUFILCtjQUNiQyxxREFEYSxDQUFqQjtBQW9DQSxpRUFBZUMsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL21sb2cvLi9zdHlsZXMvZ2xvYmFsLXN0eWxlcy50cz80YWVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHJlc2V0IGZyb20gJ3N0eWxlZC1yZXNldCc7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICR7cmVzZXR9XG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgYm9keXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmO1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBpbnB1dCwgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2e1xuICAgIGZvbnQtZmFtaWx5OidNYXZlbiBQcm8nLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGJvZHkge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBib2R5IHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwicmVzZXQiLCJHbG9iYWxTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/global-styles.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("styled-reset");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();