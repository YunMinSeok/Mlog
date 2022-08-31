import { useRouter } from 'next/router';
import React from 'react';

//styled
import * as Styled from './ImageResizeStyle';

import { ARROW_IMAGE } from '../../../../constants/image/image';

const ImageResizePage = () => {
  const loaderProp = ({ src }: { src: string }) => {
    return src;
  };

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
      />
    </>
  );
};

export default ImageResizePage;
