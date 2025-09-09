const customerService = require('../services/customerService');

exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await customerService.createCustomer(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    if (error.message.includes('cadastrado')) {
        return res.status(409).json({ message: error.message });
    }
    if (error.message.includes('obrigatórios')) {
        return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Erro ao criar cliente.', error: error.message });
  }
};

exports.createAccountForCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;
    const newAccount = await customerService.createAccount(customerId, req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    if (error.message.includes('encontrado')) {
        return res.status(404).json({ message: error.message });
    }
     if (error.message.includes('já existe')) {
        return res.status(409).json({ message: error.message });
    }
    res.status(500).json({ message: 'Erro ao criar conta.', error: error.message });
  }
};