import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID xHUNI3i1zt2XSgRF5kBCjycEmETI9MGESgdNj5xwTKM',
    }
});