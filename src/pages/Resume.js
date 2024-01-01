import React from 'react'

function Resume() {
  const pdfUrl = "../../content/resume/Resume.pdf";

  return (
    <div>
      <iframe
        title="Resume"
        width="100%"
        height="800"
        src={pdfUrl}
      />
    </div>
  )
}

export default Resume
