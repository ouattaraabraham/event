import React from 'react'
import SelectIcons from "./SelectIcons"

function PlusCritere({dataExterieur}) {
  return (
    <div>
            { 
         dataExterieur? <div className='flex flex-wrap gap-7 py-2  mb-16'>    
  { dataExterieur.map(({size,icon,desc,style},index)=>(
     <SelectIcons style={style} size={size} icon={icon} desc={desc} index={index}/>
    ))} </div>:''
   }
 
        <div>
            type critereeeeeeeeee
        </div>
    </div>
  )
}

export default PlusCritere