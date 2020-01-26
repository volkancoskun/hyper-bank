const request = require('supertest')
const app = require('../app')
describe('Open New Account Endpoint', () => {
  it('should open a new account', async () => {
    const res = await request(app)
      .post('/api/account')
      .send({
        customerId: 1,
        initialCredit: 100
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('data')
    expect(res.body.data).toHaveProperty('account')
    expect(res.body.data).toHaveProperty('transaction')
    expect(res.body.data.account.customerId).toEqual(1)
    expect(res.body.data.account.initialCredit).toEqual(100)
    expect(res.body.data.transaction.customerId).toEqual(1)
    expect(res.body.data.transaction.amount).toEqual(100)
    expect(res.body.data.transaction.accountId).toEqual(res.body.data.account.id)
  })
})

describe('Open New Account Endpoint', () => {
  it('should return customer not found response', async () => {
    const res = await request(app)
      .post('/api/account')
      .send({
        customerId: 2,
        initialCredit: 100
      })
    expect(res.statusCode).toEqual(404)
    expect(res.body).toHaveProperty('message')
    expect(res.body.message).toEqual('Customer not found')
  })
})

describe('Get Customer Endpoint', () => {
  it('should return a valid customer information', async () => {
    const res = await request(app)
      .get('/api/customer/1')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
    expect(res.body.data).toHaveProperty('customer')
    expect(res.body.data.customer).toHaveProperty('id')
    expect(res.body.data.customer.id).toEqual(1)
    expect(res.body.data.customer.name).toEqual("Volkan")
    expect(res.body.data.customer.surname).toEqual("Coskun")
    expect(res.body.data.customer.balance).toEqual(100)
    expect(res.body.data).toHaveProperty('accounts')
    expect(res.body.data.accounts.length).toBe(1)
    expect(res.body.data.accounts[0].customerId).toEqual(1)
    expect(res.body.data.accounts[0].initialCredit).toEqual(100)
    expect(res.body.data.accounts[0]).toHaveProperty('transactions')
    expect(res.body.data.accounts[0].transactions.length).toBe(1)
    expect(res.body.data.accounts[0].transactions[0].customerId).toEqual(1)
    expect(res.body.data.accounts[0].transactions[0].accountId).toEqual(res.body.data.accounts[0].id)
  })
})

describe('Get Customer Endpoint', () => {
  it('should return customer not found response', async () => {
    const res = await request(app)
      .get('/api/customer/2')

    expect(res.statusCode).toEqual(404)
    expect(res.body).toHaveProperty('message')
    expect(res.body.message).toEqual('Customer not found')
  })
})

describe('Random API Url', () => {
  it('should return page not found response', async () => {
    const res = await request(app)
      .get('/randomapi/url')

    expect(res.statusCode).toEqual(404)
  })
})