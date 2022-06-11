import { useRouter } from 'next/router';
import React, { useState } from 'react';

//styled
import * as Styled from './DebounceStyle';

const Debounce = () => {
  const router = useRouter();

  const [normalValue, setNormalValue] = useState<string>('');
  //   const [debounceValue, setDebounceValue] = useState<string>('');

  const normalChange = (e: React.FormEvent<HTMLInputElement>) => {
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
        <input
          placeholder="Nomal 입력"
          type="text"
          value={normalValue}
          onChange={normalChange}
        />
        <p>{normalValue}</p>
      </Styled.Wrap>
    </>
  );
};

export default Debounce;
