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

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  background: white;
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
`;
