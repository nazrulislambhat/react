export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        resolve({ username: 'admin', name: 'Admin' });
      } else {
        reject('Invalid username or password');
      }
    }, 1000);
  });
}
