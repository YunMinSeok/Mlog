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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"loadUser\": () => (/* binding */ loadUser),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n\n //사용자 불러오기 임의 코드\n\nconst loadUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(``, async (id, thunkApi) => {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`api/users/${id}`);\n    return response.data.data;\n  } catch (err) {\n    return err; //or return thunkApi.rejectWithValue(err);\n  }\n});\nconst initialState = {\n  user: null,\n  loadUserLoading: false,\n  loadUserDone: false,\n  loadUserError: null\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: 'users',\n  initialState,\n  reducers: {},\n  extraReducers: builder => {\n    builder.addCase(loadUser.pending, state => {\n      state.loadUserLoading = true;\n    }).addCase(loadUser.fulfilled, (state, action) => {\n      state.loadUserDone = true;\n      state.user = action.payload;\n    }).addCase(loadUser.rejected, (state, action) => {\n      state.loadUserLoading = false;\n      state.loadUserDone = true;\n      state.loadUserError = action.payload;\n    });\n  }\n});\nconst {\n  actions,\n  reducer\n} = userSlice;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3NsaWNlL3VzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ08sTUFBTUcsUUFBUSxHQUFHRCxrRUFBZ0IsQ0FBRSxFQUFGLEVBQUssT0FBT0UsRUFBUCxFQUFXQyxRQUFYLEtBQXdCO0VBQ25FLElBQUk7SUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTU4sZ0RBQUEsQ0FBVyxhQUFZSSxFQUFHLEVBQTFCLENBQXZCO0lBQ0EsT0FBT0UsUUFBUSxDQUFDRSxJQUFULENBQWNBLElBQXJCO0VBQ0QsQ0FIRCxDQUdFLE9BQU9DLEdBQVAsRUFBWTtJQUNaLE9BQU9BLEdBQVAsQ0FEWSxDQUVaO0VBQ0Q7QUFDRixDQVJ1QyxDQUFqQztBQXdCUCxNQUFNQyxZQUF1QixHQUFHO0VBQzlCQyxJQUFJLEVBQUUsSUFEd0I7RUFFOUJDLGVBQWUsRUFBRSxLQUZhO0VBRzlCQyxZQUFZLEVBQUUsS0FIZ0I7RUFJOUJDLGFBQWEsRUFBRTtBQUplLENBQWhDO0FBT08sTUFBTUMsU0FBUyxHQUFHZCw2REFBVyxDQUFDO0VBQ25DZSxJQUFJLEVBQUUsT0FENkI7RUFFbkNOLFlBRm1DO0VBR25DTyxRQUFRLEVBQUUsRUFIeUI7RUFJbkNDLGFBQWEsRUFBR0MsT0FBRCxJQUFhO0lBQzFCQSxPQUFPLENBQ0pDLE9BREgsQ0FDV2pCLFFBQVEsQ0FBQ2tCLE9BRHBCLEVBQzhCQyxLQUFELElBQVc7TUFDcENBLEtBQUssQ0FBQ1YsZUFBTixHQUF3QixJQUF4QjtJQUNELENBSEgsRUFJR1EsT0FKSCxDQUlXakIsUUFBUSxDQUFDb0IsU0FKcEIsRUFJK0IsQ0FBQ0QsS0FBRCxFQUFRRSxNQUFSLEtBQW1CO01BQzlDRixLQUFLLENBQUNULFlBQU4sR0FBcUIsSUFBckI7TUFDQVMsS0FBSyxDQUFDWCxJQUFOLEdBQWFhLE1BQU0sQ0FBQ0MsT0FBcEI7SUFDRCxDQVBILEVBUUdMLE9BUkgsQ0FRV2pCLFFBQVEsQ0FBQ3VCLFFBUnBCLEVBUThCLENBQUNKLEtBQUQsRUFBUUUsTUFBUixLQUFtQjtNQUM3Q0YsS0FBSyxDQUFDVixlQUFOLEdBQXdCLEtBQXhCO01BQ0FVLEtBQUssQ0FBQ1QsWUFBTixHQUFxQixJQUFyQjtNQUNBUyxLQUFLLENBQUNSLGFBQU4sR0FBc0JVLE1BQU0sQ0FBQ0MsT0FBN0I7SUFDRCxDQVpIO0VBYUQ7QUFsQmtDLENBQUQsQ0FBN0I7QUFxQlAsTUFBTTtFQUFFRSxPQUFGO0VBQVdDO0FBQVgsSUFBdUJiLFNBQTdCO0FBRUEsaUVBQWVhLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tbG9nLy4vbW9kdWxlcy9zbGljZS91c2VyLnRzP2I0NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbi8v7IKs7Jqp7J6QIOu2iOufrOyYpOq4sCDsnoTsnZgg7L2U65OcXG5leHBvcnQgY29uc3QgbG9hZFVzZXIgPSBjcmVhdGVBc3luY1RodW5rKGBgLCBhc3luYyAoaWQsIHRodW5rQXBpKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGFwaS91c2Vycy8ke2lkfWApO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBlcnI7XG4gICAgLy9vciByZXR1cm4gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlKGVycik7XG4gIH1cbn0pO1xuaW50ZXJmYWNlIFVzZXIge1xuICBpZDogbnVtYmVyO1xuICBlbWFpbDogc3RyaW5nO1xuICBmaXJzdF9uYW1lOiBzdHJpbmc7XG4gIGxhc3RfbmFtZTogc3RyaW5nO1xuICBhdmF0YXI6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xuICBsb2FkVXNlckxvYWRpbmc6IGJvb2xlYW47XG4gIGxvYWRVc2VyRG9uZTogYm9vbGVhbjtcbiAgbG9hZFVzZXJFcnJvcjogYW55O1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJTdGF0ZSA9IHtcbiAgdXNlcjogbnVsbCxcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcbiAgbG9hZFVzZXJFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICd1c2VycycsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHt9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDYXNlKGxvYWRVc2VyLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGxvYWRVc2VyLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUubG9hZFVzZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGxvYWRVc2VyLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUubG9hZFVzZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSk7XG4gIH0sXG59KTtcblxuY29uc3QgeyBhY3Rpb25zLCByZWR1Y2VyIH0gPSB1c2VyU2xpY2U7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJsb2FkVXNlciIsImlkIiwidGh1bmtBcGkiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnIiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/slice/user.ts\n");

