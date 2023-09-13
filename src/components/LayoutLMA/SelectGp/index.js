import React from 'react'
import {Square3Stack3DIcon,UserCircleIcon,Cog6ToothIcon,}
 from "@heroicons/react/24/solid";
 import { AiOutlineHome } from "react-icons/ai"
import TabsTemplate from './TabsTemplate'
import TabsTemplate2 from './TabsTemplate2'
import ChildZImb from './ChildZImb'
import ChildZEvent from '../filterWrap';

//   const ChildrenZ=()=>{
//     const data = [
//       {
//         label: "Dashboard",
//         value: "dashboard",
//         icon: Square3Stack3DIcon,
//         desc: `helloooo`,
//       },
//       {
//         label: "Profile",
//         value: "profile",
//         icon: UserCircleIcon,
//         desc: `Because it's about motivating the doers. Because I'm here
//         to follow my dreams and inspire other people to follow their dreams, too.`,
//       },
//       {
//         label: "Estime",
//         value: "settings",
//         icon: Cog6ToothIcon,
//         desc: `We're not always in the position that we want to be at.
//         We're constantly growing. We're constantly making mistakes. We're
//         constantly trying to express ourselves and actualize our dreams.`,
//       },
//       // xxxx
//       {
//           label: "Prof",
//           value: "prof",
//           icon: UserCircleIcon,
//           desc: `Because it's about motivating the doers. Because I'm here
//           to follow my dreams and inspire other people to follow their dreams, too.`,
//         },
//         {
//           label: "Set",
//           value: "set",
//           icon: Cog6ToothIcon,
//           desc: `We're not always in the position that we want to be at.
//           We're constantly growing. We're constantly making mistakes. We're
//           constantly trying to express ourselves and actualize our dreams.`,
//         },
//     ];
//     return (
    
//     <div>
//      <TabsTemplate2 data={data}/>
//     </div>
// )}

//ChildrenZ  dernier div a rendre

// const ChildrenZ=()=>{
//   const dataExterieur=[
//     {desc:"Jardin" ,icon:<AiOutlineHome size={20}/>, style:'relative w-12 h-12  rounded-full border-2 border-slate-800' },
//     {desc:"picine" ,icon:<AiOutlineHome size={20}/> ,style:'relative w-12 h-12  rounded-full border-2 border-slate-800' },
//     {desc:"terasse" ,icon:<AiOutlineHome size={20}/>,style:'relative w-12 h-12  rounded-full border-2 border-slate-800' },
//   ]
//   const data = [
//     {
//       label: "Appartement",
//       value: "Appartement",
//       icon: Square3Stack3DIcon,
//       desc: ChildZ(dataExterieur),
//     },
//     {
//       label: "Maison",
//       value: "Maison",
//       icon: UserCircleIcon,
//       desc: ChildZ(dataExterieur),
//     },
//     {
//       label: "Immeuble",
//       value: "Immeuble",
//       icon: UserCircleIcon,
//       desc: ChildZ(),
//     },
//     {
//       label: "Terrain",
//       value: "Terrain",
//       icon: UserCircleIcon,
//       desc: ChildZ(),
//     },
//     {
//       label: "bâtiment",
//       value: "bâtiment",
//       icon: UserCircleIcon,
//       desc: ChildZ(),
//     },
//     {
//       label: "Hôtel",
//       value: "Hôtel",
//       icon: UserCircleIcon,
//       desc: ChildZ(),
//     },
//     {
//       label: "bureau & commerce",
//       value: "bureauCommerce",
//       icon: UserCircleIcon,
//       desc: ChildZ(),
//     },
//   ]

//   return(

//    <div className='bg-slate-300'>
//       <TabsTemplate2 data={data}/>
//    </div>
// )
// }

// childrenZImmobilier
 
//childZEvenementiel

  
// ChildrenY
function ChildrenY() {
      const data = [
        {
          label: "Louer",
          value: "dashboard",
          icon: Square3Stack3DIcon,
          desc: ChildZImb(),
        },
        {
          label: "Achetter",
          value: "profile",
          icon: UserCircleIcon,
          desc: ChildZImb(),
        },
        {
          label: "Estime",
          value: "Estime",
          icon: Cog6ToothIcon,
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
      ];
 
  return (
    <div className='bg-slate-400'>
        <TabsTemplate data={data}/>
    </div>
  )
}
function index() {
  const data = [
    {
      label: "Immobilier",
      value: "moi",
      icon: Square3Stack3DIcon,
      desc: ChildrenY(),
    },
    {
      label: "Pour mon evenement",
      value: "evenement",
      icon: UserCircleIcon,
      desc: ChildZEvent(),
    },
  ]

  return (
  <div className='bg-slate-600'>
    <TabsTemplate data={data}/>
  </div>
  )
}

export default index