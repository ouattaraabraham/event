import React from 'react'






function SelectIcons({size,icon,desc,index,style}) {
  return (
    <label key={index} className={style}>
      <input type="checkbox"  className='peer opacity-0 flex justify-center items-center w-12 h-12 rounded-full'/>
      <div className='peer-checked:bg-yellow-400  absolute top-0 w-full h-full flex justify-center items-center rounded-full'>
      {icon}
      </div>
      <h3 className=''>
      {desc}
      </h3>
    </label>
  )
}



// function SelectIcons({size,icon,desc,index,style}) {
//   return (
//   <div key={index} className={style}>
//     <label className=' overflow-hidden flex justify-center items-center w-full h-full '>
//     <input type="checkbox" className='absolute opacity-0 peer '/>
//     <div className='peer-checked:bg-yellow-400  rounded-full w-full h-full flex justify-center items-center'>
//     {icon}
//     </div>
//     <h3 className='absolute top-14 '>
//      {desc}
//     </h3>
//     </label>
//   </div>
//   )
// }

export default SelectIcons


