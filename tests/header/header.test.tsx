//header test

import Header from '@components/header/Header';
import Introduce from '@/components/section/mainpage/Introduce';
import Posts from '@/components/section/postpage/posts';
import Plan from '@/pages/plan';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { postData } from '../../src/data/PostData';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

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
    expect(render(<Introduce />));
    userEvent.click(introduceLink);
    expect(render(<Introduce />));
    userEvent.click(postsLink);
    expect(render(<Posts postData={postData} />));
    userEvent.click(planLink);
    expect(render(<Plan />));
  });
});
