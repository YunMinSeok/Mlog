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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/yunminseok/Desktop/study/Mlog/components/section/postpage/slider/Slider.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Slider = function Slider(_ref) {\n  _s();\n\n  var translateValue = _ref.translateValue,\n      images = _ref.images,\n      moveRight = _ref.moveRight,\n      moveLeft = _ref.moveLeft;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      mouseDownClientX = _useState[0],\n      setMouseDownClientX = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      mouseUpClientX = _useState2[0],\n      setMouseUpClientX = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      cursorOn = _useState3[0],\n      setCursorOn = _useState3[1];\n\n  var clickRight = function clickRight(e) {\n    moveRight();\n  };\n\n  var clickLeft = function clickLeft(e) {\n    moveLeft();\n  };\n\n  var onMouseDown = function onMouseDown(e) {\n    setMouseDownClientX(e.clientX);\n    setCursorOn(true);\n  };\n\n  var onMouseUP = function onMouseUP(e) {\n    setMouseUpClientX(e.clientX);\n    setCursorOn(true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SliderBox, {\n      onMouseDown: onMouseDown,\n      onMouseUp: onMouseUP,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ImageBox, {\n        translateValue: translateValue !== 0 ? translateValue : null,\n        children: images.map(function (picture, idx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SliderImage, {\n            src: picture.pic,\n            alt: 'background' + idx\n          }, picture.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PrevArrowBox, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PrevArrow, {\n          onClick: clickLeft,\n          src: '/arrow.png',\n          alt: 'arrow',\n          width: 50,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NextArrowBox, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NextArrow, {\n          onClick: clickRight,\n          src: '/arrow.png',\n          alt: 'arrow',\n          width: 50,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Slider, \"h/p2m+grBJ94SldViVDwVaVDPgY=\");\n\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section.withConfig({\n  displayName: \"Slider__Container\",\n  componentId: \"sc-19i689a-0\"\n})([\"height:100vh;padding:50px;background-color:#121212;\"]);\n_c2 = Container;\nvar SliderBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__SliderBox\",\n  componentId: \"sc-19i689a-1\"\n})([\"position:relative;display:flex;margin:0 auto;max-width:70vw;height:500px;overflow:hidden;\"]);\n_c3 = SliderBox;\nvar ImageBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__ImageBox\",\n  componentId: \"sc-19i689a-2\"\n})([\"display:flex;transition:1s;transform:\", \";\"], function (_ref2) {\n  var translateValue = _ref2.translateValue;\n  return \"translateX(-\".concat(translateValue, \"vw)\");\n});\n_c4 = ImageBox;\nvar SliderImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.withConfig({\n  displayName: \"Slider__SliderImage\",\n  componentId: \"sc-19i689a-3\"\n})([\"width:70vw;object-fit:cover;object-position:center center;\"]);\n_c5 = SliderImage;\nvar PrevArrowBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__PrevArrowBox\",\n  componentId: \"sc-19i689a-4\"\n})([\"position:absolute;top:45%;\"]);\n_c6 = PrevArrowBox;\nvar NextArrowBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__NextArrowBox\",\n  componentId: \"sc-19i689a-5\"\n})([\"position:absolute;top:45%;right:0;\"]);\n_c7 = NextArrowBox;\nvar PrevArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"Slider__PrevArrow\",\n  componentId: \"sc-19i689a-6\"\n})([\"transform:rotate(180deg);cursor:pointer;\"]);\n_c8 = PrevArrow;\nvar NextArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"Slider__NextArrow\",\n  componentId: \"sc-19i689a-7\"\n})([\"cursor:pointer;\"]);\n_c9 = NextArrow;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"Slider\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"SliderBox\");\n$RefreshReg$(_c4, \"ImageBox\");\n$RefreshReg$(_c5, \"SliderImage\");\n$RefreshReg$(_c6, \"PrevArrowBox\");\n$RefreshReg$(_c7, \"NextArrowBox\");\n$RefreshReg$(_c8, \"PrevArrow\");\n$RefreshReg$(_c9, \"NextArrow\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24vcG9zdHBhZ2Uvc2xpZGVyL1NsaWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFTQSxJQUFNSSxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQyxPQUtoQztBQUFBOztBQUFBLE1BSkpDLGNBSUksUUFKSkEsY0FJSTtBQUFBLE1BSEpDLE1BR0ksUUFISkEsTUFHSTtBQUFBLE1BRkpDLFNBRUksUUFGSkEsU0FFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTs7QUFDSixrQkFBZ0ROLCtDQUFRLENBQVMsQ0FBVCxDQUF4RDtBQUFBLE1BQU9PLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFDQSxtQkFBNENSLCtDQUFRLENBQVMsQ0FBVCxDQUFwRDtBQUFBLE1BQU9TLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUFnQ1YsK0NBQVEsQ0FBVSxLQUFWLENBQXhDO0FBQUEsTUFBT1csUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQXdEO0FBQ3pFVCxJQUFBQSxTQUFTO0FBQ1YsR0FGRDs7QUFHQSxNQUFNVSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRCxDQUFELEVBQXdEO0FBQ3hFUixJQUFBQSxRQUFRO0FBQ1QsR0FGRDs7QUFJQSxNQUFNVSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRixDQUFELEVBQXdEO0FBQzFFTixJQUFBQSxtQkFBbUIsQ0FBQ00sQ0FBQyxDQUFDRyxPQUFILENBQW5CO0FBQ0FMLElBQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUhEOztBQUtBLE1BQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNKLENBQUQsRUFBd0Q7QUFDeEVKLElBQUFBLGlCQUFpQixDQUFDSSxDQUFDLENBQUNHLE9BQUgsQ0FBakI7QUFDQUwsSUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEdBSEQ7O0FBS0Esc0JBQ0UsOERBQUMsU0FBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQ7QUFBVyxpQkFBVyxFQUFFSSxXQUF4QjtBQUFxQyxlQUFTLEVBQUVFLFNBQWhEO0FBQUEsOEJBQ0UsOERBQUMsUUFBRDtBQUFVLHNCQUFjLEVBQUVmLGNBQWMsS0FBSyxDQUFuQixHQUF1QkEsY0FBdkIsR0FBd0MsSUFBbEU7QUFBQSxrQkFDR0MsTUFBTSxDQUFDZSxHQUFQLENBQVcsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQzVCLDhCQUNFLDhEQUFDLFdBQUQ7QUFFRSxlQUFHLEVBQUVELE9BQU8sQ0FBQ0UsR0FGZjtBQUdFLGVBQUcsRUFBRSxlQUFlRDtBQUh0QixhQUNPRCxPQUFPLENBQUNHLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQU9ELFNBUkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFZRSw4REFBQyxZQUFEO0FBQUEsK0JBQ0UsOERBQUMsU0FBRDtBQUNFLGlCQUFPLEVBQUVSLFNBRFg7QUFFRSxhQUFHLEVBQUUsWUFGUDtBQUdFLGFBQUcsRUFBRSxPQUhQO0FBSUUsZUFBSyxFQUFFLEVBSlQ7QUFLRSxnQkFBTSxFQUFFO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRixlQXFCRSw4REFBQyxZQUFEO0FBQUEsK0JBQ0UsOERBQUMsU0FBRDtBQUNFLGlCQUFPLEVBQUVGLFVBRFg7QUFFRSxhQUFHLEVBQUUsWUFGUDtBQUdFLGFBQUcsRUFBRSxPQUhQO0FBSUUsZUFBSyxFQUFFLEVBSlQ7QUFLRSxnQkFBTSxFQUFFO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBOUREOztHQUFNWDs7S0FBQUE7QUFnRU4sK0RBQWVBLE1BQWY7QUFFQSxJQUFNc0IsU0FBUyxHQUFHdkIsNEVBQUg7QUFBQTtBQUFBO0FBQUEsMkRBQWY7TUFBTXVCO0FBS04sSUFBTUUsU0FBUyxHQUFHekIsd0VBQUg7QUFBQTtBQUFBO0FBQUEsaUdBQWY7TUFBTXlCO0FBYU4sSUFBTUUsUUFBUSxHQUFHM0Isd0VBQUg7QUFBQTtBQUFBO0FBQUEsbURBR0M7QUFBQSxNQUFHRSxjQUFILFNBQUdBLGNBQUg7QUFBQSwrQkFBdUNBLGNBQXZDO0FBQUEsQ0FIRCxDQUFkO01BQU15QjtBQU1OLElBQU1DLFdBQVcsR0FBRzVCLHdFQUFIO0FBQUE7QUFBQTtBQUFBLGtFQUFqQjtNQUFNNEI7QUFNTixJQUFNRSxZQUFZLEdBQUc5Qix3RUFBSDtBQUFBO0FBQUE7QUFBQSxrQ0FBbEI7TUFBTThCO0FBSU4sSUFBTUMsWUFBWSxHQUFHL0Isd0VBQUg7QUFBQTtBQUFBO0FBQUEsMENBQWxCO01BQU0rQjtBQU1OLElBQU1DLFNBQVMsR0FBR2hDLDZEQUFNLENBQUNILG1EQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsZ0RBQWY7TUFBTW1DO0FBS04sSUFBTUMsU0FBUyxHQUFHakMsNkRBQU0sQ0FBQ0gsbURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx1QkFBZjtNQUFNb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RwYWdlL3NsaWRlci9TbGlkZXIudHN4PzYwOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgU2xpZGVyUHJvcHMgPSB7XG4gIHRyYW5zbGF0ZVZhbHVlOiBudW1iZXI7XG4gIGltYWdlczogeyBwaWM6IHN0cmluZzsgaWQ6IG51bWJlciB9W107XG4gIG1vdmVSaWdodDogKCkgPT4gdm9pZDtcbiAgbW92ZUxlZnQ6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBTbGlkZXI6IFJlYWN0LkZDPFNsaWRlclByb3BzPiA9ICh7XG4gIHRyYW5zbGF0ZVZhbHVlLFxuICBpbWFnZXMsXG4gIG1vdmVSaWdodCxcbiAgbW92ZUxlZnQsXG59KSA9PiB7XG4gIGNvbnN0IFttb3VzZURvd25DbGllbnRYLCBzZXRNb3VzZURvd25DbGllbnRYXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFttb3VzZVVwQ2xpZW50WCwgc2V0TW91c2VVcENsaWVudFhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2N1cnNvck9uLCBzZXRDdXJzb3JPbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgY2xpY2tSaWdodCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50Pik6IHZvaWQgPT4ge1xuICAgIG1vdmVSaWdodCgpO1xuICB9O1xuICBjb25zdCBjbGlja0xlZnQgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pOiB2b2lkID0+IHtcbiAgICBtb3ZlTGVmdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+KTogdm9pZCA9PiB7XG4gICAgc2V0TW91c2VEb3duQ2xpZW50WChlLmNsaWVudFgpO1xuICAgIHNldEN1cnNvck9uKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uTW91c2VVUCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50Pik6IHZvaWQgPT4ge1xuICAgIHNldE1vdXNlVXBDbGllbnRYKGUuY2xpZW50WCk7XG4gICAgc2V0Q3Vyc29yT24odHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFNsaWRlckJveCBvbk1vdXNlRG93bj17b25Nb3VzZURvd259IG9uTW91c2VVcD17b25Nb3VzZVVQfT5cbiAgICAgICAgPEltYWdlQm94IHRyYW5zbGF0ZVZhbHVlPXt0cmFuc2xhdGVWYWx1ZSAhPT0gMCA/IHRyYW5zbGF0ZVZhbHVlIDogbnVsbH0+XG4gICAgICAgICAge2ltYWdlcy5tYXAoKHBpY3R1cmUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFNsaWRlckltYWdlXG4gICAgICAgICAgICAgICAga2V5PXtwaWN0dXJlLmlkfVxuICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZS5waWN9XG4gICAgICAgICAgICAgICAgYWx0PXsnYmFja2dyb3VuZCcgKyBpZHh9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0ltYWdlQm94PlxuICAgICAgICA8UHJldkFycm93Qm94PlxuICAgICAgICAgIDxQcmV2QXJyb3dcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrTGVmdH1cbiAgICAgICAgICAgIHNyYz17Jy9hcnJvdy5wbmcnfVxuICAgICAgICAgICAgYWx0PXsnYXJyb3cnfVxuICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1ByZXZBcnJvd0JveD5cbiAgICAgICAgPE5leHRBcnJvd0JveD5cbiAgICAgICAgICA8TmV4dEFycm93XG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja1JpZ2h0fVxuICAgICAgICAgICAgc3JjPXsnL2Fycm93LnBuZyd9XG4gICAgICAgICAgICBhbHQ9eydhcnJvdyd9XG4gICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmV4dEFycm93Qm94PlxuICAgICAgPC9TbGlkZXJCb3g+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuYDtcbmNvbnN0IFNsaWRlckJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzB2dztcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbnR5cGUgSW1hZ2VCb3hQcm9wcyA9IHtcbiAgdHJhbnNsYXRlVmFsdWU6IG51bWJlciB8IG51bGw7XG59O1xuXG5jb25zdCBJbWFnZUJveCA9IHN0eWxlZC5kaXY8SW1hZ2VCb3hQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2Zvcm06ICR7KHsgdHJhbnNsYXRlVmFsdWUgfSkgPT4gYHRyYW5zbGF0ZVgoLSR7dHJhbnNsYXRlVmFsdWV9dncpYH07XG5gO1xuXG5jb25zdCBTbGlkZXJJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA3MHZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuYDtcblxuY29uc3QgUHJldkFycm93Qm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbmA7XG5jb25zdCBOZXh0QXJyb3dCb3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICByaWdodDogMDtcbmA7XG5cbmNvbnN0IFByZXZBcnJvdyA9IHN0eWxlZChJbWFnZSlgXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IE5leHRBcnJvdyA9IHN0eWxlZChJbWFnZSlgXG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiU2xpZGVyIiwidHJhbnNsYXRlVmFsdWUiLCJpbWFnZXMiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsIm1vdXNlRG93bkNsaWVudFgiLCJzZXRNb3VzZURvd25DbGllbnRYIiwibW91c2VVcENsaWVudFgiLCJzZXRNb3VzZVVwQ2xpZW50WCIsImN1cnNvck9uIiwic2V0Q3Vyc29yT24iLCJjbGlja1JpZ2h0IiwiZSIsImNsaWNrTGVmdCIsIm9uTW91c2VEb3duIiwiY2xpZW50WCIsIm9uTW91c2VVUCIsIm1hcCIsInBpY3R1cmUiLCJpZHgiLCJwaWMiLCJpZCIsIkNvbnRhaW5lciIsInNlY3Rpb24iLCJTbGlkZXJCb3giLCJkaXYiLCJJbWFnZUJveCIsIlNsaWRlckltYWdlIiwiaW1nIiwiUHJldkFycm93Qm94IiwiTmV4dEFycm93Qm94IiwiUHJldkFycm93IiwiTmV4dEFycm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/section/postpage/slider/Slider.tsx\n");

/***/ })

});