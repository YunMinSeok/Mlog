"use strict";
(() => {
var exports = {};
exports.id = 993;
exports.ids = [993,118];
exports.modules = {

/***/ 7757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "indexstyle__Container",
  componentId: "sc-1p0v600-0"
})(["position:relative;height:100vh;background-color:#121212;padding:50px;"]);

/***/ }),

/***/ 7220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ slider)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/section/postpage/slider/Slider.style.ts


const SliderBox = external_styled_components_default().div.withConfig({
  displayName: "Sliderstyle__SliderBox",
  componentId: "sc-wx03wr-0"
})(["position:relative;display:flex;margin:0 auto;max-width:70vw;height:500px;overflow:hidden;cursor:", ";"], ({
  cursorOn
}) => cursorOn && 'pointer');
const ImageBox = external_styled_components_default().div.withConfig({
  displayName: "Sliderstyle__ImageBox",
  componentId: "sc-wx03wr-1"
})(["display:flex;transition:1s;transform:", ";"], ({
  translateValue
}) => `translateX(-${translateValue}vw)`);
const SliderImage = external_styled_components_default().img.withConfig({
  displayName: "Sliderstyle__SliderImage",
  componentId: "sc-wx03wr-2"
})(["width:70vw;object-fit:cover;object-position:center center;"]);
const PrevArrowBox = external_styled_components_default().div.withConfig({
  displayName: "Sliderstyle__PrevArrowBox",
  componentId: "sc-wx03wr-3"
})(["position:absolute;top:45%;"]);
const NextArrowBox = external_styled_components_default().div.withConfig({
  displayName: "Sliderstyle__NextArrowBox",
  componentId: "sc-wx03wr-4"
})(["position:absolute;top:45%;right:0;"]);
const PrevArrow = external_styled_components_default()((image_default())).withConfig({
  displayName: "Sliderstyle__PrevArrow",
  componentId: "sc-wx03wr-5"
})(["transform:rotate(180deg);cursor:pointer;"]);
const NextArrow = external_styled_components_default()((image_default())).withConfig({
  displayName: "Sliderstyle__NextArrow",
  componentId: "sc-wx03wr-6"
})(["cursor:pointer;"]);
const DotBox = external_styled_components_default().ul.withConfig({
  displayName: "Sliderstyle__DotBox",
  componentId: "sc-wx03wr-7"
})(["position:absolute;display:flex;left:50%;top:57%;transform:translateX(-50%);"]);
const Dot = external_styled_components_default().li.withConfig({
  displayName: "Sliderstyle__Dot",
  componentId: "sc-wx03wr-8"
})(["position:relative;flex:0 1 auto;width:30px;height:3px;margin:0 3px;text-indent:-999px;background-color:rgba(255,255,255,0.5);&::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:'';}&::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:'';}"]);
const CurrentDot = external_styled_components_default().li.withConfig({
  displayName: "Sliderstyle__CurrentDot",
  componentId: "sc-wx03wr-9"
})(["position:absolute;left:0;top:50%;width:30px;height:3px;margin:0 3px;background-color:rgba(255,255,255,1);&::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:'';}&::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:'';}transform:", ";transition:transform 0.5s;"], ({
  imageIndex
}) => `translate(${imageIndex * 36}px,-50%)`);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/section/postpage/slider/Slider.tsx
 //styled






