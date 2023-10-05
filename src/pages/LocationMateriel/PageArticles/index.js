import React from 'react'
import HeaderImg from '../../../components/headerImage'
import Card from './Card'


const img="url('../../../are-de-table.jpg')"

function index() {
  return (
    <div className='lg:pt-20'>
    {/* Header */}
    <HeaderImg img={img}/>
    {/* main */}
    <div className='relative px-3  w-full overflow-hidden gap-5  lg:flex lg:flex-row '>
      {/* left */}
      <div className='mx-auto sm:px-2 lg:w-3/4 lg:px-4'>
        <h1 className='bg-red-300 my-3 p-3 rounded-lg'>
          Retrouver tous les prestataire dont vou avez besoim pour votre evenement
        </h1>
      {/*card container */}
      <div className=' lg:grid lg:grid-cols-3 gap-4 '>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

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