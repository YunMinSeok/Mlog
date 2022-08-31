import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

//styled
import * as Styled from './ImageResizeStyle';

import { ARROW_IMAGE } from '../../../../constants/image/image';

const ImageResizePage = () => {
  const [image, setImage] = useState<File | null>(null);

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
      <Styled.Wrap>
        <Styled.InputButton
          type="file"
          accept=".jpeg, .jpg, .png, .gif"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (!e.target.files) {
              return;
            }
            setImage(e.target.files[0]);
          }}
        />
        <Styled.OriginImage
          image={URL.createObjectURL(image!)}
        ></Styled.OriginImage>
      </Styled.Wrap>
    </>
  );
};

export default ImageResizePage;
