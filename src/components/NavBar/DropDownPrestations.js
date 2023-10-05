import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";
import { useState } from 'react';

//


//
function DropdownEvent({isActive}) {
    const [open,SetOpen] =useState(false)
    
    const isOpen =()=>SetOpen(e=>!e)
 const event=[
    {name:"LIEUX",to:"/trouver-lieux"},
    {name:"TRAITEUR",to:"traiteurs"},
    {name:"STAFFS",to:"soirée-staffs"},
    {name:"DECORATION",to:"decoration"},
    {name:"ANIMATION",to:"animations"},
    {name:"MATERIELS",to:"location-materiels"},

 ]
  return (
    <div>
     <div onClick={isOpen}   className='flex lg:px-3 min-w-max cursor-pointer items-center justify-between gap-6  peer'>
      <h1  >EVENEMENT</h1>
      {open?<AiFillCaretDown/>:<AiFillCaretUp/>}
     </div>
        {/* DropDOWN */}
        <div className="lg:bg-slate-500 px-6 lg:px-3 lg:absolute  w-60  pt-4 lg:hidden  peer-hover:block hover:block ">
        <ul className=''>
            {
                event.map(even=>(
                    <li onClick={isActive}  className='pt-3 min-w-max lg:pt-7 hover:text-red-800 '>
                        <NavLink className="max-w-max"to={even.to}>
                        {even.name}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
        </div>
    </div>
  )
}

export default DropdownEvent