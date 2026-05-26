import { useState, useRef } from 'react';
function RefHook() {
  const [query, setQuery] = useState('');
  const timerRef = useRef(null);

  function handleChange(e) {
    setQuery(e.target.value);

    clearTimeout(timerRef.current); // clear previous timer
    timerRef.current = setTimeout(() => {
      console.log('searching for:', e.target.value);
    }, 500);
  }

  return <input value={query} onChange={handleChange} />;
}
export default RefHook;
