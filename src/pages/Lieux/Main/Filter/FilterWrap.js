import React from 'react'
import { AiOutlineHome,AiFillSketchCircle } from "react-icons/ai"
import Selected from './Selected'


function FilterWrap({propsMain}) {


     //All data .............................
      // villes
      
      const  villes= [
        {
          id: 1,
          name: 'Abidjan',
          label: 'ville ?',
        },
        {
          id: 2,
          name: 'Daloua',
        },
        {
          id: 2,
          name: 'Bouake',
        },
        {
          id: 2,
          name: 'Yamoussoukro',
        }
      ]

      // quartier 
      const quartier = [
        {
          id: 2,
          name: 'Assinie',
          label: 'Quartier?',
        },
        {
          id: 1,
          name: 'Abobo',
        },
        {
          id: 2,
          name: 'Bingerville',
        },
        {
          id: 2,
          name: 'Cocody',
        },
        {
          id: 2,
          name: 'Koumassi',
        },
        {
          id: 2,
          name: 'port-bouet',
        },
        {
          id: 2,
          name: 'Marcory',
        },
        {
          id: 2,
          name: 'Yopougon',
        },
        {
          id: 2,
          name: 'Bassam',
        },
        {
          id: 2,
          name: 'Plateau',
        },
      
      ]

      // TypeEvent
        const TypeEvent = [
            {
              id: 1,
              name: 'Annivaisere',
              avatar:
              <AiFillSketchCircle/>,
              label:'Evenement',
            },
            {
              id: 2,
              name: 'Mariage',
              avatar:
              <AiFillSketchCircle/>,
            },
            {
              id: 3,
              name: 'Soirée Privée',
              avatar:
              <AiFillSketchCircle/>,
            },
            {
              id: 4,
              name: 'Entreprise',
              avatar:
              <AiFillSketchCircle/>,
            },
            // {
            //   id: 2,
            //   name: 'Arlene Mccoy',
            //   avatar:
            //     'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            // },
          
           
          ]

      // Typologie

        const TypeLieux = [
          {
            id: 1,
            name: 'Appartement',
            avatar:
            <AiFillSketchCircle/>,
            label:'Type(s) de Lieux ?',
          },
          {
            id: 2,
            name: 'Atelier',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 3,
            name: 'Boutique',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 4,
            name: 'Cave',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 5,
            name: 'Espace avec exterieur',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 6,
            name: 'Espace avec cusine',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 7,
            name: 'Espace avec picine',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 8,
            name: 'Hotel',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 9,
            name: 'Jardin',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 10,
            name: 'restaurent',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 11,
            name: 'loft',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 12,
            name: 'Maison',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 13,
            name: 'Villa',
            avatar:
            <AiFillSketchCircle/>,
          },
          {
            id: 14,
            name: 'Terrasse',
            avatar:
            <AiFillSketchCircle/>,
          },
        ]
        //Hebergement
        const Hebergement=[
          {
            id: 1,
            name: 'non',
            label:'Hébergement',
          },
          {
            id: 1,
            name: 'oui',
          },

        ]
    
      
  return (

    <div className=' flex flex-col gap-2  md:flex-row '>
 
      {/*............ test-Selected ....................*/}
       {/* ville */}
        {/* <MyCombobox region={region} selectedville={selectedville} handlerChange={handlerChange}/> */}
      {/* <Selected typeName={'region'} data={villes} selectedville={selectedVille} handlerChange={handlerChange}/>
      <Selected typeName={'region'} data={villes} selectedville={selectedVille} handlerChange={handlerChange}/> */}
  
       <Selected NameSelect={'region'} data={villes} selected={propsMain.selectedVille} handlerChange={propsMain.handlerChangeVille}/>

        {/* Nombre invité */}
         {/* <InputNInvite/> */}
        {/* TypeEvent */}
        <Selected NameSelect={'Type evenemt'} data={TypeEvent} selected={propsMain.selectedTEvent} handlerChange={propsMain.handlerChangeTEvent}/>


        {/* <Selected typeName={'Type event'} TypeEvent={TypeEvent} selectedTEvent={selectedTEvent}/> */}

        {/* quartier */}
        <Selected NameSelect={'Quartier'} data={quartier} selected={propsMain.selectedQuartier} handlerChange={propsMain.handlerChangeQuartier}/>
         {/* Budget */}
         {/* <InputText text='Budget ?'/> */}
        {/* Critere */}
        {/* TypeLieux */}
        <Selected NameSelect={'Type lieux'} data={TypeLieux} selected={propsMain.selectedTLieux} handlerChange={propsMain.handlerChangeTLieux}/>
        {/* Environnement */}
         {/* <Selected people={TypeEvent} selectedTEvent={selectedTEvent} typeName='Type environement'/> */}
        {/* Hebergement */}
        <Selected NameSelect={'Hebergement'} data={Hebergement} selected={propsMain.selectedHebergement} handlerChange={propsMain.handlerChangeHebergement}/>
        {/* Effacer */}
        <div className='hidden lg:block relative top-[28px]'>
          <button onClick={propsMain.resetStateAllState} className=' border-2 px-3 py-1 rounded-lg grow'>
             Effacer
          </button>
        </div>

    </div>
  )
}


export default FilterWrap
