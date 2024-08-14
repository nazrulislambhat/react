import { useReducer } from 'react';

const initialTheme = { isDark: false };

function themeReducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { isDark: !state.isDark };
    default:
      throw new Error();
  }
}

function UseReducerExample3() {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  const appStyle = {
    backgroundColor: theme.isDark ? 'black' : 'white',
    color: theme.isDark ? 'white' : 'black',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };
  return (
    <div style={appStyle}>
      <h3>UseReducerExample3</h3>
      <p>{theme.isDark ? 'Dark Mode' : 'Light Mode'}</p>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle Theme</button>
    </div>
  );
}

export default UseReducerExample3;
