import React from 'react'
import Card from './Card'
const img="../../../are-de-table.jpg"
const data=[
    {name:"INCONTOURNABLE",articles:[
          {description:"assiettes creuse",img:{img}},
          {description:"assiettes creuse",img:{img}},
          {description:"assiettes creuse",img:{img}},
          {description:"assiettes creuse",img:{img}},
          {description:"assiettes creuse",img:{img}},
          {description:"assiettes creuse",img:{img}},
    ]},
    {name:"LES PRESTIGES",articles:[
        {description:"assiettes creuse",img:{img}},
        {description:"assiettes creuse",img:{img}},
        {description:"assiettes creuse",img:{img}},
        {description:"assiettes creuse",img:{img}},
        {description:"assiettes creuse",img:{img}},
        {description:"assiettes creuse",img:{img}},
  ]},
  {name:"AFRICA",articles:[
    {description:"assiettes creuse",img:{img}},
    {description:"assiettes creuse",img:{img}},
    {description:"assiettes creuse",img:{img}},
    {description:"assiettes creuse",img:{img}},
    {description:"assiettes creuse",img:{img}},
    {description:"assiettes creuse",img:{img}},
]},
]
function BlockArticles() {
  return (
    <>
    {
    data.map((item,index)=>
    (<div key={index} className='py-4'>
         <h1 className='bg-red-300 my-3 p-3 rounded-lg text-lg text-slate-100 font-semibold	'>
         {item.name}
         </h1>
      {/*card container */}
      <div className='flex flex-col gap-10 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 '>
      {
        item.articles.map((item,index)=>
        (
            <Card description={item.description} image={item.img} key={index}/>
        )
        )
      }
      </div>
    </div>)
     )
    }

    </>
  )
}

export default BlockArticles