import React from 'react';
import './Header.css'
import './Todo.css';
const Header =()=>{
  return(
    <div className="top-div-header">
      <h1>Prab@ TODO</h1>
      <h2>Welcome to My Todo...</h2>
      <div id="theme-icon" className="cursor">
      </div>
    </div>
  )
};

export default Header;
