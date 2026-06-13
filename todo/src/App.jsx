import { useState } from 'react';
import './App.css';
import TodoInput from '../components/TodoInput';
import TodoFilter from '../components/TodoFilter';
import TodoList from '../components/TodoList';
import TodoCount from '../components/TodoCount';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [input, setInput] = useState('');

  function addTodo() {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  }
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  const filteredTodo = todos.filter((todo) => {
    if (filter === 'active') return todo.done === false;
    if (filter === 'completed') return todo.done === true;
    return true;
  });

  return (
    <>
      <h1>Todo App</h1>
      <TodoInput input={input} onAdd={addTodo} onInputChange={setInput} />
      <hr />
      <h2>Filters</h2>
      <TodoFilter filter={filter} filterChange={setFilter} />
      <hr />
      <TodoList
        todos={filteredTodo}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <hr />
      <TodoCount todos={todos} />
    </>
  );
}

export default App;
