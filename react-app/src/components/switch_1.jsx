import React, { Component } from "react";

class Switch_1 extends Component {
  render() {
    var { device } = this.props;

    return (
      <div className="device-container">
        <div className="device-name">
          <h4>{device.name}</h4>
        </div>

        <button onClick={() => this.props.onStatusChange(device.deviceId, device.status ==="on" ? "off" : "on")} className="full-button">{device.status}</button>
      </div>
    );
  }
}

export default Switch_1;
