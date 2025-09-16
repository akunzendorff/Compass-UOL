const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Consultar saldo de uma conta
router.get('/:accountId/balance', accountController.getBalance);

// Listar transações (extrato) de uma conta
router.get('/:accountId/transactions', accountController.getTransactions);

// Realizar uma nova transação (crédito ou débito)
router.post('/:accountId/transactions', accountController.createTransaction);

module.exports = router;