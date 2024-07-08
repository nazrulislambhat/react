import { useState } from 'react';
export default function FunctionComponent() {
  const [name, setName] = useState('nazrul');
  const [age, setAge] = useState(0);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      <br />
      my name is {name} my age is {age}
    </div>
  );
}
