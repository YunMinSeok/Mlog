import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

//styled
import * as Styled from './OpacitySliderStyle';
import { ARROW_IMAGE } from '../../../../src/image/image';
import { loaderProp } from '../../../../src/utils/loaderProp';
import useSlider from '@/src/hook/useSlider';

interface OpacitySliderType {
  images: Array<{ pic: string; id: number }>;
}

const OpacitySliderPage: NextPage<OpacitySliderType> = ({ images }) => {
  const imageRef = useRef<HTMLImageElement[]>([]);
  const router = useRouter();
  const imageSize = images.length;

  const imageIndex = useRef<number>(0);

  useSlider({ ref: imageRef });

  // opacity 관련 함수
  // const handleOpacity = (): void => {
  //   imageRef.current[imageIndex.current].style.opacity = '0';
  //   if (imageIndex.current === imageSize - 1) {
  //     imageIndex.current = 0;
  //   } else {
  //     imageIndex.current += 1;
  //   }
  //   imageRef.current[imageIndex.current].style.opacity = '1';
  // };

  //자동슬라이드 부분
  // useEffect(() => {
  //   const imageInterval = setInterval(() => {
  //     handleOpacity();
  //   }, 3000);

  //   return () => {
  //     clearInterval(imageInterval);
  //   };
  // }, [imageIndex]);

  return (
    <>
      <Styled.BackButton
        onClick={() => router.back()}
        loader={loaderProp}
        src={ARROW_IMAGE}
        alt={'arrow'}
        width={50}
        height={50}
        unoptimized={true}
      />
      <Styled.SliderBox>
        <Styled.ImageBox>
          {images.map((picture, idx) => {
            return (
              <Styled.SliderImage
                ref={(el) => (imageRef.current[idx] = el as HTMLImageElement)}
                key={picture.id + idx}
                src={picture.pic}
                alt={'background' + idx}
                opacity={idx === 0 ? 1 : 0}
              />
            );
          })}
        </Styled.ImageBox>
      </Styled.SliderBox>
    </>
  );
};

export default OpacitySliderPage;
