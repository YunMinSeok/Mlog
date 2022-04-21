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
  width: 100%;
  margin-top: 370px;
`;

const LinkMenu = styled.a`
  font-size: 25px;
  color: #ffffff;
  font-family: fantasy;
  margin: 20px 0;
`;
