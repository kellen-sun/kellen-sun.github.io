import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundColor: '#f0d0d0'}}>
        <div className='headerContainer'>
          <h1>Hi, I'm Kellen</h1>
          <p>I'm a computer science student at the University of Waterloo with a passion for machine learning, math and psychology. I enjoy working on meaningful and challenging <a href='/portfolio'>projects</a>. I'm currently trying to compile a list of my <a href='/writings'>writings</a>. In my spare time, I like to read, draw, play guitar and work out. </p>
          <p>Feel free to reach out to me via email anytime: <a href="mailto:kellen.sun@uwaterloo.ca">kellen.sun@uwaterloo.ca</a> or follow me on <a href="https://x.com/kellen_sun">X</a> (formerly Twitter).</p>
          <p>If you are a recruiter, you might be interested in my <Link to="/resume">resume</Link>.</p>
        </div>
    </div>
  )
}

export default Home
