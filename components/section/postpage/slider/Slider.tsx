import React, { useEffect, useState } from 'react';

//styled
import * as Styled from './Slider.style';

type SliderProps = {
  translateValue: number;
  images: { pic: string; id: number }[];
  moveRight: () => void;
  moveLeft: () => void;
};

const Slider: React.FC<SliderProps> = ({
  translateValue,
  images,
  moveRight,
  moveLeft,
}) => {
  const [mouseDownClientX, setMouseDownClientX] = useState<number>(0);
  const [mouseUpClientX, setMouseUpClientX] = useState<number>(0);
  const [cursorOn, setCursorOn] = useState<boolean>(false);

  const [imageIndex, setImageIndex] = useState<number>(0);

  const clickRight = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    moveRight();
  };
  const clickLeft = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    moveLeft();
  };

  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    setMouseDownClientX(e.clientX);
    setCursorOn(true);
  };

  const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    setMouseUpClientX(e.clientX);
    setCursorOn(false);
  };

  useEffect(() => {
    const dragSpace = Math.abs(mouseDownClientX - mouseUpClientX);
    console.log(dragSpace);
    if (mouseDownClientX !== 0) {
      if (mouseUpClientX < mouseDownClientX && dragSpace > 100) {
        moveRight();
      } else if (mouseUpClientX > mouseDownClientX && dragSpace > 100) {
        moveLeft();
      }
    }
  }, [mouseUpClientX]);

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
          {images.map((picture, idx) => {
            return (
              <Styled.SliderImage
                key={picture.id}
                src={picture.pic}
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
