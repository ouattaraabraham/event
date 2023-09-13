import React from 'react'

function PresentationLieux({lieux}) {
  return (
    <div>
        <div>presentation {lieux} </div>
        <div style={{display:'flex'}}>
            <div style={{width:'100px', height:'100px', backgroundColor:'blue'}}>lien lieux</div>
            <div style={{width:'100px',height:'100px',backgroundColor:'red'}}>lien lieux</div>
            <div style={{width:'100px',height:'100px',backgroundColor:'black'}}>lien lieux</div>
        </div>
    </div>
  )
}

export default PresentationLieux
