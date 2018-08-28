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
              <td>21</td>
              <td>7</td>
            </tr>
            <tr>
              <td>Tasks</td>
              <td>Done</td>
            </tr>
            </tbody>
          </table>
          <div className="date">
            <span className="date-big">28</span>
            <span className="date-small"> Aug</span>
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
          {/* INDIVIDUAL TASK */}
          <div className="task">
            <div className="radio">
              <div className="radio-inactive"> </div>
            </div>
            <div className="task-name">
              Task 2
            </div>
            <div className="remove-btn">
              <a className="remove-task-btn">✖</a>
            </div>
          </div>
        </div>

        {/* FOOTER FORM */}
        <div className="footer-form">
          <input type="text" value="" />
          <input type="submit" value="ADD" />
        </div>
      </div>
    );
  }
}

export default App;
