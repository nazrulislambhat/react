import { useReducer } from 'react';

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

export default function UseReducerExample1() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h3>Use Reducer Example 1</h3>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}
