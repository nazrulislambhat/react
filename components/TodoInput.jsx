import React from 'react';

function TodoInput({ onAdd, input, onInputChange }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={onAdd}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
