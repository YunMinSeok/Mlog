import { useRouter } from 'next/router';
import React, { useState } from 'react';

//styled
import * as Styled from './ImageResizeStyle';
import { ARROW_IMAGE } from '../../../../constants/image/image';
//util
import imageCompress from 'ts-image-compress';

const ImageResizePage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [resizeImage, setResizeImage] = useState<File | null>(null);
  const loaderProp = ({ src }: { src: string }) => {
    return src;
  };
  const router = useRouter();

  const handleResizeImage = async () => {
    if (!image) {
      return;
    }
    const resizeResult = await imageCompress(image);
    console.log(resizeResult);
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
          image={image === null ? null : URL.createObjectURL(image)}
        ></Styled.OriginImage>
        <Styled.MiddleSection>
          <Styled.ResizeButton onClick={handleResizeImage}>
            Do you want resize image?
          </Styled.ResizeButton>
          <Styled.ImageInfoSection>
            <div>Name: {image?.name}</div>
            <div>Size: {image?.size}</div>
          </Styled.ImageInfoSection>
          <Styled.ImageInfoSection>
            <div>Name: {image?.name}</div>
            <div>Size: {image?.size}</div>
          </Styled.ImageInfoSection>
        </Styled.MiddleSection>
        <Styled.OriginImage
          image={resizeImage === null ? null : URL.createObjectURL(resizeImage)}
        ></Styled.OriginImage>
      </Styled.Wrap>
    </>
  );
};

export default ImageResizePage;
