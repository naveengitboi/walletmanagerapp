import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    ownerId: String,
    fromImg: String,
    amount: {
      type: Number,
      required: true,
    },
    through: {
      type: String,
    },
    description: String,
    transType: String,
    transFromTo: String,
  },
  { timestamps: { createdAt: "transDate", updatedAt: "transUpdate" } }
);

const TransactionModel = new mongoose.model("Transaction", transactionSchema);

export default TransactionModel;
