import React from 'react'

export default function Cards({ icon, title, text,className }) {
  return (
    <div className=" bg-white shadow-md p-4 w-96 max-md:w-80 rounded-xl flex items-center">
        <div className={`mr-4 ${className} rounded-full p-5`}>{icon}</div>
        <div className='text-start'>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-500">{text}</p>
        </div>
      </div>
  );
};
