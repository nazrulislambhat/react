import { UsernameContext } from './Context';
import { useContext } from 'react';

export default function Level3Context() {
  const username = useContext(UsernameContext);
  return (
    <div>
      <h3>Level 3 Context </h3>
      <p className="red">username: {username}</p>
    </div>
  );
}
