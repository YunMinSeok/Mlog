import React from 'react';
import styled from 'styled-components';

//components
import Timer from '../../../components/section/postpage/timer/TimerPage';

const Index = () => {
  return (
    <Container>
      <Timer />
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
