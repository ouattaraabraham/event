import React from 'react'
import WrapCardLieux from './WrapCardLieux'
function index({data}) {
  // console.log('indexParent2 list.length :'+data.lengt+ 'data[0].id:'+data[0].id);
  return (
    <>
     <WrapCardLieux data={data}/>
    </>
  )
}

export default index