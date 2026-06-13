import React from 'react';

function TodoFilter({ filter, filterChange }) {
  return (
    <div>
      <button
        onClick={() => filterChange('all')}
        style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
      >
        All
      </button>
      <button
        onClick={() => filterChange('completed')}
        style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
      >
        Completed
      </button>
      <button
        onClick={() => filterChange('active')}
        style={{ fontWeight: filter === 'active' ? 'bold' : 'normal' }}
      >
        Active
      </button>
    </div>
  );
}

export default TodoFilter;
