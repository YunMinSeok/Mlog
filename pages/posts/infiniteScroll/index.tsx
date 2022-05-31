import React from 'react';
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

  return (
    <Container>
      <Slider images={images} />
    </Container>
  );
};

export default Index;

export const Container = styled.section`
  position: relative;
  height: 100vh;
  background-color: #121212;
  padding: 50px;
`;
