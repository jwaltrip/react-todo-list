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

    // newState.tasks.map((task, index) => {
    //   if (idx === index) {
    //     const isTaskCompleted = task.isCompleted;
    //     if (isTaskCompleted) {
    //       return task.isCompleted = false;
    //     } else {
    //       return task.isCompleted = true;
    //     }
    //   }
    // });

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

  render() {
    return (
      <div className="App">
        <Header tasks={this.state.tasks}/>
        <div className="tasks">
          {this.listTasks()}
          <AddTaskForm/>
        </div>
      </div>
    );
  }
}

export default App;