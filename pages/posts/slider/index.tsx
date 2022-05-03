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
    { pic: img1, id: 1 },
    { pic: img2, id: 2 },
    { pic: img3, id: 3 },
    { pic: img4, id: 4 },
    { pic: img5, id: 5 },
  ];

  const [translateValue, setTranslateValue] = useState<number>(0);

  return (
    <Container>
      <Slider />
      <SliderDot />
    </Container>
  );
};

export default Index;

const Container = styled.section`
  height: 100vh;
  background-color: #121212;
`;
