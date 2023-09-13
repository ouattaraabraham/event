import React from 'react'
import SelectIcons from './SelectIcons'
import PlusCritere from './PlusCritere'
import InputText from './InputText'
function PlusFilter() {
  const styleNPiece='relative truncate	 w-8 h-8 bg-white border rounded-full border-slate-400  flex justify-center items-center '

  const NPiece=[
    {value:'Studio',style:'relative truncate	 w-14 h-8 bg-white border rounded-full border-slate-400  flex justify-center items-center '},
    {value:1},
    {value:2},
    {value:3},
    {value:4},
    {value:'+'+5},
  ]
  const NChambre=[
    {value:1},
    {value:2},
    {value:3},
    {value:4},
    {value:'+'+5},
  ]
  return (
<div className=' flex flex-col gap-6'>
  {/* plusde filter after Type */}
    <div className=' w-full '>
      <div className='w-full'>
        <h3>localisation</h3>
        <input className='w-full border-2 p-1' type='text' placeholder='entre localisation'/>
      </div>
    </div>
    {/* Budget */}
    <div>
      <InputText text='Budget '/>
    </div>
    {/* surface habitable ? */}
    <div>
      <InputText text='surface habitable ?'/>
    </div>
    {/* Combien de pièces ? */}
    <div>
     <h2>Nombre de piece ?</h2>
      <div className='flex flex-row '>
        {
          NPiece.map((item,index)=>(
            <label className={item.style?item.style:styleNPiece}>
          <input type="checkbox" className='absolute opacity-0 peer '/>
          <span className=' w-full h-full peer-checked:bg-yellow-400 flex justify-center items-center  '>
            {item.value}
          </span>
          </label>
              ))
        }
      </div>
    </div>
    {/* Combien de chambres ? */}
    <div>
     <h2>Nombre de chambres ?</h2>
      <div className='flex flex-row '>
        {
          NChambre.map((item,index)=>(
            <label className={item.style?item.style:styleNPiece}>
          <input type="checkbox" className='absolute opacity-0 peer '/>
          <span className=' w-full h-full peer-checked:bg-yellow-400 flex justify-center items-center  '>
            {item.value}
          </span>
          </label>
              ))
        }
      </div>
    </div>
</div>
  )
}

export default PlusFilter

