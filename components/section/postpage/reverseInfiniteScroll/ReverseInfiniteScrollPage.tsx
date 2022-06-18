import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ReactLoading from 'react-loading';

//styled
import * as Styled from './ReverseInfiniteScrollStyle';

const ReverseInfiniteScroll = () => {
  const router = useRouter();
  const [itemList, setItemList] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const scrollRef = useRef<HTMLDivElement>(null);

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
      let list = [...itemList];
      list.unshift(...Items);
      setItemList(list);
      setIsLoading(false);
      observer.observe(entry.target);
    }
  };

  const scrollBottom = () => {
    if (scrollRef === null) {
      return;
    }
    if (scrollRef.current !== null) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
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

  useEffect(() => {
    if (itemList.length > 0) {
      console.log(1);
      scrollBottom();
    }
  }, [itemList]);

  return (
    <>
      <div ref={setTarget} />
      {isLoading ? (
        <Styled.LoaderWrap>
          <ReactLoading type="spin" color="#A593E0" />
        </Styled.LoaderWrap>
      ) : (
        ''
      )}
      <Styled.ItemWrap ref={scrollRef}>
        {itemList.map((item: number, index: number) => {
          return <Styled.Item key={index}>{index + 1}</Styled.Item>;
        })}
      </Styled.ItemWrap>
      <Styled.BackButton
        onClick={() => router.back()}
        src={'/arrow.png'}
        alt={'arrow'}
        width={50}
        height={50}
      />
      <Styled.Title>Reverse</Styled.Title>
    </>
  );
};

export default ReverseInfiniteScroll;
