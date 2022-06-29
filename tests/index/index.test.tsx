//index test

import Introduce from '@components/section/mainpage/Introduce';
import { render, screen } from '@testing-library/react';

describe('<Introduce />', () => {
  it('matches snapshot', () => {
    const utils = render(<Introduce />);
    const testFirstTitle = screen.getByText(
      'This page is MinSeok develop blog.',
    );

    expect(utils.container).toMatchSnapshot();
    expect(testFirstTitle).toBeInTheDocument();
  });
});
