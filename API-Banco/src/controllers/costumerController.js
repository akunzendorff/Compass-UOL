const Customer = require('../models/Customer');

exports.createCustomer = async (req, res) => {
  try {
    const { name, cpf, email } = req.body;
    if (!name || !cpf || !email) {
      return res.status(400).json({ error: 'Nome, CPF e email são obrigatórios.' });
    }

    const newCustomer = new Customer({ name, cpf, email });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    if (error.code === 11000) { // Erro de duplicidade
        return res.status(409).json({ error: 'CPF ou email já cadastrado.' });
    }
    res.status(500).json({ error: 'Erro ao criar cliente: ' + error.message });
  }
};