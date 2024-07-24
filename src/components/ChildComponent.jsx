import { useState } from 'react';

function ChildComponent() {
  const [name, setName] = useState('');
  console.log('Render Child');
  return (
    <div className="child">
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <br />
      my name is {name}
    </div>
  );
}
export default ChildComponent;
