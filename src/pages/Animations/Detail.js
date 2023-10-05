import React from 'react'
import Btnretour from '../../components/buttons/Btnretour'
function Detail() {
  return (
    <div className='pt-20'>
    {/* wrap */}
      <div>
         <Btnretour/>  
        <div className='w-80'>
        <img className='w-full' src="../../dj.webp" alt="detail animation" />
        </div>
        <h1>detail animation detail animation detail animation</h1>
      </div>
    </div>
  )
}

export default Detail