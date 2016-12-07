/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Extra.prod');
} else {
  module.exports = require('./Extra.dev');
}
