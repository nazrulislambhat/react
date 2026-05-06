import React from 'react';
import { useState } from 'react';
function StateUseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((prev) => prev + 2)}>Click me</button>
    </div>
  );
}

export default StateUseState;
