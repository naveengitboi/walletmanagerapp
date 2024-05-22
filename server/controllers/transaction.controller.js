import TransactionModel from "../models/transaction.model.js";
import asyncErrorHandler from "../utils/asynErrorHandler.js";

//transaction
const transaction = asyncErrorHandler(async (req, res) => {
  const id = req.userPayload;
  const query = req.query;
  const modifiedData = {
    ...req.body,
    ownerId: id,
    transType: query.type,
    fromImg: "naveen.logo.png",
  };
  const newTrans = new TransactionModel(modifiedData);

  await newTrans.save();
  res.status(200).json({ success: true, output: "Added successfully" });
});

const getAllTrans = asyncErrorHandler(async (req, res) => {
  const query = req.query
 
  const id = req.userPayload;
  const history = await TransactionModel.find({
    $and:[
      {
        ownerId: id,
        through: query.through
      }
    ]
  });
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
