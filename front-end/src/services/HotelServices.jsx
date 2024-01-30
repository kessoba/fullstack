import axios from 'axios';

const SERVER_URL = 'https://red-product-k06u.onrender.com/api/hotel';

const createHotel =  (formData) => {
        return axios.post(`${SERVER_URL}/createhotel`, formData); 

};

const getHotels = () => {  
 return axios.get(`${SERVER_URL}/get-hotel/${user.userId}`);
           
};

const HotelServices = {
    createHotel,
    getHotels
};

export default HotelServices;
