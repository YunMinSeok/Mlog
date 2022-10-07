//header test

import Header from '@components/header/Header';
import { render, screen } from '@testing-library/react';

describe('<Introduce />', () => {
  const setup = () => {
    const utils = render(<Header />);
    const firstLink = screen.getByText('Mlog');
    const secondLink = screen.getByText('Introduce');
    const thirdLink = screen.getByText('Posts');
    const fourthLink = screen.getByText('Plan');

    return {
      utils,
      firstLink,
      secondLink,
      thirdLink,
      fourthLink,
    };
  };
  it('is correct link content', () => {
    const { firstLink, secondLink, thirdLink, fourthLink } = setup();
  });
});
