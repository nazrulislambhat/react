import { useState, useEffect } from 'react';

function SearchAppNoDebounce() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResults([]);
      return;
    }
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase()),
        );

        setResults(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError('Something is wrong');
        setLoading(false);
      });
  }, [query]);
  return (
    <div>
      <h1>Search Users With No Debounce</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search users no debounce"
      ></input>

      {loading && <p>Searching...</p>}
      {error && <p>{error}</p>}
      {!query && <p>Start typing to search</p>}
      {!loading && query && !results.length && <p>no results found</p>}

      {results.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchAppNoDebounce;
