import React from 'react';
import Mando from '../assets/mando.PNG';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${Mando})` }}></div>
      <div className='aboutBottom'>
        <h1>Kellen Sun</h1>
        <h3>Who are you?</h3>
        <p>I'm a first-year computer science student at the University of Waterloo. I'm expecting to graduate in April of 2028 and in the meantime I hope to learn as much as possible about anything and everything.</p>
        <h3>How did you make this website?</h3>
        <p>I made this website using React.js and hosted it with GitHub pages. Check out the source code <a href="https://github.com/kellen-sun/kellen-sun.github.io" target='_blank'>here</a>. I hope to give credit and acknowledgement where its due, so the README.md file of this repository contains all the main resources I've used.</p>
      </div>
    </div>
  )
}

export default About
