import React from 'react'

function Resume() {
  const pdfUrl = "../../content/resume/Resume.pdf";

  return (
    <div style={{ backgroundColor: '#d3d3d3', display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
 }}>
      {/* <p align="center"> */}
      <iframe
        title="Resume"
        width="80%"
        height="800"
        src={pdfUrl}
      />
      {/* </p> */}
    </div>
  )
}

export default Resume
