import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

//styled
import * as Styled from './OpacitySliderStyle';
import { ARROW_IMAGE } from '../../../../src/image/image';
import { loaderProp } from '../../../../src/utils/loaderProp';

interface OpacitySliderType {
  images: Array<{ pic: string; id: number }>;
}

const OpacitySliderPage: NextPage<OpacitySliderType> = ({ images }) => {
  const imageRef = useRef([]);
  const router = useRouter();
  const imageSize = images.length;

  const [imageIndex, setImageIndex] = useState<number>(0);

  // opacity 관련 함수
  const handleOpacity = (): void => {
    setImageIndex((prevState) => prevState + 1);
    var image = document.getElementById('image');
    console.log(imageRef.current[0]);
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
                ref={imageRef.current[idx]}
                key={picture.id + idx}
                src={picture.pic}
                alt={'background' + idx}
                opacity={idx === 0 ? '1' : '0'}
              />
            );
          })}
        </Styled.ImageBox>
      </Styled.SliderBox>
    </>
  );
};

export default OpacitySliderPage;
