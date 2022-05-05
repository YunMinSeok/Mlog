import React from 'react';
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
  const clickRight = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    moveRight();
  };
  const clickLeft = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    moveLeft();
  };

  return <Container></Container>;
};

export default Slider;

const Container = styled.section`
  height: 100vh;
  background-color: #121212;
`;
