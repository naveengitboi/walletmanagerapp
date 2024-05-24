import axios from 'axios'
// https://walletmanagerapp-api.vercel.app/
//http://localhost:3001


const api = axios.create({
    baseURL: 'https://walletmanagerapp-api.vercel.app/',
    headers: {
        "Access-Control-Allow-Origin": "https://walletmanagerapp-api.vercel.app/",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Access-Control-Allow-Credentials': true,
    }
 })

export default api;
