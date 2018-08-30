import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className="task">
        <div className="radio"> </div>
        <div className="task-name">
          Task 1
        </div>
        <div className="remove-btn">
          <a className="remove-task-btn">✖</a>
        </div>
      </div>
    );
  }
}

export default Task;