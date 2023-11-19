import React from 'react'

function index({img,text}) {
  return (
   <div className='relative w-full py-[70px] bg-cover bg-center bg-black	' style={{backgroundImage: img}} >
    {/* <div className="absolute bg-cover bg-center h-full w-full" style={{backgroundImage: img}}  >
    </div> */}
    <div className='relative  text-center text-2xl text-white font-semibold		'>
        <h1>{text}</h1>
       </div>
  </div>
  )
}

export default index