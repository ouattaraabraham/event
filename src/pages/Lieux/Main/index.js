/* eslint-disable no-unused-vars */
import React from 'react'
import { useState , useEffect } from 'react';
import { useRoutes, useSearchParams} from 'react-router-dom';

import {data} from './DD/Data'
import { Link,NavLink,Redirect, useOutletContext } from "react-router-dom";

import FilterContainer from './Filter/index'
import Card from './Card'
//icons
import { SlBasketLoaded} from 'react-icons/sl';
import { GrFormNext,GrFormPrevious} from 'react-icons/gr';

import PaginationControls from './PaginationControls'

import { useSelector } from 'react-redux';

import store from '../../../store/lieuxFavoriSlice'

// console.log(data);
const people = [
  { id: 1, name: 'Cocody' },
  { id: 2, name: 'Bingerville' },
  { id: 3, name: 'Yopougon' },
  { id: 4, name: 'il boule' },
  { id: 5, name: 'Marcory' },
  { id: 6, name: 'Abobo' },
]

const  villes= [
  {
    id: 1,
    name: 'Abidjan',
  },
  {
    id: 2,
    name: 'Daloua',
  },
  {
    id: 2,
    name: 'Bouake',
  },
  {
    id: 2,
    name: 'Yamoussoukro',
  }
]
const Hebergement=[
  {
    id: 1,
    name: 'non',
  },
  {
    id: 1,
    name: 'oui',
  },

]

