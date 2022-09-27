import React, { useEffect, useState } from 'react';

function secondsToDHMS(seconds: number) {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return { d, h, m, s };
}

export interface TimerProps {
  timestamp: number;
}

export function Timer({ timestamp }: TimerProps) {
  const [d, setD] = useState(secondsToDHMS(timestamp - Date.now() / 1000).d);
  const [h, setH] = useState(secondsToDHMS(timestamp - Date.now() / 1000).h);
  const [m, setM] = useState(secondsToDHMS(timestamp - Date.now() / 1000).m);
  const [s, setS] = useState(secondsToDHMS(timestamp - Date.now() / 1000).s);

  useEffect(() => {
    const interval = setInterval(() => {
      setD(secondsToDHMS(timestamp - Date.now() / 1000).d);
      setH(secondsToDHMS(timestamp - Date.now() / 1000).h);
      setM(secondsToDHMS(timestamp - Date.now() / 1000).m);
      setS(secondsToDHMS(timestamp - Date.now() / 1000).s);
    }, 1000);

    if (Date.now() / 1000 > timestamp || s < 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [s]);

  if (s < 0) return null;

  return (
    <>
      {d !== 0 && <span>{d}d </span>}
      {h !== 0 && <span>{h}h </span>}
      {m !== 0 && <span>{m}min </span>}
      {s !== 0 && m < 1 && h < 1 && d < 1 && <span>{s}s</span>}
    </>
  );
}
