import React from 'react';
import { useState } from 'react';
function Todo() {
  const [todos, setTodos] = useState(['Buy groceries', 'Read a book']);
  const [inputValue, setInputValue] = useState('');

  function addTodo() {
    if (!inputValue.trim()) return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  }
  function deleteTodo() {
    setTodos(todos.filter((_, index) => index !== index));
  }
  function clearTodo() {
    setTodos('');
  }
  return (
    <>
      <h1>Todo</h1>
      <input
        value={inputValue}
        placeholder="Enter a todo..."
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={addTodo}>Add</button>

      <button onClick={clearTodo}>Clear</button>
      {todos.map((todo, index) => {
        <div key={index}>
          <p>{todo}</p>
          <button onClick={deleteTodo(index)}>Delete</button>
        </div>;
      })}
    </>
  );
}

export default Todo;
