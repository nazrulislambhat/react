import React from 'react';

function ExampleMultipleConditions() {
  const userRole = 'admin';
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn && userRole === 'admin' ? (
        <h1>Welcome Back, Admin</h1>
      ) : isLoggedIn && userRole === 'user' ? (
        <h1>Welcome back, User</h1>
      ) : (
        <h1>Please sign in</h1>
      )}
    </div>
  );
}

export default ExampleMultipleConditions;
