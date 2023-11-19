import React from 'react'
import HeaderImg from '../../../components/headerImage'
import Card from '../Card'
const img="url('../../../accesoir-table.jpg')"
const link="/location-materiels/:materiel/articles"

const data=[
  {description:"CHAPITEAUX",img:{img}},
  {description:"ABRIS",img:{img}},
  {description:"TENTE",img:{img}},
  {description:"FROID",img:{img}},
]

function index() {
  return (
    <div className='lg:pt-20'>
      {/* Header */}
      <HeaderImg img={img}/>
      {/* main */}
      <div className='relative  w-full overflow-hidden gap-5  lg:flex lg:flex-row '>
        {/* left */}
        <div className='mx-auto sm:px-2 lg:w-3/4 lg:px-4'>
        <div className='py-4'>

        <h1 className='bg-red-300 my-3 p-3 rounded-lg'>
            Retrouver tous les prestataire dont vou avez besoim pour votre evenement
          </h1>
        {/*card container */}
        <div className='flex flex-col gap-10 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 '>
        {
          data.map((items,index)=>(
            <Card description={items.description} links={link} key={index}/>

          ))
        }
        </div>
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