import React from 'react'
import HeaderImg from '../../components/headerImage'
import DescLeft from '../../components/BlockdescImg/DescLeft'



const txt1="TRAITEUR"
const txt2="Bienvenue chez EventFiesta. Nous sommes une équipe d'experts en événementiel passionnés par la création d'expériences mémorables pour nos clients. Que vous cherchiez à décorer/organiser un événement d'entreprise, une soirée de gala, un anniversaire, une fête religieuse ou tout autre type d'événement, nous avons les compétences et l'expertise nécessaires pour le rendre inoubliable."
const txt3="Nous nous occupons :"
const txtMap=['De la recherche d’espace','De la recherche et de la gestion de prestataires','De la décoration','De la coordination','Des imprévus']
const img="url('../../marier.jpg')"
function Traiteurs() {
  return (
    <div className=' lg:pt-20 '>

      {/* header */}
      <HeaderImg img={img}/>

      {/* main */}
      <div className='px-3 py-20 max-w-[45em] lg:max-w-fit mx-auto'>
      {/* bloc-desc+img */}
      <DescLeft txt1={txt1} txt2={txt2} txt3={txt3} txtMap={txtMap} />
      </div>
    </div>
  )
}

export default Traiteurs