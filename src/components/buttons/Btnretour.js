import React from 'react'
import { Link } from 'react-router-dom'
function Btnretour() {
  return (
    <div className='py-2'>
    <Link relative='path' to="..">
        <button className='px-1 py2 rounded-lg bg-red-300'>
            retour
        </button>
    </Link> 
    </div>
  )
}

export default Btnretour