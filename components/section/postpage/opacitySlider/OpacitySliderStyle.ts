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
  display: flex;
  transition: opacity 2s ease-in-out;
`;

export const SliderImage = styled.img<SliderImageProps>`
  width: 70vw;
  object-fit: cover;
  object-position: center center;
  opacity: ${({ opacity }) => opacity};
`;

export const BackButton = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #fff);
`;
