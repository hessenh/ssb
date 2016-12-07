/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./middleware.prod');
} else {
  module.exports = require('./middleware.dev');
}
