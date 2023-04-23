import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import { ARROW_IMAGE } from '../../../../src/image/image';
//util
import { loaderProp } from '../../../../src/utils/loaderProp';
//styled
import * as Styled from './TimerPageStyle';
import { UseTimer } from '@/src/hook/useTimer';

const TimerPage = () => {
  const router = useRouter();
  const [isTimeStart, setIsTimeStart] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const handleTimer = () => {
    setIsTimeStart(!isTimeStart);
  };

  const { time } = UseTimer(10, isTimeStart, setIsTimeOver);

  return (
    <>
      <Styled.BackButton
        onClick={() => router.back()}
        loader={loaderProp}
        src={ARROW_IMAGE}
        alt={'arrow'}
        width={50}
        height={50}
        unoptimized={true}
      />
      <Styled.TimerBox>
        <p>{time}</p>
        <button onClick={handleTimer}>
          {isTimeStart ? '타이머 멈추기' : '타이머 시작하기'}
        </button>
      </Styled.TimerBox>
    </>
  );
};

export default TimerPage;
