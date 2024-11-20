// import ChildComponent from './components/ChildComponent';
//import { useState } from 'react';
// import UseState from './hooks/UseState.jsx';
// import UseStateForm from './hooks/UseStateForm.jsx';
// import UseStateArray from './hooks/UseStateArray.jsx';
// import TaskList from './hooks/UseStateArray.jsx';
// import User from './hooks/UseEffect.jsx';
// import UseEffectUpdate from './hooks/UseEffectUpdate.jsx';
// import UseEffectAPI from './hooks/UseEffectAPI.jsx';
// import UseRefExample from './hooks/UseRefExample.jsx';
// import Timer from './hooks/UseRefTimer.jsx';
// import UseRef from './hooks/UseRef.jsx';
// import UseReducerExample1 from './hooks/UseReducerExample1.jsx';
// import UseReducerExample2 from './hooks/UseReducerExample2.jsx';
// import UseReducerExample3 from './hooks/UseReducerExample3.jsx';
// import UseReducerExample4 from './hooks/UseReducerExample4.jsx';
// import UseReducerExample5 from './hooks/UseReducerExample5.jsx';
// import UseMemoFactorial from './hooks/UseMemoFactorial.jsx';
// import UseMemoFactorial2 from './hooks/UseMemoFactorial2.jsx';
// import CallbackHook from './components/CallbackHook.jsx';
// import UseContextHookTheme from './hooks/UseContextHookTheme.jsx';
// import OnlineStatus from './CustomHooks/OnlineStatus.jsx';
// import UseReducerBest1 from './hooks/UseReducerBest1.jsx';
// import UseReducerBest2 from './hooks/UseReducerBest2.jsx';
// import TwoWayDataBinding from './components/TwoWayDataBinding.jsx';
// import DataFetch from './components/DataFetch.jsx';
// import GetPersonList from './components/GetPersonList.jsx';

import EffectExample from './components/EffectExample';
import PropsComponent from './components/PropsComponent';

// import ReactFormControlled from './components/ReactFormControlled';
// import ReactFormUncontrolled from './components/ReactFormUncontrolled';
// import ReactHookForm from './components/ReactHookForm';
// import ReactForm from './components/ReactForm';
// import NazrulForm from './components/NazrulForm';
// import FormikForm from './components/FormikForm';
// import PostPersonList from './components/PostPersonList.jsx';
function App() {
  // const [isShown, setIsShown] = useState(false);
  // const Child = isShown ? <ChildComponent /> : null;
  // const [count, setCount] = useState(0);
  // const handleInc = () => {
  //   setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const handleReset = () => {
  //   setCount(0);
  // };
  // const handleDec = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };
  return (
    <div className="app">
      <h1>React JS</h1>
      {/* <PropsComponent name="name" info="Some Information" />
      <PropsComponent name="name2" info="Some Information2" /> */}
      <EffectExample />
      {/* <h1 className="count">{count}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleReset}>Reset</button> */}
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
      {/*<OnlineStatus />*/}
      {/* <TwoWayDataBinding /> */}
      {/* <UseReducerBest1 /> */}
      {/* <UseReducerBest2 /> */}
      {/* <DataFetch /> */}
      {/* <GetPersonList />
      <PostPersonList /> */}
      {/* <ReactFormControlled />
      <ReactFormUncontrolled /> */}
      {/* <ReactHookForm /> */}
      {/* <ReactForm /> */}
      {/* <NazrulForm /> */}
      {/* <FormikForm /> */}
    </div>
  );
}

export default App;
