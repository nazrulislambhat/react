import React, { Component } from 'react';
import UpdatedComponent from './Counter';

class HoverCounter extends Component {
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
      <div>
        <h2 onMouseOver={this.incrementCount}>
          {this.props.name}Hovered {count} Times
        </h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
