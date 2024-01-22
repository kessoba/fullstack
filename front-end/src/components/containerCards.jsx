import React from 'react';
import { MdDashboard, MdHotel } from 'react-icons/md';
import Cards from './Cards';
import { IoMdMailOpen } from "react-icons/io";
import { TbLetterP } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";


const data = [
  {
    icon: <IoMdMailOpen  className="text-white w-6 h-6" />,
    title: '125 Formulaires',
    text: 'Je ne sais pas quoi mettre.',
    className:'bg-purple-400'
  },
  {
    icon: <TbLetterP className="text-white w-6 h-6" />,
    title: '40 Messages',
    text: 'Je ne sais pas quoi mettre.',
    className:'bg-emerald-500'
  },
  {
    icon: <FaUserFriends  className="text-white w-6 h-6" />,
    title: '600 utilisateurs',
    text: 'Je ne sais pas quoi mettre.',
    className:'bg-amber-400'
  },
  {
    icon: <IoMdMailOpen  className="text-white w-6 h-6" />,
    title: '25 E-mails',
    text: 'Je ne sais pas quoi mettre.',
    className:'bg-red-600'
  },
  {
    icon: <TbLetterP className="text-white w-6 h-6" />,
    title: '40 Hotels',
    text: 'Je ne sais pas quoi mettre.',
    className:'bg-fuchsia-700'
  },
  {
    icon: <FaUserFriends className="text-white w-6 h-6" />,
    title: '02 Entités',
    text: 'Je ne sais pas quoi mettre.',
    className:'bg-blue-600'
  },
];
function ContainerCards() {
  return (
  <div className='ml-80 mr-6 mt-40 max-md:ml-8  scrolled max-md:mr-0 max-md:mt-40'>
    <div className="grid  grid-cols-1 scrolled gap-6 p-3 h-auto md:grid-cols-2  xl:grid-cols-3 sm:p-3 mx-auto  ">
      {data.map((cardData, index) => (
        <Cards key={index} {...cardData} />
      ))}
    </div>
  </div>
  );
}

export default ContainerCards;
