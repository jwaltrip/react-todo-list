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

  onTaskToggle = (idx) => {
    const newState = {...this.state};

    console.log('onTaskToggle', newState.tasks[idx]);
    newState.tasks[idx].isCompleted = !newState.tasks[idx].isCompleted;

    this.setState(newState);
  };

  listTasks = () => {
    return this.state.tasks.map((task, idx) => {
      return (
        <Task
          handleTaskToggle={()=> {this.onTaskToggle(idx)}}
          taskName={task.taskName}
          isCompleted={task.isCompleted}
          id={task.id}
          key={task.id}
        />
      );
    })
  };

  onTaskAdd = (taskName) => {
    const newState = {...this.state};

    newState.tasks.push({
      id: new Date().toString(),
      taskName: taskName,
      isCompleted: false
    });

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Header tasks={this.state.tasks}/>
        <div className="tasks">
          {this.listTasks()}
          <AddTaskForm handleTaskAdd={this.onTaskAdd}/>
        </div>
      </div>
    );
  }
}

export default App;