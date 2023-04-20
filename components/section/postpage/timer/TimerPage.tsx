import { useRouter } from 'next/router';

// components
import { ARROW_IMAGE } from '../../../../src/image/image';
//util
import { loaderProp } from '../../../../src/utils/loaderProp';
//styled
import * as Styled from './TimerPageStyle';

const TimerPage = () => {
  const router = useRouter();
  const timeFormat = (time: number) => {
    const m = Math.floor(time / 60).toString();
    let s = (time % 60).toString();
    if (s.length === 1) s = `0${s}`;
    return `${m}:${s}`;
  };
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
    </>
  );
};

export default TimerPage;
