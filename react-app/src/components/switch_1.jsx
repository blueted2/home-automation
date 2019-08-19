import React, { Component } from "react";

class Switch_1 extends Component {
  render() {
    var { device } = this.props;
    return (
      <div className="well device-container">
        <h4>
          <center>{device.name}</center>
        </h4>
        <button className="full-button">{device.status}</button>
      </div>
    );
  }
}

export default Switch_1;
