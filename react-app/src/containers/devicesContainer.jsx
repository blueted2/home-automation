import React, { Component } from "react";
import Switch from "../components/switch_1";

class devicesContainer extends Component {
  render() {
    var { devices } = this.props;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          margin: "20px"
        }}
      >
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
        <Switch device={devices[0]} />
      </div>
    );
  }
}

export default devicesContainer;
