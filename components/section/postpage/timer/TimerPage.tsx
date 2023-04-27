import { useState } from 'react';
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
  const [time, setTime] = useState(3);

  const [isTimeStart, setIsTimeStart] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const handleTimer = () => {
    if (time === 0) {
      setTime(3);
    }
    setIsTimeStart(!isTimeStart);
  };

  const { formatTime } = UseTimer(
    time,
    setTime,
    isTimeStart,
    setIsTimeStart,
    setIsTimeOver,
  );

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
      <Styled.TimerBox isTimeOver={isTimeOver}>
        <p>{formatTime}</p>
        <button onClick={handleTimer}>
          {isTimeStart ? '타이머 멈추기' : '타이머 시작하기'}
        </button>
      </Styled.TimerBox>
    </>
  );
};

export default TimerPage;
