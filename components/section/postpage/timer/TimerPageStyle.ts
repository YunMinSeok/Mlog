import Image from 'next/image';
import styled from 'styled-components';

export const SliderBox = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 70vw;
  height: 500px;
  overflow: hidden;
  transform: opacity 0.5 ease-in-out;
`;

type SliderImageProps = {
  opacity: number;
};

export const ImageBox = styled.div`
  position: relative;
`;

export const SliderImage = styled.img<SliderImageProps>`
  position: absolute;
  top: 0;
  width: 70vw;
  object-fit: cover;
  object-position: center center;
  opacity: ${({ opacity }) => opacity};
  transition: all 1s;
`;

export const BackButton = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #fff);
`;
