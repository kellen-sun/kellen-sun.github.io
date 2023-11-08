import React, { useEffect, useState } from 'react';
import Mando from '../assets/mando.PNG';
import '../styles/About.css';
import ReactMarkdown from 'react-markdown';

function About() {
  const [longDescription, setLongDescription] = useState('');
  const source = "../../markdown/About.md";
  useEffect(() => {
    fetch(source)
      .then((response) => response.text())
      .then((data) => {
        setLongDescription(data);
      })
      .catch((error) => console.error('Error loading text content:', error));
    }, [source]);

  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${Mando})` }}></div>
      <div className='aboutBottom'>
        <ReactMarkdown children={ longDescription } />
      </div>
    </div>
  )
}

export default About
