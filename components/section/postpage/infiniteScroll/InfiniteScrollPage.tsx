import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

//styled
import * as Styled from './InfiniteScrollStyle';

const InfiniteScroll = () => {
  const router = useRouter();
  const [itemList, setItemList] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer,
  ) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      setIsLoading(true);
      // 데이터를 가져오는 부분
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      setItemList((itemLists) => itemLists.concat(Items));
      setIsLoading(false);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    if (!target) return;

    let observer: IntersectionObserver;

    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <>
      <Styled.BackButton
        onClick={() => router.back()}
        src={'arrow.png'}
        alt={'arrow'}
        width={50}
        height={50}
      />
      <Styled.ItemWrap>
        {itemList.map((item: number, index: number) => {
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
