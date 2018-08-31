import React, { Component } from 'react';

// a textarea component that autoresizes it's height based on current amount of text input
class TextArea extends Component {
  // handles text input using a callback function passed down thru props from AddTaskForm component
  onChange = (event) => {
    const text = event.target.value;
    this.props.handleChange(text);
  };

  render() {
    return (
      <textarea
        value={this.props.value}
        rows={this.props.rows}
        onChange={this.props.onChange}
        style={{lineHeight: `${this.props.lineHeight}px`}}
      />
    );
  }
}

export default TextArea;