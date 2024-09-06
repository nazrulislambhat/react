import { useEffect, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/posts`);
      const posts = await response.json();
      setPosts(posts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Data Fetching in React</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
