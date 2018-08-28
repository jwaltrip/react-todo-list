import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
