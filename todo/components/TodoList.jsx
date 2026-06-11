function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) return <p>No todos yet!</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.done ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
