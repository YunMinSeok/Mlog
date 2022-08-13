import { ClipBoard } from 'copy-to-clipboard-typescript';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

//styled
import * as Styled from './ClipBoardStyle';

import { ARROW_IMAGE } from '../../../../constants/image/image';

const ClipBoardPage = () => {
  const router = useRouter();
  const [value, setValue] = useState<string | undefined>();
  //here

  return (
    <>
      <Styled.BackButton
        onClick={() => router.back()}
        src={ARROW_IMAGE}
        alt={'arrow'}
        width={50}
        height={50}
      />
      <Styled.Wrap>
        <Styled.TextBox
          value={value}
          placeholder="복사할 텍스트를 넣어주세요!"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setValue(e.target.value)
          }
        >
          {value}
        </Styled.TextBox>
        <ClipBoard text={value}>
          <Styled.ClipButton>click</Styled.ClipButton>
        </ClipBoard>
      </Styled.Wrap>
      <Styled.TextBox placeholder="복사된 텍스트를 넣어주세요!"></Styled.TextBox>
    </>
  );
};

export default ClipBoardPage;
