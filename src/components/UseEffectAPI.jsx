import { useState, useEffect } from 'react';

function UseEffectAPI() {
  const [type, setType] = useState('posts');
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [type]);

  return (
    <>
      <div>
        <button onClick={() => setType('posts')}>Posts</button>
        <button onClick={() => setType('users')}>Users</button>
        <button onClick={() => setType('comments')}>Comments</button>
      </div>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default UseEffectAPI;
