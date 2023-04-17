import React from 'react';
import styled from 'styled-components';

//Import Components
import Header from '../header/Header';
import Posts from '../section/postpage/posts';

import { postType } from '@/src/types/postType';

const PostsPageTemplate = ({ postData }: { postData: postType[] }) => {
  return (
    <Container>
      <Header />
      <Posts postData={postData} />
    </Container>
  );
};

export default PostsPageTemplate;

const Container = styled.div`
  position: relative;
  min-width: 884px;
  padding-left: 320px;
  height: auto !important;
`;
