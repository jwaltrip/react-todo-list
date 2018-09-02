import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Individual Task component
class Task extends Component {
  state = {
    timeDiff: ''
  };

  // this is to be used on component mount/unmount to set interval to get current datetime
  pollInterval = null;

  // lifecycle method runs when component is mounted
  // initializes resources, specifically sets an interval to get time diff between now and time task was added
  componentDidMount() {
    // get time diff every 1 seconds
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.calcTimeDiff, 1000);
    }
  }

  // lifecycle method runs when component is removed from DOM
  // clears the interval set to time diff
  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  // calculates time difference between time task was added and now
  // uses Moment.js
  calcTimeDiff = () => {
    // convert timestamp in ms to Moment.js obj
    const timestamp = moment(this.props.timestamp);

    // copy old state
    const newState = {...this.state};
    // calc time diff
    newState.timeDiff = timestamp.fromNow();
    // set state
    this.setState(newState);
  };

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
    // if state.showTimestamps == false, then add the hidden class to timestamp div
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
        <div className={"timestamp" + hidden}><strong>added: &nbsp;</strong>{this.state.timeDiff}</div>
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