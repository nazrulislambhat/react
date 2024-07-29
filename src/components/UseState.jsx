import { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('nazrul');
  const [age, setAge] = useState(22);
  function handleClick() {
    console.log(count);
    setCount(count + 1);
    console.log(count);
  }
  function handleName() {
    setName('Islam');
    console.log(name);
  }

  function handleAge() {
    setAge((age) => age + 1); //update function
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {count}
      <button onClick={handleName}>Change Name to Islam</button>
      {name}
      {age}{' '}
      <button
        onClick={() => {
          handleAge();
          handleAge();
          handleAge();
        }}
      >
        Increment Age +3
      </button>
      <button
        onClick={() => {
          handleAge();
        }}
      >
        Increment Age +1
      </button>
    </div>
  );
}

export default UseState;
