import type { NextPage } from 'next';
import styled from 'styled-components';

//components
import MainPage from '../components/templetes/MainPageTemplate';
const Home: NextPage = () => {
  return (
    <>
      <MainPage />
    </>
  );
};

export default Home;

const Container = styled.div``;
