import React from 'react'
import {AiOutlineHeart } from "react-icons/ai";


function CardLieux({item}) {
  return (
    <div>
    <div className='p-2'>
    <div className=''>
        <img className='w-full rounded-lg' src="../../lieux.jpg" alt="" />
       </div>
       <div className='flex p-1 justify-between'>
        <h1>salle-{item.id}</h1>
        <span> <AiOutlineHeart/></span>
       </div>
       <div className='p-1'>
        <div>Abidjan {item.commune}</div>
        <h3>{item.n_personne} personnes</h3>
        <h4>A partie de {item.prix}</h4>
       </div>
    </div>
  </div>
  )
}

export default CardLieux