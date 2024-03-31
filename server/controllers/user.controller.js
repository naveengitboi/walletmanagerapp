import userModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//sign in
const registerUser = async (req, res) => {
    try {
        const userData = req.body;
        const orgPwd = userData.password
        const salts = 10;
        const hashedPwd = await bcrypt.hash(orgPwd, salts)
        const dataModified = {
            user_name: userData.userName,
            first_name: userData.firstName,
            last_name: userData.lastName,
            email: userData.email,
            password: hashedPwd
        }

        const newUser = new userModel(dataModified)
        await newUser.save()
        res.send('user added successfully')
    } catch (error) {
        res.send(error).status(400)
    }
}


//login
const loginUser = async (req, res) => {
    try {
        const userData = {
            user_name: req.body.userName,
            password: req.body.password
        };
        const dbData = await userModel.findOne({ user_name: userData.user_name })
        
        if (dbData) {
            const isMatched = await bcrypt.compare(userData.password, dbData.password)
            if (isMatched) {
                const token = jwt.sign({ userId: dbData._id, userName: dbData.user_name }, process.env.SECRET_KEY)
                console.log(token)
                res.send('Loginn Sucess').status(200)
            }
            else {
                res.send('passwords didnt match').status(400)
            }
        } else {
            res.send('user doesnt exist yet')
        }

    } catch (error) {
        res.send(error).status(400)
    }
}


//getAll users
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        res.send(users).status(200)
    } catch (error) {
        res.send(error)
    }
}

//get one user
const getOwnUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(id)
        res.send(user).status(200)
    } catch (error) {
        res.send(error)
    }
}

//update userdetails
const updateUser = async (req, res) => {
    try {
        const { id } = req.params
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
        const { id } = req.params;

        await userModel.findByIdAndDelete(id)
        res.send('user deleted')
    } catch (error) {
        res.send(error)
    }
}


export { registerUser, loginUser, getAllUsers, updateUser, getOwnUser, deleteUser }