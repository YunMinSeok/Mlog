import { useRouter } from 'next/router';
import React, { PureComponent, useEffect, useState } from 'react';

//styled
import * as Styled from './ClipBoardStyle';

export class ClipBoardPage extends PureComponent {
  render() {
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
  }
}

export default ClipBoardPage;
