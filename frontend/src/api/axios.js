import axios from 'axios'
//http://localhost:3001/api (dev)
//'https://walletmanagerapp-api.vercel.app/api' (prod)

const api = axios.create({
    baseURL: 'https://walletmanagerapp-api.vercel.app/api',
    headers: {
        "Access-Control-Allow-Origin": "https://walletmanagerapp.vercel.app",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Access-Control-Allow-Credentials': true,
    }
 })

export default api;
