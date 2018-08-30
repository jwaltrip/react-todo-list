import React, { Component } from 'react';

const Stats = (props) => {
  // get length of state.tasks array
  const numTasks = props.tasks.length;
  // filter state.tasks array to include only completed tasks
  // get length
  const numCompletedTasks = props.tasks.filter(task => {
    return (task.isCompleted);
  }).length;

  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>{numTasks}</td>
        <td>{numCompletedTasks}</td>
      </tr>
      <tr>
        <td>Tasks</td>
        <td>Done</td>
      </tr>
      </tbody>
    </table>
  );
};

export default Stats;