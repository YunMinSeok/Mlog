import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

//styled
import * as Styled from './InfiniteScroll.style';

const InfiniteScroll = () => {
  const [itemList, setItemList] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [target, setTarget] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <Styled.ItemWrap>
        {itemList.map((item: number[], index: number) => {
          return <Styled.Item>{index + 1}</Styled.Item>;
        })}
      </Styled.ItemWrap>
      {isLoading ? (
        <Styled.LoaderWrap>
          <ReactLoading type="spin" color="#A593E0" />
        </Styled.LoaderWrap>
      ) : (
        ''
      )}
      <div ref={setTarget} />
    </>
  );
};

export default InfiniteScroll;
