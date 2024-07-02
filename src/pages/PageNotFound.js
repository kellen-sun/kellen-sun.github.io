import React from 'react'
import BannerImage from '../assets/orange.jpg';
import '../styles/PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='pageNotFound' style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1>Oh No! 404 Error!</h1>
      <p>This webpage wasn't found. Check your URL. If you're sure you're at the correct URL, please contact me.</p>
      <h2>Or you can just go back <Link to="/">home</Link>.</h2>
    </div>
  )
}

export default PageNotFound
