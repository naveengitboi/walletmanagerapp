import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api/',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Access-Control-Allow-Credentials': true,
    }
 })

export default api;