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
          <p>You may want to check out some <a href='/portfolio'>projects</a> or <a href='/writings'>writings</a></p>
        </div>
    </div>
  )
}

export default Home
