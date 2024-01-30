import React from 'react';

const CardHotel = ({image,name,price,address}) => {
    return (
        <div className=" rounded-xl h-fit text-start overflow-hidden shadow-lg m-2 w-70 max-md:w-80 ">
            <div className='border-b p-10'>
            <img className="w-full" src={image} alt={name} />
            </div>
            <div className="px-6 py-10 ">
                <p className="text-gray-700 text-base">{address}</p>
                <h2 className="font-bold text-xl mb-2">{name}</h2>
                <p className="text-gray-700 text-base">{price}</p>
              
            </div>
        </div>
    );
};

export default CardHotel;
