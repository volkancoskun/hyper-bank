const { validationResult } = require('express-validator')
const logger = require('../infra/logging/logger')

const CustomerService = require('../services/customer.service')
const AccountService = require('../services/account.service')
const TransactionService = require('../services/transaction.service')

exports.getCustomer = async function (req, res) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ status: 422, errors: errors.array() })
    }

    const response = {}
    const customerId = req.params.id
    const customer = await CustomerService.getCustomer(customerId)

    if (customer == null) {
      return res.status(404).json({ status: 404, message: 'Customer not found' })
    }
    const accounts = await AccountService.getAccounts(customerId)
    const transactions = await TransactionService.getTransactions(customerId)

    response.customer = customer
    accounts.forEach(account => {
      account.transactions = transactions.filter(transaction => { return transaction.accountId == account.id })
    })
    response.accounts = accounts
    return res.status(200).json({ status: 200, data: response, message: 'Success.' })
  } catch (e) {
    logger.error(e)
    return res.status(400).json({ status: 400, message: e.message })
  }
}
