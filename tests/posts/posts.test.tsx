//post test

import Posts from '@components/section/postpage/posts';
import { render, screen } from '@testing-library/react';

describe('<Posts />', () => {
  const setup = () => {
    const utils = render(<Posts />);
    const image = screen.getAllByAltText('post_image');

    return {
      utils,
      image,
    };
  };
  it('has content and a image', () => {
    const { image } = setup();
    image.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it('uses correct src', async () => {});
});
