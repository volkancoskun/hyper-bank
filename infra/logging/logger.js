const config = require('../../config')
const log4js = require('log4js')

log4js.configure(config.logging)
const logger = log4js.getLogger()

exports.error = async function (message) {
  try {
    logger.error(message)
  } catch (e) {
    console.log(e, message)
    throw Error('Error while create log')
  }
}

exports.info = async function (message) {
  try {
    logger.info(message)
  } catch (e) {
    console.log(e, message)
    throw Error('Error while create log')
  }
}
