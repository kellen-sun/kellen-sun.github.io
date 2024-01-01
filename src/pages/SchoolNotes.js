import React from 'react'
import { Link } from 'react-router-dom';

function SchoolNotes() {

  return (
    <div>
        <h1>Notes I took relating to the material I learned in my classes.</h1>
        <h2>Term 1A:</h2>
        <Link to="/writings/schoolnotes/m145">MATH 145</Link>
        <br></br>
        <Link to="/writings/schoolnotes/m147">MATH 147</Link>
    </div>
  )
}

export default SchoolNotes
