import Image from 'next/image';
import styled from 'styled-components';

export const TimerBox = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 70vw;
  height: 500px;
  overflow: hidden;
  transform: opacity 0.5 ease-in-out;
  p {
    margin: 0 auto;
    color: #ffffff;
    font-size: 50px;
    align-self: center;
  }
`;

export const BackButton = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #fff);
`;
