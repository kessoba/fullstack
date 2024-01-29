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
    <div className="">
      {hotel && hotel.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {hotel.map((hotel, index) => (
            <CardHotel
              key={index}
              image={hotel.image}
              name={hotel.name}
              price={hotel.price}
              address={hotel.address}
            />
          ) )}
        </div>
      ): <p className='mt-44'>il nya pas dhotel</p>}
    </div>
  );
}

export default HotelContent;
