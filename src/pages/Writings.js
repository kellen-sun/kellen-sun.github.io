import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/About.css';
import Mando from '../assets/mando.PNG';

function Writings() {

  return (
    <div className = "about">
      <div className='aboutTop' style={{ backgroundImage: `url(${Mando})` }}></div>
      <div className='aboutBottom'>
        <h1>Some writings...</h1>
        <Link to="/writings/schoolnotes">School Notes</Link><br></br>
        <Link to="/writings/booknotes">Book Notes</Link>
        <br></br>
        </div>
    </div>
  )
}

export default Writings
