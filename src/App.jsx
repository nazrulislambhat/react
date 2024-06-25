import React from 'react';
import Props from './components/Props';
class App extends React.Component {
  render() {
    return (
      <div>
        <Props
          name="Nazrul Islam Bhat"
          age={33}
          profession="Software Engineer"
        />
        <Props name="Abdullah Islam Bhat" age={0.7} profession="Gol Bacha" />
      </div>
    );
  }
}
export default App;
