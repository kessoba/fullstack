import axios from 'axios'
const SERVER_URL = 'http://localhost:5000/api';

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

const AuthServices = {
    registerUser,
    loginUser
};

export default AuthServices;