/***/ }),

/***/ "./modules/store.ts":
/*!**************************!*\
  !*** ./modules/store.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slice_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice/user */ \"./modules/slice/user.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    user: _slice_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3N0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsTUFBTUUsS0FBSyxHQUFHRixnRUFBYyxDQUFDO0VBQzNCRyxPQUFPLEVBQUU7SUFDUEMsSUFBSSxFQUFFSCxtREFBV0E7RUFEVjtBQURrQixDQUFELENBQTVCO0FBTUEsaUVBQWVDLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tbG9nLy4vbW9kdWxlcy9zdG9yZS50cz8wODU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3NsaWNlL3VzZXInO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidXNlclJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/store */ \"./modules/store.ts\");\n/* harmony import */ var _src_styles_global_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/styles/global-styles */ \"./src/styles/global-styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/yunminseok/Desktop/study/Mlog/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n    store: _modules_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_styles_global_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBOzs7QUFFQSxTQUFTSSxLQUFULENBQWU7RUFBRUMsU0FBRjtFQUFhQztBQUFiLENBQWYsRUFBbUQ7RUFDakQsb0JBQ0UsOERBQUMsaURBQUQ7SUFBVSxLQUFLLEVBQUVKLHNEQUFqQjtJQUFBLHdCQUNFLDhEQUFDLGlFQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUVFLDhEQUFDLFNBQUQsb0JBQWVJLFNBQWY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUZGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBTUQ7O0FBRUQsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tbG9nLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9zdG9yZSc7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnLi4vc3JjL3N0eWxlcy9nbG9iYWwtc3R5bGVzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm92aWRlciIsInN0b3JlIiwiR2xvYmFsU3R5bGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global-styles.ts":
/*!*************************************!*\
  !*** ./src/styles/global-styles.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ \"styled-reset\");\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\"\", \" *{box-sizing:border-box;}body{width:100%;height:100%;font-family:-apple-system,system-ui,BlinkMacSystemFont,\\\"Segoe UI\\\",Roboto,\\\"Helvetica Neue\\\",Arial,sans-serif;}a{color:inherit;text-decoration:none;}input,button{background-color:transparent;border:none;outline:none;}h1,h2,h3,h4,h5,h6{font-family:'Maven Pro',sans-serif;}@media only screen and (max-width:768px){body{font-size:12px;}}@media only screen and (max-width:576px){body{font-size:10px;}}\"], (styled_reset__WEBPACK_IMPORTED_MODULE_1___default()));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC1zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUUsV0FBVyxHQUFHRixvRUFBSCwrY0FDYkMscURBRGEsQ0FBakI7QUFvQ0EsaUVBQWVDLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tbG9nLy4vc3JjL3N0eWxlcy9nbG9iYWwtc3R5bGVzLnRzPzE3MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgcmVzZXQgZnJvbSAnc3R5bGVkLXJlc2V0JztcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgJHtyZXNldH1cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBib2R5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWY7XG4gIH1cbiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGlucHV0LCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7XG4gICAgZm9udC1mYW1pbHk6J01hdmVuIFBybycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgYm9keSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIGJvZHkge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7XG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJyZXNldCIsIkdsb2JhbFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global-styles.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

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