import React from 'react';

function ExampleTernary() {
  const isLoggedIn = true;
  return <div> {isLoggedIn ? <h1>Welcome</h1> : <h1>please log in</h1>}</div>;
}

export default ExampleTernary;
