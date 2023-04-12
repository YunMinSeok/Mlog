import Image from 'next/image';
import styled from 'styled-components';

export const SliderBox = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 70vw;
  height: 500px;
  overflow: hidden;
`;

type ImageBoxProps = {
  translateValue: number | null;
};

export const ImageBox = styled.div<ImageBoxProps>`
  display: flex;
  transition: 1s;
  transform: ${({ translateValue }) => `translateX(-${translateValue}vw)`};
`;

export const SliderImage = styled.img`
  width: 70vw;
  object-fit: cover;
  object-position: center center;
`;

export const BackButton = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #fff);
`;
