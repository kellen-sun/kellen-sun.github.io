import React from 'react'

function Resume() {
  const pdfUrl = "../../Resume.pdf";

  return (
    <div>
        <h1>My Resume:</h1>
      <iframe
        title="PDF Viewer"
        width="100%"
        height="800"
        src={pdfUrl}
      />
    </div>
  )
}

export default Resume
