import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1cab7.firebaseio.com/'
});

export default instance;