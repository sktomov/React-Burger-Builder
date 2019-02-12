import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-e2fba.firebaseio.com/'
});

export default instance;