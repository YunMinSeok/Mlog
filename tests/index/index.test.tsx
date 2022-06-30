//index test

import Introduce from '@components/section/mainpage/Introduce';
import { render, screen } from '@testing-library/react';

describe('<Introduce />', () => {
  it('matches snapshot', () => {
    const utils = render(<Introduce />);

    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    const utils = render(<Introduce />);
    utils.getByText('This page is MinSeok develop blog.');
    utils.getByText('I usally use Typescript, React, Redux.');
    utils.getByText('Thanks for look');
  });
});
