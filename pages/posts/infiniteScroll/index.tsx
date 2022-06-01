import React from 'react';
import styled from 'styled-components';

//components
import InfiniteScroll from '../../../components/section/postpage/infiniteScroll/InfiniteScroll';

const Index = () => {
  return (
    <Container>
      <InfiniteScroll />
    </Container>
  );
};

export default Index;

export const Container = styled.section`
  position: relative;
  background-color: #121212;
  padding: 50px;
`;
