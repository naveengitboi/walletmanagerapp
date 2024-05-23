import axios from 'axios'
// https://walletmanagerapp-api.vercel.app/
//http://localhost:3001
const api = axios.create({
    baseURL: 'https://walletmanagerapp-api.vercel.app/api/',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
 })

export default api;
