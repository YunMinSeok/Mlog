"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./modules/slice/user.ts

 //사용자 불러오기 임의 코드

const loadUser = (0,toolkit_namespaceObject.createAsyncThunk)(``, async (id, thunkApi) => {
  try {
    const response = await external_axios_default().get(`api/users/${id}`);
    return response.data.data;
  } catch (err) {
    return err; //or return thunkApi.rejectWithValue(err);
  }
});
const initialState = {
  user: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null
};
const userSlice = (0,toolkit_namespaceObject.createSlice)({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadUser.pending, state => {
      state.loadUserLoading = true;
    }).addCase(loadUser.fulfilled, (state, action) => {
      state.loadUserDone = true;
      state.user = action.payload;
    }).addCase(loadUser.rejected, (state, action) => {
      state.loadUserLoading = false;
      state.loadUserDone = true;
      state.loadUserError = action.payload;
    });
  }
});
const {
  actions,
  reducer
} = userSlice;
/* harmony default export */ const user = (reducer);
;// CONCATENATED MODULE: ./modules/store.ts


const store = (0,toolkit_namespaceObject.configureStore)({
  reducer: {
    user: user
  }
});
/* harmony default export */ const modules_store = (store);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: external "styled-reset"
const external_styled_reset_namespaceObject = require("styled-reset");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_namespaceObject);
;// CONCATENATED MODULE: ./styles/global-styles.ts


const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["", " *{box-sizing:border-box;}body{width:100%;height:100%;font-family:-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;}a{color:inherit;text-decoration:none;}input,button{background-color:transparent;border:none;outline:none;}h1,h2,h3,h4,h5,h6{font-family:'Maven Pro',sans-serif;}@media only screen and (max-width:768px){body{font-size:12px;}}@media only screen and (max-width:576px){body{font-size:10px;}}"], (external_styled_reset_default()));
/* harmony default export */ const global_styles = (GlobalStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_redux_namespaceObject.Provider, {
    store: modules_store,
    children: [/*#__PURE__*/jsx_runtime_.jsx(global_styles, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = (__webpack_exec__(4553));
module.exports = __webpack_exports__;

})();