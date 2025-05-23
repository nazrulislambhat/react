import { UsernameContext } from './UsernameContext';
import { useContext } from 'react';

export default function Level3Context() {
  const username = useContext(UsernameContext);
  return (
    <div>
      <h1>
        Your Username is: <p>Level3</p>
        {username}
      </h1>
    </div>
  );
}
