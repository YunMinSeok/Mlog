import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';

const Header = () => {
  return (
    <Container>
      <ContentContainer>
        <LogoContainer>
          <Link href="/">
            <Logo>Mlog</Logo>
          </Link>
        </LogoContainer>
        <LinkContainer>
          <Link href="/">
            <LinkMenu>Introduce</LinkMenu>
          </Link>
          <Link href="/">
            <LinkMenu>Posts</LinkMenu>
          </Link>
          <Link href="/">
            <LinkMenu>Plan</LinkMenu>
          </Link>
        </LinkContainer>
      </ContentContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  width: 200px;
  height: 100%;
  background: #1e1e1e;
`;

const ContentContainer = styled.div`
  dispaly: flex;
  padding: 25px 0 0 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Logo = styled.a`
  font-size: 30px;
  color: #ffffff;
  font-family: fantasy;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 70%;
  margin-top: 370px;
`;

const LinkMenu = styled.a`
  font-size: 25px;
  color: #ffffff;
  font-family: fantasy;
  margin: 20px 0;
  letter-spacing: 0;
  cursor: pointer;

  &:after {
    backface-visibility: hidden;
    border: 1px solid rgba(0, 0, 0, 0.5);
    bottom: 0px;
    content: ' ';
    display: block;
    margin: 0 auto;
    position: relative;
    transition: all 280ms ease-in-out;
    width: 0;
  }

  &:hover:after {
    backface-visibility: hidden;
    border-color: #fff;
    transition: width 350ms ease-in-out;
    width: 100%;
  }
`;
