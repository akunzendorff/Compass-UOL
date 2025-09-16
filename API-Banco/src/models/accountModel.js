const mongoose = require("mongoose");
const Transaction = require("./Transaction").schema; // Importando o schema

const accountSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: () => `acc_${new Date().getTime()}`,
  },
  type: { type: String, enum: ["checking", "savings"], default: "checking" },
  branch: { type: String, required: true },
  number: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0.0 },
  transactions: [Transaction], // Array de transações aninhadas
});

module.exports = mongoose.model("Account", accountSchema);
