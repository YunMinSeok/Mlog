import React, { useEffect, useState } from 'react';

//styled
import * as Styled from './Slider.style';

type SliderProps = {
  images: { pic: string; id: number }[];
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  const imageSize = images.length;
  const moreSlide = 1;

  const [mouseDownClientX, setMouseDownClientX] = useState<number>(0);
  const [mouseUpClientX, setMouseUpClientX] = useState<number>(0);
  const [cursorOn, setCursorOn] = useState<boolean>(false);

  const [imageIndex, setImageIndex] = useState<number>(0);

  const [translateValue, setTranslateValue] = useState<number>(0);

  const moveRight = (): void => {
    if (translateValue !== 70 * (images.length - 1)) {
      setTranslateValue((prev) => prev + 70);
    } else {
      setTranslateValue(0);
    }
  };

  const moveLeft = (): void => {
    if (translateValue !== 0) {
      setTranslateValue((prev) => prev - 70);
    } else {
      setTranslateValue(70 * (images.length - 1));
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

  //슬라이드 이벤트
  const clickRight = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    moveRight();
  };
  const clickLeft = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    moveLeft();
  };

  //드래그 이벤트
  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    setMouseDownClientX(e.clientX);
    setCursorOn(true);
  };
  const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    setMouseUpClientX(e.clientX);
    setCursorOn(false);
  };

  //드래그 이벤트 부분
  useEffect(() => {
    const dragSpace = Math.abs(mouseDownClientX - mouseUpClientX);
    if (mouseDownClientX !== 0) {
      if (mouseUpClientX < mouseDownClientX && dragSpace > 100) {
        moveRight();
      } else if (mouseUpClientX > mouseDownClientX && dragSpace > 100) {
        moveLeft();
      }
    }
  }, [mouseUpClientX]);

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
      <Styled.SliderBox
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        cursorOn={cursorOn}
      >
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
        <Styled.PrevArrowBox>
          <Styled.PrevArrow
            onClick={clickLeft}
            src={'/arrow.png'}
            alt={'arrow'}
            width={50}
            height={50}
          />
        </Styled.PrevArrowBox>
        <Styled.NextArrowBox>
          <Styled.NextArrow
            onClick={clickRight}
            src={'/arrow.png'}
            alt={'arrow'}
            width={50}
            height={50}
          />
        </Styled.NextArrowBox>
      </Styled.SliderBox>
      <Styled.DotBox>
        {images.map((picture, idx) => {
          return <Styled.Dot key={picture.id}></Styled.Dot>;
        })}
        <Styled.CurrentDot imageIndex={imageIndex}></Styled.CurrentDot>
      </Styled.DotBox>
    </>
  );
};

export default Slider;
