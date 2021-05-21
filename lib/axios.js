import axios from 'axios'

const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default instance
