// import { useReducer } from 'react';
// const initialState = { count: 0 };
// function reducerFunction(state, action) {
//   switch (action.type) {
//     case 'inc':
//       return { count: state.count + 1 };
//     case 'dec':
//       return { count: state.count - 1 };
//     case 'reset':
//       return { count: 0 };
//     default:
//       return state;
//   }
// }
// const ReducerPractice = () => {
//   const [state, dispatch] = useReducer(reducerFunction, initialState);
//   return (
//     <div>
//       <h3>Counter {state.count}</h3>

//       <button onClick={() => dispatch({ type: 'inc' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'dec' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//     </div>
//   );
// };
// export default ReducerPractice;
