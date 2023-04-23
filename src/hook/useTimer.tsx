import { useState, useEffect } from 'react';

export const UseTimer = (
  time: number,
  setTime: React.Dispatch<React.SetStateAction<number>>,
  isStart: boolean,
  setIsTimeStart: React.Dispatch<React.SetStateAction<boolean>>,
  setIsTimeOver: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const timeFormat = (time: number) => {
    const m = Math.floor(time / 60).toString();
    let s = (time % 60).toString();
    if (s.length === 1) s = `0${s}`;
    return `${m}:${s}`;
  };

  useEffect(() => {
    if (!isStart) {
      return;
    }

    if (time > 0) {
      const Counter = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(Counter);
    } else {
      setIsTimeStart((prevValue) => !prevValue);
      setIsTimeOver((prevValue) => !prevValue);
    }
  }, [time, isStart]);

  return { formatTime: timeFormat(time) };
};
