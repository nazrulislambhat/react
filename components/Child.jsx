import React from 'react';
import GrandChild from './GrandChild';

function Child({ user }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name In Child Component: {user.name}</p>
      <GrandChild user={user} />
    </div>
  );
}

export default Child;
