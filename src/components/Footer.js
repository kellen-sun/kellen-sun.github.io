import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <EmailIcon /> <GitHubIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2023 Kellen Sun</p>
    </div>
  )
}

export default Footer
