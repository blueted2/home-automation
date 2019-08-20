import React, { Component } from "react";

class Switch_1 extends Component {
  render() {
    const { device } = this.props;
    const buttonText =
      device.status.charAt(0).toUpperCase() + device.status.slice(1);

    var buttonClass = "full-button ";
    if (!device.connected) {
      buttonClass += "disabled ";
    } else {
      if (device.status === "on") {
        buttonClass += "active ";
      }
    }

    return (
      <div className="device-container">
        <div className="device-name">
          <h4>{device.name}</h4>
        </div>

        <button
          onClick={() => {
            if (device.connected) {
              this.props.onStatusChange({
                deviceId: device.deviceId,
                status: device.status === "on" ? "off" : "on"
              }
              );
            }
          }}
          className={buttonClass}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Switch_1;
