import React from 'react'
import { AiOutlineHome } from "react-icons/ai"

import PlusFilter from "./PlusFilter"
import PlusCritere from "./PlusCritere"
import SelectIcons from './SelectIcons'



    const childZ=()=> { 
      const NIcon=['1','2','3','4']
      const dataExterieur=[
        {desc:"Jardin" ,icon:<AiOutlineHome size={20}/>, style:'relative w-12 h-12  rounded-full border-2 border-slate-800 mb-10' },
        {desc:"picine" ,icon:<AiOutlineHome size={20}/> ,style:'relative w-12 h-12  rounded-full border-2 border-slate-800' },
        {desc:"terasse" ,icon:<AiOutlineHome size={20}/>,style:'relative w-12 h-12  rounded-full border-2 border-slate-800' },
      ]
      return(
    <div className='bg-slate-200'> 
    {/* selecte icons */}
    <div className='relative flex flex-wrap bg-slate-300'>
     {
      dataExterieur.map(({icon,desc,style},index)=>(
          <SelectIcons style={style} icon={icon} desc={desc} index={index}/>
         ))
     }
    </div>
      {/* plus de filter */}
      <div className='relative bg-slate-500'>
        <PlusFilter />
      </div>
      {/* plus de critere */}
      
      <div className='flex flex-wrap gap-7 p-4 mb-16 bg-slate-100'>
        <PlusCritere dataExterieur={dataExterieur}/>
      </div>
      
   
   </div>)
    }

    


export default childZ