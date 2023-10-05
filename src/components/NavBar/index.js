import React  from 'react'
import { useState } from 'react'
import { AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";
import NavLinks from './NavLinks';
 export default function NavBar() {
    const [active,SetActive] = useState(false)
    const isActive=()=>{
       return  SetActive((e)=>!e)
    }
  return (
  <>
  {/* container */}
   {<nav className='w-full px-3 py-3   lg:py-6 bg-slate-500'>
   {/* wrap */}
   <div className='flex flex-row flex-wrap justify-around	'>
        <div className='flex w-full lg:max-w-max justify-between items-center'>
            <div className=' flex justify-between h-8	 w-full  rounded-full lg:max-w-max'>
                <div className="">
                  <img src="../.././LogoEvent.jpg" alt="logo" className=' h-full object-cover rounded-lg' />
                </div>
                <div className='lg:hidden '>
                  <button onClick={isActive}>
                  <AiOutlineMenu size={30} />
                  {/* <AiOutlineClose size={30} className={active?'hidden':null}/> */}
                  </button>
                </div>
            </div>
        </div>    
       {/* NavLink   */}
       <div className='hidden lg:block'>
        <NavLinks/>
       </div>
       {/* blockNaveLink MOBILE */}
       {active?
        <div className='overflow-auto absolute  lg:hidden h-screen bg-slate-100 w-full left-0 top-0 px-3 py-4'>
          <div className='flex justify-between'>
            <h1>MENU</h1>
            <button onClick={isActive}>
              <AiOutlineClose size={30} />
            </button>
          </div>
           <div >
            <NavLinks isActive={isActive}/>
           </div>
       </div>:null}
     </div>
     </nav>}
    </>
  )
}
