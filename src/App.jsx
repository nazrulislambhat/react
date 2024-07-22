import { React, useState } from 'react';
import ChildComponent from './components/ChildComponent';
function App() {
  const [count, setCount] = useState(0);
  console.log('render app');
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <ChildComponent />
    </div>
  );
}

export default App;
