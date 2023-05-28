import axios from "axios";


export default axios.create({
    baseURL: 'https://api.github.com',
    timeout: 10000,
    headers: { 'content-type': 'application/json' }
});