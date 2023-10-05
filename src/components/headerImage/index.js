import React from 'react'

function index({img,text}) {
  return (
   <div className='relative w-full	 h-screen '>
    <div className="absolute bg-cover bg-center h-full w-full" style={{backgroundImage: img}}  >
    </div>
    <div className='relative  text-center text-xl	 '>
        <h1>{text}</h1>
       </div>
  </div>
  )
}

export default index