import React from 'react'
import { Projects } from '../helpers/ProjectList'; 
import Project from '../components/Project';
import BannerImage from '../assets/mando.PNG';
import '../styles/Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div className='portfolio' style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1 className='portfolioTitle'>My Portfolio</h1>
      <div className='portfolioList'>
        {Projects.map((project, key) => {
            return <Link to={`/portfolio/${project.name}`}>
            <Project key={key} image={project.image} name={project.name} short_description={project.short_description} />
          </Link>
          
        })}
      </div>
    </div>
  )
}

export default Portfolio
