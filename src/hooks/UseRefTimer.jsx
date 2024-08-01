import React, { useRef, useState } from 'react';

export default function Timer() {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}
