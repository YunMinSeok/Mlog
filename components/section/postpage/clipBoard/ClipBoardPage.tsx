import { useRouter } from 'next/router';
import React, { PureComponent, useEffect, useState } from 'react';

//styled
import * as Styled from './ClipBoardStyle';

export class ClipBoardPage extends PureComponent {
  router = useRouter();
  render() {
    return (
      <>
        <Styled.BackButton
          onClick={() => this.router.back()}
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
