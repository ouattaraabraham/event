/* eslint-disable no-undef */
import React from 'react'
import { useState  } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {FcFilledFilter} from 'react-icons/fc'
import FilterWrap from './FilterWrap';


function FilterContainer({style,propsApp,propsMain}) {

// const [focus,SetFocus] =useState(true)

// const isOpen =()=>{
//   SetFocus(prev=>!prev)
//   }

  return (
    <div className={`${style.divContainer}`}>
         {/* btnIsOpen */}
         <div className='flex  justify-between lg:hidden'>
              <button  onClick={propsApp.isOpen}  className={`${style.btn}`}>
                <span><FcFilledFilter size={'16px'}/></span> Filter
              </button>
              {/* <button className=' px-3 py-1 w-max border-2  rounded-lg border-rose-600'>
                 Pertinent
              </button> */}
        </div>
        {/* filterGroup-select */}

        {/* filterGroupSelect lg: */}
        
        <div className='hidden lg:block '>
            <FilterWrap propsMain={propsMain} />
        </div>
    
        {/* filterGroupSelect md: */}

        {
          (!propsApp.focus?(
           <div className='fixed top-0  p-3 bg-slate-100  flex flex-col h-screen  w-screen lg:hidden z-50'>
             {/*header filterBtnClose */}
              <div className='  bg-slate-100 text-lg text-slate-900 flex justify-between p-3 border-2 gap-x-3'>
                <span>Filter</span>
                  <button onClick={propsApp.isOpen}>
                  <AiOutlineClose/>
                  </button>
              </div>
                {/* body  SelectGp */}
                {/* <div className='grow bg-slate-50 overflow-hidden overflow-y-scroll'>
                  <SelectGp/>
                </div> */}
                
                {/* layout Mobile*/}
                <div className='grow bg-slate-50 overflow-hidden overflow-y-scroll '>
                <FilterWrap propsMain={propsMain} />
                </div>
                {/* footer  btnSearchResult */}
             <div className=' bg-slate-100 flex justify-between p-3 border-2 gap-x-3  md:hidden'>
                  <button onClick={propsMain.resetStateAllState} className=' border-2 px-3 py-1 rounded-lg grow'>
                     Effacer
                  </button>
                  <button onClick={propsApp.isOpen}   className='bg-red-300 px-3 py-1 rounded-lg grow'>
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


