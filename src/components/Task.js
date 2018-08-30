import React, { Component } from 'react';

class Task extends Component {
  render() {
    // conditional to check if task is completed
    // if completed, add 'completed' class tags
    let isCompleted = '';
    if (this.props.isCompleted) {
      isCompleted = ' completed';
    }

    return (
      <div className={"task" + isCompleted}>
        <div className={"radio" + isCompleted}> </div>
        <div className={"task-name" + isCompleted}>
          {this.props.taskName}
        </div>
        <div className="remove-btn">
          <a className="remove-task-btn">✖</a>
        </div>
      </div>
    );
  }
}

export default Task;