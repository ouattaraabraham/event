import React from 'react'
import { NavLink  } from 'react-router-dom'

function CardLieux({data}) {
  return (
    <div>
        <ul>
        <img style={{width:"300px"}} src="../../lieux.jpg" alt="lieux" />
        <div style={{display:'flex'}}>
        <h3>{data.capital}</h3> 
        <h3 style={{marginLeft:'50px' ,marginRight:'50px'}}>{data.population}</h3>
        <h3><NavLink to={`/trouver-lieux/${data.capital}`}>voir</NavLink></h3>  
        </div>
        
      </ul>
    </div>
  )
}

export default  CardLieux