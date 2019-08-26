import React, { Component } from "react";
import "../styles/slider_switch.css";

class Slider extends Component {
  onClick = () => {
    this.props.onClick();
  }
  render() {
    const {status, connected} = this.props.device;
    return (
      <div onClick={this.onClick} className={"switch " + (status==="on" ? "active":"") + (!connected?"disabled":"")} >
        <span className="slider" />
      </div>
    );
  }
}

export default Slider;
