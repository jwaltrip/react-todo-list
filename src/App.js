import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";

// main To do list component
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
    ],

    error: ''
  };

  // this toggles the task completed or uncompleted
  onTaskToggle = (idx) => {
    // copy old state
    const newState = {...this.state};

    // console.log('onTaskToggle', newState.tasks[idx]);
    // toggle the state.isCompleted
    newState.tasks[idx].isCompleted = !newState.tasks[idx].isCompleted;

    // set state
    this.setState(newState);
  };

  // function to add a task to state.tasks arr
  onTaskAdd = (taskName) => {
    // copy old state
    const newState = {...this.state};

    // if taskname is not given or is empty, set state.error to show warning banner
    if (!taskName || taskName === '') {
      newState.error = 'please enter a task';
    } else {
      // push new task to state.tasks
      newState.tasks.push({
        id: Date.now().toString(),
        taskName: taskName,
        isCompleted: false
      });
      // reset error message in case there was a previous error
      newState.error = '';
    }

    // set state
    this.setState(newState);
  };

  // function that is called to remove a task from state.tasks arr
  onTaskRemove = (idx) => {
    // copy old state
    const newState = {...this.state};

    // remove the task from state.tasks
    newState.tasks.splice(idx, 1);

    // set state
    this.setState(newState);
  };

  // returns an array of Task components
  listTasks = () => {
    return this.state.tasks.map((task, idx) => {
      return (
        <Task
          handleTaskToggle={()=> {this.onTaskToggle(idx)}}
          handleTaskRemove={()=> {this.onTaskRemove(idx)}}
          taskName={task.taskName}
          isCompleted={task.isCompleted}
          id={task.id}
          key={task.id}
        />
      );
    })
  };

  render() {
    // check for error msg
    // if error, show warning banner
    let warning = '';
    if (this.state.error) {
      warning = <div className="warning"><strong>Warning: &nbsp;</strong>{this.state.error}</div>;
    }

    return (
      <div>
        {warning}
        <div className="App">
          <Header tasks={this.state.tasks}/>
          <div className="tasks">
            {this.listTasks()}
            <AddTaskForm handleTaskAdd={this.onTaskAdd}/>
          </div>
        </div>
      </div>
    );
  }
}

// TODO add propTypes

export default App;