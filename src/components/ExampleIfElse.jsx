import React from 'react';

function ExampleIfElse() {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <h1>Loggd In</h1>;
  } else {
    return <h1>Not logged in</h1>;
  }
}

export default ExampleIfElse;
