import React from 'react'
import { NavLink } from 'react-router-dom';
import {AiOutlineHeart } from "react-icons/ai";

const image="../../lieux.jpg"
function CardLieux({item}) {
  return (
    <div className=' w-full lg:w-1/2'>
    
     {/* wrpa-IMG */}
      <div>
      <NavLink to={`/lieux/${item.id}`}>
        <img className='w-full object-cover	 rounded-lg' src={image} alt="" />
     </NavLink>
      </div>
    
     {/* wrap-text */}
     <div className='px-4 py-5 flex flex-col gap-1'>
        <div className='flex  justify-between'>
        <h1 className='text-base'>salle-{item.id}</h1>
        <span> <AiOutlineHeart/></span>
       </div>
        <h2>Abidjan {item.commune}</h2>
        <h3>{item.n_personne} personnes</h3>
        <h3>A partie de {item.prix}</h3>
       </div>
    </div>

  )
}

export default CardLieux