// Navbar.js
import React from 'react';
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import CardNav from './cardNav';
import WelcomeSection from './WelcomSection';
import { useLocation, useNavigate } from 'react-router-dom';


function Navbar() {

const navigate= useNavigate()

const handleLogout = () =>{
  localStorage.removeItem('users')
  navigate('/')
}
  const location= useLocation();
    const path=location.pathname
    const getTitle=() =>{

        switch (path) {
            case "/dashboard":
                return "Dashboard";
            case "/dashboard/HotelContent":
                return 'Listes des hotels';
            default:
                return 'Page introuvable';
        }
    }
   
  return (
    <div className='shadow bg-white'>
    <nav className=" shadow bg-white p-4 flex items-center justify-between  ">
      <div className="flex items-center">
        <span className=" text-black text-xl font-bold leading-75 tracking-0 text-left"> {getTitle()} </span> 
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative text-gray-600  focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineSearch className="h-5 w-5" />
          </span>
          <input type="text" className="py-2 w-72 max-md:w-32 px-2 pl-8 text-sm text-white border rounded-full  focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search" />
        </div>
        <AiOutlineBell className="text-black h-6 w-6" />
        <div className="flex items-center space-x-2">
        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" /> 
        </div>
        <MdOutlineLogout onClick={handleLogout} className='text-black h-6 w-6'/>
      </div>
    </nav>
     <div className='m-6'>
     <WelcomeSection
        title='Bienvenu sur RED Product'
        description='Lorem ipsum dolor sit amet.'
      />
      </div>
 
    </div>
     

  );
}

export default Navbar;
