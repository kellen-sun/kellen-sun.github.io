import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/About.css';
import BannerImage from '../assets/orange.jpg';

function Writings() {

  return (
    <div className = "about" style={{ backgroundColor: '#f0d0d0' }}>
      <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className='aboutBottom'>
        <h1>Some writings...</h1>
        <p>I think, therefore I am. But I don't really think until I write thoughts out. Here are lists of thoughts I've had (whatever that means) over the years that I've collected. Some are academic notes and some are notes from books I've read. I hope to expand upon these and form a sort of blog.</p>
        <Link to="/writings/schoolnotes">School Notes</Link><br></br>
        <Link to="/writings/booknotes">Book Notes</Link>
        <br></br>
        </div>
    </div>
  )
}

export default Writings
