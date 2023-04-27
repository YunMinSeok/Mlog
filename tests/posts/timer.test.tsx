import { render, screen, cleanup } from '@testing-library/react';

// components
import TimerPage from '../../components/section/postpage/timer/TimerPage';

describe('타이머 페이지 테스트', () => {
  // 1. 렌더링 테스트
  beforeEach(() => {
    render(<TimerPage />);
  });

  afterEach(cleanup);

  // 2. 요소 확인 테스트
  it('로그인 페이지 렌더링 테스트', async () => {
    expect(screen.getByText('타이머 시작하기')).toBeInTheDocument;
  });
});
