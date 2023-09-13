import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css'
import Layout from './components/Layout/index';
import ErrorPage from './Error-page';
import Acceuil from './pages/Acceuil/index'
import EvenementsPro from './pages/EvenementPro/index'
import SoiréePrivées from './pages/SoireePrivee/index'
import Anniversaires from './pages/Anniversaire/index'
import Brunch from './pages/Brunch/index'
import Lieux from './pages/Lieux/index'
import LocationsMateriels from './pages/LocationMateriel/index'
import Traiteurs from './pages/Traiteur/index'
import Staffs from './pages/Staffs/index'
import Decoration from './pages/Decoration/index'
import Animations from './pages/Animation/index'
import Contact from './pages/Contact/index'
import ContainerLieux , {loader1 as routLoader} from './components/ContainerLieux'
import LieuxDetail from './components/LieuxDetail/index';
import PresentationLieux from './components/PresentationLieux/index';
//import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index:true,
        element: <Acceuil/>,
      } ,
      
      {
        path: "evenement-d'entreprise" ,
        element: <EvenementsPro/>,
      } ,
      {
        path: "soirée-privée" ,
        element: <SoiréePrivées />,
      } ,
      {
        path: "anniversaires" ,
        element: <Anniversaires/>,
      } ,
    
      {
        path: "brunch" ,
        element: <Brunch/>,
      } ,
      {
        path: "trouver-lieux" ,
        element:<Lieux/>
        
      },
      {
        path: ":LieuxDetail" ,
        element:<LieuxDetail/>
        
      },
      {
        path: "location-materiels" ,
        element: <LocationsMateriels/>,
      } ,
      {
        path: "traiteurs" ,
        element: <Traiteurs/>,
      } ,
      {
        path: "staffs" ,
        element: <Staffs/>,
      } ,
      {
        path: "decoration" ,
        element: <Decoration/>,
      } ,
      {
        path: "animations" ,
        element: <Animations/>,
      } ,
      {
        path: "contact" ,
        element: <Contact/>,
      } ,
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
