//header test

import Header from '@components/header/Header';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<Introduce />', () => {
  const setup = () => {
    render(<Header />);
    const firstLink = screen.getByText('Mlog');
    const secondLink = screen.getByText('Introduce');
    const thirdLink = screen.getByText('Posts');
    const fourthLink = screen.getByText('Plan');

    return {
      firstLink,
      secondLink,
      thirdLink,
      fourthLink,
    };
  };
  it('is correct link content', () => {
    const { firstLink, secondLink, thirdLink, fourthLink } = setup();
    expect(firstLink).toBeInTheDocument();
    expect(secondLink).toBeInTheDocument();
    expect(thirdLink).toBeInTheDocument();
    expect(fourthLink).toBeInTheDocument();
  });

  it('is true link', async () => {
    const { firstLink, secondLink, thirdLink, fourthLink } = setup();
    console.log(firstLink);
    const firstLinkTest = fireEvent.click(firstLink);
    console.log(firstLinkTest);
  });
});
