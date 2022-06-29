//index test

import Introduce from '@components/section/mainpage/Introduce';
import { render, screen } from '@testing-library/react';

describe('<Introduce />', () => {
  it('matches snapshot', () => {
    const utils = render(<Introduce />);
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    const span = screen.getByText('This page is MinSeok develop blog.');
    const image = screen.getByAltText('Introduce_Logo');

    expect(span).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
