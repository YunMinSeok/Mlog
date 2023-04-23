import Image from 'next/image';
import styled from 'styled-components';

export const TimerBox = styled.div`
  position: relative;
  display: flex;
  height: 500px;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  p {
    margin: 0 auto;
    color: #ffffff;
    font-size: 50px;
  }
  button {
    width: 100px;
    height: 40px;
    margin: 20px auto 0 auto;
    background-color: gray;
    color: #ffffff;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const BackButton = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #fff);
`;
