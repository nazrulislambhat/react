import React from 'react';
import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log('after first');
    setCount(count + 1);
    console.log('after second');
    setCount(count + 1);
  }
  return <button onClick={handleClick}>{count}</button>;
}

export default Counter;
