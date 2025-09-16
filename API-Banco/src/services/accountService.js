const Account = require('../models/accountModel');

// Lógica para buscar o saldo
const getBalance = async (accountId) => {
  const account = await Account.findById(accountId);
  if (!account) {
    // Em vez de res.status(), lançamos um erro que o controller vai capturar
    throw new Error('Conta não encontrada.');
  }
  return { number: account.number, balance: account.balance };
};

// Lógica para criar uma transação
const createTransaction = async (accountId, transactionData) => {
  const { description, amount, type, category } = transactionData;

  if (!description || !amount || !type) {
    throw new Error('Descrição, valor e tipo são obrigatórios.');
  }
  if (amount <= 0) {
    throw new Error('O valor da transação deve ser positivo.');
  }

  const account = await Account.findById(accountId);
  if (!account) {
    throw new Error('Conta não encontrada.');
  }

  if (type === 'debit') {
    if (account.balance < amount) {
      throw new Error('Saldo insuficiente.');
    }
    account.balance -= amount;
  } else if (type === 'credit') {
    account.balance += amount;
  } else {
    throw new Error('Tipo de transação inválido. Use "credit" ou "debit".');
  }

  const newTransaction = {
    description,
    amount,
    type,
    category,
    date: new Date().toISOString().split('T')[0],
  };

  account.transactions.push(newTransaction);
  await account.save();
  return account; // Retorna a conta atualizada
};

// Lógica para buscar as transações
const getTransactions = async (accountId) => {
  const account = await Account.findById(accountId).select('transactions');
  if (!account) {
    throw new Error('Conta não encontrada.');
  }
  return account.transactions;
};

module.exports = {
  getBalance,
  createTransaction,
  getTransactions,
};