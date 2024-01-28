import React from 'react';
import CardHotel from './cardHotel';

const HotelContent = () => {
    const hotels = [
        {
            image: "url_de_votre_image",
            name: "Nom de l'hôtel",
            price: "Prix de l'hôtel",
            address: "Adresse de l'hôtel"
        },
        {
          image: "url_de_votre_image",
          name: "Nom de l'hôtel",
          price: "Prix de l'hôtel",
          address: "Adresse de l'hôtel"
        },
        {
          image: "url_de_votre_image",
          name: "Nom de l'hôtel",
          price: "Prix de l'hôtel",
          address: "Adresse de l'hôtel"
        },
        {
          image: "url_de_votre_image",
          name: "Nom de l'hôtel",
          price: "Prix de l'hôtel",
          address: "Adresse de l'hôtel"
        },
        // Ajoutez plus d'objets hôtel ici...
    ];

    return (
        <div className="ml-80  mt-40 max-md:ml-8  scrolled max-md:mr-0 max-md:mt-40">
           <div className="grid  grid-cols-1 scrolled gap-6 p-3 h-auto md:grid-cols-2  xl:grid-cols-4 sm:p-3 mx-auto">
            {hotels.map((hotel, index) => (
                <CardHotel
                    key={index}
                    image={hotel.image}
                    name={hotel.name}
                    price={hotel.price}
                    address={hotel.address}
                />
            ))}
            </div>
        </div>
    );
};

export default HotelContent;
