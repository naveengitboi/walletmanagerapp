import express from 'express';
import jwt from 'jsonwebtoken'


const authenticate = (req, res, next) => {
    let token;

    let headers = req.headers
    if(headers){
        let bearerToken = headers.split(' ')[1];
        if(bearerToken){
            token = bearerToken;
            next()
        }else{
            res.send('Error in fetching token or token expired')
        }
    }else{
        res.send('no token access, please register if new')
    }
    
}

export default authenticate