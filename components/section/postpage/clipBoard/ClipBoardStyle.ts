import Image from 'next/image';
import styled from 'styled-components';

export const BackButton = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #fff);
`;

export const Wrap = styled.div`
  display: flex;
  color: white;
`;

export const ClipButton = styled.button`
  width: 100px;
  height: 30px;
  margin: 20px;
  background-color: white;
  border-radius: 5px;
`;

export const TextBox = styled.textarea`
  width: 500px;
  height: 200px;
  margin: 20px;
`;
