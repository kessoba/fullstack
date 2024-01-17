import React from 'react';
import { MdDashboard } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import Logo from "../assets/images/logo.png"
function Sidebar () {
  return (
    <div className="flex  justify-between flex-col h-screen  w-80 bg-gray-900 text-white">
        <div className="flex flex-col p-2">
            <div className="flex items-center gap-3">
                <img src={Logo} alt="" />
                <h1 className='text-2xl font-bold whitespace-nowrap text-opacity-20'>RED PRODUCT</h1>
            </div>
            <div className=" ">
                <ul className="  text-sm">
                <li className="rounded pt-8 pb-4  ">
                        <a href="#" className="flex items-center space-x-3 rounded-md">
                           Principal
                        </a>
                    </li>
                    <li className="rounded hover:bg-gray-100 hover:text-gray-700 ">
                        <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <MdDashboard className="w-5 h-5 fill-current dark:text-grey-400"/>
                            <span className="text-base hover:text-gray-700">Dashboard</span>
                        </a>
                    </li>
                    
                    <li className="rounded-sm mt-8 hover:bg-gray-100 hover:text-gray-700">
                        <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <RiHotelLine className=" w-5 h-5 fill-current dark:text-gray-400"/>
                            <span className="text-base hover:text-gray-700">Listes des Hotels</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col mb-24" >
        <div className="border-t-2 border-white text-gray-100" id="bord" ></div>
            <div className='flex gap-2 p-4 '>
            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                    <div className='flex flex-col'>
                <h2 className="text-lg font-semibold">Mariam Bah</h2>
                    <a href="#" className="text-xs hover:underline dark:text-gray-400">en ligne</a>
                    </div>
                
            </div>
        </div>
    </div>
  );
}

export default Sidebar;