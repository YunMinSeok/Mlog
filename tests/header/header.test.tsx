//header test

import Header from '@components/header/Header';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Introduce />', () => {
  const setup = () => {
    render(<Header />);
    const mlogLink = screen.getByTestId('Mlog');
    const introduceLink = screen.getByTestId('Introduce');
    const postsLink = screen.getByTestId('Posts');
    const planLink = screen.getByTestId('Plan');

    return {
      mlogLink,
      introduceLink,
      postsLink,
      planLink,
    };
  };
  it('is correct link content', () => {
    const { mlogLink, introduceLink, postsLink, planLink } = setup();
    expect(mlogLink).toBeInTheDocument();
    expect(introduceLink).toBeInTheDocument();
    expect(postsLink).toBeInTheDocument();
    expect(planLink).toBeInTheDocument();
  });

  it('is true link', async () => {
    const { mlogLink, introduceLink, postsLink, planLink } = setup();
    userEvent.click(mlogLink);
    userEvent.click(introduceLink);
    userEvent.click(postsLink);
    userEvent.click(planLink);
  });
});
