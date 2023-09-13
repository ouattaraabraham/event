import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/index'
import Footer from '../Footer/index'
//import './index.css'

export default function Layout() {
  return (
    <div className='h-screen flex flex-col'>
     <div className=''>
     <NavBar/>
     </div>
     <div className="grow">
     
      <Outlet/>
     </div>
     <div className="bg-neutral-800  ">
     <Footer/>
     </div>

    </div>
  )
}
