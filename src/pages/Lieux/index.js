import React from 'react'
import HeaderImg from '../../components/headerImage/index'
import BtnLinks from '../../components/buttons/BtnLinks'
import LayoutLMA from '../../components/LayoutLMA/index'

function Lieux() {
  const img="url('../../lieux1.jpg')"
  const text="decouvrez toutes les meilleurs prestations"
  const links=[
    {name:"ACCEUIL",to:"/",icone:true},
    {name:"TROUVER-LIEUX",icone:false}
  ]
  return (
    <div className='pt-14' >
    {/* header */}
        <HeaderImg img={img} text={text} />
        {/* main */}
        <div className='px-2'>
         {/* link */}
         <BtnLinks links={links}/>
       <LayoutLMA/>
       </div>
    </div>
  )
}

export default Lieux