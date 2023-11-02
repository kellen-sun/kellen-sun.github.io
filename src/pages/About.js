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
        <h3>Why do you do what you do? In other words, what keeps you going?</h3>
        <p>---</p>
        <h3>Philosophically, how do you view the world? What's it all about and for?</h3>
        <p>---</p>
        <h3>Outside of your responsibilities, what do you spend time on?</h3>
        <p>I like to read books, fiction and non-fiction alike, but I've been trying to read more non-fiction recently. I'm currently keeping book notes <a href="https://kellensun.notion.site/Meditations-4ba7ec87af254bc89893c82357b0db34?pvs=4" target='_blank'>here</a>. I'm working on moving those notes to this website. I also like to cube, I'm best at 2x2, but can also solve other cubes. I also like going to the gym (gotta get 'em gains). My favourite sport is soccer and was a fan of Argentina during FIFA 2022. I don't take lessons in piano or guitar, but I like playing them for fun. I'm always open to stepping out of my comfort zone and challenging myself.</p>
      </div>
    </div>
  )
}

export default About
