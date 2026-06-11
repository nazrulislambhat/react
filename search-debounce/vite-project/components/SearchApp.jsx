gitimport { useState, useEffect } from 'react';

import useDebounce from '../hooks/useDebounce';

function SearchApp() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Something went wrong. Please try again.');
        setLoading(false);
      });
  }, [debouncedQuery]);

  return (
    <div>
      <h1>Search Users</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
      />
      {loading && <p>Searching...</p>}
      {error && <p>{error}</p>}
      {!query && <p>Start typing to search</p>}
      {!loading && query && !results.length && <p>No results found</p>}
      {results.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchApp;
