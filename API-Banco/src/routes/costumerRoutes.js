const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const accountController = require('../controllers/accountController');

// Rota para criar um novo cliente
router.post('/', customerController.createCustomer);

// Rota para criar uma nova conta para um cliente específico
router.post('/:customerId/accounts', accountController.createAccount);

module.exports = router;