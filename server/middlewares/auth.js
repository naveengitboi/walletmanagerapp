import jwt from 'jsonwebtoken'

const verifyToken = async (req, res, next) => {

    const token = req.cookies.token;
    if(token){
       try {
           const isVerified = jwt.verify(token, process.env.SECRET_KEY);
           if (isVerified) {
               next();
           }

           console.log(isVerified)
       } catch (error) {
        console.log(error)
       }

    }
    else{
        res.send('Un authorized user! Either register or login')
    }

};

const generateToken = async (res, payload) => {
    const token = jwt.sign(payload, process.env.SECRET_KEY)
    res.cookie('token', token)
}




export {verifyToken, generateToken}