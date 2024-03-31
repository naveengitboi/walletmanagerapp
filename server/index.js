import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import cors from 'cors'


//middlewares
const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())


//db connection
const dbConnect = async () => {
    mongoose.connect(process.env.MONGO_URL)
    console.log('db Connected')
}


//routes
app.get('/', (req, res) => {
    res.send('connected')
})
app.use('/api', userRouter)





//listen 
app.listen(process.env.PORT || 8000, () => {
    console.log('port running at', process.env.PORT)
    dbConnect()
})