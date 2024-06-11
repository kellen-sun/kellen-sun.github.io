import React from 'react';
import { useParams } from 'react-router-dom';

function ClassNotes() {
  const { id } = useParams();
  const pdfUrl = "../../content/school_notes/"+id+".pdf";
  return (
    <div style={{ backgroundColor: '#d3d3d3', display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
 }}>
      {/* <p align="center"> */}
      <iframe
        title="School Notes"
        width="80%"
        height="800"
        src={pdfUrl}
      />
      {/* </p> */}
    </div>
  )
}

export default ClassNotes
