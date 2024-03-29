import express from 'express'

import { registerUser, loginUser, getAllUsers, updateUser, getOwnUser, deleteUser } from "../controllers/user.controller.js";



const router = express.Router()

//get users
router.get('/usersdata', getAllUsers)
//get owner
router.get('/user/:id', getOwnUser)

//updateUserDetails
router.put('/update/:id', updateUser)

//delete user
router.delete('/remove/:id', deleteUser)

//register
router.post('/register', registerUser)
//login
router.post('/login', loginUser)



export default router