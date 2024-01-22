// Sidebar.js
import React from 'react';
import UserProfile from './userProfil';
import SidebarContent from './sidebare-contente';

function Sidebar() {
  return (
    <div className="flex  bg-connect justify-between flex-col max-md:h-fit max-md:flex-row md:h-2 text-white ">
      <SidebarContent className="" />
      <UserProfile className="max-md:hidden" />
    </div>
  );

}

export default Sidebar;
