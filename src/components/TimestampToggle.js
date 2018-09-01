import React from 'react';

const TimestampToggle = (props) => {
  return (
    <div className="timestamp-toggle">
      <i className="far fa-clock fa-lg timestamp-toggle-btn"> </i>
      <div className="timestamp-toggle-text">toggle timestamps</div>
    </div>
  );
};

export default TimestampToggle;