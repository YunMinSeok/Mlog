import Image from 'next/image';
import styled from 'styled-components';

export const ItemWrap = styled.div`
  width: 100%;
  height: 800px;
  overflow: auto;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const Item = styled.div`
  display: flex;
  margin: 10px auto;
  width: 350px;
  height: 300px;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 6px;
`;

export const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 50px;
  font-weight: bold;
`;

export const BackButton = styled(Image)`
  transform: rotate(180deg);
  cursor: pointer;
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #fff);
`;
