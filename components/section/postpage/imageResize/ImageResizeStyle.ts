import Image from 'next/image';
import styled from 'styled-components';

export const BackButton = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #fff);
`;

export const Wrap = styled.div`
  padding: 50px;
`;

export const InputButton = styled.input`
  width: 100px;
  height: 20px;
`;

export const ResizeButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: gray;
`;

interface OriginImageType {
  image: String | null;
}

export const OriginImage = styled.div<OriginImageType>`
  width: 500px;
  height: 500px;
  margin-top: 20px;
  background-color: white;
  background-image: url(${({ image }) => `${image}`});
  background-size: cover;
`;
