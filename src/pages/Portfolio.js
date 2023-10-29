import React from 'react'
import { Projects } from '../helpers/ProjectList';
import Project from '../components/Project';
import '../styles/Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h1 className='portfolioTitle'>My Portfolio</h1>
      <div className='portfolioList'>
        {Projects.map((project, key) => {
            return <Project key={key} image={project.image} name={project.name} short_description={project.short_description}/>
        })}
      </div>
    </div>
  )
}

export default Portfolio
