import mongoose from "mongoose";
import transactionSchema from "./transactionModel.js";

const accountSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["checking", "savings"],
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  transactions: [transactionSchema],
});

const Account = mongoose.Model("Account", accountSchema);

export default Account;
