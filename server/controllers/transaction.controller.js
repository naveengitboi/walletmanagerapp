import TransactionModel from "../models/transaction.model.js";
import asyncErrorHandler from "../utils/asynErrorHandler.js";

//transaction
const transaction = asyncErrorHandler(async (req, res) => {
  console.log("req.body", req.body);
  const id = req.userPayload;
  let { type } = req.query;
  if (type === undefined) { type = 'paid' }
  console.log("payload id", id);
  const modifiedData = {
    ...req.body,
    ownerId: id,
    transType: type,
    fromImg: "naveen.logo.png",
  };
  const newTrans = new TransactionModel(modifiedData);

  await newTrans.save();
  res.status(200).json({ success: true, output: "Added successfully" });
});

const getAllTrans = asyncErrorHandler(async (req, res) => {
  const {type, through} = req.query

  const id = req.userPayload;
  console.log("id" ,req.userPayload)
  const history = await TransactionModel.find({
    ownerId: id
  });
  // console.log(history)
  res.status(200).json({ success: true, output: history });
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
