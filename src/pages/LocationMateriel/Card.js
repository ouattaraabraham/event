import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return (
  <div className='w-full px-2 py-2 flex flex-col items-center sm:w-1/2 lg:w-1/4 '>
  <Link to="/materiel/detail" >
  
    <div>
      <img className='w-full object-cover' src="../../assiette.jpg" alt="assiette" />
    </div>
    <div className='my-3'>
      <h3>Assite blabala</h3>
      <h1>2500 frca</h1>
    </div> 
  </Link>
    <button className='bg-yellow-400 rounded-lg p-2 '>
      Ajoute au panier
    </button>  
   </div> 
  )
}

export default Card