import React from 'react';
import Child from './Child';
function Parent() {
  const user = {
    name: 'Nazrul',
    age: 22,
    profession: 'Software Developer',
    city: 'Bengaluru',
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <Child user={user} />
    </div>
  );
}

export default Parent;
