import { useEffect, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/posts?page=${page}`);
        const posts = await response.json();
        setPosts(posts);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <div>
      <h1>Data Fetching in React</h1>
      <button onClick={() => setPage(page + 1)}>
        Increased Page to {page}
      </button>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
