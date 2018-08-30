import React, { Component } from 'react';

class AddTaskForm extends Component {
  state = {
    inputValue: ''
  };

  onTextChange = (e) => {
    e.preventDefault();

    const newState = {...this.state};
    newState.inputValue = e.target.value;

    this.setState(newState);
  };

  onSubmitTask = (e) => {
    e.preventDefault();

    this.props.handleTaskAdd(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <div className="footer-form">
        <form onSubmit={this.onSubmitTask}>
          <input type="text"
                 value={this.state.inputValue}
                 onChange={this.onTextChange}
          />
          <input type="submit"
                 value="ADD TASK"
          />
        </form>
      </div>
    );
  }
}

export default AddTaskForm;