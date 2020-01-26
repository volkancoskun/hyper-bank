# Hyper Bank

## Builds
Master - [![Build Status](https://travis-ci.org/volkancoskun/hyper-bank.svg?branch=master)](https://travis-ci.org/volkancoskun/hyper-bank)

Develop - [![Build Status](https://travis-ci.org/volkancoskun/hyper-bank.svg?branch=develop)](https://travis-ci.org/volkancoskun/hyper-bank)


### Production URL

This repo's master branch is connected to AWS CodePipeline with webhooks. You can find production alb URL [here.](http://hyper-bank-lb-1488483883.eu-west-1.elb.amazonaws.com/).

Also you can find CodePipeline details below.

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


### Docker

This progress requires [Docker](https://docs.docker.com/docker-for-mac/install/) v2.0.0.3 to run.

To build docker locally.

```sh
docker build -t <your username>/hyper-bank .  
```
To run docker locally.

```sh
docker run -p <your port>:<container port> -d <your username>/hyper-bank:latest 
```

Note: Only tested on Mac. Feel free to contribute for other platforms :)

### CodePipeline Details

Hyper Banks uses CodePipeline for fully managed continuous delivery service. 

#### - Source Stage 

If any commits to master branch this stage will triggered.

![Source](https://user-images.githubusercontent.com/12251312/73137859-ad389180-406d-11ea-9b23-864f5016b46a.png)

#### - Build Stage 

Hyper Bank uses Amazon Linux 2 managed image for builds.
Steps: 
 - Build docker image
 - Push docker image to ECR

You can find more details about this step in [buildspec.yml](https://github.com/volkancoskun/hyper-bank/blob/master/buildspec.yml)

![Build](https://user-images.githubusercontent.com/12251312/73137858-a9a50a80-406d-11ea-91fd-7d1b0d017fb3.png)

#### - Deploy Stage

Hyper Bank running on AWS Fargate. Fargate removes the need to provision and manage servers, lets you specify and pay for resources per application, and improves security through application isolation by design. (a bit expensive)

Hyper Bank uses Code Deploy to deploy docker containers to ECS. 

![Deploy](https://user-images.githubusercontent.com/12251312/73137856-a578ed00-406d-11ea-880f-6c5f22d05123.png)


![Service](https://user-images.githubusercontent.com/12251312/73137854-9e51df00-406d-11ea-87d1-617c4d046db3.png)


### Future Developments

- In memory database with mongoose?
- Or using external storages.
- DI with Awilix
- Setting alerts from CloudWatch

### Tech

Hyper Bank uses a number of open source projects to work properly:

- [Node v10.16.0+](http://nodejs.org/)
- [Docker](https://docs.docker.com/)
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