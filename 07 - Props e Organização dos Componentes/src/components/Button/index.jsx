import './styles.css';

import { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <button
        className="button"
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    )
  }
}