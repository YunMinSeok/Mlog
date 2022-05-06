import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';

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
  const clickRight = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    console.log(1);
    moveRight();
  };
  const clickLeft = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    console.log(2);
    moveLeft();
  };

  return (
    <Container>
      <SliderBox>
        <ImageBox translateValue={translateValue !== 0 ? translateValue : null}>
          {images.map((picture, idx) => {
            return (
              <SliderImage
                key={picture.id}
                src={picture.pic}
                alt={'background' + idx}
                width={400}
                height={400}
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
    </Container>
  );
};

export default Slider;

const Container = styled.section`
  height: 100vh;
  padding: 50px;
  background-color: #121212;
`;
const SliderBox = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 70vw;
  height: 500px;
  overflow: hidden;
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
