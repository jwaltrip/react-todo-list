import React, { Component } from 'react';
import Stats from "./Stats";

// Header component
// this also includes the Stats component that keeps track of finished/unfinshed tasks
class Header extends Component {
  state = {
    dayOfMonth: "",
    month: "",
    currentTime: ""
  };

  // this is to be used on component mount/unmount to set interval to get current datetime
  pollInterval = null;

  // lifecycle method runs when component is mounted
  // initializes resources, specifically sets an interval to get current datetime
  componentDidMount() {
    // get current DateTime every 1 seconds
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.getCurrentDateTime, 1000);
    }
  }

  // lifecycle method runs when component is removed from DOM
  // clears the interval set to get current datetime
  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  // function to get current datetime, format it properly and set state
  getCurrentDateTime = () => {
    // make a copy of current state using spread operator
    const newState = {...this.state};
    // arr of months abrv
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // get current datetime in seconds
    const today = new Date();
    // get dayOfMonth, month, and time (hours, mins)
    const currDayOfMonth = today.getDate();
    const currMonth = months[today.getMonth()];
    let hour = today.getHours();
    let min = today.getMinutes();

    // convert time to 12 hour format w am/pm
    let amPm = 'am';
    if (hour >= 12) {
      if (hour > 12) hour -= 12;
      amPm = 'pm';
    }
    // if min < 10, pad beginning w another 0
    if (min < 10) min = '0' + min.toString();

    // concat current time + am/pm
    const currTime = hour + ':' + min + ' ' + amPm;

    // set new time in state obj
    newState.dayOfMonth = currDayOfMonth;
    newState.month = currMonth;
    newState.currentTime = currTime;

    // set state 
    this.setState(newState);
  };

  render() {
    return (
      <div className="header">
        <Stats tasks={this.props.tasks}/>
        <div className="date">
          <span className="date-big">{this.state.dayOfMonth}</span>
          <span className="date-small"> {this.state.month}</span>
          <span className="time"> @ {this.state.currentTime}</span>
        </div>
      </div>
    );
  }
}

// TODO set propTypes

export default Header;