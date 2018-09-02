import React from 'react';

const TimestampToggle = (props) => {
  return (
    <div>
      <div className="timestamp-toggle">
        <div className="timestamp-toggle-text">toggle timestamps</div>
        <i className="far fa-clock fa-lg timestamp-toggle-btn"> </i>
      </div>
    </div>
  );
};

export default TimestampToggle;