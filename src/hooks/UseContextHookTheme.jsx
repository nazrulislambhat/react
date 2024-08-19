import { useContext, createContext } from 'react';

const ThemeContext = createContext('light');

const Toolbar = () => {
  return (
    <div>
      <ThemeButton></ThemeButton>
    </div>
  );
};

const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}
    >
      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

const UseContextHookTheme = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default UseContextHookTheme;
