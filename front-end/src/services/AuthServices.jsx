import axios from 'axios'
const SERVER_URL = 'https://red-product-k06u.onrender.com/api';

const registerUser = (data) => {
    return axios.post(`${SERVER_URL}/inscription`, data)
        .then(response => {
            console.log('Registration successful:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Error during registration:', error);
            throw error; // Re-throw the error for the calling code to handle
        });
}

const loginUser = (data) => {
    return axios.post(`${SERVER_URL}/connected`, data)
        .then(response => {
            console.log('Login successful:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Error during login:', error);
            throw error; // Re-throw the error for the calling code to handle
        });
}
const logoutUser = () => {
    return axios.post(`${SERVER_URL}/deconnexion`)
        .then(response => {
            console.log('Logout successful:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Error during logout:', error);
            throw error; // Re-throw the error for the calling code to handle
        });
}


const AuthServices = {
    registerUser,
    loginUser,
    logoutUser
};

export default AuthServices;
