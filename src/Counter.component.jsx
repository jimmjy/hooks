import React from "react";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>ADD</button>
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

export default Counter;
