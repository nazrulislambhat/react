import React from 'react';
import ProductCard from '../components/ProductCard';
import UserContextHook from '../components/UserContextHook';
import Navbar from '../components/Navbar';
import UserProvider from '../components/UserContextHook';
import ThemeProvider from '../components/ThemeContextHook';
import Dashboard from '../components/Dashboard';
import SubmitValidation from '../forms/SubmitValidation';
import BlurValidation from '../forms/BlurValidation';
import ChangeValidation from '../forms/ChangeValidation';
import MultipleInputs from '../forms/MultipleInputs';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import TodoFilter from '../components/TodoFilter';
function App() {
  return (
    <>
      <TodoInput />
    </>
  );
}

export default App;
