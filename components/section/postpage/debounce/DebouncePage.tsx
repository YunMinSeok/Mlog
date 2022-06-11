import { useRouter } from 'next/router';
import React, { useState } from 'react';

//styled
import * as Styled from './DebounceStyle';

const Debounce = () => {
  const router = useRouter();

  //일반 change 함수
  const [normalValue, setNormalValue] = useState<string>('');
  //debounce change 함수
  const [debounceValue, setDebounceValue] = useState<string>('');

  const normalChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNormalValue(e.currentTarget.value);
  };

  const debounceChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNormalValue(e.currentTarget.value);
  };

  return (
    <>
      <Styled.BackButton
        onClick={() => router.back()}
        src={'/arrow.png'}
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
          <p>Debounce: {debounceValue}</p>
        </Styled.InputWrap>
      </Styled.Wrap>
    </>
  );
};

export default Debounce;
