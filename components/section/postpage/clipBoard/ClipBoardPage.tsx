import { ClipBoard } from 'copy-to-clipboard-typescript';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

//styled
import * as Styled from './ClipBoardStyle';

const ClipBoardPage = () => {
  const router = useRouter();
  const [value, setValue] = useState<string | undefined>();
  //here

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
        <Styled.TextBox
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setValue(e.target.value)
          }
        >
          {value}
        </Styled.TextBox>
        <ClipBoard text={value}>
          <span>click</span>
        </ClipBoard>
        <Styled.TextBox></Styled.TextBox>
      </Styled.Wrap>
    </>
  );
};

export default ClipBoardPage;
