import React, { Component } from 'react';

class Task extends Component {
  render() {
    // conditional to check if task is completed
    // if completed, add 'completed' class tags
    let isCompleted = '';
    if (this.props.isCompleted) {
      isCompleted = ' completed';
    }

    // add checkmark if completed
    let checkmark = ' ';
    if (this.props.isCompleted) {
      checkmark = <i className="fas fa-check checkmark"></i>;
    }

    return (
      <div className={"task" + isCompleted}>
        <div className="toggle-click" onClick={this.props.handleTaskToggle}>
          <div className={"radio" + isCompleted}>{checkmark}</div>
            <div className={"task-name" + isCompleted}>
              {this.props.taskName}
            </div>
        </div>
        <div className="remove-btn"
             onClick={()=> {this.props.handleTaskRemove(this.props.id)}}>
          <a className="remove-task-btn">✖</a>
        </div>
      </div>
    );
  }
}

export default Task;