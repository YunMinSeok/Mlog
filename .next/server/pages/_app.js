"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "styled-reset"
const external_styled_reset_namespaceObject = require("styled-reset");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./styles/global-styles.ts


const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["", " *{box-sizing:border-box;}body{width:100%;height:100%;font-family:-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;}a{color:inherit;text-decoration:none;}input,button{background-color:transparent;border:none;outline:none;}h1,h2,h3,h4,h5,h6{font-family:'Maven Pro',sans-serif;}@media only screen and (max-width:768px){body{font-size:12px;}}@media only screen and (max-width:576px){body{font-size:10px;}}"], (external_styled_reset_default()));
/* harmony default export */ const global_styles = (GlobalStyle);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./modules/slice/users.ts

//slice 안에 들어갈 내용은 name, init, reducers
//리덕스는 root reducer 객체를 가지고 있는데 이 객체의 key/ value쌍을 slice 라고 한다  요걸 업데이트 하는 reducer 함수가 slice reducer
//immer
const usersSlice = (0,toolkit_namespaceObject.createSlice)({
  name: 'users',
  initialState: [{
    id: 1,
    name: '은지'
  }],
  //reducer 안에 여러가지 함수가 들어갈 수 있음. 더하기 빼기 등등.. 그때마다 name 바꿔줄 필요 없음
  reducers: {
    //액션타입은 슬라이스 이름을 접두어로 사용해서 자동 생성 >> 나같은 경우엔 users/addTodo
    addUser: (state, action) => {
      const {
        id,
        name
      } = action.payload;
      state.push({
        id,
        name
      }); // state.push(action.payload);
    }
  }
}); //위에 작성이 끝났다면 액션과 리듀서를 export 해준다.
// export const { addUser } = users.actions;
// export default users.reducer;

const {
  actions,
  reducer
} = usersSlice;
const {
  addUser
} = actions;
/* harmony default export */ const users = (reducer);
;// CONCATENATED MODULE: ./modules/store.ts


const store = (0,toolkit_namespaceObject.configureStore)({
  reducer: {
    users: users
  }
});
/* harmony default export */ const modules_store = (store);
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
var __webpack_exports__ = (__webpack_exec__(5636));
module.exports = __webpack_exports__;

})();