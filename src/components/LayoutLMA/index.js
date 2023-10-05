/* eslint-disable no-unused-vars */
import React from 'react'
import { useState , useEffect } from 'react';
import './filter.css'
import {data} from '../DD/Data'
import FilterContainer from './FilterContainer'
import CardLieux from './containerLieux/CardLieux'

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
function Index() {
  //state updatdata
  const [list,SetList]=useState(data)
  //state filter elements
  const [selectedVille,SetSelectedVille]=useState(null)
  const [selectedNInvite,SetSelectedNInvite]=useState(null)
  const [selectedTEvent,SetSelectedTEvent]=useState(null)
  const [selectedQuartier,SetSelectedQuartier]=useState(null)
  const [selectedBudget,SetSelectedBudget]=useState(null)
  const [selectedTLieux,SetSelectedTLieux]=useState(null)
  const [selectedTEnviron,SetSelectedTEnviron]=useState(null)
  const [selectedHebergement,SetSelectedHebergement]=useState(null)

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

  useEffect(()=>{
    applyFilter()
  },[selectedVille,selectedTEvent,selectedTLieux,selectedQuartier,selectedHebergement])
  
  return (
    <div className='relative w-full overflow-hidden  lg:flex lg:flex-row '>
     {/* header img de block  */}
        {/* left */}

      <div className='lg:w-3/4 lg:px-4'>
        <div>
          {/* FilterContainer for filter Lieux */}
          <div>
           <FilterContainer resetState={resetStateAllState} handlerChangeVille={handlerChangeVille} selectedVille={selectedVille} selectedTEvent={selectedTEvent} handlerChangeTEvent={handlerChangeTEvent} selectedQuartier={selectedQuartier} handlerChangeQuartier={handlerChangeQuartier} selectedTLieux={selectedTLieux} handlerChangeTLieux={handlerChangeTLieux} selectedHebergement={selectedHebergement} handlerChangeHebergement={handlerChangeHebergement}/>

          </div>
          {/* block show Lieux */}
          <div>
            <div  className=' overflow-hidden 	h-32'>
            <h1>Retrouver les plus beaux lieux a Abidjan</h1>
            </div>
          {/* Card Lieux*/}
        <div>
        <div className='lg:flex lg:flex-wrap'>
          {
            list.map((item,index)=>(
            <CardLieux item={item} keys={index}/>
            ))
              
          }
          </div>
         </div>
          
          </div>
        </div>
      </div>
      {/* Reight */}
      <div className='hidden lg:block  lg:w-1/4	bg-red-700'>
        Reight
      </div>
    </div>
  )
}

export default Index