const { v1: uuidv1 } = require('uuid')
const { validationResult } = require('express-validator')
const logger = require('../infra/logging/logger')

const AccountService = require('../services/account.service')
const TransactionService = require('../services/transaction.service')
const CustomerService = require('../services/customer.service')

exports.openAccount = async function (req, res) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ status: 422, errors: errors.array() })
    }

    const response = {}
    const customerId = req.body.customerId
    const initialCredit = req.body.initialCredit
    const customer = await CustomerService.getCustomer(customerId)

    if (customer == null) {
      return res.status(404).json({ status: 404, message: 'Customer not found' })
    }

    const account = {
      id: uuidv1(),
      customerId: customerId,
      initialCredit: initialCredit
    }
    response.account = await AccountService.openAccount(account)

    if (account.initialCredit > 0) {
      const transaction = {
        id: uuidv1(),
        accountId: account.id,
        customerId: customerId,
        amount: initialCredit
      }
      response.transaction = await TransactionService.createTransaction(transaction)
      await CustomerService.changeBalance(customerId, initialCredit)
    }
    return res.status(201).json({ status: 201, data: response, message: 'Success.' })
  } catch (e) {
    logger.error(e)
    return res.status(400).json({ status: 400, message: e.message })
  }
}
