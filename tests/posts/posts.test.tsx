//post test

import Posts from '@components/section/postpage/posts';
import { render, screen } from '@testing-library/react';

import { postData } from '../../data/PostData';

describe('<Posts />', () => {
  const setup = () => {
    const utils = render(<Posts />);
    const images = screen.getAllByAltText('post_image');
    const titles = screen.getAllByTestId('post_title');
    const contents = screen.getAllByTestId('post_content');
    const dates = screen.getAllByTestId('post_date');

    return {
      utils,
      images,
      titles,
      contents,
      dates,
    };
  };
  it('has content and a image', () => {
    const { images, titles, contents, dates } = setup();
    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
    titles.forEach((title) => {
      expect(title).toBeInTheDocument();
    });
    contents.forEach((content) => {
      expect(content).toBeInTheDocument();
    });
    dates.forEach((date) => {
      expect(date).toBeInTheDocument();
    });
  });

  it('uses correct props', async () => {
    const { images, titles, contents, dates } = setup();
    postData.forEach((data, index) => {
      expect(images[index].getAttribute('src')).toBe(data.image.src);
      expect(titles[index].textContent).toBe(data.title);
      expect(contents[index].textContent).toBe(data.content);
      expect(dates[index].textContent).toBe(data.date);
    });
  });
});
