# Hyper Bank
[![Build Status](https://travis-ci.org/volkancoskun/hyper-bank.svg?branch=master)](https://travis-ci.org/volkancoskun/hyper-bank)

## Description
---

Simple NodeJS project with tests and CI/CD.

## Structure
---
```
.
├── bin/
│   └── www
├── config/
│   ├── environments/
│   │   ├── development.js
│   │   └── production.js
│   └── index.js
├── controllers/
│   ├── account.controller.js
│   └── customer.controller.js
├── infra/
│   └── logging/
│       └── logger.js
├── routes/
│   └── index.js
├── logs/
├── services/
│   ├── account.service.js
│   ├── customer.service.js
│   └── transaction.service.js
├── tests/
│   └── routes.tests.js
├── .eslintrc.js
├── .gitignore
├── .travis.yml
├── app.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```


## Installation
---
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

## Testing
---
Jest testing command.

```sh
NODE_ENV={environment} && PORT={PORT} npm test
```

## Linting
---
To run ESlint.

```sh
npm run lint
```

## Postman Docs
---
You can find latest Postman Docs with requests from this [link](https://documenter.getpostman.com/view/7076189/SWT8hfPn?version=latest)


## CI/CD
---
### CI => Travis CI

Hyper Banks uses Travis CI for continuous integration. [Details](https://docs.travis-ci.com/)

Travis CI is a hosted continuous integration service used to build and test software projects hosted at GitHub.

#### - Source Stage

If any commits to master branch this stage will triggered.

![Source](https://user-images.githubusercontent.com/12251312/73137859-ad389180-406d-11ea-9b23-864f5016b46a.png)

## Future Improvements
---
- In-memory database implementation (can be with mongoose)
- Database migrations
- AWS CloudFormation Templates for CD part of the pipeline
- DI with Awilix
- Error notifications for the container running on AWS ECS Fargate, using AWS CloudWatch and AWS SNS
- Security Improvements


## Tech
---
Hyper Bank uses a number of open source projects to work properly:

- [Node v10.16.0+](http://nodejs.org/)
- [Express](https://npmjs.com/package/express)
- [Log4js](https://www.npmjs.com/package/log4js)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Express Validator](https://www.npmjs.com/package/express-validator)
- [Jest](https://jestjs.io/)
- [ESLint](https://www.npmjs.com/package/eslint)
- [Travis CI](https://travis-ci.org)

## License
----

Unlicense
