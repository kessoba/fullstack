import axios from 'axios'
const SERVER_URL = 'https://red-product-k06u.onrender.com/api/hotel';
const createhotel = () => {
    return axios.post(`${SERVER_URL}/createhotel`)
        .then(response => {
            console.log('create successful:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Error during creation:', error);
            throw error; // Re-throw the error for the calling code to handle
        });
}
const gethotels = () => {
    return axios.post(`${SERVER_URL}/get-hotel/`+ userId)
        .then(response => {
            console.log('create successful:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Error during creation:', error);
            throw error; // Re-throw the error for the calling code to handle
        });
}
const HotelServices = {
    createhotel,
    gethotels
}
module.exports = HotelServices