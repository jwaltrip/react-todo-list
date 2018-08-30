import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        taskName: "Task 1",
        isCompleted: false
      },
      {
        id: 1,
        taskName: "Completed Task",
        isCompleted: true
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="tasks">
          <Task/>
          <AddTaskForm/>
        </div>
      </div>
    );
  }
}

export default App;