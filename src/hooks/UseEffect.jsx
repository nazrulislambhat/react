import { useEffect } from 'react';

export default function User({ name }) {
  useEffect(() => {
    const name = 'John Doe';
    document.title = name;
    console.log('Inside UseEffect');
  }, [name]);

  return (
    <h1>
      asasasasasas {name} {document.title}
    </h1>
  );
}
