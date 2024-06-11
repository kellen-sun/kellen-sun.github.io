import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/About.css';
import Mando from '../assets/mando.PNG';

function SchoolNotes() {

  return (
    <div className="about" style={{ backgroundColor: '#f0d0d0' }}>
      <div className='aboutTop' style={{ backgroundImage: `url(${Mando})` }}></div>
      <div className='aboutBottom'>
        <h1>Notes I took relating to the material I learned in university.</h1>
        <h2>Term 1A:</h2>
        <Link to="/writings/schoolnotes/m145">MATH 145</Link>
        <br></br>
        <Link to="/writings/schoolnotes/m147">MATH 147</Link></div>
        <br></br>
    </div>
  )
}

export default SchoolNotes
