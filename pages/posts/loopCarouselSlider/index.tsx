import React from 'react';
import styled from 'styled-components';

//components
import InfiniteLoopCarouselSlider from '../../../components/section/postpage/InfiniteLoopCarouselSlider/InfiniteLoopCarouselSlider';

const Index = () => {
  const images = [
    { pic: '/SliderImage1.jpeg', id: 1 },
    { pic: '/SliderImage2.jpeg', id: 2 },
    { pic: '/SliderImage3.jpeg', id: 3 },
    { pic: '/SliderImage4.jpeg', id: 4 },
    { pic: '/SliderImage5.jpeg', id: 5 },
  ];

  return (
    <Container>
      <InfiniteLoopCarouselSlider images={images} />
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
