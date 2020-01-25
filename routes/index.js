var express = require('express');

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
router.get('/customer/:id', CustomerController.getCustomer);

/**
* @api {post} /api/account/open Open New Account
* @apiName Open New Account
* @apiPermission public
*
* @apiParam  {Integer} [id] Customer id
* @apiParam  {Double} [initialCredit] Initial credit of account
*
* @apiSuccess (200) {Object} mixed `Account` object
*/
router.post('/account/open', AccountController.openAccount);

module.exports = router;
