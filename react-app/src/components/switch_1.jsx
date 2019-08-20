import React, { Component } from "react";

class Switch_1 extends Component {
  render() {
    const { device } = this.props;
    const buttonText =
      device.status.charAt(0).toUpperCase() + device.status.slice(1);
    return (
      <div className="device-container">
        <div className="device-name">
          <h4>{device.name}</h4>
        </div>

        <button
          onClick={() =>
            this.props.onStatusChange(
              device.deviceId,
              device.status === "on" ? "off" : "on"
            )
          }
          className={"full-button " + (device.status ==="on" ? "active": "")}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Switch_1;
