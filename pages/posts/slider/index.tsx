import React, { useState } from 'react';
import styled from 'styled-components';

//images
import img1 from '/SliderImage1.jpeg';
import img2 from '/SliderImage2.jpeg';
import img3 from '/SliderImage3.jpeg';
import img4 from '/SliderImage4.jpeg';
import img5 from '/SliderImage5.jpeg';

//components
import Slider from './Slider';
import SliderDot from './SliderDot';

const Index = () => {
  const images = [
    { pic: '/SliderImage1.jpeg', id: 1 },
    { pic: '/SliderImage2.jpeg', id: 2 },
    { pic: '/SliderImage3.jpeg', id: 3 },
    { pic: '/SliderImage4.jpeg', id: 4 },
    { pic: '/SliderImage5.jpeg', id: 5 },
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
      <SliderDot />
    </Container>
  );
};

export default Index;

const Container = styled.section`
  height: 100vh;
  background-color: #121212;
`;
