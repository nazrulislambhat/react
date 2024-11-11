import { useState } from 'react';
import axios from 'axios';

const PersonManager = () => {
  const [personId, setPersonId] = useState(null);

  // Function to create a new person
  const createPerson = async () => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        {
          name: 'John Doe',
          username: 'johndoe',
          email: 'johndoe@example.com',
        }
      );
      console.log('Person created:', response.data);
      setPersonId(response.data.id); // Save the ID of the created person
    } catch (error) {
      console.error('Error creating person:', error);
    }
  };

  // Function to delete a person by ID
  const deletePerson = async () => {
    if (!personId) {
      console.log('No person ID to delete');
      return;
    }

    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${personId}`
      );
      console.log(`Person with ID ${personId} deleted.`);
      setPersonId(null); // Reset the person ID after deletion
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  return (
    <div>
      <h1>Person Manager</h1>

      {/* Button to create a new person */}
      <button onClick={createPerson}>Create Person</button>

      {/* Button to delete the person (if created) */}
      {personId && (
        <div>
          <p>Person ID: {personId}</p>
          <button onClick={deletePerson}>Delete Person</button>
        </div>
      )}
    </div>
  );
};

export default PersonManager;
