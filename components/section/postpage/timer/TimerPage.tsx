import { useRouter } from 'next/router';

// components
import { ARROW_IMAGE } from '../../../../src/image/image';
//util
import { loaderProp } from '../../../../src/utils/loaderProp';
//styled
import * as Styled from './TimerPageStyle';

const TimerPage = () => {
  const router = useRouter();
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
