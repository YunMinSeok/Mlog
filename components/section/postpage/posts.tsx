import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Posts = () => {
  return (
    <Container>
      <PostWrap>
        <PostBox>
          <Link href="/posts/slider">
            <LinkBox>
              <ThumnailContent>
                <Thumnail
                  src={'/SliderImage1.jpeg'}
                  alt="post_image"
                  layout="fill"
                />
              </ThumnailContent>
            </LinkBox>
          </Link>
          <ContentBox>
            <Link href="/posts/slider">
              <LinkBox>
                <ContentH4>Infinite carousel slider</ContentH4>
                <ContentDescription>
                  <ContentDescriptionP>
                    TypeScript를 이용해서 만든 무한 슬라이드
                  </ContentDescriptionP>
                </ContentDescription>
              </LinkBox>
            </Link>
            <SubInfo>
              <span>2022년 4월 28일</span>
            </SubInfo>
          </ContentBox>
        </PostBox>
      </PostWrap>
    </Container>
  );
};

export default Posts;

const Container = styled.section`
  height: 100vh;
  background-color: #121212;
`;

const PostWrap = styled.div`
  display: flex;
  padding: 2rem;
  flex-wrap: wrap;
`;

const PostBox = styled.div`
  width: 18rem;
  background: #1e1e1e;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const LinkBox = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const ThumnailContent = styled.div`
  position: relative;
  width: 100%;
  padding-top: 52.19206680584551%;
`;

const Thumnail = styled(Image)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const ContentBox = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;

const ContentH4 = styled.h4`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #ececec;
`;

const ContentDescription = styled.div`
  flex: 1 1 0%;
`;

const ContentDescriptionP = styled.p`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #d9d9d9;
`;

const SubInfo = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: #acacac;
`;
