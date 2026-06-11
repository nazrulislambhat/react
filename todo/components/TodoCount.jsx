import React from 'react';

function TodoCount({ todos }) {
  return (
    <div>
      <p>{todos.filter((t) => !t.done).length} todos left</p>
    </div>
  );
}

export default TodoCount;
