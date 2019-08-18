import React, { Component } from "react";

class Switch_1 extends Component {
  render() {
    var { device } = this.props;
    return (
      <div className="well" style={{margin:"20px"}}>
        <div className="center-block">
          <h2>{device.name}</h2>
        </div>
        <button className="btn btn-primary center-block">Toggle</button>
      </div>
    );
  }
}

export default Switch_1;
