"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/slider",{

/***/ "./components/section/postpage/slider/SliderDot.tsx":
/*!**********************************************************!*\
  !*** ./components/section/postpage/slider/SliderDot.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/yunminseok/Desktop/study/Mlog/components/section/postpage/slider/SliderDot.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar SliderDot = function SliderDot(_ref) {\n  _s();\n\n  var images = _ref.images,\n      translateValue = _ref.translateValue,\n      moveRight = _ref.moveRight;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      imageIndex = _useState[0],\n      setImageIndex = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setImageIndex(translateValue / 70);\n    var imageInterval = setInterval(function () {\n      moveRight();\n    }, 3000);\n    return function () {\n      clearInterval(imageInterval);\n    };\n  }, [translateValue]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DotBox, {\n    children: [images.map(function (picture, idx) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Dot, {}, picture.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 16\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CurrentDot, {\n      imageIndex: imageIndex\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SliderDot, \"ANstDRJPDMJ5NRtRtN4ix3aRb1I=\");\n\n_c = SliderDot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliderDot);\nvar DotBox = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul.withConfig({\n  displayName: \"SliderDot__DotBox\",\n  componentId: \"sc-8hpy3z-0\"\n})([\"position:absolute;display:flex;left:50%;top:57%;transform:translateX(-50%);\"]);\n_c2 = DotBox;\nvar Dot = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].li.withConfig({\n  displayName: \"SliderDot__Dot\",\n  componentId: \"sc-8hpy3z-1\"\n})([\"position:relative;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;background-color:rgba(255,255,255,0.5);&::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:'';}&::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:'';}\"]);\n_c3 = Dot;\nvar CurrentDot = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].li.withConfig({\n  displayName: \"SliderDot__CurrentDot\",\n  componentId: \"sc-8hpy3z-2\"\n})([\"color:dodgerblue;position:absolute;z-index:99;left:0;top:50%;width:30px;height:3px;transform:\", \";transition:transform 0.5s;\"], function (_ref2) {\n  var imageIndex = _ref2.imageIndex;\n  return \"translate(\".concat(imageIndex * 30, \"px,-40%)\");\n});\n_c4 = CurrentDot;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"SliderDot\");\n$RefreshReg$(_c2, \"DotBox\");\n$RefreshReg$(_c3, \"Dot\");\n$RefreshReg$(_c4, \"CurrentDot\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24vcG9zdHBhZ2Uvc2xpZGVyL1NsaWRlckRvdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQVFBLElBQU1JLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLE9BSXRDO0FBQUE7O0FBQUEsTUFISkMsTUFHSSxRQUhKQSxNQUdJO0FBQUEsTUFGSkMsY0FFSSxRQUZKQSxjQUVJO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJOztBQUNKLGtCQUFvQ0wsK0NBQVEsQ0FBUyxDQUFULENBQTVDO0FBQUEsTUFBT00sVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFFQVIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RRLElBQUFBLGFBQWEsQ0FBQ0gsY0FBYyxHQUFHLEVBQWxCLENBQWI7QUFDQSxRQUFNSSxhQUFhLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ3RDSixNQUFBQSxTQUFTO0FBQ1YsS0FGZ0MsRUFFOUIsSUFGOEIsQ0FBakM7QUFJQSxXQUFPLFlBQU07QUFDWEssTUFBQUEsYUFBYSxDQUFDRixhQUFELENBQWI7QUFDRCxLQUZEO0FBR0QsR0FUUSxFQVNOLENBQUNKLGNBQUQsQ0FUTSxDQUFUO0FBV0Esc0JBQ0UsOERBQUMsTUFBRDtBQUFBLGVBQ0dELE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFVBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUM1QiwwQkFBTyw4REFBQyxHQUFELE1BQVVELE9BQU8sQ0FBQ0UsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGQSxDQURILGVBSUUsOERBQUMsVUFBRDtBQUFZLGdCQUFVLEVBQUVSO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBMUJEOztHQUFNSjs7S0FBQUE7QUE0Qk4sK0RBQWVBLFNBQWY7QUFFQSxJQUFNYSxNQUFNLEdBQUdkLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG1GQUFaO01BQU1jO0FBUU4sSUFBTUUsR0FBRyxHQUFHaEIsdUVBQUg7QUFBQTtBQUFBO0FBQUEscVdBQVQ7TUFBTWdCO0FBK0JOLElBQU1FLFVBQVUsR0FBR2xCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFJQVFEO0FBQUEsTUFBR0ssVUFBSCxTQUFHQSxVQUFIO0FBQUEsNkJBQWlDQSxVQUFVLEdBQUcsRUFBOUM7QUFBQSxDQVJDLENBQWhCO01BQU1hIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbi9wb3N0cGFnZS9zbGlkZXIvU2xpZGVyRG90LnRzeD84MDUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgU2xpZGVyRG90UHJvcHMgPSB7XG4gIGltYWdlczogeyBwaWM6IHN0cmluZzsgaWQ6IG51bWJlciB9W107XG4gIHRyYW5zbGF0ZVZhbHVlOiBudW1iZXI7XG4gIG1vdmVSaWdodDogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IFNsaWRlckRvdDogUmVhY3QuRkM8U2xpZGVyRG90UHJvcHM+ID0gKHtcbiAgaW1hZ2VzLFxuICB0cmFuc2xhdGVWYWx1ZSxcbiAgbW92ZVJpZ2h0LFxufSkgPT4ge1xuICBjb25zdCBbaW1hZ2VJbmRleCwgc2V0SW1hZ2VJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW1hZ2VJbmRleCh0cmFuc2xhdGVWYWx1ZSAvIDcwKTtcbiAgICBjb25zdCBpbWFnZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgfSwgMzAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbWFnZUludGVydmFsKTtcbiAgICB9O1xuICB9LCBbdHJhbnNsYXRlVmFsdWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxEb3RCb3g+XG4gICAgICB7aW1hZ2VzLm1hcCgocGljdHVyZSwgaWR4KSA9PiB7XG4gICAgICAgIHJldHVybiA8RG90IGtleT17cGljdHVyZS5pZH0+PC9Eb3Q+O1xuICAgICAgfSl9XG4gICAgICA8Q3VycmVudERvdCBpbWFnZUluZGV4PXtpbWFnZUluZGV4fT48L0N1cnJlbnREb3Q+XG4gICAgPC9Eb3RCb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJEb3Q7XG5cbmNvbnN0IERvdEJveCA9IHN0eWxlZC51bGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTclO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5gO1xuXG5jb25zdCBEb3QgPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMCAxIGF1dG87XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIHRleHQtaW5kZW50OiAtOTk5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgJjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgY29udGVudDogJyc7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBjb250ZW50OiAnJztcbiAgfVxuYDtcbnR5cGUgQ3VycmVudERvdFByb3BzID0ge1xuICBpbWFnZUluZGV4OiBudW1iZXI7XG59O1xuY29uc3QgQ3VycmVudERvdCA9IHN0eWxlZC5saTxDdXJyZW50RG90UHJvcHM+YFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgdHJhbnNmb3JtOiAkeyh7IGltYWdlSW5kZXggfSkgPT4gYHRyYW5zbGF0ZSgke2ltYWdlSW5kZXggKiAzMH1weCwtNDAlKWB9O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbmA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIlNsaWRlckRvdCIsImltYWdlcyIsInRyYW5zbGF0ZVZhbHVlIiwibW92ZVJpZ2h0IiwiaW1hZ2VJbmRleCIsInNldEltYWdlSW5kZXgiLCJpbWFnZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWFwIiwicGljdHVyZSIsImlkeCIsImlkIiwiRG90Qm94IiwidWwiLCJEb3QiLCJsaSIsIkN1cnJlbnREb3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/section/postpage/slider/SliderDot.tsx\n");

/***/ })

});