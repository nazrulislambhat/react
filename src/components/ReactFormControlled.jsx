import { useState } from 'react';

function ReactFormControlled() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted with name: ${name}`);
  };
  return (
    <>
      <h2>Controlled React Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          name:<input type="text" value={name} onChange={handleChange}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default ReactFormControlled;
