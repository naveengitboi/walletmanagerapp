import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    firstName:{
        type:String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: false
    },
    twoFa: {
        type: String,
        required:false,
    },
    accountNumbers : [
        {
            type:String
        }
    ]
    
})


const userModel = new mongoose.model('User', userSchema)

export default userModel