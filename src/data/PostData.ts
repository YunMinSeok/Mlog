import {
  DEBOUNCE_IMAGE,
  INFINITESCROLL_IMAGE,
  REINFINITESCROLL_IMAGE,
  SLIDER_IMAGE,
  CLIPBOARD_IMAGE,
  RESIZE_IMAGE,
  OPACITYSLIDER_IMAGE,
} from '../image/image';

export const postData = [
  {
    id: 'slider_post',
    link: process.env.PATH + '/posts/slider',
    image: SLIDER_IMAGE,
    title: 'Infinite carousel slider',
    content: 'TypeScript를 이용해서 만든 무한 자동 슬라이드',
    date: '2022년 4월 28일',
  },
  {
    id: 'infiniteScroll_post',
    link: process.env.PATH + '/posts/infiniteScroll',
    image: INFINITESCROLL_IMAGE,
    title: 'Infinite reverse scroll',
    content: 'Intersection Observer를 이용한 무한 스크롤',
    date: '2022년 5월 31일',
  },
  {
    id: 'debounce_post',
    link: process.env.PATH + '/posts/debounce',
    image: DEBOUNCE_IMAGE,
    title: 'Input Debounce',
    content: 'debounce을 이용한 성능 향상 공부',
    date: '2022년 6월 11일',
  },
  {
    id: 'reverseInfiniteScroll_post',
    link: process.env.PATH + '/posts/reverseInfiniteScroll',
    image: REINFINITESCROLL_IMAGE,
    title: 'Reverse Infinite reverse scroll',
    content: 'Intersection Observer를 이용한 역 무한 스크롤',
    date: '2022년 6월 18일',
  },
  {
    id: 'clipboard_post',
    link: process.env.PATH + '/posts/clipBoard',
    image: CLIPBOARD_IMAGE,
    title: 'ClipBoard Class Components',
    content: 'Class형태의 클립보드 라이브러리 만들기 및 적용시키기',
    date: '2022년 7월 6일',
  },
  {
    id: 'sleep_post',
    link: process.env.PATH + '/posts/imageResize',
    image: RESIZE_IMAGE,
    title: 'Resize Library',
    content: '이미지 리사이징으로 크기 줄이기',
    date: '2022년 8월 15일',
  },

  {
    id: 'opacity_slider_post',
    link: process.env.PATH + '/posts/opacitySlider',
    image: OPACITYSLIDER_IMAGE,
    title: 'Opacity Slider',
    content: 'slider 훅 만들기',
    date: '2023년 4월 12일',
  },
];
