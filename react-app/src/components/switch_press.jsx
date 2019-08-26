import React, { Component } from "react";
import OptionsDropDown from "./options_dropDown";

class Swtich_Press extends Component {
  onClick = () => {
    const { device } = this.props;
    if (device.connected) {
      if (device.status === "on") {
        this.props.onEvent("switchOff", {
          deviceId: device.deviceId
        });
      } else {
        this.props.onEvent("switchOn", {
          deviceId: device.deviceId
        });
      }
    }
  };

  onMouseDown = () => {
    const { device } = this.props;
    if (device.connected) {
      console.log("Mouse Down");
      this.props.onEvent("switchOn", {
        deviceId: device.deviceId
      });
    }
  };
  onMouseUp = () => {
    const { device } = this.props;
    if (device.connected) {
      console.log("Mouse Up");
      this.props.onEvent("switchOff", {
        deviceId: device.deviceId
      });
    }
  };
  onTouchStart = e => {
    e.preventDefault();
    const { device } = this.props;
    if (device.connected) {
      console.log("Touch Start");
      this.props.onEvent("switchOn", {
        deviceId: device.deviceId
      });
    }
  };
  onTouchEnd = e => {
    e.preventDefault();
    const { device } = this.props;
    if (device.connected) {
      console.log("Touch End");
      this.props.onEvent("switchOff", {
        deviceId: device.deviceId
      });
    }
  };

  render() {
    const { device } = this.props;
    const buttonText = device.status.charAt(0).toUpperCase() + device.status.slice(1);
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
        <div className="device-header">
          <div className="device-name">{device.name}</div>
          <OptionsDropDown onEvent={this.props.onEvent} deviceTypes={this.props.deviceTypes} device={device} />
        </div>

        <button onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} className={buttonClass}>
          <div className="button-text">{buttonText}</div>
        </button>
      </div>
    );
  }
}

export default Swtich_Press;
