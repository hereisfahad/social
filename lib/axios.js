import axios from 'axios'
import Cookies from 'js-cookie';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

instance.interceptors.request.use(function (config) {
    config.headers['token'] = Cookies.get('token')
    return config;
});

export default instance
