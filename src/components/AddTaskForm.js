import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';

// Component that holds an autogrowing textarea and submit form to add a task to task list
class AddTaskForm extends Component {
  // rows and lineHeight values are used for autogrowing textarea field
  state = {
    inputValue: '',
    rows: 1,
    lineHeight: 18
  };

  // handles textareas text change
  handleChange = (e) => {
    // calculate proper row count recalc when deleting lines
    const oldRows = e.target.rows;
    e.target.rows = 1;

    const newRows = Math.floor(e.target.scrollHeight/this.state.lineHeight) - 1;

    // i'm not 100% sure how this works, pulled this from jsfiddle
    if (newRows === oldRows) {
      e.target.rows = newRows;
    }

    // set state
    this.setState({
      inputValue: e.target.value,
      rows: newRows
    });
  };

  // handle the submit button and add task to parent state.tasks arr
  // resets textareas input value and row nums
  onSubmitTask = (e) => {
    e.preventDefault();

    this.props.handleTaskAdd(this.state.inputValue);
    this.setState({ inputValue: '', rows: 1 });
  };

  render() {
    return (
      <div className="footer-form">
        <form id="task-form" onSubmit={this.onSubmitTask}>
          <TextArea
            form="task-form"
            value={this.state.inputValue}
            rows={this.state.rows}
            lineHeight={this.state.lineHeight}
            onChange={this.handleChange}
          />
          <input type="submit"
                 value="ADD TASK"
          />
        </form>
      </div>
    );
  }
}

AddTaskForm.propTypes = {
  handleTaskAdd: PropTypes.func.isRequired
};

export default AddTaskForm;