const Slider = ({
  images
}) => {
  const imageSize = images.length;
  const moreSlide = 1;
  const {
    0: mouseDownClientX,
    1: setMouseDownClientX
  } = (0,external_react_.useState)(0);
  const {
    0: mouseUpClientX,
    1: setMouseUpClientX
  } = (0,external_react_.useState)(0);
  const {
    0: cursorOn,
    1: setCursorOn
  } = (0,external_react_.useState)(false);
  const {
    0: imageIndex,
    1: setImageIndex
  } = (0,external_react_.useState)(0);
  const {
    0: translateValue,
    1: setTranslateValue
  } = (0,external_react_.useState)(0);

  const moveRight = () => {
    if (translateValue !== 70 * (images.length - 1)) {
      setTranslateValue(prev => prev + 70);
    } else {
      setTranslateValue(0);
    }
  };

  const moveLeft = () => {
    if (translateValue !== 0) {
      setTranslateValue(prev => prev - 70);
    } else {
      setTranslateValue(70 * (images.length - 1));
    }
  };

  let slides = setSlides(); //복제 슬라이드

  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;

    while (index < moreSlide) {
      addedLast.push(images[index % images.length]);
      addedFront.unshift(images[images.length - 1 - index % images.length]);
      index++;
    }

    return [...addedFront, ...images, ...addedLast];
  }

  function getItemIndex(index) {
    index -= moreSlide;

    if (index < 0) {
      index += imageSize;
    } else if (index >= imageSize) {
      index -= imageSize;
    }

    return index;
  } //슬라이드 이벤트


  const clickRight = e => {
    moveRight();
  };

  const clickLeft = e => {
    moveLeft();
  }; //드래그 이벤트


  const onMouseDown = e => {
    setMouseDownClientX(e.clientX);
    setCursorOn(true);
  };

  const onMouseUp = e => {
    setMouseUpClientX(e.clientX);
    setCursorOn(false);
  }; //드래그 이벤트 부분


  (0,external_react_.useEffect)(() => {
    const dragSpace = Math.abs(mouseDownClientX - mouseUpClientX);

    if (mouseDownClientX !== 0) {
      if (mouseUpClientX < mouseDownClientX && dragSpace > 100) {
        moveRight();
      } else if (mouseUpClientX > mouseDownClientX && dragSpace > 100) {
        moveLeft();
      }
    }
  }, [mouseUpClientX]); //자동슬라이드 부분

  (0,external_react_.useEffect)(() => {
    setImageIndex(translateValue / 70);
    const imageInterval = setInterval(() => {
      moveRight();
    }, 3000);
    return () => {
      clearInterval(imageInterval);
    };
  }, [translateValue]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SliderBox, {
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      cursorOn: cursorOn,
      children: [/*#__PURE__*/jsx_runtime_.jsx(ImageBox, {
        translateValue: translateValue !== 0 ? translateValue : null,
        children: slides.map((picture, idx) => {
          const itemIndex = getItemIndex(idx);
          return /*#__PURE__*/jsx_runtime_.jsx(SliderImage, {
            src: images[itemIndex].pic,
            alt: 'background' + idx
          }, picture.id + idx);
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(PrevArrowBox, {
        children: /*#__PURE__*/jsx_runtime_.jsx(PrevArrow, {
          onClick: clickLeft,
          src: '/arrow.png',
          alt: 'arrow',
          width: 50,
          height: 50
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NextArrowBox, {
        children: /*#__PURE__*/jsx_runtime_.jsx(NextArrow, {
          onClick: clickRight,
          src: '/arrow.png',
          alt: 'arrow',
          width: 50,
          height: 50
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DotBox, {
      children: [images.map((picture, idx) => {
        return /*#__PURE__*/jsx_runtime_.jsx(Dot, {}, picture.id);
      }), /*#__PURE__*/jsx_runtime_.jsx(CurrentDot, {
        imageIndex: imageIndex
      })]
    })]
  });
};

/* harmony default export */ const slider_Slider = (Slider);
// EXTERNAL MODULE: ./pages/posts/slider/index.style.ts
var index_style = __webpack_require__(7757);
;// CONCATENATED MODULE: ./pages/posts/slider/index.tsx
 //components

 //styled




const Index = () => {
  const images = [{
    pic: '/Mlog/SliderImage1.jpeg',
    id: 1
  }, {
    pic: '/Mlog/SliderImage2.jpeg',
    id: 2
  }, {
    pic: '/Mlog/SliderImage3.jpeg',
    id: 3
  }, {
    pic: '/Mlog/SliderImage4.jpeg',
    id: 4
  }, {
    pic: '/Mlog/SliderImage5.jpeg',
    id: 5
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(index_style.Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(slider_Slider, {
      images: images
    })
  });
};

/* harmony default export */ const slider = (Index);

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(7220)));
module.exports = __webpack_exports__;

})();