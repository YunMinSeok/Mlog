import { useRef, useEffect, MutableRefObject } from 'react';

interface UseSliderType {
  ref: MutableRefObject<HTMLImageElement[]>;
}

// slider opacity hook
const useSlider = ({ ref }: UseSliderType) => {
  const imageIndex = useRef<number>(0);
  // opacity 관련 함수
  const handleOpacity = (): void => {
    ref.current[imageIndex.current].style.opacity = '0';
    if (imageIndex.current === ref.current.length - 1) {
      imageIndex.current = 0;
    } else {
      imageIndex.current += 1;
    }
    ref.current[imageIndex.current].style.opacity = '1';
  };

  //자동슬라이드 부분
  useEffect(() => {
    const imageInterval = setInterval(() => {
      handleOpacity();
    }, 3000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [imageIndex]);
};

export default useSlider;
