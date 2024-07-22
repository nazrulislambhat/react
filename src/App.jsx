import ExampleAnd from './components/ExampleAnd';
import ExampleIf from './components/ExampleIf';
import ExampleIfElse from './components/ExampleIfElse';
import ExampleMultipleConditions from './components/ExampleMultipleConditions';
import ExampleNestedConditions from './components/ExampleNestedConditions';
import ExampleSwitchCase from './components/ExampleSwitchCase';
import ExampleTernary from './components/ExampleTernary';
import ExampleWithHOC from './components/ExampleWithHOC';

function App() {
  return (
    <div>
      <h1>Hello Conditional Rendering</h1>
      <ExampleIf />
      <ExampleIfElse />
      <ExampleTernary />
      <ExampleAnd />
      <ExampleSwitchCase />
      <ExampleMultipleConditions />
      <ExampleNestedConditions />
      <ExampleWithHOC />
    </div>
  );
}

export default App;
