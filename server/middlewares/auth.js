import jwt from 'jsonwebtoken'

const verifyToken = async (req, res, next) => {
    const token = req.cookies.token || req.signedCookies.token;
    if(token){
       try {
           const isVerified = jwt.verify(token, process.env.SECRET_KEY);
           if (isVerified) {
            req.userPayload = isVerified.userId
            next();
           }
           
       } catch (error) {
        console.log(error)
       }

    }
    else{
        res.send('Un authorized user! Either register or login')
    }

};

const generateToken = async (res, payload) => {
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    console.log(token)
    res.cookie('token', token, {
        httpOnly: true, // The cookie only accessible by the web server
        signed: true // Indicates if the cookie should be signed
    })

}


export {verifyToken, generateToken}