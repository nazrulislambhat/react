import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  function changeCounter() {
    setCounter((currentCounter) => currentCounter + 1);
  }
  return <h1 onMouseEnter={changeCounter}>{counter}</h1>;
}

export default App;
