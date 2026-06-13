import { useState, useEffect } from 'react';

function SearchAppDebounce() {
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
    setError(null);

    const debounced = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          if (!res.ok) throw new Error('Network response not ok');
          return res.json();
        })
        .then((data) => {
          const filtered = data.filter((user) => {
            return user.name.toLowerCase().includes(query.toLowerCase());
          });

          setResults(filtered);
          setLoading(false);
        })

        .catch(() => {
          setError('Something went wrong');
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(debounced);
  }, [query]);

  return (
    <div>
      <h1>Search Users With Debounce</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users (debounced)..."
      />

      {loading && <p>Searching...</p>}
      {error && <p>{error}</p>}
      {!query && <p>Start typing to search</p>}
      {!loading && query && !results.length && <p>No results found</p>}

      {results.map((user) => (
        <div
          key={user.id}
          style={{ borderBottom: '1px solid #ccc', padding: '8px 0' }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchAppDebounce;
