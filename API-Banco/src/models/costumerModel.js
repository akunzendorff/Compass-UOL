const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  _id: { type: String, required: true, default: () => `cus_${new Date().getTime()}` },
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  accounts: [{ type: String, ref: 'Account' }] // Referência aos IDs das contas
});

module.exports = mongoose.model('Customer', customerSchema);