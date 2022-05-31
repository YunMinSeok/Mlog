import React from 'react';
import styled from 'styled-components';

//Import Components
import Header from '../header/Header';
import Posts from '../section/postpage/posts';

const PostsPageTemplate = () => {
  return (
    <Container>
      <Header />
      <Posts />
    </Container>
  );
};

export default PostsPageTemplate;

const Container = styled.div`
  position: relative;
  min-width: 884px;
  min-height: 100%;
  padding-left: 320px;
  height: auto !important;
`;
