import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillCaretDown } from "react-icons/ai";


function DropDownPrestation({isActive}) {
    const links=[
    //     {name:"TYPE D'EVENEMENT ",subElement:true, 
    //     subElements:[
    //          {name:"ÉVENEMENT D'ÉNTREPRISE",to:"/evenement-d'entreprise"},
    //          {name:"SOIRÉES PRIVÉES",to:"/SOIRÉES PRIVÉES"},
    //          {name:"ANNIVERSAIRES",to:"/ANNIVERSAIRES"},
    //          {name:"BRUNCH",to:"/BRUNCH"},
    //     ],
    // },
    {name:'PRESTATION',subElement:true, 
        subElements:[
             {name:"LIEUX",to:"/trouver-lieux",subElement:false,subElements:[]},
             {name:"TRAITEUR",to:"traiteurs",subElement:false,subElements:[]},
             {name:"STAFFS",to:"/staffs",subElement:false,subElements:[]},
             {name:"DECORATION",to:"decoration",subElement:false,subElements:[]},
             {name:"ANIMATION",to:"animations",subElement:false,subElements:[]},
             {name:"LOCATIONS MATERIELS",to:"location-materiels",
             subElement:true,subElements:[
              {name:'ABRIS',subElement:true, 
              subElements:[
                   {name:"CHPITEAUX",to:"/",subElement:false},
                   {name:"TENTE & GARDEN",to:"/",subElement:false},
                   {name:"ABRIS PERFORÉ",to:"/",subElement:false},
                   {name:"FROID",to:"/",subElement:false},
              ]
                  },
                  {name:'ARE DE TABLE',subElement:true, 
                  subElements:[
                       {name:"ASSIETTE",to:"/",subElement:false},
                       {name:"COUVERT",to:"/",subElement:false},
                       {name:"VERRE",to:"/",subElement:false},
                       {name:"CENTRE DE TABLE",to:"/",subElement:false},
                  ]
                      },
                      {name:'MOBILIER ET DÉCO',subElement:true, 
                      subElements:[
                           {name:"CHAISE,BANC,FAUTEUIL",to:"/",subElement:false},
                           {name:"table",to:"/",subElement:false},
                           {name:"suport decoratif",to:"/",subElement:false},
                           {name:"Mobilier lumiere",to:"/",subElement:false},
                      ]
                          },
                          {name:'SON,LUMIERE,IMAGE',subElement:true, 
                          subElements:[
                               {name:"Son", to:"location-materiels/materiel",subElement:false},
                               {name:"Lumiere",to:"/",subElement:false},
                               {name:"Image",to:"/",subElement:false},
                          ]
                              },
      
                   ],
          }, ]
      },]
  
  return (

<>          
             {/* container-li*/}

    {
        links.map((item)=>(
            <li className=' lg:bg-slate-500 '>
  
            {/* button prestation*/}
            <div className='flex lg:px-3 min-w-max cursor-pointer items-center justify-between gap-6  peer'>
              <h1 className='text-center'>{item.name}</h1>
              <AiFillCaretDown/>
            </div>  
            {/* DropDOWN-CONTAINER (ALL-DropDOWN-CONTAINER)         */}
          <div className="lg:bg-slate-500 px-6 lg:px-3 lg:absolute  w-60  pt-4 lg:hidden  peer-hover:block hover:block ">

                <ul className='pb-3'>
                {
            item.subElement &&
            item.subElements.map((subElements)=>(
                    <li   className='pt-3 '>
                    {/* div(LIEU,TRAITEUR,DECO,ECT..) */}
                    <div className='flex lg:px-3 min-w-max cursor-pointer items-center justify-between gap-6  peer'>
                    {subElements.subElement?
                    <>
                    <h1   className='hover:text-red-800 ' >{subElements.name}</h1>
                    <AiFillCaretDown/>
                    </>:
                    <NavLink onClick={isActive}  to={subElements.to}   className='hover:text-red-800 ' >
                            {subElements.name}
                      </NavLink>

                    }
                    
              
                    </div> 
                        {
                          subElements.subElement&&
                        <li  className="w-full ml-4 hidden lg:bg-slate-500  lg:absolute lg:border-2 lg:w-[87f0px] h-[200px] lg:left-[-20rem] lg:w-min px-6 lg:px-3 pt-4  lg:flex-row peer-hover:block hover:block  lg:peer-hover:flex lg:hover:flex ">
                          {/* Abris ,are de table , mobilier ect.. */}
                        {subElements.subElements.map((subElement2)=>
                          <div >
                            <div  className="flex lg:px-3   lg:w-52 min-w-max cursor-pointer items-center justify-between gap-6  peer">
                              <h1 className='text-center'>{subElement2.name}</h1>
                              <AiFillCaretDown/>
                            </div>
                            <div className="hidden  px-6 lg:px-3 lg:absolute  w-60  pt-4 lg:block  peer-hover:block hover:block ">
                            {
                            subElement2.subElement&&
                            subElement2.subElements.map(subElement3=>
                          
                              <div onClick={isActive} >
                                  <li>
                                  <NavLink className='hover:text-red-800 ' to={subElement3.to}>{subElement3.name}</NavLink>
                                  </li>
                               </div>
                          
                               )}
                             </div>
                          </div> )}                        
                          
                      </li>    
                        }
                  </li>    
               ))
                }
                    </ul>
                  </div>
         
        </li>

        )
        )
        
    }
       
</>
  )
}

export default DropDownPrestation