import React from 'react';

function ExampleSwitchCase() {
  const status = 'admin';
  let content;
  switch (status) {
    case 'admin':
      content = <h1>Welcome Admin</h1>;
      break;
    case 'user':
      content = <h1>Welcome User</h1>;
      break;
    default:
      content = <h1>Welcome Guest</h1>;
      break;
  }

  return <div>{content}</div>;
}

export default ExampleSwitchCase;
