import React, { useState } from 'react';
import Pfp from '../assets/pfp.png';
import { Link } from 'react-router-dom';
import ReorderIcon from "@material-ui/icons/Reorder";
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
      
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <Link to='/'> <img src={Pfp}/> </Link>
        <div className='hiddenLinks'>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        
      </div>
    </div>
  )
}

export default Navbar
