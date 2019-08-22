import React, { Component } from "react";
import settings from "../../resources/settings.svg";

class OptionsButton extends Component {
  openOptions = () => {
    console.log("Click");
  };

  render() {
    return (
      <div className="options-content">
        <img src={settings} className="options-button" onClick={this.props.onClick} alt="Options"/>
      </div>
    );
  }
}

export default OptionsButton;
