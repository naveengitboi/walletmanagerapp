import jwt from 'jsonwebtoken'



const verifyToken = async (req, res, next) => {
    
    if(false){
        //none
        next()
    }
};

const generateToken = async (res, payload) => {

    const token = jwt.sign(payload, process.env.SECRET_KEY)
    res.cookie('token', token)
}


export {verifyToken, generateToken}