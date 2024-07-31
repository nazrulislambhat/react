import ChildComponent from './components/ChildComponent';
import { useState } from 'react';
import UseState from './components/UseState.jsx';
import UseStateForm from './components/UseStateForm.jsx';
import UseStateArray from './components/UseStateArray.jsx';
import TaskList from './components/UseStateArray.jsx';
import User from './components/UseEffect.jsx';
import UseEffectUpdate from './components/UseEffectUpdate.jsx';
function App() {
  // const [isShown, setIsShown] = useState(false);
  // const Child = isShown ? <ChildComponent /> : null;
  return (
    <div>
      {/*<button onClick={() => setIsShown((s) => !s)}>Show/Hide</button>*/}
      {/*{Child}*/}
      <UseState />
      <UseStateForm />
      <TaskList />
      <UseEffectUpdate />
    </div>
  );
}

export default App;
