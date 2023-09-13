import React from 'react'
import {Link, useParams } from 'react-router-dom'


export default function LieuxDetail() {
  let { userId } = useParams();

  console.log(userId);
  return (
    <div>
       <li><Link to="..">retour</Link> </li> 
       <h1>salle :{userId}</h1>
       <img src='../../lieux.jpg' style={{width:'500px'}}></img>
       <p>  tres beau lieux a decouvrir  tres beau lieux a decouvrir
       tres beau lieux a decouvrir tres beau lieux a decouvrir
       tres beau lieux a decouvrir</p>
    </div>
  )
}
