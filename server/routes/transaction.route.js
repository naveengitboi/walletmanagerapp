import express from 'express'
import { deleteTrans, getAllTrans, transaction, updateTrans } from '../controllers/transaction.controller.js'
import { verifyToken } from '../middlewares/auth.js'


const router = express.Router()

router.post('/addmoney', verifyToken, transaction)
router.get('/history', verifyToken, getAllTrans)
router.delete('/delete/:id', verifyToken, deleteTrans);
router.patch('/update/:id', verifyToken, updateTrans);


export default router