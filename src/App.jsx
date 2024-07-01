import { useState } from 'react';

function App() {
  const [name, setName] = useState('NAZRUL');
  const [age, setAge] = useState(25);
  function changeName() {
    setName('ISLAM');
    setAge((currentAge) => currentAge + 1);
    setAge(age + 1);
  }
  return (
    <h1 onClick={changeName}>
      Hi {name} Your age is {age}
    </h1>
  );
}

export default App;
