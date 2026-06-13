import './App.css';
import SearchAppDebounce from '../components/SearchAppDebounce';
import SearchAppNoDebounce from '../components/SearchAppNoDebounce';

function App() {
  return (
    <>
      <SearchAppDebounce />
      <SearchAppNoDebounce />
    </>
  );
}

export default App;
