import React from 'react'

import { Input } from "@material-tailwind/react";
 
export default function InputNInvite() {
  return (
    <div className="relative w-full border-2 bg-white pl-3">
      <p>Nombre d'invité</p>
       <input  type="text" placeholder='Nombre invité'  className='peer w-full'/>
      
    </div>
  );
}
