import React, { Component } from "react";
import Switch from "../components/switch_1";

class devicesContainer extends Component {
  render() {
    var { devices } = this.props;

    const switches = devices.map(device => {
      return (
        <Switch
          device={device}
          key={device.deviceId}
          onStatusChange={this.props.onStatusChange}
        />
      );
    });

    return <div className="devices-container">{switches}</div>;
  }
}

export default devicesContainer;
