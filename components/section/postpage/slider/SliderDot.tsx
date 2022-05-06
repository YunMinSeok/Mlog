import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type SliderDotProps = {
  images: { pic: string; id: number }[];
  translateValue: number;
  moveRight: () => void;
};

const SliderDot: React.FC<SliderDotProps> = ({
  images,
  translateValue,
  moveRight,
}) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

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
    <DotBox>
      {images.map((picture, idx) => {
        return <Dot key={picture.id}></Dot>;
      })}
      <CurrentDot imageIndex={imageIndex}></CurrentDot>
    </DotBox>
  );
};

export default SliderDot;

const DotBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
`;

const Dot = styled.i`
  margin: 0 1px;
  font-size: 20px;
  color: #fff;
`;
type CurrentDotProps = {
  imageIndex: number;
};
const CurrentDot = styled.i<CurrentDotProps>`
  color: dodgerblue;
  position: absolute;
  left: 0;
  top: 50%;
  font-size: 20px;
  margin: 0 1px;
  transform: ${({ imageIndex }) => `translate(${imageIndex * 22}px,-50%)`};
  transition: transform 0.5s;
`;
