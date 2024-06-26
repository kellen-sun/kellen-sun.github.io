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
      
      <div className='leftSide'>
        <Link to='/'> <img src={Pfp} alt=""/> </Link>
      </div>
      <div className='rightSide' id={openLinks ? "open" : "close"}>
        {/* <Link to="/resume">Resume</Link> */}
        <Link to="/portfolio">Projects</Link>
        <Link to="/writings">Writings</Link>
        {/* <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link>*/}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        
      </div>
    </div>
  )
}

export default Navbar
