import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/index'
import Footer from '../Footer/index'
import {data} from '../DD/Data'
// import favoriSlice from '../../store/lieuxFavoriSlice'

import { Provider } from 'react-redux'
import store from '../../store/store'
//import Slider

// console.log("store :"+store.favoriSlice);
export default function Layout() {
    console.count('store-init') 

  //state basket 

  const [favoris , setFavoris] = useState([])
  // console.log("favoriss :"+favoris.length);

  const handlerAddLieux=(items)=>{
    const lieux= favoris.find(item=>item===items)

  if(lieux){
    setFavoris(favoris.filter(item=>item!==items))
  }else{
    setFavoris([...favoris,items])
  }

  }

  

  // active menu mobile
  const [active,SetActive] = useState(false)
  const isActive=()=>{
     return  SetActive((e)=>!e)
  }
  // active filter
  const [focus,SetFocus] =useState(true)

  const isOpen =(e)=>{
    SetFocus(prev=>!prev)
    }

    //props
   const propsApp={focus,isOpen,active,handlerAddLieux,favoris}
   return (
      <div className='h-screen flex flex-col'>
      <div className='fixed w-full z-10'>
      <NavBar active={active} isActive={isActive}/>
      </div>
      <div className="grow ">
      <Outlet context={{propsApp,data,favoris}} />
      </div>
      <div className="bg-neutral-800 z-30">
      <Footer/>
      </div>
      </div>
  )
}
