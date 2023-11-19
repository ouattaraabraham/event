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
import Mariage from './pages/Mariage/index'
import Lieux from './pages/Lieux/index'
import MesFavoris from './pages/MesFavoris'
import Traiteurs from './pages/Traiteur/index'
import Staffs from './pages/Staffs/index'
import Decoration from './pages/Decoration/index'
import Animation from './pages/Animations/Animation'
import AnimationArtiste from './pages/Animations/AnimationArtiste'
import Detail from './pages/Animations/Detail'

import Contact from './pages/Contact/index'
import LieuxDetail from './pages/LieuxDetail/index';

import LocationMateriel from './pages/LocationMateriel/PageGp1/index'
import LocationMaterielGp2 from './pages/LocationMateriel/PageGp2/index'

import LocationMaterielArticles from './pages/LocationMateriel/PageArticles/index'


// import element Redux & persistStaor

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import {store} from './store/store'

// console.log("storee :" +store.counter);

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
        path: "evenement-professionnels" ,
        element: <EvenementsPro/>,
      } ,
      {
        path: "mariage" ,
        element: <Mariage/>,
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
        path: "trouver-lieux" ,
        element:<Lieux/>
        
      },
      {
        path: "trouver-lieux/mes-favoris" ,
        element:<MesFavoris/>
        
      },
      {
        path: "lieux/:LieuxDetail" ,
        element:<LieuxDetail/>
        
      },
      {
        path: "location-materiels" ,
        element: <LocationMateriel/>,
      } ,
      {
        path: "location-materiels/:materiel" ,
        element: <LocationMaterielGp2/>,
      } ,
      {
        path: "location-materiels/:materiel/articles" ,
        element: <LocationMaterielArticles/>,
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
        element: <Animation/>,
      } ,
      {
        path: "animations-artistes" ,
        element: <AnimationArtiste/>,
      } ,
      {
        path: "animations-artistes/detail" ,
        element: <Detail/>,
      } ,
      {
        path: "contact" ,
        element: <Contact/>,
      } ,
    ]
  },
]);


let persistor=persistStore(store)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor} >  
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
