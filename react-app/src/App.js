import React, { Component } from "react";
import Container from "./containers/devicesContainer";

class App extends Component {
  state = {};
  render() {
    return <Container devices={[{ name: "Light 1" }]} />;
  }
}

export default App;
