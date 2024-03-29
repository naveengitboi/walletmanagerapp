import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'



//middlewares
const app = express()
app.use(express.json())
dotenv.config()


//db connection
const dbConnect = async () => {
    mongoose.connect(process.env.MONGO_URL)
    console.log('db Connected')
}


//routes
app.get('/', (req,res) => {
    res.send('connected')
})
app.use('/api', userRouter)





//listen 
app.listen(process.env.PORT || 8000, () => {
    console.log('port running at', process.env.PORT )
    dbConnect()
})