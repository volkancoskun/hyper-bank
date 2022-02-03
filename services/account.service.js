const logger = require('../infra/logging/logger')
const accounts = []

exports.openAccount = async function (account) {
  try {
    accounts.push(account)
    return account
  } catch (e) {
    logger.error(e)
    throw Error('Error while create transaction')
  }
}

exports.getAccounts = async function (customerId) {
  try {
    return accounts.filter(account => account.customerId == customerId)
  } catch (e) {
    logger.error(e)
    throw Error('Error while create transaction')
  }
}
