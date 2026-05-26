import { useState, createContext, useContext } from 'react';

//1 Create Context
const UserContext = createContext();

//2 provider component
export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Abdullah',
    role: 'Admin',
    email: 'a@gmail.com',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  return useContext(UserContext);
}
