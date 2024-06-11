import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/orange.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>
          <h1>Kellen Sun</h1>
          <h2>Welcome to my website!</h2>
          <p>I'm a computer science student at the University of Waterloo with a passion for machine learning, math and psychology. I enjoy working on meaningful and challenging <a href='/portfolio'>projects</a>. I'm trying to compiler a list of my <a href='/writings'>writings</a>. In my spare time, I enjoy reading, drawing, playing guitar and working out. </p>
          <p>Feel free to reach out to me via email anytime: <a href="mailto:kellen.sun@uwaterloo.ca">kellen.sun@uwaterloo.ca</a> or follow me on <a href="https://x.com/kellen_sun">X</a> (formerly Twitter).</p>
          <p>If you are a recruiter, you might be interested in my <Link to="/resume">resume</Link>.</p>
        </div>
    </div>
  )
}

export default Home
