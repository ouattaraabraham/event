import React from 'react'
import HeaderImg from '../../components/headerImage/index'
import Card from './Card'
import CardEvent from "./CardEvent"


export default function Acceuil() {
  const img="url('../../fete1.jpg')"
  const text="decouvrez toutes les meilleurs prestations"
  return (

    <div className='w-full relative mt-[55px] lg:mt-[80px] '>

       {/* header (div-image) */}
       <HeaderImg img={img} text={text} />
       {/* main */}
      <div className='flex flex-col  gap-16'>

       {/* container bloc1 */}
      <div>
       <div className='flex flex-col px-5 py-10 items-center gap-7 md:gap-16  text-center md:px-20 md:text-2xl ' >
          <h1  >
          SnapEvent met a votre disposition toute les prestation dont vous avez besoin pour l’organisationde  votre evenement .
          </h1>
          <div className='flex flex-col w-full md:flex-row md:justify-evenly'>
            <div  >
               <h1 className='font-extrabold  text-yellow-500 text-2xl'>01</h1>
               <h2 className='py-5'>materiel de qualite</h2>
             </div>
             <div>
               <h1 className='font-extrabold  text-yellow-500 text-2xl'>02</h1>
               <h2 className='py-5'> prestation hors du commun</h2>
             </div>
             <div>
               <h1 className='font-extrabold  text-yellow-500 text-2xl'>03</h1>
               <h2 className='py-5'>clients satisfait</h2>
             </div>
          </div>
          <h1>pour un evenement inoubliable </h1>
       </div>
      </div>

       {/* wrap bloc2 */}
       <div className='px-5'>
       <div className='flex flex-col gap-5 md:px-1 md:grid md:grid-cols-3 lg:px-7'>

        {/* <div className='flex flex-col gap-10 lg:px-16 sm:grid sm:grid-cols-3'> */}
         <Card prestation='Trouver-lieux'/>
         <Card prestation='location Materiel'/>
         <Card prestation='Decoration'/>
         <Card prestation='Staffe'/>
         <Card prestation='Animation '/>
         <Card prestation='Traiteurs'/>
        </div>
       </div>

      {/* wrap bloc3 */}
      <div className='bg-amber-100'>

      {/* sous bloc1 */}
      <div className=' px-5 lg:px-0'>
       <div className='  lg:grid lg:grid-cols-2	'>
       {/* image */}
          <div >
            <img className='w-full' src="../../pro.webp" alt="" />
          </div>
          {/* text */}
          <div className='lg:px-10'>
            <h1 className='text-xl py-4'>
              Organisation clés en main de vos événements !
            </h1>
            <h3>
              CAP EVENTS conçoit, développe et coordonne depuis plus de 20 ans vos événements « clés en mains ». Notre expérience nous permet d’apporter une solution adaptée à chaque problématique afin de respecter les objectifs et les attentes de nos clients.
              Les propositions de Cap Events s’adaptent à vos besoins afin de faire de votre événement un moment d’exception. Nous collaborons avec des lieux originaux.
              Vous avez l’engagement d’être accompagné par une équipe dédiée, disponible, à votre écoute.
            </h3>
          </div>
       </div>
      </div>

      {/* sous bloc2 */}
      <div className=' px-5 text-center sm:px-7 lg:px-16'>
        <h1 className='py-10 text-lg sm:text-xl lg:text-2xl'>souhaitez vous organiser quel types d’evenement ?</h1>
       <div className='flex flex-col gap-12 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
        <CardEvent typeEvent="Evenement professionnel"/>
        <CardEvent typeEvent="MARIAGES"/>
        <CardEvent typeEvent="Anivaisere"/>
        <CardEvent typeEvent="soirée privé"/>
        <CardEvent typeEvent=""/>
        <CardEvent typeEvent=""/>

        
       </div>
      </div>
      </div>

      </div>

    </div>

 
  )
}
