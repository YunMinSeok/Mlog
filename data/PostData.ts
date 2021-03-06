import {
  DEBOUNCE_IMAGE,
  INFINITESCROLL_IMAGE,
  REINFINITESCROLL_IMAGE,
  SLIDER_IMAGE,
} from '../constants/image/image';

export const postData = [
  {
    id: 'slider_post',
    link: '/posts/slider',
    image: SLIDER_IMAGE,
    title: 'Infinite carousel slider',
    content: 'TypeScript를 이용해서 만든 무한 자동 슬라이드',
    date: '2022년 4월 28일',
  },
  {
    id: 'infiniteScroll_post',
    link: '/posts/infiniteScroll',
    image: INFINITESCROLL_IMAGE,
    title: 'Infinite reverse scroll',
    content: 'Intersection Observer를 이용한 무한 스크롤',
    date: '2022년 5월 31일',
  },
  {
    id: 'debounce_post',
    link: '/posts/debounce',
    image: DEBOUNCE_IMAGE,
    title: 'Input Debounce',
    content: 'debounce을 이용한 성능 향상 공부',
    date: '2022년 6월 11일',
  },
  {
    id: 'reverseInfiniteScroll_post',
    link: '/posts/reverseInfiniteScroll',
    image: REINFINITESCROLL_IMAGE,
    title: 'Reverse Infinite reverse scroll',
    content: 'Intersection Observer를 이용한 역 무한 스크롤',
    date: '2022년 6월 18일',
  },
  {
    id: 'clipboard_post',
    link: '/posts/clipBoard',
    image: REINFINITESCROLL_IMAGE,
    title: 'ClipBoard Class Components',
    content: 'Class형태의 클립보드 만들기!',
    date: '2022년 7월 6일',
  },
];
