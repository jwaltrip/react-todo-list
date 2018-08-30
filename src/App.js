import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* HEADER + STATS*/}
        <div className="header">
          <table className="stats">
            <tbody>
            <tr>
              <td>9</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Tasks</td>
              <td>Done</td>
            </tr>
            </tbody>
          </table>
          <div className="date">
            <span className="date-big">30</span>
            <span className="date-small"> Aug</span>
            <span className="time"> @ 12:17 pm</span>
          </div>
        </div>
        {/* TASKS CONTAINER */}
        <div className="tasks">
          {/* INDIVIDUAL TASK */}
          <div className="task">
            <div className="radio">
              <div className="radio-inactive"> </div>
            </div>
            <div className="task-name">
              Task 1
            </div>
            <div className="remove-btn">
              <a className="remove-task-btn">✖</a>
            </div>
          </div>
          {/* COMPLETED TASK */}
          <div className="task completed">
            <div className="radio completed"> </div>
            <div className="task-name completed">
              Completed Task
            </div>
            <div className="remove-btn">
              <a className="remove-task-btn">✖</a>
            </div>
          </div>
        </div>

        {/* FOOTER FORM */}
        <div className="footer-form">
          <input type="text" value="" />
          <input type="submit" value="ADD TASK" />
        </div>
      </div>
    );
  }
}

export default App;
