const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: () => `txn_${new Date().getTime()}`,
  },
  date: {
    type: String,
    required: true,
    default: () => new Date().toISOString().split("T")[0],
  },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["credit", "debit"], required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model("Transaction", transactionSchema);
