import Image from 'next/image';
import styled from 'styled-components';

export const BackButton = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #fff);
`;

export const Wrap = styled.div`
  padding: 50px;
  color: white;
`;

export const TextBox = styled.textarea`
  width: 100px;
  height: 100px;
`;
