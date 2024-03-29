import React, { useEffect } from 'react'
import Sidebar from '../components/sideBare'
import Navbar from '../components/Navbar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { getUserDetails } from '../Utils/getUser'

export default function Template() {
const navigate= useNavigate()
 useEffect(()=>{
  const user = getUserDetails()
  if(!user){
    navigate("/")
  }
 })
  return (
    <div  className='flex max-md:flex-col '>
    <div className='lg:w-1/5  fixed  bottom-0 max-md:w-screen max-md:h-fit'>
    <Sidebar/>
    </div>
    <div className=' '>
    <div className='lg:w-4/5 fixed top-0 right-0 max-md:w-screen max-md:order-first'>
    <Navbar/>
    </div>
    <div>
    <Outlet/>
    </div>
    </div>
    </div>
  )
}
