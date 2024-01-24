// Nouveau composant WelcomeSection.js
import React from 'react';
import ModalAjout from './ModalAjout';
import { useLocation } from 'react-router-dom';
import { modelNames } from 'mongoose';

const WelcomeSection = ({ title, description }) => {
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
  return (
    <div className='m-4 flex justify-between items-start'>
      <div className=''>
        <h2 className='text-3xl text-start font-semi-bold'>{getTitle()}</h2>
        <p className='text-start'>{description}</p>
      </div>
      <div className='ml-4'>
      <ModalAjout/>
      </div>
    </div>
  );
};

export default WelcomeSection;