function Index({propsApp}) {
  const [list,SetList]=useState(data)
  const [show,setShow]=useState(false)
  let [searchParams, setSearchParams] = useSearchParams();

  // const [page ,setPage] =useState(1)
 const page=searchParams.get('page') ??'1'
  const items_page =searchParams.get('items_page') ??'10'
  const start=(Number(page)-1)*(Number(items_page))


  const end=start+ Number(items_page)

  //creat data map
  const sliceData=list.slice(start,end)


  const favorites= useSelector((state)=>state.favorites)

  //state updatdata
  
  //scroll up ? or down ? 
  const [scrollValue, setScrollValue]=useState(false)
  //state filter elements
  const [selectedVille,SetSelectedVille]=useState(null)
  const [selectedNInvite,SetSelectedNInvite]=useState(null)
  const [selectedTEvent,SetSelectedTEvent]=useState(null)
  const [selectedQuartier,SetSelectedQuartier]=useState(null)
  const [selectedBudget,SetSelectedBudget]=useState(null)
  const [selectedTLieux,SetSelectedTLieux]=useState(null)
  const [selectedTEnviron,SetSelectedTEnviron]=useState(null)
  const [selectedHebergement,SetSelectedHebergement]=useState(null)


//change pages


// const changePages=(change)=>{
//   if(change>=1 && change<=Math.ceil(list.length/10))
//   setPage(change)
//   console.log("page :"+page)
// }
const resetStateAllState=()=>{
  SetSelectedVille(null)
  SetSelectedTEvent(null)
  SetSelectedQuartier(null)
  SetSelectedTLieux(null)
  SetSelectedHebergement(null)
}
const handlerChangeVille=(event)=>{
  return  SetSelectedVille(event)
}
const handlerChangeTEvent=(event)=>{
  return  SetSelectedTEvent(event)
}
const handlerChangeQuartier=(event)=>{
  return  SetSelectedQuartier(event)
}
const handlerChangeBudget=(event)=>{
  return  SetSelectedBudget(event)
}
const handlerChangeTLieux=(event)=>{
  return  SetSelectedTLieux(event)
}
const handlerChangeTEnviron=(event)=>{
  return  SetSelectedTEnviron(event)
}
const handlerChangeHebergement=(event)=>{
  // console.log('Hebergement :'+selectedHebergement.name);
   return  SetSelectedHebergement(event)
}
const applyFilter=()=>{
  let updateData=data
   {/* villes */}
   if(selectedVille){
    updateData = updateData.filter((item)=>item.ville===selectedVille.name)
    // console.log((list.length?'list.length : '+list.length+' '+'nom ville: '+ selectedVille:'donne vide'));

   }
   {/* Nombre invité */}

   {/* TypeEvent */}
   if(selectedTEvent){
    updateData = updateData.filter((item)=>item.evenement===selectedTEvent.name)
    // console.log('selectedTEvent change');

   }

    {/* quartier */}
    if(selectedQuartier){
      updateData = updateData.filter((item)=>item.quartier===selectedQuartier.name)
      // console.log('selectedTEvent change');
  
     }

    {/* Budget */}

    {/* Critere */}
    {/* TypeLieux */}
    if(selectedTLieux){
      updateData = updateData.filter((item)=>item.Type_de_Lieux===selectedTLieux.name)
   }

     {/* Environnement */}

     {/* Hebergement */}
     if(selectedHebergement){
      updateData = updateData.filter((item)=>item.hebergement===selectedHebergement.name)
   }

    return SetList(updateData) 
}


// propsMain
  const propsMain={resetStateAllState,handlerChangeVille,selectedVille,selectedTEvent,handlerChangeTEvent,selectedQuartier,handlerChangeQuartier,selectedTLieux,handlerChangeTLieux,selectedHebergement,handlerChangeHebergement}
  useEffect(()=>{
    applyFilter()
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function (e) {

      // Get the new Value
      currentScrollPosition = window.pageYOffset;
      if(window.pageYOffset>762){
        setShow(true);
      }
      if(window.pageYOffset<762){
        setShow(false);
      }

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        // alert("scrol down")
        setScrollValue(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        // alert("scrol up")
        setScrollValue(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  },[selectedVille,selectedTEvent,selectedTLieux,selectedQuartier,selectedHebergement])
  
  
  return (
    <div className='relative w-full overflow-hidden  lg:flex lg:flex-row '>
     {/* header img de block  */}
        {/* left */}

      <div className='xl:w-3/4 '>
        <div>
          {/* FilterContainer for filter Lieux */}
          <div className='px-4 py-4 ' >
            <div className='flex justify-between py-2 gap-2 items-center'>
                <div>
                <FilterContainer style={style1}  propsApp={propsApp} propsMain={propsMain}/>
                </div>
                {/* panier */}
                <Link to='mes-favoris'>
                  <div  className="relative lg:top-3 flex justify-between items-center  gap-1   px-2 py-[.8px]   border-[1.5px]  rounded-lg border-rose-600 ">
                      <SlBasketLoaded size={25} className=' py-1 m-1'/>
                      <span>{favorites.length}</span>
                  </div>
                  </Link>

            </div>

            {/* scroll to fixed FilterContainer */}
            {
              
              show && !propsApp.active ?
              ( <div className={`w-full fixed z-10 flex gap-2 items-center  justify-between  bg-slate-300 py-3 px-4 left-0 ${!scrollValue?"top-0":"top-14"}`}>
                <FilterContainer style={style2} propsApp={propsApp} propsMain={propsMain}/>
                <Link to='mes-favoris'>
                <div  className=" relative lg:top-3 px-2 py-[.8px] border-[1.5px] rounded-lg border-rose-600  flex gap-1 justify-between items-center  w-max">
                    <SlBasketLoaded size={25} className='py-1 m-1 '/>
                    <span>{favorites.length}</span>
                </div>
                </Link>
            </div>):""
            }
            {/* lenght resultats map */}
            <div className='py-5'>
            <span>{list.length} résultats</span>
            </div>
          </div>
     
          {/* block  Lieux */}
       <div >
        <div className='relative  flex flex-col sm:px-20 sm:gap-y-8   md:grid md:px-2 md:grid-cols-2 md:gap-x-6 md:gap-y-5  lg:px-4 '>
          {
            sliceData.map((item,index)=>(
              <Card item={item} keys={index} handlerAddLieux={propsApp.handlerAddLieux}/>
            ))    
          }
          </div>
          {/* pagination */}
          
          <div>
            <PaginationControls list={list} displayPrev={start>0} displayNex={end<list.length}/>
          </div>
        </div> 
        </div>
      </div>
      {/* Reight */}
      <div className='hidden xl:block  xl:w-1/4	bg-red-700'>
        Reight
      </div>
    </div>
  )
}
const style1={
  divContainer:"",
  btn:"flex justify-between items-center gap-1 py-1 px-3   w-max border-[1.5px]  rounded-lg border-rose-600"
}
const style2={
  divContainer:"bg-slate-300  ",
  btn:"flex justify-between items-center gap-1  py-1 px-3 w-max border-[1.5px] rounded-lg border-rose-600"
}

export default Index