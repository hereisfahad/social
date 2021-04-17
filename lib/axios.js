import axios from 'axios'
import Cookies from 'js-cookie';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': Cookies.get('token')
    }
});

export default instance
