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

/***/ "./components/section/postpage/slider/Slider.tsx":
/*!*******************************************************!*\
  !*** ./components/section/postpage/slider/Slider.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/yunminseok/Desktop/study/Mlog/components/section/postpage/slider/Slider.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Slider = function Slider(_ref) {\n  var translateValue = _ref.translateValue,\n      images = _ref.images,\n      moveRight = _ref.moveRight,\n      moveLeft = _ref.moveLeft;\n\n  var clickRight = function clickRight(e) {\n    console.log(1);\n    moveRight();\n  };\n\n  var clickLeft = function clickLeft(e) {\n    console.log(2);\n    moveLeft();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SliderBox, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ImageBox, {\n        translateValue: translateValue !== 0 ? translateValue : null,\n        children: images.map(function (picture, idx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SliderImage, {\n            src: picture.pic,\n            alt: 'background' + idx,\n            width: 400,\n            height: 400,\n            layout: \"fill\"\n          }, picture.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PrevArrowBox, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PrevArrow, {\n          onClick: clickLeft,\n          src: '/arrow.png',\n          alt: 'arrow',\n          width: 50,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NextArrowBox, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NextArrow, {\n          onClick: clickRight,\n          src: '/arrow.png',\n          alt: 'arrow',\n          width: 50,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section.withConfig({\n  displayName: \"Slider__Container\",\n  componentId: \"sc-19i689a-0\"\n})([\"height:100vh;padding:50px;background-color:#121212;\"]);\n_c2 = Container;\nvar SliderBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__SliderBox\",\n  componentId: \"sc-19i689a-1\"\n})([\"position:relative;display:flex;margin:0 auto;max-width:70vw;height:500px;overflow:hidden;\"]);\n_c3 = SliderBox;\nvar ImageBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__ImageBox\",\n  componentId: \"sc-19i689a-2\"\n})([\"display:flex;transition:1s;transform:\", \";\"], function (_ref2) {\n  var translateValue = _ref2.translateValue;\n  return \"translateX(-\".concat(translateValue, \"vw)\");\n});\n_c4 = ImageBox;\nvar SliderImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"Slider__SliderImage\",\n  componentId: \"sc-19i689a-3\"\n})([\"width:70vw;object-fit:cover;object-position:center center;\"]);\n_c5 = SliderImage;\nvar PrevArrowBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__PrevArrowBox\",\n  componentId: \"sc-19i689a-4\"\n})([\"position:absolute;top:45%;\"]);\n_c6 = PrevArrowBox;\nvar NextArrowBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__NextArrowBox\",\n  componentId: \"sc-19i689a-5\"\n})([\"position:absolute;top:45%;right:0;\"]);\n_c7 = NextArrowBox;\nvar PrevArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"Slider__PrevArrow\",\n  componentId: \"sc-19i689a-6\"\n})([\"transform:rotate(180deg);cursor:pointer;\"]);\n_c8 = PrevArrow;\nvar NextArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"Slider__NextArrow\",\n  componentId: \"sc-19i689a-7\"\n})([\"cursor:pointer;\"]);\n_c9 = NextArrow;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"Slider\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"SliderBox\");\n$RefreshReg$(_c4, \"ImageBox\");\n$RefreshReg$(_c5, \"SliderImage\");\n$RefreshReg$(_c6, \"PrevArrowBox\");\n$RefreshReg$(_c7, \"NextArrowBox\");\n$RefreshReg$(_c8, \"PrevArrow\");\n$RefreshReg$(_c9, \"NextArrow\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24vcG9zdHBhZ2Uvc2xpZGVyL1NsaWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQVNBLElBQU1HLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLE9BS2hDO0FBQUEsTUFKSkMsY0FJSSxRQUpKQSxjQUlJO0FBQUEsTUFISkMsTUFHSSxRQUhKQSxNQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJOztBQUNKLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBd0Q7QUFDekVDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQVo7QUFDQUwsSUFBQUEsU0FBUztBQUNWLEdBSEQ7O0FBSUEsTUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsQ0FBRCxFQUF3RDtBQUN4RUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBWjtBQUNBSixJQUFBQSxRQUFRO0FBQ1QsR0FIRDs7QUFLQSxzQkFDRSw4REFBQyxTQUFEO0FBQUEsMkJBQ0UsOERBQUMsU0FBRDtBQUFBLDhCQUNFLDhEQUFDLFFBQUQ7QUFBVSxzQkFBYyxFQUFFSCxjQUFjLEtBQUssQ0FBbkIsR0FBdUJBLGNBQXZCLEdBQXdDLElBQWxFO0FBQUEsa0JBQ0dDLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFVBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUM1Qiw4QkFDRSw4REFBQyxXQUFEO0FBRUUsZUFBRyxFQUFFRCxPQUFPLENBQUNFLEdBRmY7QUFHRSxlQUFHLEVBQUUsZUFBZUQsR0FIdEI7QUFJRSxpQkFBSyxFQUFFLEdBSlQ7QUFLRSxrQkFBTSxFQUFFLEdBTFY7QUFNRSxrQkFBTSxFQUFDO0FBTlQsYUFDT0QsT0FBTyxDQUFDRyxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFVRCxTQVhBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBZUUsOERBQUMsWUFBRDtBQUFBLCtCQUNFLDhEQUFDLFNBQUQ7QUFDRSxpQkFBTyxFQUFFTCxTQURYO0FBRUUsYUFBRyxFQUFFLFlBRlA7QUFHRSxhQUFHLEVBQUUsT0FIUDtBQUlFLGVBQUssRUFBRSxFQUpUO0FBS0UsZ0JBQU0sRUFBRTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsZUF3QkUsOERBQUMsWUFBRDtBQUFBLCtCQUNFLDhEQUFDLFNBQUQ7QUFDRSxpQkFBTyxFQUFFSixVQURYO0FBRUUsYUFBRyxFQUFFLFlBRlA7QUFHRSxhQUFHLEVBQUUsT0FIUDtBQUlFLGVBQUssRUFBRSxFQUpUO0FBS0UsZ0JBQU0sRUFBRTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNDRCxDQXJERDs7S0FBTUw7QUF1RE4sK0RBQWVBLE1BQWY7QUFFQSxJQUFNZSxTQUFTLEdBQUdoQiw0RUFBSDtBQUFBO0FBQUE7QUFBQSwyREFBZjtNQUFNZ0I7QUFLTixJQUFNRSxTQUFTLEdBQUdsQix3RUFBSDtBQUFBO0FBQUE7QUFBQSxpR0FBZjtNQUFNa0I7QUFhTixJQUFNRSxRQUFRLEdBQUdwQix3RUFBSDtBQUFBO0FBQUE7QUFBQSxtREFHQztBQUFBLE1BQUdFLGNBQUgsU0FBR0EsY0FBSDtBQUFBLCtCQUF1Q0EsY0FBdkM7QUFBQSxDQUhELENBQWQ7TUFBTWtCO0FBTU4sSUFBTUMsV0FBVyxHQUFHckIsNkRBQU0sQ0FBQ0YsbURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxrRUFBakI7TUFBTXVCO0FBTU4sSUFBTUMsWUFBWSxHQUFHdEIsd0VBQUg7QUFBQTtBQUFBO0FBQUEsa0NBQWxCO01BQU1zQjtBQUlOLElBQU1DLFlBQVksR0FBR3ZCLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDBDQUFsQjtNQUFNdUI7QUFNTixJQUFNQyxTQUFTLEdBQUd4Qiw2REFBTSxDQUFDRixtREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGdEQUFmO01BQU0wQjtBQUtOLElBQU1DLFNBQVMsR0FBR3pCLDZEQUFNLENBQUNGLG1EQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsdUJBQWY7TUFBTTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbi9wb3N0cGFnZS9zbGlkZXIvU2xpZGVyLnRzeD82MDhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBTbGlkZXJQcm9wcyA9IHtcbiAgdHJhbnNsYXRlVmFsdWU6IG51bWJlcjtcbiAgaW1hZ2VzOiB7IHBpYzogc3RyaW5nOyBpZDogbnVtYmVyIH1bXTtcbiAgbW92ZVJpZ2h0OiAoKSA9PiB2b2lkO1xuICBtb3ZlTGVmdDogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IFNsaWRlcjogUmVhY3QuRkM8U2xpZGVyUHJvcHM+ID0gKHtcbiAgdHJhbnNsYXRlVmFsdWUsXG4gIGltYWdlcyxcbiAgbW92ZVJpZ2h0LFxuICBtb3ZlTGVmdCxcbn0pID0+IHtcbiAgY29uc3QgY2xpY2tSaWdodCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50Pik6IHZvaWQgPT4ge1xuICAgIGNvbnNvbGUubG9nKDEpO1xuICAgIG1vdmVSaWdodCgpO1xuICB9O1xuICBjb25zdCBjbGlja0xlZnQgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZygyKTtcbiAgICBtb3ZlTGVmdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTbGlkZXJCb3g+XG4gICAgICAgIDxJbWFnZUJveCB0cmFuc2xhdGVWYWx1ZT17dHJhbnNsYXRlVmFsdWUgIT09IDAgPyB0cmFuc2xhdGVWYWx1ZSA6IG51bGx9PlxuICAgICAgICAgIHtpbWFnZXMubWFwKChwaWN0dXJlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTbGlkZXJJbWFnZVxuICAgICAgICAgICAgICAgIGtleT17cGljdHVyZS5pZH1cbiAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmUucGljfVxuICAgICAgICAgICAgICAgIGFsdD17J2JhY2tncm91bmQnICsgaWR4fVxuICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0ltYWdlQm94PlxuICAgICAgICA8UHJldkFycm93Qm94PlxuICAgICAgICAgIDxQcmV2QXJyb3dcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrTGVmdH1cbiAgICAgICAgICAgIHNyYz17Jy9hcnJvdy5wbmcnfVxuICAgICAgICAgICAgYWx0PXsnYXJyb3cnfVxuICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1ByZXZBcnJvd0JveD5cbiAgICAgICAgPE5leHRBcnJvd0JveD5cbiAgICAgICAgICA8TmV4dEFycm93XG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja1JpZ2h0fVxuICAgICAgICAgICAgc3JjPXsnL2Fycm93LnBuZyd9XG4gICAgICAgICAgICBhbHQ9eydhcnJvdyd9XG4gICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmV4dEFycm93Qm94PlxuICAgICAgPC9TbGlkZXJCb3g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuYDtcbmNvbnN0IFNsaWRlckJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzB2dztcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbnR5cGUgSW1hZ2VCb3hQcm9wcyA9IHtcbiAgdHJhbnNsYXRlVmFsdWU6IG51bWJlciB8IG51bGw7XG59O1xuXG5jb25zdCBJbWFnZUJveCA9IHN0eWxlZC5kaXY8SW1hZ2VCb3hQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2Zvcm06ICR7KHsgdHJhbnNsYXRlVmFsdWUgfSkgPT4gYHRyYW5zbGF0ZVgoLSR7dHJhbnNsYXRlVmFsdWV9dncpYH07XG5gO1xuXG5jb25zdCBTbGlkZXJJbWFnZSA9IHN0eWxlZChJbWFnZSlgXG4gIHdpZHRoOiA3MHZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuYDtcblxuY29uc3QgUHJldkFycm93Qm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbmA7XG5jb25zdCBOZXh0QXJyb3dCb3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICByaWdodDogMDtcbmA7XG5cbmNvbnN0IFByZXZBcnJvdyA9IHN0eWxlZChJbWFnZSlgXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IE5leHRBcnJvdyA9IHN0eWxlZChJbWFnZSlgXG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInN0eWxlZCIsIlNsaWRlciIsInRyYW5zbGF0ZVZhbHVlIiwiaW1hZ2VzIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJjbGlja1JpZ2h0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjbGlja0xlZnQiLCJtYXAiLCJwaWN0dXJlIiwiaWR4IiwicGljIiwiaWQiLCJDb250YWluZXIiLCJzZWN0aW9uIiwiU2xpZGVyQm94IiwiZGl2IiwiSW1hZ2VCb3giLCJTbGlkZXJJbWFnZSIsIlByZXZBcnJvd0JveCIsIk5leHRBcnJvd0JveCIsIlByZXZBcnJvdyIsIk5leHRBcnJvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/section/postpage/slider/Slider.tsx\n");

/***/ })

});