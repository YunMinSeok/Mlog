//index test

import { render, screen } from '@testing-library/react';

import Introduce from '@/components/section/mainpage/Introduce';

describe('<Introduce />', () => {
  it('renders a heading', () => {
    render(<Introduce />);
    const span = screen.getByText('This page is MinSeok develop blog.');

    expect(span).toBeInTheDocument();
  });
});
