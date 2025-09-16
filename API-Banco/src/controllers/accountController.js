const Account = require('../models/Account');
const Customer = require('../models/Customer');
const Transaction = require('../models/Transaction');

// Criar uma nova conta para um cliente
exports.createAccount = async (req, res) => {
  try {
    const { customerId } = req.params;
    const { type, branch, number } = req.body;

    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ error: 'Cliente não encontrado.' });
    }

    const newAccount = new Account({ type, branch, number });
    await newAccount.save();

    // Associa a conta ao cliente
    customer.accounts.push(newAccount._id);
    await customer.save();

    res.status(201).json(newAccount);
  } catch (error) {
    if (error.code === 11000) {
        return res.status(409).json({ error: 'Número da conta já existe.' });
    }
    res.status(500).json({ error: 'Erro ao criar conta: ' + error.message });
  }
};

// Consultar saldo de uma conta
exports.getBalance = async (req, res) => {
  try {
    const { accountId } = req.params;
    const account = await Account.findById(accountId);
    if (!account) {
      return res.status(404).json({ error: 'Conta não encontrada.' });
    }
    res.status(200).json({ accountId: account._id, balance: account.balance });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar saldo: ' + error.message });
  }
};

// Realizar uma transação (crédito ou débito)
exports.createTransaction = async (req, res) => {
    try {
        const { accountId } = req.params;
        const { description, amount, type, category } = req.body;

        const account = await Account.findById(accountId);
        if (!account) {
            return res.status(404).json({ error: 'Conta não encontrada.' });
        }

        if (type === 'debit' && account.balance < amount) {
            return res.status(400).json({ error: 'Saldo insuficiente.' });
        }

        // Cria a nova transação
        const newTransaction = new Transaction({ description, amount, type, category });

        // Atualiza o saldo e adiciona a transação ao extrato
        if (type === 'credit') {
            account.balance += amount;
        } else { // debit
            account.balance -= amount;
        }
        account.transactions.push(newTransaction);

        await account.save();

        res.status(201).json({ message: 'Transação realizada com sucesso!', transaction: newTransaction });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar transação: ' + error.message });
    }
};

// Listar transações (extrato) de uma conta
exports.getTransactions = async (req, res) => {
    try {
        const { accountId } = req.params;
        const account = await Account.findById(accountId);
        if (!account) {
            return res.status(404).json({ error: 'Conta não encontrada.' });
        }
        res.status(200).json(account.transactions);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar transações: ' + error.message });
    }
};