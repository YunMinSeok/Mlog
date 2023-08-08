import Image from 'next/image';
import styled from 'styled-components';

type SliderBoxProps = {
  cursorOn: boolean;
};

export const SliderBox = styled.div<SliderBoxProps>`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 70vw;
  height: 500px;
  overflow: hidden;
  cursor: ${({ cursorOn }) => cursorOn && 'pointer'};
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

export const ArrowBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 8px;
  right: 0px;
  bottom: 26px;
  width: 76px;
  height: 28px;
  border-radius: 14.3px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-right: 20px;
`;

export const PrevArrow = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
`;

export const NextArrow = styled(Image)`
  cursor: pointer;
`;

export const DotBox = styled.div`
  font-size: 10px;
  color: white;
  text-overflow: ellipsis;
  text-align: left;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  line-height: 1.5;
`;
