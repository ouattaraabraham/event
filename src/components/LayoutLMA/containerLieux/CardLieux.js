import React from 'react'
import { NavLink } from 'react-router-dom';
import {AiOutlineHeart } from "react-icons/ai";


function CardLieux({item}) {
  return (
    <div className='p-2  w-full lg:w-1/2'>
    <NavLink to={`/lieux/${item.id}`}>
    
        <img className='w-full object-cover	 rounded-lg' src="../../lieux.jpg" alt="" />
       <div className='flex p-1 justify-between'>
        <h1>salle-{item.id}</h1>
        <span> <AiOutlineHeart/></span>
       </div>
       <div className='p-1'>
        <div>Abidjan {item.commune}</div>
        <h3>{item.n_personne} personnes</h3>
        <h4>A partie de {item.prix}</h4>
       </div>
   
    </NavLink>
    </div>

  )
}

export default CardLieux