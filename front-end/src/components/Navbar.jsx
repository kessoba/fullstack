// Navbar.js
import React from 'react';
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";

function Navbar() {
  return (
    <nav className=" shadow p-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className=" text-black text-xl font-medium leading-75 tracking-0 text-left">Dashboard</span>
        
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

        <MdOutlineLogout className='text-black h-6 w-6'/>
      </div>
    </nav>
  );
}

export default Navbar;
