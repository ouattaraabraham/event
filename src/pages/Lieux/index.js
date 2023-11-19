import React from 'react'
import Header from './Header/index'
import BtnLinks from '../../components/buttons/BtnLinks'
import Main from './Main/index'
import { useOutletContext } from "react-router-dom";


function Lieux() {
  const {propsApp} = useOutletContext();


  const img="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('../../fete.jpg')"
  const text="decouvrez toutes les meilleurs prestations"
  const links=[
    {name:"ACCEUIL",to:"/",icone:true},
    {name:"TROUVER-LIEUX",icone:false}
  ]
  return (
    <div className='pt-14' >
        {/* header */}
        <Header img={img} text={text} /> 
        {/* main */}
        <div>
         {/* link */}
          <BtnLinks links={links}/>
          <Main propsApp={propsApp} />
       </div>
    </div>
  )
}

export default Lieux


