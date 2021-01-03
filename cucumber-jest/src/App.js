import React, { Component } from "react";

export class App extends Component {
  state = { test: "01" };

  testFunction = () => {
    return "test01 function";
  };
  render() {
    return <div></div>;
  }
}

export default App;
