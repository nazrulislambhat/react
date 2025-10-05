import React from 'react';

function GrandChild({ user }) {
  return (
    <div>
      <h1>GrandChild</h1>
      <p>Name: {user.name}</p>
      <p>City: {user.city}</p>
      <p>Profession: {user.profession}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default GrandChild;
