import { useRef } from 'react';

function UseRefExample() {
  const inputRef = useRef(null);

  const FocusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="type here ....."></input>
      <button onClick={FocusInput}>Focus</button>
    </div>
  );
}

export default UseRefExample;
