import React from 'react'
import {Link, useParams } from 'react-router-dom'

import {data} from'../Lieux/Main/DD/Data'
export default function DetailLieux() {
  let { LieuxDetail} = useParams();
  const displayLieux=data.filter(item=> item.id === 0)
    console.log('displayLieux:'+displayLieux[0].id);

  return (
    <div>
       <li><Link  to="/trouver-lieux">retour</Link> </li> 
       <h1>salle :{LieuxDetail}</h1>
       <img src='../../lieux.jpg' style={{width:'500px'}} alt='image lieux'/>
       <p>  tres beau lieux a decouvrir  tres beau lieux a decouvrir
       tres beau lieux a decouvrir tres beau lieux a decouvrir
       tres beau lieux a decouvrir</p>
    </div>
  )
}
