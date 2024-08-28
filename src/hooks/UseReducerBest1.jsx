import { useState } from 'react';
import { login } from '../utlis/login';
export default function LoginPlain() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await login({ username, password });
      setSuccess(true);
      setUsername('');
      setPassword('');
      setError('');
    } catch (error) {
      setError('Incorrect username or password');
      setUsername('');
      setPassword('');
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="app">
        <div className="login-container">
          {success ? (
            <>
              <h1>Hello {username} </h1>{' '}
            </>
          ) : (
            <form onSubmit={onSubmit}>
              {error && <p>{error}</p>}
              <p>Please Login!</p>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging In......' : 'Log In'}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
