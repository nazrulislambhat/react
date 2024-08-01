import { useRef } from 'react';

function UseRef() {
  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    alert('You Clicked' + ref.current + 'times');
  }
  return <button onClick={handleClick}> Click Me</button>;
}

export default UseRef;
