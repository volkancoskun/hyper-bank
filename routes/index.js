var express = require('express');
const { check } = require('express-validator');

var router = express.Router();

var AccountController = require('../controllers/account.controller');
var CustomerController = require('../controllers/customer.controller');

/**
* @api {get} /api/customer/:id Get Customer Information
* @apiName Get Customer Information
* @apiPermission public
*
* @apiParam  {Integer} [id] Customer id
*
* @apiSuccess (200) {Object} mixed `Customer` object
*/
router.get('/customer/:id', [
  // customerId must be an integer
  check('id').isInt({ min: 0 })
], CustomerController.getCustomer);

/**
* @api {post} /api/account/open Open New Account
* @apiName Open New Account
* @apiPermission public
*
* @apiParam  {Integer} [id] Customer id
* @apiParam  {Double} [initialCredit] Initial credit of account
*
* @apiSuccess (201) {Object} mixed `Account` object
*/
router.post('/account', [
  // customerId must be an integer
  check('customerId').isInt({ min: 0 }),
  // initialCredit must be a float
  check('initialCredit').isFloat({ min: 0 })
], AccountController.openAccount);

module.exports = router;
