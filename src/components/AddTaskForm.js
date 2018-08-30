import React, { Component } from 'react';

class AddTaskForm extends Component {
  state = {

  };

  render() {
    return (
      <div className="footer-form">
        <input type="text" value="" />
        <input type="submit" value="ADD TASK" />
      </div>
    );
  }
}

export default AddTaskForm;