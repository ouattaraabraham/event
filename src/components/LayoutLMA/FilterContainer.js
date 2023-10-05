/* eslint-disable no-undef */
import React from 'react'
import { Select, Option, } from "@material-tailwind/react";
import SelectGp from './SelectGp/index'
// import Tabss from "./SelectGp/Tabs"
import './filter.css'
import { useState  } from 'react'
import {AiOutlineCaretUp,AiOutlineCaretDown,AiOutlineClose} from 'react-icons/ai'
import {FcFilledFilter} from 'react-icons/fc'
import FilterWrap from './filterWrap';

 
export function SelectDefault() {
  return (
    <div className="w-72 ">
      <Select size="md" label="Select Version" className=''>
        <Option className='p-0'>Material Tailwind HTML</Option>
        <Option className='bg-slate-100'>Material Tailwind React</Option>
        <Option className='bg-slate-100'>Material Tailwind Vue</Option>
        <Option className='bg-slate-100'>Material Tailwind Angular</Option>
        <Option className='bg-slate-100'>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
}

function FilterContainer({resetState,selectedVille,handlerChangeVille,selectedTEvent,handlerChangeTEvent,selectedQuartier,handlerChangeQuartier,selectedTLieux,handlerChangeTLieux,selectedHebergement,handlerChangeHebergement}) {

const [focus,SetFocus] =useState(true)

const isOpen =()=>{
  SetFocus(prev=>!prev)
  }

  return (
    <div className=' bg-slate-300  '>
         {/* btnIsOpen */}
         <div className='flex p-3 justify-between lg:hidden'>
              <button  onClick={isOpen}  className='flex justify-between items-center gap-1 px-3 py-1 w-max border-2  rounded-lg border-rose-600'>
                <span><FcFilledFilter size={'16px'}/></span> Filter
              </button>
              <button className=' px-3 py-1 w-max border-2  rounded-lg border-rose-600'>
                 Pertinent
              </button>
        </div>
        {/* filterGroup-select */}

        {/* filterGroupSelect lg: */}
        
        <div className='hidden lg:block '>
                  <FilterWrap 
                  selectedVille={selectedVille} handlerChangeVille={handlerChangeVille} selectedTEvent={selectedTEvent} selectedQuartier={selectedQuartier} handlerChangeQuartier={handlerChangeQuartier}
                   handlerChangeTEvent={handlerChangeTEvent} selectedTLieux={selectedTLieux} handlerChangeTLieux={handlerChangeTLieux}
                   selectedHebergement={selectedHebergement} handlerChangeHebergement={handlerChangeHebergement}/>
                </div>
    
        {/* filterGroupSelect md: */}

        {
          (!focus?(
           <div className='fixed top-0 flex flex-col h-screen   bg-slate-700 w-full h-full lg:hidden z-50'>
             {/*header filterBtnClose */}
              <div className='  bg-slate-100 text-lg text-slate-900 flex justify-between p-3 border-2 gap-x-3'>
                <span>Filter</span>
                  <button onClick={isOpen}>
                  <AiOutlineClose/>
                  </button>
              </div>
                {/* body  SelectGp */}
                {/* <div className='grow bg-slate-50 overflow-hidden overflow-y-scroll'>
                  <SelectGp/>
                </div> */}
                
                {/* layout Mobile*/}
                <div className='grow bg-slate-50 overflow-hidden overflow-y-scroll '>
                  <FilterWrap 
                  selectedVille={selectedVille} handlerChangeVille={handlerChangeVille} selectedTEvent={selectedTEvent} selectedQuartier={selectedQuartier} handlerChangeQuartier={handlerChangeQuartier}
                   handlerChangeTEvent={handlerChangeTEvent} selectedTLieux={selectedTLieux} handlerChangeTLieux={handlerChangeTLieux}
                   selectedHebergement={selectedHebergement} handlerChangeHebergement={handlerChangeHebergement}/>
                </div>
                {/* footer  btnSearchResult */}
             <div className=' bg-slate-100 flex justify-between p-3 border-2 gap-x-3  md:hidden'>
                  <button onClick={resetState} className=' border-2 px-3 py-1 rounded-lg grow'>
                     Effacer
                  </button>
                  <button onClick={isOpen}   className='bg-red-300 px-3 py-1 rounded-lg grow'>
                     Voir les résultats
                  </button>
             </div>
          </div> 
        ):'' )
        }
        {/* layout desktop */}
        {/* <div className='hidden'>
            <div className='grow bg-slate-50 overflow-hidden overflow-y-scroll '>
                <FilterWrap 
                selectedVille={selectedVille} handlerChangeVille={handlerChangeVille} selectedTEvent={selectedTEvent} selectedQuartier={selectedQuartier} handlerChangeQuartier={handlerChangeQuartier}
                  handlerChangeTEvent={handlerChangeTEvent} selectedTLieux={selectedTLieux} handlerChangeTLieux={handlerChangeTLieux}
                  selectedHebergement={selectedHebergement} handlerChangeHebergement={handlerChangeHebergement}/>
            </div>
        </div> */}
    </div>
    )
    
}

export default FilterContainer