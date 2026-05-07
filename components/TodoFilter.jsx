import React from 'react';

function TodoFilter({ filter, onFilterChange }) {
  return (
    <div>
      <button
        onClick={() => onFilterChange('all')}
        style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('active')}
        style={{ fontWeight: filter === 'active' ? 'bold' : 'normal' }}
      >
        Active
      </button>
      <button
        className="bg-red-400 border-2 p-4"
        onClick={() => onFilterChange('completed')}
        style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
