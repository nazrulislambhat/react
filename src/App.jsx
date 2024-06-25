import React from 'react';
import './App.css';

function App() {
  return (
    <div className="largeDiv" id="largeDiv">
      <label htmlFor="inputId">I am the Label</label>
      <input id="inputId" type="number" defaultValue={9469444007}></input>
    </div>
  );
}

export default App;
