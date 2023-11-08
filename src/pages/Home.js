import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/orange.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>
          <h1>Kellen Sun</h1>
          <p>Welcome to my website!</p>
        </div>
    </div>
  )
}

export default Home
