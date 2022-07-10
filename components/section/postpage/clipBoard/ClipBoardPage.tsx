import { useRouter } from 'next/router';
import React, { PureComponent } from 'react';

//styled
import * as Styled from './ClipBoardStyle';

const ClipBoardPage = () => {
  const router = useRouter();

  return (
    <>
      <Styled.BackButton
        onClick={() => router.back()}
        src={'arrow.png'}
        alt={'arrow'}
        width={50}
        height={50}
      />
      <Styled.Wrap>
        <div></div>
      </Styled.Wrap>
    </>
  );
};

export default ClipBoardPage;
