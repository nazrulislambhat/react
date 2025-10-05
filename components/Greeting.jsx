// Greeting.js
import React from 'react';

function Greeting({ userName, userAge, onClick }) {
  return (
    <div>
      <p>Hello, {userName} 👋</p>
      <p>You are {userAge} years old.</p>
      <button onClick={onClick}>Click Me Greeting</button>
    </div>
  );
}

export default Greeting;
