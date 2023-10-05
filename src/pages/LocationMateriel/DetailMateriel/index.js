import React from 'react'
import { Link } from 'react-router-dom'
function DetailMateriel() {
  return (
    <div className='p-2' >
    <div>
    <Link to="/location-materiels/materiel">
      <button className='bg-red-300 rounded-lg py-1 px-2'>
        retour
      </button>
    </Link>
    </div>
       <img className='w-80' src="/../../../assiette.jpg" alt="assiette detail" />
      <h1>
        detail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail article
        etail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail articleetail  detail article detail article
      </h1>
    </div>
  )
}

export default DetailMateriel