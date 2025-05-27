import React from 'react';

function ConditionalWelcome({ isLoggedIn }) {
  // Method 1: if/else (outside JSX)
  if (isLoggedIn === null) {
    return <h1>Checking login status...</h1>;
  }

  // Method 2: Ternary operator
  const message = isLoggedIn
    ? 'Welcome back, user!'
    : 'Please log in to continue.';

  return (
    <div>
      <h2>Conditional Welcome</h2>

      {/* Method 3: Inline Ternary */}
      <p>{isLoggedIn ? 'Logged in ✅' : 'Not logged in ❌'}</p>

      {/* Method 4: Logical AND (only render message if logged in) */}
      {isLoggedIn && <p>You now have access to all features.</p>}

      {/* Showing message from ternary operator */}
      <p>{message}</p>
    </div>
  );
}

export default ConditionalWelcome;
