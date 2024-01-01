import React from 'react';
import { useParams } from 'react-router-dom';

function ClassNotes() {
  const { id } = useParams();
  const pdfUrl = "../../content/school_notes/"+id+".pdf";
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

export default ClassNotes
