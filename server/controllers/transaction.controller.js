import TransactionModel from "../models/transaction.model.js";
import asyncErrorHandler from "../utils/asynErrorHandler.js";

//transaction
const transaction = asyncErrorHandler(async (req, res) => {
  console.log("req.body", req.body);
  const id = req.userPayload;

  console.log("payload id", id);
  const modifiedData = {
    ...req.body,
    ownerId: id,
    fromImg: "naveen.logo.png",
  };
  const newTrans = new TransactionModel(modifiedData);

  await newTrans.save();
  res.status(200).json({ success: true, output: "Added successfully" });
});


const getAllTrans = asyncErrorHandler(async (req, res) => {
  const { type, through } = req.query
  let amounts = {
    credit: 0,
    debit: 0,
    total: 0,
  }
  
  const id = req.userPayload;
  console.log("id", req.userPayload)
  //history
  const history = await TransactionModel.find({
    ownerId: id
  }).sort({ transDate: -1 });

  //amounts
  history.map((transaction) => {
    amounts.total += transaction.amount
    if (transaction.transType === 'received') {
      amounts.credit += transaction.amount
    }
    else {
      amounts.debit += transaction.amount
    }
  })
  // console.log(history)
  res.status(200).json({ success: true, output: { history, amounts } });
});




const deleteTrans = asyncErrorHandler(async (req, res) => {
  await TransactionModel.findOneAndDelete({
    $and: [
      {
        _id: req.params.id,
      },
      {
        ownerId: req.userPayload,
      },
    ],
  });
  res.status(200).json({
    success: true,
    output: "Deleted Successfully",
  });
});

const updateTrans = asyncErrorHandler(async (req, res) => {
  const data = req.body;
  const updateDbs = await TransactionModel.findOneAndUpdate(
    {
      $and: [
        {
          _id: req.params.id,
        },
        {
          ownerId: req.userPayload,
        },
      ],
    },
    data,
    { new: true }
  );

  res.status(200).json({
    success: true,
    output: "updated data",
  });
});




export { transaction, getAllTrans, deleteTrans, updateTrans };
