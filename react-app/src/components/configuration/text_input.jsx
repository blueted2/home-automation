import React, { Component } from "react";
import "../../styles/text_input.css";

class TextInput extends Component {
  render() {
    return (
      <div>
        <label className="option-label">{this.props.title}: </label>
        <input
          type="text"
          className="text-input"
          path={this.props.path}
          defaultValue={this.props.defaultValue}
          onChange={e => this.props.onChange(e)}
        />
      </div>
    );
  }
}

export default TextInput;
