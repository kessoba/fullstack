// Sidebar.js
import React from 'react';
import UserProfile from './userProfil';
import SidebarContent from './sidebare-contente';

function Sidebar() {
  return (
    <div className="flex bg-connect justify-between flex-col h-screen max-md:flex-row max-md:h-fit text-white">
      <SidebarContent className="fixed"/>
      <UserProfile className="max-md:hidden" />
    </div>
  );
}

export default Sidebar;
