import React from 'react';
import Mando from '../assets/mando.PNG';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${Mando})` }}></div>
      <div className='aboutBottom'>
        <h1>Kellen Sun</h1>
        <p>Lorem ipsum</p>
      </div>
    </div>
  )
}

export default About
