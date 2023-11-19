import React from 'react'
import { Link } from 'react-router-dom'

const image="../../../assiette.jpg"

function Card({links,description}) {
  return (
    <Link to={links}>
    <div>
      <img src={image} alt="image articles location" />
      <p className='text-center py-3 text-lg font-semibold'>{description}</p>
    </div>
    </Link>
  )
}

export default Card