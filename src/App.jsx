import { useState } from 'react';
import TodoCount from '../components/TodoCount';
import TodoFilter from '../components/TodoFilter';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', done: false },
    { id: 2, text: 'Read a book', done: false },
  ]);
  const [filter, setFilter] = useState('all');

  function addTodo(text) {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  function toggleTodo(id) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'completed') return t.done;
    return true;
  });

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo} />
      <TodoFilter filter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <TodoCount todos={todos} />
      
    </div>
  );
}

export default App;
