import express from 'express'
import { deleteTrans, getAllTrans, transaction, updateTrans } from '../controllers/transaction.controller.js'



const router = express.Router()

router.post('/addmoney', transaction)
router.get('/history', getAllTrans)
router.delete('/deletehistory/:id', deleteTrans)
router.put('/updatehistory/:id', updateTrans)
export default router