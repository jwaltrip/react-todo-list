import React from 'react';
import PropTypes from 'prop-types';

const TimestampToggle = (props) => {
  return (
    <div>
      <div className="timestamp-toggle" onClick={props.handleToggleTimestamps}>
        <div className="timestamp-toggle-text">toggle timestamps</div>
        <i className="far fa-clock fa-lg timestamp-toggle-btn"> </i>
      </div>
    </div>
  );
};

TimestampToggle.propTypes = {
  handleToggleTimestamps: PropTypes.func.isRequired
};

export default TimestampToggle;