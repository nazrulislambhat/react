import { useState } from 'react';

function UseStateHook() {
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    age: 30,
    email: 'user@email.com',
  });
  const changeName = () => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      name: 'nazrul',
    }));
  };
  return (
    <div>
      <p>{userDetails.name}</p>
      <p>{userDetails.age}</p>
      <p>{userDetails.email}</p>

      <button onClick={changeName}> Change Name</button>
    </div>
  );
}

export default UseStateHook;
