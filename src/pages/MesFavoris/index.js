import React from 'react'
import { useOutletContext } from "react-router-dom";
import Card from '../Lieux/Main/Card'

import { useSelector } from 'react-redux';

function Index() {
  const {favoris}=useOutletContext()

  // console.count('store-init') 
  // console.log("favorissssss :"+favoris);

  const data= useSelector(state=>state.favorites)

  console.log("data :"+data);

  return (
    <div className='relative pt-14 max-w-[1000px] mx-auto'>
      <h1>retrouver tout vos favoris ici</h1>
      <div className='relative  flex flex-col sm:px-20 sm:gap-y-8   md:grid md:px-2 md:grid-cols-2 md:gap-x-6 md:gap-y-5   '>
      {
            data.map((item,index)=>(
              <Card item={item} keys={index} handlerAddLieux={data.handlerAddLieux}/>
            ))    
          }
       </div>
    </div>
  )
}

export default Index