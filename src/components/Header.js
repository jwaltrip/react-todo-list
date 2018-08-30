import React, { Component } from 'react';
import Stats from "./Stats";

class Header extends Component {
  state = {
    dayOfMonth: "",
    month: "",
    currentTime: ""
  };

  pollInterval = null;

  componentDidMount() {
    // get current DateTime every 1 seconds
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.getCurrentDateTime, 1000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  getCurrentDateTime = () => {
    // make a copy of current state using spread operator
    const newState = {...this.state};
    // arr of months abrv
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // get current datetime in seconds
    const today = new Date();
    // get dayOfMonth, month, and time
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

export default Header;