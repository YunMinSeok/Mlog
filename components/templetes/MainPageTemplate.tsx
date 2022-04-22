import React from 'react';
import styled from 'styled-components';

//Import Components
import Header from '../header/Header';
import Introduce from '../section/mainpage/Introduce';

const MainPageTemplate = () => {
  return (
    <Container>
      <Header />
      <Introduce />
    </Container>
  );
};

export default MainPageTemplate;

const Container = styled.div`
  position: relative;
`;
