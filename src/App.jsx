import React from 'react';
import ProductCard from '../components/ProductCard';
import UserContextHook from '../components/UserContextHook';
import Navbar from '../components/Navbar';
import UserProvider from '../components/UserContextHook';
import ThemeProvider from '../components/ThemeContextHook';
import Dashboard from '../components/Dashboard';
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
