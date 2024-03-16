import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express() 

console.log(process.env.PORT)


app.get('/', (req,res) => {
    res.send('Hello world asdfasd')
})

app.listen(process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT)
})