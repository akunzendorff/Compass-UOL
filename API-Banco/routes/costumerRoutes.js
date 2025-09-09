const express = require('express');
const router = express.Router();
const { createCustomer, createAccountForCustomer } = require('../controllers/customerController');

// Rota para criar um novo cliente
router.post('/', createCustomer);

// Rota para criar uma nova conta para um cliente específico
router.post('/:customerId/accounts', createAccountForCustomer);

module.exports = router;