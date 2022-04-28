import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const Posts = () => {
  return (
    <Container>
      <ContentBox>
        <Link href="/posts/1">
          <ThumnailBox>
            <ThumnailContent>
              <Thumnail />
            </ThumnailContent>
          </ThumnailBox>
        </Link>
      </ContentBox>
    </Container>
  );
};

export default Posts;

const Container = styled.section`
  display: flex;
  height: 100vh;
  padding: 2rem;
  flex-wrap: wrap;
  background-color: #121212;
`;

const ContentBox = styled.div`
  width: 20rem;
  background: #1e1e1e;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ThumnailBox = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const ThumnailContent = styled.div`
  position: relative;
  width: 100%;
  padding-top: 52.19206680584551%;
`;

const Thumnail = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
