const Customer = require('../models/customerModel');
const Account = require('../models/accountModel');

// Lógica para criar um cliente
const createCustomer = async (customerData) => {
  const { name, cpf, email } = customerData;
  if (!name || !cpf || !email) {
    throw new Error('Nome, CPF e email são obrigatórios.');
  }
  
  try {
    const newCustomer = new Customer({ name, cpf, email });
    await newCustomer.save();
    return newCustomer;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error('CPF ou Email já cadastrado.');
    }
    throw error; // Lança outros erros para o controller tratar
  }
};

// Lógica para criar uma conta para o cliente
const createAccount = async (customerId, accountData) => {
  const customer = await Customer.findById(customerId);
  if (!customer) {
    throw new Error('Cliente não encontrado.');
  }

  try {
    const newAccount = new Account(accountData);
    await newAccount.save();

    customer.accounts.push(newAccount._id);
    await customer.save();
    return newAccount;
  } catch (error) {
    if (error.code === 11000) {
       throw new Error('Número da conta já existe.');
    }
    throw error;
  }
};

module.exports = {
  createCustomer,
  createAccount,
};