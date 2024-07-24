import ChildComponent from './components/ChildComponent';
import { useState } from 'react';
function App() {
  const [isShown, setIsShown] = useState(false);
  const Child = isShown ? <ChildComponent /> : null;
  return (
    <div>
      <button onClick={() => setIsShown((s) => !s)}>Show/Hide</button>
      {Child}
    </div>
  );
}

export default App;
