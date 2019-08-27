import React, { Component } from "react";
import "../../styles/number_input.css";

class NumberInput extends Component {
  render() {
    return (
      <div>
        <label className="option-label">{this.props.title}: </label>
        <input
          type="number"
          className="number-input"
          path={this.props.path}
          value={this.props.value}
          onChange={e => this.props.onChange(e)}
          min={this.props.min}
          max={this.props.max}
          interval={this.props.interval}
        />
      </div>
    );
  }
}

export default NumberInput;
