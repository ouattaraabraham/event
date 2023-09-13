import React  from 'react'
import { NavLink } from 'react-router-dom'

 export default function NavBar() {
  return (
    <div >
    {<nav>
     <ul className=' flex justify-between'>
         <li><NavLink to="/">ACCEUIL</NavLink></li>
         <li>
             <ul>
                 <li> <NavLink to="/evenement-d'entreprise">ÉVENEMENT D'ÉNTREPRISE</NavLink></li>
                 <li><NavLink to="/soirée-privée">SOIRÉES PRIVÉES</NavLink></li>
                 <li><NavLink to="/anniversaires">ANNIVERSAIRES</NavLink></li>
                 <li><NavLink to="/brunch">BRUNCH</NavLink></li>
             </ul>
         </li>
         <li>
         <ul>
                 <li> <NavLink to="/trouver-lieux">LIEUX</NavLink></li>
                 <li><NavLink to="location-materiels">LOCATIONS MATERIELS</NavLink></li>
                 <li><NavLink to="traiteurs">TRAITEURS</NavLink></li>
                 <li><NavLink to="/staffs">STAFFS</NavLink></li>
                 <li><NavLink to="decoration">DECORATION</NavLink></li>
                 <li><NavLink to="animations" >ANIMATIONS</NavLink></li>
             </ul> 
         </li>
         <li><NavLink to="/contact">CONTACT</NavLink></li>
     </ul>
     </nav>}
    </div>
  )
}
