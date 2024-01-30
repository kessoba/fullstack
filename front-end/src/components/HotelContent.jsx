import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../Utils/getUser';
import {getErrorMessage } from './getErrorMessage';
import { message } from 'antd';
import CardHotel from './cardHotel';
import HotelServices from "../services/HotelServices"

function HotelContent () {
  const navigate = useNavigate();
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    const user = getUserDetails(); 
    const getHotels = async () => {
      try {
        const response = await HotelServices.getHotels(user.userId);
        setHotel(response.data);
      } catch (err) {
        if (err.response && err.response.status === 403) {
          console.log("Erreur d'autorisation : Token invalide ou expiré");
          navigate('/dashboard/HotelContent');
        } else {
          console.log("Erreur lors de la récupération des hôtels :", err);
          message.error(getErrorMessage(err));
        }
      }
    };
    if (user) {
      getHotels();
    } else {
      navigate('/dashboard/HotelContent');
    }
  }, [navigate]); 

  return (
    <div className="ml-80 mr-6 mt-40 max-md:ml-8  scrolled max-md:mr-0 max-md:mt-40">
      {hotel && hotel.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {hotel.map((hotel, index) => (
            <CardHotel
              key={index}
              image={hotel.image}
              name={hotel.NomHotel}
              price={hotel.Prix}
              address={hotel.Adresse}
            />
          ) )}
        </div>
    ):<div className='text-center ml-96 mt-80 '><h2 className=' text-3xl '>IL N Y'A PAS D'HOTELS AJOUTES !!</h2></div> }
    </div>
  );
}

export default HotelContent;
