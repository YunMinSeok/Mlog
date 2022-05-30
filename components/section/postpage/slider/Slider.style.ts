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

export const PrevArrowBox = styled.div`
  position: absolute;
  top: 45%;
`;
export const NextArrowBox = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
`;

export const PrevArrow = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
`;

export const NextArrow = styled(Image)`
  cursor: pointer;
`;

export const DotBox = styled.ul`
  position: absolute;
  display: flex;
  left: 50%;
  top: 57%;
  transform: translateX(-50%);
`;

export const Dot = styled.li`
  position: relative;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin: 0 3px;
  text-indent: -999px;
  background-color: rgba(255, 255, 255, 0.5);
  &::before {
    position: absolute;
    top: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: '';
  }
  &::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: '';
  }
`;
type CurrentDotProps = {
  imageIndex: number;
};
export const CurrentDot = styled.li<CurrentDotProps>`
  position: absolute;
  left: 0;
  top: 50%;
  width: 30px;
  height: 3px;
  margin: 0 3px;
  background-color: rgba(255, 255, 255, 1);
  &::before {
    position: absolute;
    top: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: '';
  }
  &::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: '';
  }
  transform: ${({ imageIndex }) => `translate(${imageIndex * 36}px,-50%)`};
  transition: transform 0.5s;
`;
