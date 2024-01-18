import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Connected from '../components/connected'
import Inscription from '../components/inscription'
import MotDePasse from '../components/Mot-de-passe'
import Template from './Template'
import HotelContent from '../components/HotelContent'

export default function Routes() {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Connected/>,

        },
        {
            path:"/inscription",
            element:<Inscription/>,

        },
        {
            path:"/MotDePasse",
            element:<MotDePasse/>,

        },
        {
            path:"/Dashboard",
            element:<Template/>,
            children: [
                {
                    index: true,
                    element:<HotelContent/>,
        
                },
              ],

        }

    ])
  return (
    <RouterProvider  router={router}/>
  )
}
