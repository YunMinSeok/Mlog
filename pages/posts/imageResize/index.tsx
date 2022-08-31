import React from 'react';
import styled from 'styled-components';

//components
import ImageResize from '../../../components/section/postpage/imageResize/ImageResizePage';

const Index = () => {
  return (
    <Container>
      <ImageResize />
    </Container>
  );
};

export default Index;

export const Container = styled.section`
  position: relative;
  background-color: #121212;
  padding: 50px;
`;
