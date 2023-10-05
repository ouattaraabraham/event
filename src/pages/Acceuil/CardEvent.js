import React from 'react'
import { Link } from 'react-router-dom'

function CardEvent({typeEvent}) {
  return (
    <div>
          {/* <div className='relative'>
          <Link>
            <img className='w-full opacity-' src="../../entreprise.jpg" alt="" />
            <h1 className='absolute text-white top-0 w-full h-full flex justify-center items-center'>ENTREPRISE</h1>
          </Link>
          </div> */}
          <div className='relative w-full'>
         
            <img className='relative w-full z-20' src="../../entreprise.jpg" alt="entreprise" />
      
            <div className='absolute z-10 bottom-4 left-3 border-2 border-yellow-500 w-full h-full '>.</div>
          </div>
        <h1 className='pt-4 pb-2 text-black'>{typeEvent}</h1>
          <div className='py-3'>
          <Link>
          <button className='border-2 rounded-2xl px-2'>decouvrir</button>
          </Link>
          </div>
     </div>
  )
}

export default CardEvent