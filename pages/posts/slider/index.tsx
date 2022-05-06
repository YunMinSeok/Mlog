import React from 'react';

//components
import Slider from '../../../components/section/postpage/slider/Slider';
//styled
import * as Styled from './index.style';

const Index = () => {
  const images = [
    { pic: '/Mlog/SliderImage1.jpeg', id: 1 },
    { pic: '/Mlog/SliderImage2.jpeg', id: 2 },
    { pic: '/Mlog/SliderImage3.jpeg', id: 3 },
    { pic: '/Mlog/SliderImage4.jpeg', id: 4 },
    { pic: '/Mlog/SliderImage5.jpeg', id: 5 },
  ];

  return (
    <Styled.Container>
      <Slider images={images} />
    </Styled.Container>
  );
};

export default Index;
