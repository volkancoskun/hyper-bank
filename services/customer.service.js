const logger = require('../infra/logging/logger')

const customers = [
  {
    id: 1,
    name: 'Volkan',
    surname: 'Coskun',
    balance: 0
  }
]

exports.getCustomer = async function (customerId) {
  try {
    return customers.find(customer => customer.id == customerId)
  } catch (e) {
    logger.error(e)
    throw Error('Error while get customer')
  }
}

exports.changeBalance = async function (customerId, amount) {
  try {
    const customerIndex = customers.findIndex(customer => customer.id == customerId)
    if (customerIndex > -1) {
      customers[customerIndex].balance += amount
      return customers[customerIndex]
    }
    return null
  } catch (e) {
    logger.error(e)
    throw Error('Error while change balance')
  }
}
