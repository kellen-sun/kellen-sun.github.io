import React from 'react'
import BannerImage from '../assets/orange.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact' style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1>Contact</h1>
      <h3>Feel free to reach out to me via email anytime: kellen.sun@uwaterloo.ca</h3>
      <h3>If you feel more comfortable using Discord, my handle is: @kellensun</h3>
    </div>
  )
}

export default Contact
