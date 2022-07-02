//index test

import Introduce from '@components/section/mainpage/Introduce';
import { render, screen, waitFor } from '@testing-library/react';

import { INTRODUCE_IMAGE } from '../../constants/image/image';

describe('<Introduce />', () => {
  const setup = () => {
    const utils = render(<Introduce />);
    const firstContent = screen.getByText('This page is MinSeok develop blog.');
    const secondContent = screen.getByText(
      'I usally use Typescript, React, Redux.',
    );
    const thirdContent = screen.getByText('Thanks for look');
    const image = screen.getByAltText('Introduce_Logo');

    return {
      utils,
      firstContent,
      secondContent,
      thirdContent,
      image,
    };
  };
  it('has content and a image', () => {
    const { firstContent, secondContent, thirdContent, image } = setup();
    expect(firstContent).toBeInTheDocument();
    expect(secondContent).toBeInTheDocument();
    expect(thirdContent).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('uses correct src', async () => {
    const { image } = setup();
    expect(image.getAttribute('src')).toBe(INTRODUCE_IMAGE.src);
  });
});
