import type { NextApiRequest, NextApiResponse } from 'next';

import { postType } from '@/types/postType';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<postType[]>,
) {
  res.status(200).json([
    {
      id: 'slider_post',
      link: '/posts/slider',
      image: '/SliderPostImage.png',
      title: 'Infinite carousel slider',
      content: 'TypeScript를 이용해서 만든 무한 자동 슬라이드',
      date: '2022년 4월 28일',
    },
    {
      id: 'infiniteScroll_post',
      link: '/posts/infiniteScroll',
      image: '/InfiniteScroll.png',
      title: 'Infinite reverse scroll',
      content: 'Intersection Observer를 이용한 무한 스크롤',
      date: '2022년 5월 31일',
    },
    {
      id: 'debounce_post',
      link: '/posts/debounce',
      image: '/debounce.png',
      title: 'Input Debounce',
      content: 'debounce을 이용한 성능 향상 공부',
      date: '2022년 6월 11일',
    },
    {
      id: 'reverseInfiniteScroll_post',
      link: '/posts/reverseInfiniteScroll',
      image: '/reverseInfiniteScroll.png',
      title: 'Reverse Infinite reverse scroll',
      content: 'Intersection Observer를 이용한 역 무한 스크롤',
      date: '2022년 6월 18일',
    },
    {
      id: 'clipboard_post',
      link: '/posts/clipBoard',
      image: '/clipboard.png',
      title: 'ClipBoard Class Components',
      content: 'Class형태의 클립보드 라이브러리 만들기 및 적용시키기',
      date: '2022년 7월 6일',
    },
    {
      id: 'imageResize_post',
      link: '/posts/imageResize',
      image: '/clipboard.png',
      title: 'Image Resize',
      content: '이미지 리사이징 오픈소스로 이미지 사이즈,용량 줄이긴',
      date: '2022년 8월 15일',
    },
  ]);
}
