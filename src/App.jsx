import ChildComponent from './components/ChildComponent';
import { useState } from 'react';
import UseState from './hooks/UseState.jsx';
import UseStateForm from './hooks/UseStateForm.jsx';
import UseStateArray from './hooks/UseStateArray.jsx';
import TaskList from './hooks/UseStateArray.jsx';
import User from './hooks/UseEffect.jsx';
import UseEffectUpdate from './hooks/UseEffectUpdate.jsx';
import UseEffectAPI from './hooks/UseEffectAPI.jsx';
import UseRefExample from './hooks/UseRefExample.jsx';
import Timer from './hooks/UseRefTimer.jsx';
function App() {
  // const [isShown, setIsShown] = useState(false);
  // const Child = isShown ? <ChildComponent /> : null;
  return (
    <div>
      {/*<button onClick={() => setIsShown((s) => !s)}>Show/Hide</button>*/}
      {/*{Child}*/}
      {/* <UseState />
      <UseStateForm />
      <TaskList />
      <UseEffectUpdate />
      <UseEffectAPI /> */}
      {/* <UseRefExample /> */}
      <Timer />
    </div>
  );
}

export default App;
