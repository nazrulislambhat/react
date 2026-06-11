import React from 'react';
import { useTheme } from './ThemeContextHook';
function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === 'dark' ? '#333' : '#fff', // ✅ changes with theme
        color: theme === 'dark' ? '#fff' : '#333', // text color too
        padding: '16px',
      }}
    >
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Navbar;
