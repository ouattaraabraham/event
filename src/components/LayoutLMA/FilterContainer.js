/* eslint-disable no-undef */
import React from 'react'
import { useState  } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {FcFilledFilter} from 'react-icons/fc'
import FilterWrap from './filterWrap';


function FilterContainer({style,resetState,selectedVille,handlerChangeVille,selectedTEvent,handlerChangeTEvent,selectedQuartier,handlerChangeQuartier,selectedTLieux,handlerChangeTLieux,selectedHebergement,handlerChangeHebergement}) {
const [focus,SetFocus] =useState(true)

const isOpen =()=>{
  console.log("style :"+style);
  SetFocus(prev=>!prev)
  }

  return (
    <div className={`${style.divContainer}`}>
         {/* btnIsOpen */}
         <div className='flex p-3 justify-between lg:hidden'>
              <button  onClick={isOpen}  className={`${style.btn}`}>
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
    </div>
    )
    
}

export default FilterContainer