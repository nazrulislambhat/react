import { useState, useCallback } from 'react';

import List from './CallbackList.jsx';

export default function CalllbackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2, number + 3];
  }, [number]);
    
  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Theme Toggle
      </button>
      <List getItems={getItems} />
    </div>
  );
}
