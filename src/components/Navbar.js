import React from 'react';
import Pfp from '../assets/pfp.png';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Pfp}/>
      </div>
      <div className='rightSide'></div>
    </div>
  )
}

export default Navbar
