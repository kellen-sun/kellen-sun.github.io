import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <Link to="/contact"><EmailIcon /></Link> <a href="https://github.com/kellen-sun" target="_blank"><GitHubIcon /></a> <a href="https://www.linkedin.com/in/kellen-sun/" target='_blank'><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 Kellen Sun</p>
    </div>
  )
}

export default Footer
