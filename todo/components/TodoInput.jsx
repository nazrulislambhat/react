import React from 'react';

function TodoInput({ onAdd, onInputChange, input }) {
  return (
    <div>
      <input
        placeholder="add your todo"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
      ></input>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
