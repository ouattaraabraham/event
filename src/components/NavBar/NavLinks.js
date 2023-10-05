import React from 'react'
import { NavLink } from 'react-router-dom'
import DropDownPrestations from './DropDownPrestations'
import DropdownEvent from './DropdownEvent'

function NavLinks({isActive}) {
  return (
  <ul className=' bg-slate-100 lg:bg-slate-500 flex flex-col gap-12 lg:flex-row  lg:gap-12  '>  
   <li className='relative'>
   <NavLink onClick={isActive} to="/"  className="relative lg:px-1 after:transition duration-300 after:ease-in-out  after:absolute after:content-[''] after:w-0 after:bg-orange-600	 after:h-1 after:top-7 after:left-0 hover:after:w-full active:after:w-full ">
        ACCEUIL
    </NavLink>
   </li>
   <li>
    <DropdownEvent isActive={isActive}/>
   </li>
   <DropDownPrestations isActive={isActive}/>
   <li >
   <NavLink onClick={isActive} to="contact" className="relative lg:px-1 after:transition after:duration-0 after:hover:duration-150  after:absolute after:content-[''] after:w-0 after:bg-orange-600	 after:h-1 after:top-7 after:left-0 hover:after:w-full " >
        LOUER MON BIEN
    </NavLink>
   </li>
   <li className='relative '>
   <NavLink onClick={isActive} to="contact"  className="relative lg:px-1 after:transition after:duration-0 after:hover:duration-150  after:absolute after:content-[''] after:w-0 after:bg-orange-600	 after:h-1 after:top-7 after:left-0 hover:after:w-full ">
        CONTACTER
    </NavLink>
   </li>
  </ul>
  )
}

export default NavLinks