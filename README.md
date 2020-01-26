# Hyper Bank

## Builds
Master - [![Build Status](https://travis-ci.org/volkancoskun/hyper-bank.svg?branch=master)](https://travis-ci.org/volkancoskun/hyper-bank)

Develop - [![Build Status](https://travis-ci.org/volkancoskun/hyper-bank.svg?branch=develop)](https://travis-ci.org/volkancoskun/hyper-bank)

### Installation

Hyper Bank requires [Node.js](https://nodejs.org/) v10.16.0+ to run.

Install the dependencies and start the server.

For development environments...

```sh
$ cd hyper-bank
$ npm install
$ NODE_ENV=development npm start
```
Default development port is 3000. 

For production environments...

```sh
$ NODE_ENV=production && PORT={PORT} npm start
```

### Testing

Jest testing command.

```sh
NODE_ENV={environment} && PORT={PORT} npm test
```

### Postman Docs

You can find latest Postman Docs with requests from this [link](https://documenter.getpostman.com/view/7076189/SWT8hfPn?version=latest)

### Tech

Hyper Bank uses a number of open source projects to work properly:

- [Node v10.16.0+](http://nodejs.org/)
- [Express](https://npmjs.com/package/express)
- [Log4js](https://www.npmjs.com/package/log4js)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Express Validator](https://www.npmjs.com/package/express-validator)
- [Jest](https://jestjs.io/)
- [ESLint](https://www.npmjs.com/package/eslint)
- [Travis CI](https://travis-ci.org)

License
----

Unlicense