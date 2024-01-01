import React from 'react'
import { Link } from 'react-router-dom';

function Writings() {

  return (
    <div>
        <h1>Some writings...</h1>
        <Link to="/writings/schoolnotes">School Notes</Link><br></br>
        <Link to="/writings/booknotes">Book Notes</Link>
    </div>
  )
}

export default Writings
