import React from 'react';
import './App.css';

function App() {
  // return (
  //   <>
  //     <h1 id="h1">Hello React + Vite</h1>
  //   </>
  // );
  return React.createElement('h1', { id: 'h1111' }, 'Hello React + Vite');
}

export default App;
