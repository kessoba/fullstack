import React from 'react';

const CardHotel = ({ image, name, price, address }) => {
    return (
        <div className=" rounded-xl h-fit w- overflow-hidden shadow-lg m-2 w-70 max-md:w-80 rounded-xl">
            <div className='border-b  p-6'>
            <img className="w-full" src={image} alt={name} />
            </div>
            <div className="px-6 py-6 ">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">Prix: {price}</p>
                <p className="text-gray-700 text-base">Adresse: {address}</p>
            </div>
        </div>
    );
};

export default CardHotel;
