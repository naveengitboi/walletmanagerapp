import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import transactionRouter from './routes/transaction.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'


//middlewares
const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
//db connection
const dbConnect = async () => {
    mongoose.connect(process.env.MONGO_URL)
    console.log('db Connected')
}


//routes

app.use('/api', userRouter)
app.use('/api', transactionRouter)


//listen 
app.listen(process.env.PORT || 8000, () => {
    console.log('port running at', process.env.PORT)
    dbConnect()
})