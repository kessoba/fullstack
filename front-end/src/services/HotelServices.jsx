import axios from 'axios';
import {getUserDetails} from "../Utils/getUser"
const SERVER_URL = 'https://red-product-k06u.onrender.com/api/hotel';

const createHotel = (hotelData) => {
    return axios.post(`${SERVER_URL}/createhotel`,hotelData)
        .then(response => {
            console.log('Hotel creation successful:',response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Error during hotel creation:', error);
            throw error; // Re-throw the error for the calling code to handle
        });
}

const getHotels = () => {
    const user = getUserDetails();
    if (user && user.userId) {
        return axios.get(`${SERVER_URL}/get-hotel/${user.userId}`)
            .then(response => {
                console.log('Hotel retrieval successful:', response.data);
                return response.data;
            })
            .catch(error => {
                console.error('Error during hotel retrieval:', error);
                throw error; // Re-throw the error for the calling code to handle
            });
    } else {
        throw new Error('User not logged in');
    }
}

const HotelServices = {
    createHotel,
    getHotels
}

export default HotelServices;