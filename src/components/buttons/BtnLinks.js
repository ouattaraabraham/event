import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineRight} from "react-icons/ai"

function BtnLinks({links}) {
  return (
    <div className='text-sm py-2'>
    <ol className='flex items-baseline gap-1'>
    {
      links.map((item,index)=>
        <>
        {item.icone?
         <li >
           <Link to={item.to}>
            {item.name}
           </Link>
         </li>:<li >
            {item.name}
          </li>}
          
          {item.icone?<AiOutlineRight size={10}/>:''}  
        </>
      )
    }
    </ol>
  </div>
  )
}

export default BtnLinks