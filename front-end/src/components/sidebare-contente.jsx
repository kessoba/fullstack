// SidebarContent.js
import React from 'react';
import { MdDashboard } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import Logo from "../assets/images/logo.png";

function SidebarContent() {
  return (
    <div className="flex flex-col pl-2 max-md:flex-row  ">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="" />
        <h1 className='text-2xl font-bold whitespace-nowrap text-opacity-20'>RED PRODUCT</h1>
      </div>
      <div className=" ">
        <ul className=" max-md:flex  text-sm">
          <li className="rounded pt-8 pb-4 max-md:hidden ">
            <a href="#" className="flex text-2xl items-center space-x-3 rounded-md">
              Principal
            </a>
          </li>
          <li className="rounded hover:bg-gray-100 hover:text-gray-700 max-md:flex max-md:items-center max-md:space-x-3 ">
            <a href="#" className="flex items-center p-1 space-x-2  rounded-md">
              <MdDashboard className="w-5 h-5 fill-current dark:text-grey-400 max-md:w-10  max-md:h-10"/>
              <span className="text-xl hover:text-gray-700 max-md:hidden p-1">Dashboard</span>
            </a>
          </li>
          <li className="rounded-sm mt-8 hover:bg-gray-100 hover:text-gray-700">
            <a href="#" className="flex items-center p-1 space-x-2 rounded-md">
              <RiHotelLine className=" w-5 h-5 fill-current dark:text-gray-400 max-md:w-10  max-md:h-10"/>
              <span className="text-xl hover:text-gray-700 p-1 max-md:hidden max-md:p-0">Listes des Hotels</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarContent;
