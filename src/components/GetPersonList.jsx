import axios from 'axios';
import { useState, useEffect } from 'react';

export default function GetPersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data;
        setPersons(persons);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ul>
      {persons.length > 0 ? (
        persons.map((person) => <li key={person.id}>{person.name}</li>)
      ) : (
        <li>Loading People......</li>
      )}
    </ul>
  );
}
