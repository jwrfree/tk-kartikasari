'use client';

import { useState, useEffect, type ReactNode } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: ReactNode[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <span className="text-2xl font-bold md:text-3xl">{String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}</span>
        <span className="text-xs uppercase tracking-wider">{interval}</span>
      </div>
    );
  });

  return (
    <div className="mt-6 rounded-2xl bg-secondary/30 p-4">
        <p className="text-center text-sm font-semibold text-secondary-600">Batas Waktu Pendaftaran</p>
        <div className="mt-2 grid grid-flow-col gap-3 text-center text-secondary-700 auto-cols-fr">
            {timerComponents.length ? timerComponents : <span className="col-span-4 text-center font-bold text-lg">Pendaftaran ditutup!</span>}
        </div>
    </div>
  );
};

export default CountdownTimer;
