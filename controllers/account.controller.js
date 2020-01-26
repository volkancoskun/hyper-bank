var uuidv1 = require('uuid/v1');

var AccountService = require('../services/account.service');
var TransactionService = require('../services/transaction.service');
var CustomerService = require('../services/customer.service');

exports.openAccount = async function (req, res) {
    try {
        let response = {};
        let customerId = req.body.customerId;
        let initialCredit = req.body.initialCredit;
        let customer = await CustomerService.getCustomer(customerId);

        if (customer == null) {
            return res.status(404).json({ status: 404, message: 'Customer not found' });
        }

        let account = {
            id: uuidv1(),
            customerId: customerId,
            initialCredit: initialCredit
        };
        response.account = await AccountService.openAccount(account);

        if (account.initialCredit > 0) {
            let transaction = {
                id: uuidv1(),
                accountId: account.id,
                customerId: customerId,
                amount: initialCredit
            };
            response.transaction = await TransactionService.createTransaction(transaction);
            await CustomerService.changeBalance(customerId, initialCredit);
        }
        return res.status(201).json({ status: 201, data: response, message: "Success." });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}