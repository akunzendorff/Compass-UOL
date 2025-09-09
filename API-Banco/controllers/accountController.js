const accountService = require('../services/accountService');

// O controller agora só lida com req e res
exports.getAccountBalance = async (req, res) => {
  try {
    const { accountId } = req.params;
    // Chama o serviço
    const balanceInfo = await accountService.getBalance(accountId);
    res.status(200).json(balanceInfo);
  } catch (error) {
    // Trata os erros lançados pelo serviço
    if (error.message.includes('encontrada')) {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: 'Erro ao consultar saldo.', error: error.message });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const { accountId } = req.params;
    // Passa os dados para o serviço
    const updatedAccount = await accountService.createTransaction(accountId, req.body);
    res.status(201).json({ message: 'Transação realizada com sucesso!', account: updatedAccount });
  } catch (error) {
    // Traduz os erros de negócio em status HTTP apropriados
    if (error.message.includes('encontrada')) {
      return res.status(404).json({ message: error.message });
    }
    if (error.message.includes('insuficiente') || error.message.includes('inválido') || error.message.includes('obrigatórios')) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Erro ao realizar transação.', error: error.message });
  }
};

exports.getAccountTransactions = async (req, res) => {
  try {
    const { accountId } = req.params;
    const transactions = await accountService.getTransactions(accountId);
    res.status(200).json(transactions);
  } catch (error) {
    if (error.message.includes('encontrada')) {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: 'Erro ao listar transações.', error: error.message });
  }
};