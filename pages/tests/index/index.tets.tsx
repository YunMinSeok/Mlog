//index test

import { render, screen } from '@testing-library/react';

import Introduce from '@/components/section/mainpage/Introduce';

describe('<Introduce />', () => {
  it('renders a heading', () => {
    render(<Introduce />);
    const span = screen.getByText('This page is MinSeok develop blog.');
    const image = screen.getByAltText('Introduce_Logo');

    expect(span).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
