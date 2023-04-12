import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

//styled
import * as Styled from './OpacitySliderStyle';
import { ARROW_IMAGE } from '../../../../src/image/image';
import { loaderProp } from '../../../../src/utils/loaderProp';

interface OpacitySliderType {
  images: Array<{ pic: string; id: number }>;
}

const OpacitySliderPage: NextPage<OpacitySliderType> = ({ images }) => {
  const router = useRouter();
  const imageSize = images.length;
  const moreSlide = 1;

  const [imageIndex, setImageIndex] = useState<number>(0);

  const [translateValue, setTranslateValue] = useState<number>(0);

  const moveRight = (): void => {
    if (translateValue !== 70 * (images.length - 1)) {
      setTranslateValue((prev) => prev + 70);
    } else {
      setTranslateValue(0);
    }
  };

  let slides = setSlides();
  //복제 슬라이드
  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < moreSlide) {
      addedLast.push(images[index % images.length]);
      addedFront.unshift(images[images.length - 1 - (index % images.length)]);
      index++;
    }

    return [...addedFront, ...images, ...addedLast];
  }

  function getItemIndex(index: number) {
    index -= moreSlide;
    if (index < 0) {
      index += imageSize;
    } else if (index >= imageSize) {
      index -= imageSize;
    }

    return index;
  }

  //자동슬라이드 부분
  useEffect(() => {
    setImageIndex(translateValue / 70);
    const imageInterval = setInterval(() => {
      moveRight();
    }, 3000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [translateValue]);

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
        <Styled.ImageBox
          translateValue={translateValue !== 0 ? translateValue : null}
        >
          {slides.map((picture, idx) => {
            const itemIndex = getItemIndex(idx);

            return (
              <Styled.SliderImage
                key={picture.id + idx}
                src={images[itemIndex].pic}
                alt={'background' + idx}
              />
            );
          })}
        </Styled.ImageBox>
      </Styled.SliderBox>
    </>
  );
};

export default OpacitySliderPage;
