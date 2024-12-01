import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <button className='top-button1'>Process Owner HOD</button>
      <button className='top-button2'>Admin</button>
      <button className='top-button3'>Logout</button>
    </div>
  );
}

export default TopBar;
