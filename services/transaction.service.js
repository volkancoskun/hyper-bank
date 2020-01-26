var logger = require('../infra/logging/logger');
var transactions = [];

exports.createTransaction = async function (transaction) {
    try {
        transactions.push(transaction);
        return transaction;
    } catch (e) {
        logger.error(e);
        throw Error('Error while create transaction');
    }
}

exports.getTransactions = async function (customerId) {
    try {
        return transactions.filter(transaction => { return transaction.customerId == customerId });
    } catch (e) {
        logger.error(e);
        throw Error('Error while get transaction');
    }
}