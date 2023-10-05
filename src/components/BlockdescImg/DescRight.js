import React from 'react'

function DescRight({txt1,txt2,txt3}) {
    const txtMap=['eeeee','eefffeee','eeetttee',]
  return (
<div>
    <h1 className='text-xl text-center pb-10'>{txt1}</h1>
    <div className='flex flex-col gap-10 lg:flex-row mx-auto max-w-5xl'>
     {/* image */}
     <div className='lg:w-1/2'>
        <img className='w-full' src="../../fleur.jpg" alt="fleur mariage" />
    </div>
    {/* description */}
    <div className='lg:w-1/2' > 
        <h2 className='pt-5 pb-2'>{txt2}</h2> 
        <ul >
        <h2>{txt3}</h2>
        {txtMap.map(item=>(
        <li className='pl-4'>{item}</li>
        ))}
        </ul>       
    </div>
    </div>
 </div>
  )
}

export default DescRight