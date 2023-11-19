
import React from "react"
import  ReactPaginate from'react-paginate' ;


import { useRoutes, useSearchParams} from "react-router-dom";

import { useState , useEffect } from "react"

import { GrFormNext,GrFormPrevious} from 'react-icons/gr';

import './Pagination.css';

export default function Index({list,displayPrev,displayNex}){
    let [searchParams, setSearchParams] = useSearchParams();

    const page=searchParams.get('page') ??'1'
    const items_page =searchParams.get('items_page') ??'10'
    

   const handlerPage=(e)=>{
    let curentPage=Number(page)

    // if(e.isNext){
    //   setSearchParams(`page=${curentPage+1}`)
    // }
    // if(e.isPrevious){
    //      setSearchParams(`page=${curentPage-1}`)
    //    }
    if(e.selected){
        console.log("e.selected :"+e.selected);
    setSearchParams(`page=${e.selected}`)

    }
    
    
   }

    // const changePages=(change)=>{
    // if(change>=1 && change<=Math.ceil(list.length/10))
    // setPage(change)
    // console.log("page :"+page)
    //     }

   useEffect(()=>{
    //   console.log("searchParams :"+searchParams);
   },[searchParams])

//     return (
//     <div className='relative my-4 flex justify-center gap-1'>
//         <span className={`p-1  border border-slate-700 flex items-center ${displayPrev?"block":"hidden"} `} onClick={()=>handlerPage(-1)}><GrFormPrevious size={20}/></span>
//         <span className='p-1 px-2 border border-slate-700 flex items-center'>1</span>
//         <span className='p-1 px-2 border border-slate-700 flex items-center'>2</span>
//         <span className='p-1 px-2 border border-slate-700 flex items-center'>3</span>
//         <span className='p-1 px-2 border border-slate-700 flex items-center'>4</span>
//         <span className={`p-1  border border-slate-700 flex items-center ${displayNex?"block":"hidden"} `} onClick={()=>handlerPage(+1)}><GrFormNext size={20}/></span>

//   </div>
//    )

// activeClassName={'item active '}
// breakClassName={'item break-me '}
return(
 <div > 
    < ReactPaginate 
     
      containerClassName={'pagination'}
      disabledClassName={'disabled-page'}
      marginPagesDisplayed={2}
      nextLabel={<GrFormNext style={{ fontSize: 20}} />}
      nextClassName={displayNex?"item next ":"next-hidden"}
      breakLabel = "..." 
      onClick={(e)=> handlerPage(e)}
      pageRangeDisplayed = { 5 } 
      pageCount = { 5} 
      previousClassName={displayPrev?"previous ":"previous-hidden"}
      previousLabel = {<GrFormPrevious style={{ fontSize: 20}} />}
      pageClassName={'item pagination-page '}
      renderOnZeroPageCount = { null } 
    /> 
  </div> 
)


}
