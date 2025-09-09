const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  accounts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account', // Referência ao modelo de Conta
  }],
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;