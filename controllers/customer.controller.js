const { validationResult } = require('express-validator');

var CustomerService = require('../services/customer.service');
var AccountService = require('../services/account.service');
var TransactionService = require('../services/transaction.service');

exports.getCustomer = async function (req, res) {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ status: 422, errors: errors.array() });
        }

        let response = {};
        let customerId = req.params.id;
        let customer = await CustomerService.getCustomer(customerId);

        if (customer == null) {
            return res.status(404).json({ status: 404, message: 'Customer not found' });
        }
        let accounts = await AccountService.getAccounts(customerId);
        let transactions = await TransactionService.getTransactions(customerId);

        response.customer = customer;
        accounts.forEach(account => {
            account.transactions = transactions.filter(transaction => { return transaction.accountId == account.id });
        });
        response.accounts = accounts;
        return res.status(200).json({ status: 200, data: response, message: "Success." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}