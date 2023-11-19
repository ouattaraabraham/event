import React from 'react'
import { Link } from 'react-router-dom'
const IMG="../../../are-de-table.jpg"
function Card({description ,link,image}) {
  return (
    <div className='w-full rounded-lg px-2 py-2 flex flex-col items-center '>
    <Link to={link} >
    <div>
      <img className='w-full object-cover' src={IMG} alt="assiette" />
    </div> 
     <h1 className='w-full text-center bg-white px-1 py-2 rounded-lg'>
     {description}
     </h1>
  </Link> 
   </div> 
  )
}

export default Card