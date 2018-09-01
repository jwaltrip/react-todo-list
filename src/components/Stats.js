import React from 'react';
import PropTypes from 'prop-types';

// Stats component
// is displayed in Header component
// displays the number of completed/uncompleted tasks
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

Stats.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    taskName: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  })).isRequired
};

export default Stats;