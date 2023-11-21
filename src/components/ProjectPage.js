import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import '../styles/ProjectPage.css';
import { Projects } from '../helpers/ProjectList';

function ProjectPage() {
  const { id } = useParams();
  const project = Projects.find(project => project.name === id);
  const [longDescription, setLongDescription] = useState('');

  useEffect(() => {
    if (project) {
      const { source } = project;
      fetch(source)
        .then((response) => response.text())
        .then((data) => {
          setLongDescription(data);
        })
        .catch((error) => console.error('Error loading text content:', error));
    } }, [project]);

    if (!project) {
      return <div>Project not found</div>;
    }
    var { name, short_description, image } = project;
  return (
    <div className='projectPage'>
      <div className='projectPageTop' style={{ backgroundImage: `url(${image})` }}></div>
      <div className='projectPageBottom'>
        <h1>{ name }: &nbsp;{ short_description }</h1>
        <ReactMarkdown children={ longDescription } />
      </div>
    </div>
  )
}

export default ProjectPage
