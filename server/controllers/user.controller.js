import userModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../middlewares/auth.js'

//sign in
const registerUser = async (req, res) => {
    try {
        const userData = req.body;
        const salts = 10;
        const hashedPwd = await bcrypt.hash(userData.password, salts)
        console.log(userData)
        const dataModified = {
            user_name: userData.userName,
            first_name: userData.firstName,
            last_name: userData.lastName,
            email: userData.email,
            password: hashedPwd
        }

        const newUser = new userModel(dataModified)
        const addedUser = await newUser.save()
        generateToken(res, {userId : addedUser._id});
        res.send('user added successfully')
        
    } catch (error) {
        res.send(error).status(400)
    }
}


//login
const loginUser = async (req, res) => {
    try {
        const userData = {
            user_name: req.body.username,
            password: req.body.password
        };
   
        const dbData = await userModel.findOne({ user_name: userData.user_name })

        if (dbData) {
            const isMatched = await bcrypt.compare(userData.password, dbData.password)
            if (isMatched) {
                generateToken(res,{ userId: dbData._id})
                res.send('Loginn Sucess').status(200)
            }
            else {
                res.send('passwords didnt match').status(400)
            }
        } else {
        
            res.status(400).json({msg: 'Something awful'})
        }

    } catch (error) {
        res.send(error).status(400)
    }
}


//getAll users
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.send(users);
    } catch (error) {
        console.log(error)
    }
}

//get one user
const getOwnUser = async (req, res) => {
    try {
        const id = req.userPayload
        // console.log(id)
        const user = await userModel.findById(id)
        res.send(user).status(200)
    } catch (error) {
        res.send(error)
    }
}

//update userdetails
const updateUser = async (req, res) => {
    try {
        const id = req.userPayload
        const userData = req.body
        const updateData = {
            user_name: userData.userName,
            first_name: userData.firstName,
            last_name: userData.lastName,
            ...userData
        }
        const updatedUser = await userModel.findByIdAndUpdate(id, updateData, { new: true })
        res.send(updatedUser)
    }
    catch (error) {
        res.send(error)
    }
}

//delete user account
const deleteUser = async (req, res) => {
    try {
        const id = req.userPayload
        await userModel.findByIdAndDelete(id)
        
        res.send('user deleted')
    } catch (error) {
        res.send(error)
    }
}


export { registerUser, loginUser, getAllUsers, updateUser, getOwnUser, deleteUser }