import axios from 'axios'
//http://localhost:3001/api (dev)
//'https://walletmanagerapp-api.vercel.app/api' (prod)

const api = axios.create({
    baseURL: 'https://walletmanagerapp-api.vercel.app/api',
    // baseURL: 'http://localhost:3001/api',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Access-Control-Allow-Credentials': true,
    }
 })

export default api;
