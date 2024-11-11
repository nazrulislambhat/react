import { useRef } from 'react';
function ReactFormUncontrolled() {
  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`form submitted wuth name ${nameRef.current.value}`);
  };
  return (
    <>
      <h2>Un Controlled React Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:<input type="text" ref={nameRef}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ReactFormUncontrolled;
