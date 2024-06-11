import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <a href="mailto:kellen.sun@uwaterloo.ca"><EmailIcon /></a> 
      <a href="https://github.com/kellen-sun" target="_blank"><GitHubIcon /></a> 
      <a href="https://www.linkedin.com/in/kellen-sun/" target='_blank'><LinkedInIcon /></a>
      <a href="https://x.com/kellen_sun" target='_blank'><XIcon /></a>
      </div>
      <p> &copy; 2024 Kellen Sun</p>
    </div>
  )
}

export default Footer
