import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Individual Task component
class Task extends Component {
  render() {
    // conditional to check if task is completed
    // if completed, add 'completed' class tags
    let isCompleted = '';
    if (this.props.isCompleted) {
      isCompleted = ' completed';
    }

    // add checkmark to task if completed
    // using fontawesome for checkmark icon
    let checkmark = ' ';
    if (this.props.isCompleted) {
      checkmark = <i className="fas fa-check checkmark"> </i>;
    }

    // check to see if state.showTimestamps toggled on
    let hidden = '';
    if (!this.props.showTimestamps) {
      hidden = ' hidden';
    }

    return (
      <div>
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
        <div className={"timestamp" + hidden}><strong>added: &nbsp;</strong>17 min ago</div>
      </div>
    );
  }
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  handleTaskToggle: PropTypes.func.isRequired,
  handleTaskRemove: PropTypes.func.isRequired
};

export default Task;