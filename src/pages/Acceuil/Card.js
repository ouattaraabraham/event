import React from 'react'

function Card({prestation}) {
  return (
    <div className='relative flex items-center '>
          <img className='w-full' src="../../accesoir-table.jpg" width={400} height={200} alt="imgfete" />
          <div className='absolute w-full  flex flex-col gap-5 text-center text-white'>
             <div className='flex z-20 items-center justify-center'>
              <h1 className='absolute font-semibold	text-2xl '>{prestation}</h1>
              <div className=' w-full h-fit z-10 bg-slate-100 opacity-50'>.</div>
             </div>
             {/* button */}
             <div >
              <button className='bg-yellow-500 rounded-2xl px-2'>
                decouvrir
              </button>
             </div>
          </div>
         </div>
  )
}

export default Card