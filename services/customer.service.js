var logger = require('../infra/logging/logger');

var customers = [
    {
        id: 1,
        name: 'Volkan',
        surname: 'Coskun',
        balance: 0
    }
];

exports.getCustomer = async function (customerId) {
    try {
        return customers.find(customer => { return customer.id == customerId });
    } catch (e) {
        logger.error(e);
        throw Error('Error while get customer');
    }
}

exports.changeBalance = async function (customerId, amount) {
    try {
        let customerIndex = customers.findIndex(customer => { return customer.id == customerId });
        if (customerIndex > -1) {
            customers[customerIndex].balance += amount;
            return customers[customerIndex];
        } 
        return null;
    } catch (e) {
        logger.error(e);
        throw Error('Error while change balance');
    }
}