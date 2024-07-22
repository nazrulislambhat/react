import React from 'react';

function ExampleIf() {
  const isLoggedIn = true;
  let content;

  if (isLoggedIn) {
    content = <h2>User Logged in</h2>;
  } else {
    content = <h2>Please Log In</h2>;
  }

  return <div>{content}</div>;
}
export default ExampleIf;
