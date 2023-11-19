import React from 'react'
import HeaderImg from '../../../components/headerImage'
import BlockArticles from '../BlockArticles'

const img="url('../../../are-de-table.jpg')"

function index() {
  return (
    <div className='lg:pt-20'>
    {/* Header */}
    <HeaderImg img={img}/>
    {/* main */}
    <div className='mx-auto relative px-3  w-full overflow-hidden gap-5  lg:flex lg:flex-row md:max-w-3xl lg:max-w-none '>
      {/* left */}
      <div className='py-6 mx-auto sm:px-2 lg:w-3/4 lg:px-4'>
       {/* bock-articles */}
       <BlockArticles/>
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