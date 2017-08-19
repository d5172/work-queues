const path = require('path');

module.exports = {
  root: path.normalize(`${__dirname}/../../..`),
  ip: 'localhost',
  port: 3001,
  jwt: {
    secret: '128juqwf48fq894nue4ia',
    userProperty: 'token',
    expiresIn: '30m'
  }
};