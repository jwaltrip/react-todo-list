import React, { Component } from 'react';
import Stats from "./Stats";

const Header = (props) => {
  return (
    <div className="header">
      <Stats/>
      <div className="date">
        <span className="date-big">30</span>
        <span className="date-small"> Aug</span>
        <span className="time"> @ 12:17 pm</span>
      </div>
    </div>
  );
};

export default Header;