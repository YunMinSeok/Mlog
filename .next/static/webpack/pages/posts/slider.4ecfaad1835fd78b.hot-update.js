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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/yunminseok/Desktop/study/Mlog/components/section/postpage/slider/Slider.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Slider = function Slider(_ref) {\n  _s();\n\n  var translateValue = _ref.translateValue,\n      images = _ref.images,\n      moveRight = _ref.moveRight,\n      moveLeft = _ref.moveLeft;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      mouseDownClientX = _useState[0],\n      setMouseDownClientX = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      mouseUpClientX = _useState2[0],\n      setMouseUpClientX = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      cursorOn = _useState3[0],\n      setCursorOn = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      imageIndex = _useState4[0],\n      setImageIndex = _useState4[1];\n\n  var clickRight = function clickRight(e) {\n    moveRight();\n  };\n\n  var clickLeft = function clickLeft(e) {\n    moveLeft();\n  };\n\n  var onMouseDown = function onMouseDown(e) {\n    setMouseDownClientX(e.clientX);\n    setCursorOn(true);\n  };\n\n  var onMouseUp = function onMouseUp(e) {\n    setMouseUpClientX(e.clientX);\n    setCursorOn(false);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var dragSpace = Math.abs(mouseDownClientX - mouseUpClientX);\n    console.log(dragSpace);\n\n    if (mouseDownClientX !== 0) {\n      if (mouseUpClientX < mouseDownClientX && dragSpace > 100) {\n        moveRight();\n      } else if (mouseUpClientX > mouseDownClientX && dragSpace > 100) {\n        moveLeft();\n      }\n    }\n  }, [mouseUpClientX]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setImageIndex(translateValue / 70);\n    var imageInterval = setInterval(function () {\n      moveRight();\n    }, 3000);\n    return function () {\n      clearInterval(imageInterval);\n    };\n  }, [translateValue]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SliderBox, {\n      onMouseDown: onMouseDown,\n      onMouseUp: onMouseUp,\n      cursorOn: cursorOn,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ImageBox, {\n        translateValue: translateValue !== 0 ? translateValue : null,\n        children: images.map(function (picture, idx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SliderImage, {\n            src: picture.pic,\n            alt: 'background' + idx\n          }, picture.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PrevArrowBox, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PrevArrow, {\n          onClick: clickLeft,\n          src: '/arrow.png',\n          alt: 'arrow',\n          width: 50,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NextArrowBox, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NextArrow, {\n          onClick: clickRight,\n          src: '/arrow.png',\n          alt: 'arrow',\n          width: 50,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DotBox, {\n      children: [images.map(function (picture, idx) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Dot, {}, picture.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 18\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CurrentDot, {\n        imageIndex: imageIndex\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Slider, \"BpJ34mVDx1kANIi31tCMT2ORMwA=\");\n\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar SliderBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__SliderBox\",\n  componentId: \"sc-19i689a-0\"\n})([\"position:relative;display:flex;margin:0 auto;max-width:70vw;height:500px;overflow:hidden;cursor:\", \";\"], function (_ref2) {\n  var cursorOn = _ref2.cursorOn;\n  return cursorOn && 'pointer';\n});\n_c2 = SliderBox;\nvar ImageBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__ImageBox\",\n  componentId: \"sc-19i689a-1\"\n})([\"display:flex;transition:1s;transform:\", \";\"], function (_ref3) {\n  var translateValue = _ref3.translateValue;\n  return \"translateX(-\".concat(translateValue, \"vw)\");\n});\n_c3 = ImageBox;\nvar SliderImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.withConfig({\n  displayName: \"Slider__SliderImage\",\n  componentId: \"sc-19i689a-2\"\n})([\"width:70vw;object-fit:cover;object-position:center center;\"]);\n_c4 = SliderImage;\nvar PrevArrowBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__PrevArrowBox\",\n  componentId: \"sc-19i689a-3\"\n})([\"position:absolute;top:45%;\"]);\n_c5 = PrevArrowBox;\nvar NextArrowBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slider__NextArrowBox\",\n  componentId: \"sc-19i689a-4\"\n})([\"position:absolute;top:45%;right:0;\"]);\n_c6 = NextArrowBox;\nvar PrevArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"Slider__PrevArrow\",\n  componentId: \"sc-19i689a-5\"\n})([\"transform:rotate(180deg);cursor:pointer;\"]);\n_c7 = PrevArrow;\nvar NextArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"Slider__NextArrow\",\n  componentId: \"sc-19i689a-6\"\n})([\"cursor:pointer;\"]);\n_c8 = NextArrow;\nvar DotBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul.withConfig({\n  displayName: \"Slider__DotBox\",\n  componentId: \"sc-19i689a-7\"\n})([\"position:absolute;display:flex;left:50%;top:57%;transform:translateX(-50%);\"]);\n_c9 = DotBox;\nvar Dot = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li.withConfig({\n  displayName: \"Slider__Dot\",\n  componentId: \"sc-19i689a-8\"\n})([\"position:relative;flex:0 1 auto;width:30px;height:3px;margin:0 3px;text-indent:-999px;background-color:rgba(255,255,255,0.5);&::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:'';}&::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:'';}\"]);\n_c10 = Dot;\nvar CurrentDot = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li.withConfig({\n  displayName: \"Slider__CurrentDot\",\n  componentId: \"sc-19i689a-9\"\n})([\"position:absolute;left:0;top:50%;width:30px;height:3px;margin:0 3px;background-color:rgba(255,255,255,1);&::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:'';}&::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:'';}transform:\", \";transition:transform 0.5s;\"], function (_ref4) {\n  var imageIndex = _ref4.imageIndex;\n  return \"translate(\".concat(imageIndex * 36, \"px,-50%)\");\n});\n_c11 = CurrentDot;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"Slider\");\n$RefreshReg$(_c2, \"SliderBox\");\n$RefreshReg$(_c3, \"ImageBox\");\n$RefreshReg$(_c4, \"SliderImage\");\n$RefreshReg$(_c5, \"PrevArrowBox\");\n$RefreshReg$(_c6, \"NextArrowBox\");\n$RefreshReg$(_c7, \"PrevArrow\");\n$RefreshReg$(_c8, \"NextArrow\");\n$RefreshReg$(_c9, \"DotBox\");\n$RefreshReg$(_c10, \"Dot\");\n$RefreshReg$(_c11, \"CurrentDot\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24vcG9zdHBhZ2Uvc2xpZGVyL1NsaWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBU0EsSUFBTUssTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FLaEM7QUFBQTs7QUFBQSxNQUpKQyxjQUlJLFFBSkpBLGNBSUk7QUFBQSxNQUhKQyxNQUdJLFFBSEpBLE1BR0k7QUFBQSxNQUZKQyxTQUVJLFFBRkpBLFNBRUk7QUFBQSxNQURKQyxRQUNJLFFBREpBLFFBQ0k7O0FBQ0osa0JBQWdETiwrQ0FBUSxDQUFTLENBQVQsQ0FBeEQ7QUFBQSxNQUFPTyxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBQ0EsbUJBQTRDUiwrQ0FBUSxDQUFTLENBQVQsQ0FBcEQ7QUFBQSxNQUFPUyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxtQkFBZ0NWLCtDQUFRLENBQVUsS0FBVixDQUF4QztBQUFBLE1BQU9XLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEsbUJBQW9DWiwrQ0FBUSxDQUFTLENBQVQsQ0FBNUM7QUFBQSxNQUFPYSxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBd0Q7QUFDekVYLElBQUFBLFNBQVM7QUFDVixHQUZEOztBQUdBLE1BQU1ZLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNELENBQUQsRUFBd0Q7QUFDeEVWLElBQUFBLFFBQVE7QUFDVCxHQUZEOztBQUlBLE1BQU1ZLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNGLENBQUQsRUFBd0Q7QUFDMUVSLElBQUFBLG1CQUFtQixDQUFDUSxDQUFDLENBQUNHLE9BQUgsQ0FBbkI7QUFDQVAsSUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEdBSEQ7O0FBS0EsTUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0osQ0FBRCxFQUF3RDtBQUN4RU4sSUFBQUEsaUJBQWlCLENBQUNNLENBQUMsQ0FBQ0csT0FBSCxDQUFqQjtBQUNBUCxJQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0QsR0FIRDs7QUFLQWIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTXNCLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNoQixnQkFBZ0IsR0FBR0UsY0FBNUIsQ0FBbEI7QUFDQWUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLFNBQVo7O0FBQ0EsUUFBSWQsZ0JBQWdCLEtBQUssQ0FBekIsRUFBNEI7QUFDMUIsVUFBSUUsY0FBYyxHQUFHRixnQkFBakIsSUFBcUNjLFNBQVMsR0FBRyxHQUFyRCxFQUEwRDtBQUN4RGhCLFFBQUFBLFNBQVM7QUFDVixPQUZELE1BRU8sSUFBSUksY0FBYyxHQUFHRixnQkFBakIsSUFBcUNjLFNBQVMsR0FBRyxHQUFyRCxFQUEwRDtBQUMvRGYsUUFBQUEsUUFBUTtBQUNUO0FBQ0Y7QUFDRixHQVZRLEVBVU4sQ0FBQ0csY0FBRCxDQVZNLENBQVQ7QUFZQVYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RlLElBQUFBLGFBQWEsQ0FBQ1gsY0FBYyxHQUFHLEVBQWxCLENBQWI7QUFDQSxRQUFNdUIsYUFBYSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUN0Q3RCLE1BQUFBLFNBQVM7QUFDVixLQUZnQyxFQUU5QixJQUY4QixDQUFqQztBQUlBLFdBQU8sWUFBTTtBQUNYdUIsTUFBQUEsYUFBYSxDQUFDRixhQUFELENBQWI7QUFDRCxLQUZEO0FBR0QsR0FUUSxFQVNOLENBQUN2QixjQUFELENBVE0sQ0FBVDtBQVdBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsU0FBRDtBQUNFLGlCQUFXLEVBQUVlLFdBRGY7QUFFRSxlQUFTLEVBQUVFLFNBRmI7QUFHRSxjQUFRLEVBQUVULFFBSFo7QUFBQSw4QkFLRSw4REFBQyxRQUFEO0FBQVUsc0JBQWMsRUFBRVIsY0FBYyxLQUFLLENBQW5CLEdBQXVCQSxjQUF2QixHQUF3QyxJQUFsRTtBQUFBLGtCQUNHQyxNQUFNLENBQUN5QixHQUFQLENBQVcsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQzVCLDhCQUNFLDhEQUFDLFdBQUQ7QUFFRSxlQUFHLEVBQUVELE9BQU8sQ0FBQ0UsR0FGZjtBQUdFLGVBQUcsRUFBRSxlQUFlRDtBQUh0QixhQUNPRCxPQUFPLENBQUNHLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQU9ELFNBUkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFnQkUsOERBQUMsWUFBRDtBQUFBLCtCQUNFLDhEQUFDLFNBQUQ7QUFDRSxpQkFBTyxFQUFFaEIsU0FEWDtBQUVFLGFBQUcsRUFBRSxZQUZQO0FBR0UsYUFBRyxFQUFFLE9BSFA7QUFJRSxlQUFLLEVBQUUsRUFKVDtBQUtFLGdCQUFNLEVBQUU7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixlQXlCRSw4REFBQyxZQUFEO0FBQUEsK0JBQ0UsOERBQUMsU0FBRDtBQUNFLGlCQUFPLEVBQUVGLFVBRFg7QUFFRSxhQUFHLEVBQUUsWUFGUDtBQUdFLGFBQUcsRUFBRSxPQUhQO0FBSUUsZUFBSyxFQUFFLEVBSlQ7QUFLRSxnQkFBTSxFQUFFO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFvQ0UsOERBQUMsTUFBRDtBQUFBLGlCQUNHWCxNQUFNLENBQUN5QixHQUFQLENBQVcsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQzVCLDRCQUFPLDhEQUFDLEdBQUQsTUFBVUQsT0FBTyxDQUFDRyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsT0FGQSxDQURILGVBSUUsOERBQUMsVUFBRDtBQUFZLGtCQUFVLEVBQUVwQjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcENGO0FBQUEsa0JBREY7QUE2Q0QsQ0FqR0Q7O0dBQU1YOztLQUFBQTtBQW1HTiwrREFBZUEsTUFBZjtBQU1BLElBQU1nQyxTQUFTLEdBQUdqQyx3RUFBSDtBQUFBO0FBQUE7QUFBQSw4R0FPSDtBQUFBLE1BQUdVLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQWtCQSxRQUFRLElBQUksU0FBOUI7QUFBQSxDQVBHLENBQWY7TUFBTXVCO0FBY04sSUFBTUUsUUFBUSxHQUFHbkMsd0VBQUg7QUFBQTtBQUFBO0FBQUEsbURBR0M7QUFBQSxNQUFHRSxjQUFILFNBQUdBLGNBQUg7QUFBQSwrQkFBdUNBLGNBQXZDO0FBQUEsQ0FIRCxDQUFkO01BQU1pQztBQU1OLElBQU1DLFdBQVcsR0FBR3BDLHdFQUFIO0FBQUE7QUFBQTtBQUFBLGtFQUFqQjtNQUFNb0M7QUFNTixJQUFNRSxZQUFZLEdBQUd0Qyx3RUFBSDtBQUFBO0FBQUE7QUFBQSxrQ0FBbEI7TUFBTXNDO0FBSU4sSUFBTUMsWUFBWSxHQUFHdkMsd0VBQUg7QUFBQTtBQUFBO0FBQUEsMENBQWxCO01BQU11QztBQU1OLElBQU1DLFNBQVMsR0FBR3hDLDZEQUFNLENBQUNKLG1EQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsZ0RBQWY7TUFBTTRDO0FBS04sSUFBTUMsU0FBUyxHQUFHekMsNkRBQU0sQ0FBQ0osbURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx1QkFBZjtNQUFNNkM7QUFJTixJQUFNQyxNQUFNLEdBQUcxQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxtRkFBWjtNQUFNMEM7QUFRTixJQUFNRSxHQUFHLEdBQUc1Qyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxpVkFBVDtPQUFNNEM7QUE4Qk4sSUFBTUUsVUFBVSxHQUFHOUMsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdVdBMEJEO0FBQUEsTUFBR1ksVUFBSCxTQUFHQSxVQUFIO0FBQUEsNkJBQWlDQSxVQUFVLEdBQUcsRUFBOUM7QUFBQSxDQTFCQyxDQUFoQjtPQUFNa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RwYWdlL3NsaWRlci9TbGlkZXIudHN4PzYwOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBTbGlkZXJQcm9wcyA9IHtcbiAgdHJhbnNsYXRlVmFsdWU6IG51bWJlcjtcbiAgaW1hZ2VzOiB7IHBpYzogc3RyaW5nOyBpZDogbnVtYmVyIH1bXTtcbiAgbW92ZVJpZ2h0OiAoKSA9PiB2b2lkO1xuICBtb3ZlTGVmdDogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IFNsaWRlcjogUmVhY3QuRkM8U2xpZGVyUHJvcHM+ID0gKHtcbiAgdHJhbnNsYXRlVmFsdWUsXG4gIGltYWdlcyxcbiAgbW92ZVJpZ2h0LFxuICBtb3ZlTGVmdCxcbn0pID0+IHtcbiAgY29uc3QgW21vdXNlRG93bkNsaWVudFgsIHNldE1vdXNlRG93bkNsaWVudFhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW21vdXNlVXBDbGllbnRYLCBzZXRNb3VzZVVwQ2xpZW50WF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbY3Vyc29yT24sIHNldEN1cnNvck9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBbaW1hZ2VJbmRleCwgc2V0SW1hZ2VJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIGNvbnN0IGNsaWNrUmlnaHQgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pOiB2b2lkID0+IHtcbiAgICBtb3ZlUmlnaHQoKTtcbiAgfTtcbiAgY29uc3QgY2xpY2tMZWZ0ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+KTogdm9pZCA9PiB7XG4gICAgbW92ZUxlZnQoKTtcbiAgfTtcblxuICBjb25zdCBvbk1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50Pik6IHZvaWQgPT4ge1xuICAgIHNldE1vdXNlRG93bkNsaWVudFgoZS5jbGllbnRYKTtcbiAgICBzZXRDdXJzb3JPbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbk1vdXNlVXAgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pOiB2b2lkID0+IHtcbiAgICBzZXRNb3VzZVVwQ2xpZW50WChlLmNsaWVudFgpO1xuICAgIHNldEN1cnNvck9uKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRyYWdTcGFjZSA9IE1hdGguYWJzKG1vdXNlRG93bkNsaWVudFggLSBtb3VzZVVwQ2xpZW50WCk7XG4gICAgY29uc29sZS5sb2coZHJhZ1NwYWNlKTtcbiAgICBpZiAobW91c2VEb3duQ2xpZW50WCAhPT0gMCkge1xuICAgICAgaWYgKG1vdXNlVXBDbGllbnRYIDwgbW91c2VEb3duQ2xpZW50WCAmJiBkcmFnU3BhY2UgPiAxMDApIHtcbiAgICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKG1vdXNlVXBDbGllbnRYID4gbW91c2VEb3duQ2xpZW50WCAmJiBkcmFnU3BhY2UgPiAxMDApIHtcbiAgICAgICAgbW92ZUxlZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFttb3VzZVVwQ2xpZW50WF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW1hZ2VJbmRleCh0cmFuc2xhdGVWYWx1ZSAvIDcwKTtcbiAgICBjb25zdCBpbWFnZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgfSwgMzAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbWFnZUludGVydmFsKTtcbiAgICB9O1xuICB9LCBbdHJhbnNsYXRlVmFsdWVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2xpZGVyQm94XG4gICAgICAgIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZVVwPXtvbk1vdXNlVXB9XG4gICAgICAgIGN1cnNvck9uPXtjdXJzb3JPbn1cbiAgICAgID5cbiAgICAgICAgPEltYWdlQm94IHRyYW5zbGF0ZVZhbHVlPXt0cmFuc2xhdGVWYWx1ZSAhPT0gMCA/IHRyYW5zbGF0ZVZhbHVlIDogbnVsbH0+XG4gICAgICAgICAge2ltYWdlcy5tYXAoKHBpY3R1cmUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFNsaWRlckltYWdlXG4gICAgICAgICAgICAgICAga2V5PXtwaWN0dXJlLmlkfVxuICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZS5waWN9XG4gICAgICAgICAgICAgICAgYWx0PXsnYmFja2dyb3VuZCcgKyBpZHh9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0ltYWdlQm94PlxuICAgICAgICA8UHJldkFycm93Qm94PlxuICAgICAgICAgIDxQcmV2QXJyb3dcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrTGVmdH1cbiAgICAgICAgICAgIHNyYz17Jy9hcnJvdy5wbmcnfVxuICAgICAgICAgICAgYWx0PXsnYXJyb3cnfVxuICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1ByZXZBcnJvd0JveD5cbiAgICAgICAgPE5leHRBcnJvd0JveD5cbiAgICAgICAgICA8TmV4dEFycm93XG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja1JpZ2h0fVxuICAgICAgICAgICAgc3JjPXsnL2Fycm93LnBuZyd9XG4gICAgICAgICAgICBhbHQ9eydhcnJvdyd9XG4gICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmV4dEFycm93Qm94PlxuICAgICAgPC9TbGlkZXJCb3g+XG4gICAgICA8RG90Qm94PlxuICAgICAgICB7aW1hZ2VzLm1hcCgocGljdHVyZSwgaWR4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxEb3Qga2V5PXtwaWN0dXJlLmlkfT48L0RvdD47XG4gICAgICAgIH0pfVxuICAgICAgICA8Q3VycmVudERvdCBpbWFnZUluZGV4PXtpbWFnZUluZGV4fT48L0N1cnJlbnREb3Q+XG4gICAgICA8L0RvdEJveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcblxudHlwZSBTbGlkZXJCb3hQcm9wcyA9IHtcbiAgY3Vyc29yT246IGJvb2xlYW47XG59O1xuXG5jb25zdCBTbGlkZXJCb3ggPSBzdHlsZWQuZGl2PFNsaWRlckJveFByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3MHZ3O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6ICR7KHsgY3Vyc29yT24gfSkgPT4gY3Vyc29yT24gJiYgJ3BvaW50ZXInfTtcbmA7XG5cbnR5cGUgSW1hZ2VCb3hQcm9wcyA9IHtcbiAgdHJhbnNsYXRlVmFsdWU6IG51bWJlciB8IG51bGw7XG59O1xuXG5jb25zdCBJbWFnZUJveCA9IHN0eWxlZC5kaXY8SW1hZ2VCb3hQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2Zvcm06ICR7KHsgdHJhbnNsYXRlVmFsdWUgfSkgPT4gYHRyYW5zbGF0ZVgoLSR7dHJhbnNsYXRlVmFsdWV9dncpYH07XG5gO1xuXG5jb25zdCBTbGlkZXJJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA3MHZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuYDtcblxuY29uc3QgUHJldkFycm93Qm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbmA7XG5jb25zdCBOZXh0QXJyb3dCb3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICByaWdodDogMDtcbmA7XG5cbmNvbnN0IFByZXZBcnJvdyA9IHN0eWxlZChJbWFnZSlgXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IE5leHRBcnJvdyA9IHN0eWxlZChJbWFnZSlgXG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IERvdEJveCA9IHN0eWxlZC51bGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTclO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5gO1xuXG5jb25zdCBEb3QgPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMCAxIGF1dG87XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAmOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBjb250ZW50OiAnJztcbiAgfVxuICAmOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG5gO1xudHlwZSBDdXJyZW50RG90UHJvcHMgPSB7XG4gIGltYWdlSW5kZXg6IG51bWJlcjtcbn07XG5jb25zdCBDdXJyZW50RG90ID0gc3R5bGVkLmxpPEN1cnJlbnREb3RQcm9wcz5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgJjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgY29udGVudDogJyc7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBjb250ZW50OiAnJztcbiAgfVxuICB0cmFuc2Zvcm06ICR7KHsgaW1hZ2VJbmRleCB9KSA9PiBgdHJhbnNsYXRlKCR7aW1hZ2VJbmRleCAqIDM2fXB4LC01MCUpYH07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuYDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJTbGlkZXIiLCJ0cmFuc2xhdGVWYWx1ZSIsImltYWdlcyIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwibW91c2VEb3duQ2xpZW50WCIsInNldE1vdXNlRG93bkNsaWVudFgiLCJtb3VzZVVwQ2xpZW50WCIsInNldE1vdXNlVXBDbGllbnRYIiwiY3Vyc29yT24iLCJzZXRDdXJzb3JPbiIsImltYWdlSW5kZXgiLCJzZXRJbWFnZUluZGV4IiwiY2xpY2tSaWdodCIsImUiLCJjbGlja0xlZnQiLCJvbk1vdXNlRG93biIsImNsaWVudFgiLCJvbk1vdXNlVXAiLCJkcmFnU3BhY2UiLCJNYXRoIiwiYWJzIiwiY29uc29sZSIsImxvZyIsImltYWdlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtYXAiLCJwaWN0dXJlIiwiaWR4IiwicGljIiwiaWQiLCJTbGlkZXJCb3giLCJkaXYiLCJJbWFnZUJveCIsIlNsaWRlckltYWdlIiwiaW1nIiwiUHJldkFycm93Qm94IiwiTmV4dEFycm93Qm94IiwiUHJldkFycm93IiwiTmV4dEFycm93IiwiRG90Qm94IiwidWwiLCJEb3QiLCJsaSIsIkN1cnJlbnREb3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/section/postpage/slider/Slider.tsx\n");

/***/ })

});