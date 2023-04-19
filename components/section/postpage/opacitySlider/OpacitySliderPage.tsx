import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';

//styled
import * as Styled from './OpacitySliderStyle';
import { ARROW_IMAGE } from '../../../../src/image/image';
import { loaderProp } from '../../../../src/utils/loaderProp';
import useSlider from '@/src/hook/useSlider';

interface OpacitySliderType {
  images: Array<{ pic: string; id: number }>;
}

const OpacitySliderPage: NextPage<OpacitySliderType> = ({ images }) => {
  const imageRef = useRef<HTMLImageElement[]>([]);
  const router = useRouter();

  useSlider({ ref: imageRef });

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
      <Styled.SliderBox>
        <Styled.ImageBox>
          {images.map((picture, idx) => {
            return (
              <Styled.SliderImage
                ref={(el) => (imageRef.current[idx] = el as HTMLImageElement)}
                key={picture.id + idx}
                src={picture.pic}
                alt={'background' + idx}
                opacity={idx === 0 ? 1 : 0}
              />
            );
          })}
        </Styled.ImageBox>
      </Styled.SliderBox>
    </>
  );
};

export default OpacitySliderPage;
