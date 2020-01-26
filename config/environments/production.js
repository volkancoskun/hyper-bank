module.exports = {
  web: {
    port: process.env.PORT
  },
  logging: {
    appenders: { console: { type: 'console' } },
    categories: { default: { appenders: [ 'console' ], level: 'info' } }
  }
};
