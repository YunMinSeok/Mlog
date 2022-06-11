import React from 'react';
import styled from 'styled-components';

//components
import Debounce from '../../../components/section/postpage/debounce/DebouncePage';

const Index = () => {
  return (
    <Container>
      <Debounce />
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
