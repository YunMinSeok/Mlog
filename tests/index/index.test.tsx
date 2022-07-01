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
    const image = utils.getByAltText('Introduce_Logo');

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
    await waitFor(() => {
      expect(image).toHaveAttribute('src', INTRODUCE_IMAGE);
      // expect(image.getAttribute('src')).toBe('/Introduce.png');
    });
  });
});
