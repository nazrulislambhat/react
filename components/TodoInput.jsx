import React from 'react';
import { useState } from 'react';
function TodoInput({ onAdd }) {
  const [todoinput, setTodoinput] = useState('');

  function handleAdd() {
    if (!todoinput.trim()) return;
    onAdd(todoinput);
    setTodoinput('');
  }
  return (
    <div>
      <input
        type="text"
        value={todoinput}
        onChange={(e) => setTodoinput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
