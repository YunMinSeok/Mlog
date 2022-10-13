import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

//styled
import * as Styled from './DebounceStyle';

import { ARROW_IMAGE } from '../../../../constants/image/image';
import { loaderProp } from '../../../../utils/loaderProp';

const Debounce = () => {
  const router = useRouter();

  //일반 change 함수
  const [normalValue, setNormalValue] = useState<string>('');

  //일반 input change
  const normalChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNormalValue(e.currentTarget.value);
  };

  //debounce change 함수
  const [debounceValue, setDebounceValue] = useState<string>('');
  const [debounceResultValue, setDebounceResulValue] = useState<string>('');

  //키업 이벤트
  const debounceChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDebounceValue(e.currentTarget.value);
  };
  //debounce 처리된 input 값
  const debounceValueChange = (searchValue: string) => {
    setDebounceResulValue(searchValue);
  };
  //디바운스 시간 처리 및 변수 처리
  const debouncedSearchTerm = useDebounce(debounceValue, 500);

  //useDebounce 함수
  function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  }

  //검색 debounce 처리
  useEffect(() => {
    if (debouncedSearchTerm) {
      debounceValueChange(debouncedSearchTerm);
    } else {
      setDebounceResulValue('');
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <Styled.BackButton
        onClick={() => router.back()}
        loader={loaderProp}
        src={ARROW_IMAGE}
        alt={'arrow'}
        width={50}
        height={50}
      />
      <Styled.Wrap>
        <Styled.InputWrap>
          <Styled.SearchInput
            placeholder="Nomal 입력"
            type="text"
            value={normalValue}
            onChange={normalChange}
          />
          <p> Normal: {normalValue}</p>
        </Styled.InputWrap>
        <Styled.InputWrap>
          <Styled.SearchInput
            placeholder="Debounce 입력"
            type="text"
            value={debounceValue}
            onChange={debounceChange}
          />
          <p>Debounce: {debounceResultValue}</p>
        </Styled.InputWrap>
      </Styled.Wrap>
    </>
  );
};

export default Debounce;
