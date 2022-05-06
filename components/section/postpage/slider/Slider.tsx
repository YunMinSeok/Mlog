import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

  return (
    <SliderBox
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      cursorOn={cursorOn}
    >
      <ImageBox translateValue={translateValue !== 0 ? translateValue : null}>
        {images.map((picture, idx) => {
          return (
            <SliderImage
              key={picture.id}
              src={picture.pic}
              alt={'background' + idx}
            />
          );
        })}
      </ImageBox>
      <PrevArrowBox>
        <PrevArrow
          onClick={clickLeft}
          src={'/arrow.png'}
          alt={'arrow'}
          width={50}
          height={50}
        />
      </PrevArrowBox>
      <NextArrowBox>
        <NextArrow
          onClick={clickRight}
          src={'/arrow.png'}
          alt={'arrow'}
          width={50}
          height={50}
        />
      </NextArrowBox>
    </SliderBox>
  );
};

export default Slider;

type SliderBoxProps = {
  cursorOn: boolean;
};

const SliderBox = styled.div<SliderBoxProps>`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 70vw;
  height: 500px;
  overflow: hidden;
  cursor: ${({ cursorOn }) => cursorOn && 'pointer'};
`;

type ImageBoxProps = {
  translateValue: number | null;
};

const ImageBox = styled.div<ImageBoxProps>`
  display: flex;
  transition: 1s;
  transform: ${({ translateValue }) => `translateX(-${translateValue}vw)`};
`;

const SliderImage = styled.img`
  width: 70vw;
  object-fit: cover;
  object-position: center center;
`;

const PrevArrowBox = styled.div`
  position: absolute;
  top: 45%;
`;
const NextArrowBox = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
`;

const PrevArrow = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
`;

const NextArrow = styled(Image)`
  cursor: pointer;
`;
