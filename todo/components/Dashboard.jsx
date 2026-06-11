import { useTheme } from './ThemeContextHook';

function Dashboard() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === 'dark' ? '#222222' : '#f5f5f5',
        color: theme === 'dark' ? '#ffffff' : '#333333',
        padding: '16px',
        minHeight: '100vh',
      }}
    >
      <h1>Welcome Abdullah!</h1>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Dashboard;
