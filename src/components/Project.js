import React from 'react'

function Project({ image, name, short_description}) {
  return (
    <div className='project'>
      <div style={{ backgroundImage: `url(${image})` }}>  </div>
      <h1> {name} </h1>
      <p> {short_description} </p>
    </div>
  )
}

export default Project
