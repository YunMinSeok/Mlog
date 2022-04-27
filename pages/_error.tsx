import React from 'react';
import styled from 'styled-components';

const Error = () => {
  return (
    <Container>
      <ContentSection>
        <InrtoduceImgBox>
          <h1>505</h1>
        </InrtoduceImgBox>
        <ContentBox>
          <h1>THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.</h1>
          <p>YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED.</p>
        </ContentBox>
      </ContentSection>
    </Container>
  );
};

export default Error;

const Container = styled.section`
  display: flex;
  padding: 170px 60px;
  height: 100vh;
  background-color: #121212;
`;

const ContentSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  color: #fff;
`;
const InrtoduceImgBox = styled.div`
  display: flex;
  margin-bottom: 40px;
  & > h1 {
    font-size: 40px;
    font-weight: 700;
  }
`;

const ContentBox = styled.div`
  & > h1 {
    margin-bottom: 20px;
    font-size: 17px;
    font-weight: 700;
  }
`;
