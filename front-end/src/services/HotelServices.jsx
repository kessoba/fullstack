import axios from 'axios';

// const SERVER_URL = 'https://red-product-k06u.onrender.com/api/hotel';
const SERVER_URL = 'http://localhost:5000/api/hotel';

const createHotel =  (formData) => {
        return axios.post(`${SERVER_URL}/createhotel`, formData); 

};

const getHotels = (userId) => {  
 return axios.get(`${SERVER_URL}/get-hotel/${userId}`);
           
};

const HotelServices = {
    createHotel,
    getHotels
};

export default HotelServices;
