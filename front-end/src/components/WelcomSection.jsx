import React from 'react';
import ModalAjout from './ModalAjout';
import { useLocation } from 'react-router-dom';
import {useState} from 'react'

const WelcomeSection = ({ title, description }) => {

  const [isModalOpen, setModalOpen] = useState(false);
    const location= useLocation();
    const path=location.pathname
    const getTitle= () => {
        switch (path) {
            case "/dashboard":
                return  [title="Bienvenu sur RED product"];
            case "/dashboard/HotelContent":
                return  title='Hotels';
            default:
                return 'Page introuvable';
        }
    }
    const getTrack= () => {
      switch (path) {
          case "/dashboard":
              return  [description="lorem upsum dolor is"];
      }
  }
  return (
    <div className='pb-2 flex justify-between items-start'>
      <div className=''>
        <h2 className='text-2xl text-start font-semi-bold'>{getTitle()}</h2>
        <p className='text-start'>{getTrack()}</p>
      </div>
      <div className='ml-4'>
      {path !== "/dashboard" && <ModalAjout isModalOpen={isModalOpen} setModalOpen={setModalOpen}  />}
      </div>
    </div>
  );
};

export default WelcomeSection;
