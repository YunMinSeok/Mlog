import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

//styled
import * as Styled from './Debounce.style';

const Debounce = () => {
  const router = useRouter();

  return (
    <>
      <Styled.BackButton
        onClick={() => router.back()}
        src={'/arrow.png'}
        alt={'arrow'}
        width={50}
        height={50}
      />
    </>
  );
};

export default Debounce;
