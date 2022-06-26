import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export const Introduce: NextPage = () => {
  return (
    <Container>
      <ContentBox>
        <p>
          <span>This page is MinSeok develop blog. </span>
          <span>I usally use Typescript, React, Redux.</span>
          <span>Thanks for look</span>
        </p>
      </ContentBox>
      <InrtoduceImgBox>
        <Image
          src={'/Introduce.png'}
          alt="Introduce_Logo"
          width={400}
          height={400}
        />
      </InrtoduceImgBox>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  margin: 0 auto;
  padding: 20px 60px;
  height: 100vh;
  background-color: #121212;
  align-items: center;
`;

const ContentBox = styled.div`
  margin-right: 100px;
  font-family: monospace;
  & > p {
    color: white;
    & > span {
      display: block;
      font-size: 20px;
      margin: 20px 0;
    }
  }
`;

const InrtoduceImgBox = styled.div``;
