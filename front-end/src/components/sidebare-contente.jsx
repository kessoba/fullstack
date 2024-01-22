// SidebarContent.js
import React from 'react';
import { MdDashboard } from "react-icons/md";
import { CiDesktop } from "react-icons/ci";
import Logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

function SidebarContent() {
  return (
    <div className="flex flex-col  gap-3  max-md:flex-row">
      <div className="flex items-center  pl-3 gap-2 mt-2">
        <img src={Logo} alt="" />
        <h1 className="text-2xl font-bold whitespace-nowrap text-opacity-20">RED PRODUCT</h1>
      </div>
      <div className=" ">
        <ul className="max-md:flex text-sm gap-5">
          <li className="rounded pt-8 pb-4 max-md:hidden">
            <a href="#" className="flex text-2xl items-center pl-3 space-x-3 rounded-md">
              Principal
            </a>
          </li>
          <li className="hover:bg-gray-100 hover:text-gray-700 max-md:flex max-md:items-center max-md:space-x-3">
            <Link to='/dashboard' className="flex items-center pl-3 space-x-2 rounded-md ">
              <MdDashboard className="w-5 h-5 fill-current dark:text-grey-400 max-md:w-10 max-md:h-10" />
              <span className="text-xl hover:text-gray-700 max-md:hidden p-1">Dashboard</span>
            </Link>
          </li>
          <li className=" pt-2 hover:bg-gray-100 hover:text-gray-700">
            <Link to='HotelContent' className="flex pl-3  items-center space-x-2 rounded-md">
              <CiDesktop  className="w-5 h-5 fill-current dark:text-gray-400 max-md:w-10 max-md:h-10" />
              <span className="text-xl hover:text-gray-700  max-md:hidden max-md:p-0">Listes des Hotels</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>

  );

}

export default SidebarContent;
