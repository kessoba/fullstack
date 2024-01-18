import React from 'react'
import Sidebar from '../components/sideBare'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function Template() {
  return (
    <div  className='flex max-md:flex-col'>
    <div className='lg:w-1/5 max-md:w-screen '>
    <Sidebar/>
    </div>
    <div className='w-4/5 max-md:w-screen max-md:order-first '>
    <div className=''>
    <Navbar/>
    </div>
    <div className=''>
    <Outlet/>
    </div>
    </div>
    </div>
  )
}
