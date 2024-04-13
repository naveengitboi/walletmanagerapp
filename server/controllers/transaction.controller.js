import TransactionModel from "../models/transaction.model.js";


//transaction
const transaction = async (req, res) => {
    try {
        const query = req.query
            const modifiedData  = {
                ...req.body,
                transType: query.type,
                fromImg: "naveen.logo.png"
            }
            const newTrans = new TransactionModel(modifiedData);
            
            await newTrans.save();
            res.send("Added successfully")
            

    } catch (error) {
        res.send(error)
    }
}

const getAllTrans = async (req, res) => {
    try {
        const history = await TransactionModel.find();
        res.send(history);
    } catch (error) {
        res.send(error)
    }
}

const deleteTrans = async (req,res) => {
    try {
        const {id} = req.params
        await TransactionModel.findOneAndDelete({_id: id})

        res.send('Deleted Successfully')
        
    } catch (error) {
        res.send(error)
    }
}

const updateTrans = async (req, res) => {
    try {
        
        const data = req.body
        const updateDb = await TransactionModel.findOneAndUpdate({_id: req.params.id}, data)

        res.send('updated data')
    } catch (error) {
        res.send(error)
    }
}



export {transaction, getAllTrans, deleteTrans, updateTrans}