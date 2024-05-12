import express from 'express'

import { registerUser, loginUser, getAllUsers, updateUser, getOwnUser, deleteUser, updatePassword } from "../controllers/user.controller.js";
import { verifyToken } from '../middlewares/auth.js';


const router = express.Router()

//get users
router.get('/usersdata' ,getAllUsers)
//get owner
router.get('/user',verifyToken,  getOwnUser)

//updateUserDetails
router.put('/update', verifyToken, updateUser)
router.put('/update/password', verifyToken, updatePassword)

//delete user
router.delete('/remove', verifyToken, deleteUser)

//register
router.post('/register', registerUser)
//login
router.post('/login', loginUser)

//lout out
router.get('/logout', (req, res) => {
    res.clearCookie("token");
    res.send('Log out successful');
})


export default router