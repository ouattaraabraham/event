import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import {AiOutlineHeart,AiOutlineShareAlt,AiFillLeftCircle,AiFillRightCircle } from "react-icons/ai";
import {BsFillPeopleFill } from "react-icons/bs";
import {TbPointFilled , TbPoint } from "react-icons/tb";
import favoriSlate from '../../../store/lieuxFavoriSlice'
import { useSelector, useDispatch } from 'react-redux'
// import state redux-react
import {toggleLieux} from '../../../store/lieuxFavoriSlice'




function CardLieux({item,handlerAddLieux}) {

  // const data= useSelector(state=>state.favoriSlice)
  // console.log("data :"+data);

  const dispatch=useDispatch()

  const toggleFavori =(item)=>{
     dispatch(toggleLieux(item))
  }

  // console.log("likeLiuex :"+likeLiuex);
  // console.log("handlerAddLieux :"+handlerAddLieux);
  const [curentImg, SetCurentImg] =useState(0)

  const prevImg=()=>{
     const borne= curentImg===0 
    const changeIndex=borne ? 0 :curentImg-1
    return SetCurentImg(changeIndex)
  }
  const nexImg=()=>{
    const borne= curentImg===item.img.length-1
   const changeIndex=borne ? curentImg:curentImg+1
   return SetCurentImg(changeIndex)
 }

  return (
    <div >
    
     {/* wrpa-IMG */}
      <div className='relative'>
        <NavLink to={`/lieux/${item.id}`}>
          <img className='w-full h-[335px] object-cover	' src={item.img[curentImg]} alt="" />
        </NavLink>
        {/* btn-left-right */}
        <button className='absolute max-w-max p-5 top-[45%]'>
        <AiFillLeftCircle  onClick={prevImg} size={30} className='m-3'/>
        </button>
        <button className='absolute max-w-max  w-full  p-5 top-[45%] right-0'>
        <AiFillRightCircle onClick={nexImg} size={30} className='m-3'/>
        </button>
        <div className='absolute w-full bottom-5 flex justify-center'>
        {
          item.img.map((item,index)=>(
            <div>
             <TbPointFilled size={20} color={`${curentImg===index?"#fff":"#c3bebe"}`} key={index}/>  
            </div>
          )
          )
        }
        </div>
      </div>
    
     {/* wrap-text */}
     <div className='px-4 pb-5 pt-3 flex flex-col gap-1'>
        <div className='flex  justify-between items-center'>
        <NavLink className="max-w-max" to={`/lieux/${item.id}`}>
        <h1 className='text-lg text-slate-900	'>salle-{item.id}</h1>
        </NavLink>

        <div className='flex gap-4'>
          <span><AiOutlineShareAlt size={23}/></span>
          {/* <button onClick={()=>handlerAddLieux(item.id)}><AiOutlineHeart size={23}/></button> */}
          <button onClick={()=>toggleFavori(item)}><AiOutlineHeart color='red' size={23}/></button>

        </div>
       </div>
       <NavLink className="max-w-max " to={`/lieux/${item.id}`}>
        <div className='flex items-center'>
         <TbPointFilled/> 
         <h3>Abidjan , {item.quartier}</h3>
        </div>
        </NavLink>
        <NavLink to={`/lieux/${item.id}`}>
        <div className='flex  justify-between items-center'>
        <h3> A partie de {item.prix}</h3>
        <div className='flex gap-4 items-center'>
          <span>{item.n_personne}</span>
          <span><BsFillPeopleFill size={20}/></span>
        </div>
        </div>
        </NavLink>
       </div>
       <div className="before:content-[''] w-36 h-[1px] mx-auto mb-9 mt-3 bg-slate-400 sm:hidden"> </div>
    </div>

  )
}

export default CardLieux