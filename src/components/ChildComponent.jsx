import { React, useState } from 'react';

function ChildComponent() {
  const [name, setName] = useState('');
  console.log('render child');
  return (
    <div className="child">
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <br />
      my name is {name}
    </div>
  );
}

export default ChildComponent;
