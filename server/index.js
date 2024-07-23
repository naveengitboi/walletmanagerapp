import express, { urlencoded } from 'express'
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
//dont put / at the end, that sucks
const app = express()
app.use(express.json())
dotenv.config()
app.use(cookieParser('wmanagerapp'))

// "http://localhost:3000",

const allowedOrigins = ["http://localhost:3000", "https://walletmanagerapp.vercel.app"]

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}

app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));

//db connection
console.log(process.env.MONGO_URL)
const dbConnect = async () => {
  const a = await mongoose.connect(process.env.MONGO_URL)
  console.log('db Connected')
}


//routes
app.get('/', (req, res) => {
  res.send('Welcome to home page of wallet manager app')
})
app.use('/api/users', userRouter)
app.use('/api/transaction', transactionRouter)
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
