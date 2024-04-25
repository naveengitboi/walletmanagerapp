import express from 'express'

import { registerUser, loginUser, getAllUsers, updateUser, getOwnUser, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from '../middlewares/auth.js';



const router = express.Router()

//get users
router.get('/usersdata' ,getAllUsers)
//get owner
router.get('/user/:id',verifyToken,  getOwnUser)

//updateUserDetails
router.put('/update/', verifyToken, updateUser)

//delete user
router.delete('/remove', verifyToken, deleteUser)

//register
router.post('/register', registerUser)
//login
router.post('/login', loginUser)

//lout out
router.post('/logout', (req, res) => {
    res.clearCookie("token");
    res.send('Log out successful');
})


export default router