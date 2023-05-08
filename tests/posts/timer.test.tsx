import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

// components
import TimerPage from '../../components/section/postpage/timer/TimerPage';

describe('타이머 페이지 테스트', () => {
  // 1. 렌더링 테스트
  beforeEach(() => {
    render(<TimerPage />);
  });

  afterEach(cleanup);

  // 2. 요소 확인 테스트
  it('타이머 페이지 렌더링 테스트', async () => {
    expect(screen.getByText('타이머 시작하기')).toBeInTheDocument;
  });

  // 3. 이벤트 발생 후 화면 변화 테스트
  it('타이머 버튼 테스트', async () => {
    const timerButton = screen.getByRole('button');

    expect(timerButton).toHaveTextContent('타이머 시작하기');
    expect(screen.getByText('0:03')).toBeInTheDocument();

    // 타이머 시작하기
    await userEvent.click(timerButton);

    // 일정 시간 지난 후 테스트
    await new Promise((r) => setTimeout(r, 3000));

    expect(timerButton).toHaveTextContent('타이머 멈추기');
    expect(screen.getByText('0:01')).toBeInTheDocument();
  });
});
