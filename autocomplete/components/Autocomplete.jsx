import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '../hooks/UseDebounce';
import { countries } from '../utls/countries';

function Autocomplete() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef(null); // for click outside detection
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    setLoading(true);

    // simulate API delay
    const timer = setTimeout(() => {
      const filtered = countries.filter((country) =>
        country.toLowerCase().includes(debouncedQuery.toLowerCase()),
      );
      setSuggestions(filtered);
      setIsOpen(true);
      setLoading(false);
      setActiveIndex(-1); // reset selection
    }, 300);

    return () => clearTimeout(timer);
  }, [debouncedQuery]);

  // ── click outside — close dropdown ─────────────────────────────────
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ── select a suggestion ─────────────────────────────────────────────
  function selectSuggestion(country) {
    setQuery(country);
    setIsOpen(false);
    setActiveIndex(-1);
  }

  // ── keyboard navigation ──────────────────────────────────────────────
  function handleKeyDown(e) {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length); // wrap around
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(
        (prev) => (prev - 1 + suggestions.length) % suggestions.length,
      );
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0) {
        selectSuggestion(suggestions[activeIndex]);
      }
    }

    if (e.key === 'Escape') {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  }

  // ── highlight matching text ─────────────────────────────────────────
  function highlightMatch(text, query) {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return text;

    const before = text.slice(0, index);
    const match = text.slice(index, index + query.length);
    const after = text.slice(index + query.length);

    return (
      <>
        {before}
        <strong style={{ color: '#F24236' }}>{match}</strong>
        {after}
      </>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: '300px', fontFamily: 'Arial' }}
    >
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => suggestions.length > 0 && setIsOpen(true)}
        placeholder="Search countries..."
        style={{
          width: '100%',
          padding: '10px 12px',
          borderRadius: '6px',
          border: '1px solid #ddd',
          fontSize: '14px',
        }}
      />

      {loading && (
        <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
          Searching...
        </p>
      )}

      {isOpen && !loading && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '6px',
            marginTop: '4px',
            maxHeight: '200px',
            overflowY: 'auto',
            listStyle: 'none',
            padding: '4px 0',
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          {suggestions.length === 0 ? (
            <li style={{ padding: '10px 12px', color: '#999' }}>
              No results found
            </li>
          ) : (
            suggestions.map((country, index) => (
              <li
                key={country}
                onClick={() => selectSuggestion(country)}
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  padding: '10px 12px',
                  cursor: 'pointer',
                  background: index === activeIndex ? '#f0f0fe' : '#fff',
                }}
              >
                {highlightMatch(country, query)}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
