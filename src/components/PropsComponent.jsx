import { Children, useState } from 'react';

function PropsComponent(props) {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount((prevCount) => prevCount + 1);
  }

  //   function handleInc() {
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //   }
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.info}</p>
      <p>{count}</p>
      <button onClick={handleInc}>Increment</button>
    </div>
  );
}

export default PropsComponent;
