//post test

import Posts from '@components/section/postpage/posts';
import { render, screen } from '@testing-library/react';

describe('<Introduce />', () => {
  const setup = () => {
    const utils = render(<Posts />);
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
  });
});
