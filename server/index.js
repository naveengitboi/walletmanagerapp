import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'


//files imports
import errorMiddleware from './middlewares/errorMiddleware.js';
import errorHandler from './utils/customError.js'
import userRouter from './routes/user.route.js'
import transactionRouter from './routes/transaction.route.js'
//middlewares
//"https://walletmanagerapp.vercel.app"
const app = express()
app.use(express.json())
dotenv.config()
app.use(cookieParser('wmanagerapp'))
app.use(cors(
    {
        origin: ["http://localhost:3000", "https://walletmanagerapp.vercel.app"],
        credentials: true,
  
    }
))

// app.use(express.urlencoded({ extended: false }));

//db connection
const dbConnect = async () => {
    mongoose.connect(process.env.MONGO_URL)
    console.log('db Connected')
}


//routes
app.use('/', (req,res) => {
    res.send('WalletManager')
})
app.use('/api', userRouter)
app.use('/api', transactionRouter)
app.all('*', (req, res, next) => {
    const err = new errorHandler(`Cannot find this ${req.originalUrl} page`, 404)
    next(err)
})

app.use(errorMiddleware)

//listen 
app.listen(process.env.PORT || 8000, () => {
    console.log('port running at', process.env.PORT)
    dbConnect()
})
