import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/About.css';

function BookNotes() {
    const { id } = useParams();

    const filePath = `../../content/booknotes/${id}.html`;

  const [htmlContent, setHtmlContent] = React.useState('');

  React.useEffect(() => {
    const fetchHtml = async () => {
      try {
        const response = await fetch(filePath);
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    };

    fetchHtml();
  }, [filePath]);

  return (      
  <div>
    <div style={{ minHeight: '800px', padding: '10%' }}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
    </div>
  );
};

export default BookNotes;
