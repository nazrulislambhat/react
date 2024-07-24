import { Component } from 'react';
import UpdatedComponent from './Counter';
class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const count = this.state.count;
    return (
      <button onClick={this.incrementCount}>
        {this.props.name}Clicked {count} Times
      </button>
    );
  }
}

export default UpdatedComponent(ClickCounter);
