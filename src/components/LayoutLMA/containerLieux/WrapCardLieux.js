import React from 'react'
import CardLieux from './CardLieux'

function WrapCardLieux({data}) {
  return (
    <div>
         {
        data.map((item,index)=>(
        <CardLieux item={item} keys={index}/>
        ))
            
        }
    </div>
  )
}

export default WrapCardLieux