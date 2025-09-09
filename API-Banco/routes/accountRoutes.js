const express = require('express');
const router = express.Router();
const { 
  getAccountBalance, 
  createTransaction, 
  getAccountTransactions 
} = require('../controllers/accountController');

// Rota para consultar o saldo
router.get('/:accountId/balance', getAccountBalance);

// Rota para realizar uma transação
router.post('/:accountId/transactions', createTransaction);

// Rota para obter o extrato (listar transações)
router.get('/:accountId/transactions', getAccountTransactions);

module.exports = router;