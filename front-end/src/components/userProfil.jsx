// UserProfile.js
import React from 'react';
import {useState,useEffect} from 'react'
import { getUserDetails } from '../Utils/getUser';

function UserProfile() {
  const[user,setUser] = useState()

  useEffect(() =>{
    const userDetails=getUserDetails()
      setUser(userDetails)
  },[])
  return (
    <div className="flex flex-col mb-24 max-md:hidden">
      <div className="border-t-2 border-white text-gray-100" id="bord"></div>
      <div className="flex gap-2 p-4">
        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{user?.Name} </h2>
        </div>
      </div>
    </div>
  );

}

export default UserProfile;
