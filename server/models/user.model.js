import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        unique: true,
        required: true
    },
    first_name:{
        type:String,
        required: true
    },
    last_name: {
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
    }
    
})


const userModel = new mongoose.model('User', userSchema)

export default userModel