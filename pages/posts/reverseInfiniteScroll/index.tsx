import React from 'react';
import styled from 'styled-components';

//components
import ReverseInfiniteScroll from '../../../components/section/postpage/reverseInfiniteScroll/ReverseInfiniteScrollPage';

const Index = () => {
  return (
    <Container>
      <ReverseInfiniteScroll />
    </Container>
  );
};

export default Index;

export const Container = styled.section`
  position: relative;
  background-color: #121212;
  padding: 50px;
`;
