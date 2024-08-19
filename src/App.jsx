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
import UseRef from './hooks/UseRef.jsx';
import UseReducerExample1 from './hooks/UseReducerExample1.jsx';
import UseReducerExample2 from './hooks/UseReducerExample2.jsx';
import UseReducerExample3 from './hooks/UseReducerExample3.jsx';
import UseReducerExample4 from './hooks/UseReducerExample4.jsx';
import UseReducerExample5 from './hooks/UseReducerExample5.jsx';
import UseMemoFactorial from './hooks/UseMemoFactorial.jsx';
import UseMemoFactorial2 from './hooks/UseMemoFactorial2.jsx';
import CallbackHook from './components/CallbackHook.jsx';
import UseContextHookTheme from './hooks/UseContextHookTheme.jsx';
function App() {
  // const [isShown, setIsShown] = useState(false);
  // const Child = isShown ? <ChildComponent /> : null;
  return (
    <div className="app">
      {/*<button onClick={() => setIsShown((s) => !s)}>Show/Hide</button>*/}
      {/*{Child}*/}
      {/* <UseState />
      <UseStateForm />
      <TaskList />
      <UseEffectUpdate />
      <UseEffectAPI /> */}
      {/* <UseRefExample /> */}
      {/* <Timer /> */}
      {/* <UseRef /> */}
      {/* <UseMemoFactorial2 /> */}
      {/* <ItemList /> */}
      {/* <UseReducerExample1 />
      <UseReducerExample2 /> */}
      {/* <UseReducerExample3 /> */}
      {/* <UseReducerExample4 /> */}
      {/* <CallbackHook /> */}
      {/*<UseContextHookTheme />*/}
    </div>
  );
}

export default App;
