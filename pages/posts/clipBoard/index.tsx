import React from 'react';
import styled from 'styled-components';

//components
import ClipBoard from '../../../components/section/postpage/clipBoard/ClipBoardPage';

const Index = () => {
  return (
    <Container>
      <ClipBoard />
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
