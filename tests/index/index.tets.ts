//index test

import { render, screen } from '@testing-library/react';

import Introduce from '@/components/section/mainpage/Introduce';

describe('<Introduce />', () => {
  it('renders a heading', () => {
    const { container } = render(<Introduce />);

    const home = screen.getByText('This page is MinSeok develop blog.');

    expect(home).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
