import { useState, useEffect } from 'react';

export default function Toggler(toggle, onToggle) {
  const [title, setTitle] = useState('Hello React');

  useEffect(() => {
    console.log('I still run only if toggle changes (and on mount).');
  }, [toggle, title]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />

      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>{title}</div>}
    </div>
  );
}
