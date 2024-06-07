import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        "Access-Control-Allow-Origin": "https://walletmanagerapp-api.vercel.app/api",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Access-Control-Allow-Credentials': true,
    }
 })

export default api;


//http://localhost:3001/api (dev)
//'https://walletmanagerapp-api.vercel.app/api' (prod)