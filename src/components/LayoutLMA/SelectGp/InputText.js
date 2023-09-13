import React from 'react'

function InputText({text}) {
  return (
        <div>
     <h2>{text}</h2>
      <div className='flex gap-10'>
        <label>
           min
           <input className='w-full border-2 p-1' type="text" />
        </label>
        <label >
           max
           <input className='w-full border-2 p-1' type="text" />
        </label>
      </div>
    </div>
  )
}

export default InputText