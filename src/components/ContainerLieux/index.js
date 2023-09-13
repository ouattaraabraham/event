import React ,{useEffect , useState} from 'react'
import axios from 'axios'
import { FaHeart } from "react-icons/fa";
import {data as datas} from '../DD/Data'
import FilterLieux from '../FilterLieux/index';

    export const loader1= async()=>{
    const data = await axios.get("https://restcountries.com/v3.1/all")
    .then((res)=>res.data)
    return {data}
    }

    console.log(datas[0]);
export default function ContainerLieux({lieux}) {



  return (
    <>
    <div><h1>Explorez nos biens uniques à {lieux}.</h1></div>
    <FilterLieux/>
 
    </>
  
)
     }
