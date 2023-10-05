import React from 'react'
import HeaderImg from '../../../components/headerImage'
import Card from '../../../components/Card'

const img="url('../../../accesoir-table.jpg')"
const link="/location-materiels/:materiel/articles"

function index() {
  return (
    <div className='lg:pt-20'>
      {/* Header */}
      <HeaderImg img={img}/>
      {/* main */}
      <div className='relative  w-full overflow-hidden gap-5  lg:flex lg:flex-row '>
        {/* left */}
        <div className='mx-auto sm:px-2 lg:w-3/4 lg:px-4'>
          <h1 className='bg-red-300 my-3 p-3 rounded-lg'>
            Retrouver tous les prestataire dont vou avez besoim pour votre evenement
          </h1>
        {/*card container */}
        <div className='lg:grid lg:grid-cols-3 '>
          <Card prestation="ASSIETTE" link={link}/>
          <Card prestation="COUVERTS" link={link}/>
          <Card prestation="VERRES" link={link}/>
          <Card prestation="TASSES" link={link}/>
          <Card prestation="CENTRE DE TABLE" link={link}/>
          <Card prestation="SERVIETTE DE TABLE" link={link}/>
        </div>

        </div>
        {/* right */}
        <div className='hidden lg:block  lg:w-1/4	bg-yellow-700'>
          right
        </div>
      </div>

  </div>
  )
}

export default index