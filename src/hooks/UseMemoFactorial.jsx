import { useMemo, useState } from 'react';

function UseMemoFactorial() {
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => {
    const calculateFactorial = (n) => {
      if (n <= 1) return 1;
      return n * calculateFactorial(n - 1);
    };
    return calculateFactorial(number);
  }, [number]);
  return (
    <>
      <h1>
        Factorial of {number} is {factorial}
      </h1>
      <button onClick={() => setNumber(number + 1)}>increment</button>
      <button onClick={() => setNumber(number - 1)}>decrement</button>
    </>
  );
}

export default UseMemoFactorial;
