import React from 'react'
import HeaderImg from '../../components/headerImage/index'
import DescLeft from '../../components/BlockdescImg/DescLeft'
import DescRight from '../../components/BlockdescImg/DescRight'


const txt1="Prestations pour Mariage"
const txt2="Bienvenue chez EventFiesta. Nous sommes une équipe d'experts en événementiel passionnés par la création d'expériences mémorables pour nos clients. Que vous cherchiez à décorer/organiser un événement d'entreprise, une soirée de gala, un anniversaire, une fête religieuse ou tout autre type d'événement, nous avons les compétences et l'expertise nécessaires pour le rendre inoubliable."
const txt3="Nous nous occupons :"
const txtMap=['De la recherche d’espace','De la recherche et de la gestion de prestataires','De la décoration','De la coordination','Des imprévus']
const img="url('../../marier.jpg')"


function Mariage() {
  return (
    <div className=' pt-20'>
     {/* header */}
     <HeaderImg img={img}/>
     {/* main */}
      <div className='flex flex-col gap-10 py-20 px-3 max-w-[45em] lg:max-w-fit mx-auto'>
        {/* wrap desc+img */}
        <DescLeft txt1={txt1} txt2={txt2} txt3={txt3} txtMap={txtMap} />
        {/* galerie photo */}
        <div>
          <h1 className='text-center py-5 text-lg sm:text-xl	md:text-2xl	'>GALLERIE INSPIRATION</h1>
          {/* galerie photo */}
          <div className='grid grid-cols-3 gap-2 sm:px-1 md:max-w-3xl	mx-auto'>
          <img src="../../hottesses.jpg" alt="photo mariage" />
            <img src="../../hottesses.jpg" alt="photo mariage" />
            <img src="../../fete.jpg" alt="photo mariage" />
            <img src="../../fete.jpg" alt="photo mariage" />
            <img src="../../fete.jpg" alt="photo mariage" />
            <img src="../../hottesses.jpg" alt="photo mariage" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mariage