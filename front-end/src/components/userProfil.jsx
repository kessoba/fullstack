// UserProfile.js
import React from 'react';

function UserProfile() {
  return (
    <div className="flex flex-col mb-24 max-md:hidden">
      <div className="border-t-2 border-white text-gray-100" id="bord"></div>
      <div className="flex gap-2 p-4">
        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Mariam Bah</h2>
          <a href="#" className="text-xs hover:underline dark:text-gray-400">
            en ligne
          </a>
        </div>
      </div>
    </div>
  );

}

export default UserProfile;
