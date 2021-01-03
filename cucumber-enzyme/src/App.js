import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { test: "010..0" };
  }

  testFunction() {
    return "test function";
  }

  render() {
    const { test } = this.state;
    return <div>Learn React {test}</div>;
  }
}

export default App;
