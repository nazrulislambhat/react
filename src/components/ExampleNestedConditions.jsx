import React from 'react';

function ExampleNestedConditions() {
  const user = { isLoggedIn: false, role: 'admin' };
  return (
    <div>
      {user.isLoggedIn ? (
        user.role === 'admin' ? (
          <h1> Welcome Admin</h1>
        ) : (
          <h1>Welcome User</h1>
        )
      ) : (
        <h1>please sign in</h1>
      )}
    </div>
  );
}

export default ExampleNestedConditions;
