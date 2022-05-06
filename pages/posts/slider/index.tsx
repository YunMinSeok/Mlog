import React, { useState } from 'react';
import styled from 'styled-components';

//components
import Slider from '../../../components/section/postpage/slider/Slider';

const Index = () => {
  const images = [
    { pic: '/Mlog/SliderImage1.jpeg', id: 1 },
    { pic: '/Mlog/SliderImage2.jpeg', id: 2 },
    { pic: '/Mlog/SliderImage3.jpeg', id: 3 },
    { pic: '/Mlog/SliderImage4.jpeg', id: 4 },
    { pic: '/Mlog/SliderImage5.jpeg', id: 5 },
  ];

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

  return (
    <Container>
      <Slider
        translateValue={translateValue}
        images={images}
        moveRight={moveRight}
        moveLeft={moveLeft}
      />
    </Container>
  );
};

export default Index;

const Container = styled.section`
  position: relative;
  height: 100vh;
  background-color: #121212;
  padding: 50px;
`;
