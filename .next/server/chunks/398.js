"use strict";
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ templetes_PostsPageTemplate)
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/section/postpage/posts.tsx







const Posts = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(PostWrap, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PostBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/posts/slider",
          children: /*#__PURE__*/jsx_runtime_.jsx(LinkBox, {
            children: /*#__PURE__*/jsx_runtime_.jsx(ThumnailContent, {
              children: /*#__PURE__*/jsx_runtime_.jsx(Thumnail, {
                src: '/SliderImage1.jpeg',
                alt: "post_image",
                layout: "fill"
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentBox, {
          children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/posts/slider",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LinkBox, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(ContentH4, {
                children: "\uBE14\uB85C\uADF8 \uCCAB \uAE00"
              }), /*#__PURE__*/jsx_runtime_.jsx(ContentDescription, {
                children: /*#__PURE__*/jsx_runtime_.jsx(ContentDescriptionP, {
                  children: "\uC800\uB294 \uC548\uB4DC\uB85C\uC774\uB4DC \uAC1C\uBC1C\uC744 \uC2DC\uC791\uD55C \uC9C0 1\uB144 \uC815\uB3C4 \uB41C \uC8FC\uB2C8\uC5B4 \uAC1C\uBC1C\uC790\uC785\uB2C8\uB2E4. \uC8FC\uB2C8\uC5B4 \uAC1C\uBC1C\uC790(3\uB144 \uC774\uD558)\uC758 \uAC1C\uBC1C\uC790\uB294 \uAC1C\uBC1C \uCEE4\uB9AC\uC5B4 \uC131\uC7A5 \uC695\uAD6C\uAC00 \uAC15\uD55C \uAC1C\uBC1C\uC790\uB77C\uACE0 \uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uD559\uAD50\uB098 \uD559\uC6D0 \uB4F1 \uB2E4\uC591\uD55C \uBC29\uBC95\uC744 \uD1B5\uD574 \uC774\uB860\uC744 \uACF5\uBD80\uD558\uB354\uB77C\uACE0 \uC774\uB97C \uC2E4\uC81C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC801\uC6A9\uD560 \uAE30\uD68C\uB294 \uD754\uCE58 \uC54A\uC558\uC2B5"
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(SubInfo, {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "2022\uB144 4\uC6D4 28\uC77C"
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const posts = (Posts);
const Container = external_styled_components_default().section.withConfig({
  displayName: "posts__Container",
  componentId: "sc-j2zp6p-0"
})(["height:100vh;background-color:#121212;"]);
const PostWrap = external_styled_components_default().div.withConfig({
  displayName: "posts__PostWrap",
  componentId: "sc-j2zp6p-1"
})(["display:flex;padding:2rem;flex-wrap:wrap;"]);
const PostBox = external_styled_components_default().div.withConfig({
  displayName: "posts__PostBox",
  componentId: "sc-j2zp6p-2"
})(["width:18rem;background:#1e1e1e;border-radius:4px;box-shadow:rgb(0 0 0 / 4%) 0px 4px 16px 0px;transition:box-shadow 0.25s ease-in 0s,transform 0.25s ease-in 0s;margin:1rem;overflow:hidden;display:flex;flex-direction:column;"]);
const LinkBox = external_styled_components_default().a.withConfig({
  displayName: "posts__LinkBox",
  componentId: "sc-j2zp6p-3"
})(["display:block;color:inherit;text-decoration:none;cursor:pointer;"]);
const ThumnailContent = external_styled_components_default().div.withConfig({
  displayName: "posts__ThumnailContent",
  componentId: "sc-j2zp6p-4"
})(["position:relative;width:100%;padding-top:52.19206680584551%;"]);
const Thumnail = external_styled_components_default()((image_default())).withConfig({
  displayName: "posts__Thumnail",
  componentId: "sc-j2zp6p-5"
})(["position:absolute;top:0px;left:0px;width:100%;height:100%;display:block;object-fit:cover;"]);
const ContentBox = external_styled_components_default().div.withConfig({
  displayName: "posts__ContentBox",
  componentId: "sc-j2zp6p-6"
})(["padding:1rem;display:flex;flex:1 1 0%;flex-direction:column;"]);
const ContentH4 = external_styled_components_default().h4.withConfig({
  displayName: "posts__ContentH4",
  componentId: "sc-j2zp6p-7"
})(["font-size:1rem;margin:0px 0px 0.25rem;line-height:1.5;word-break:break-word;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:#ececec;"]);
const ContentDescription = external_styled_components_default().div.withConfig({
  displayName: "posts__ContentDescription",
  componentId: "sc-j2zp6p-8"
})(["flex:1 1 0%;"]);
const ContentDescriptionP = external_styled_components_default().p.withConfig({
  displayName: "posts__ContentDescriptionP",
  componentId: "sc-j2zp6p-9"
})(["margin:0px 0px 1.5rem;word-break:break-word;overflow-wrap:break-word;font-size:0.875rem;line-height:1.5;height:3.9375rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:#d9d9d9;"]);
const SubInfo = external_styled_components_default().div.withConfig({
  displayName: "posts__SubInfo",
  componentId: "sc-j2zp6p-10"
})(["font-size:0.75rem;line-height:1.5;color:#acacac;"]);
;// CONCATENATED MODULE: ./components/templetes/PostsPageTemplate.tsx

 //Import Components






const PostsPageTemplate = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PostsPageTemplate_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(posts, {})]
  });
};

/* harmony default export */ const templetes_PostsPageTemplate = (PostsPageTemplate);
const PostsPageTemplate_Container = external_styled_components_default().div.withConfig({
  displayName: "PostsPageTemplate__Container",
  componentId: "sc-l4ngnw-0"
})(["position:relative;min-width:884px;min-height:100%;padding-left:23%;height:auto !important;"]);

/***/ })

};
;