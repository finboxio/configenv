var localenv = require('localenv/noload')
var path = require('path')

module.exports = function (basedir) {
  if (process.env.NODE_ENV !== 'production') {
    localenv.inject_env(path.join(basedir, '.env.' + (process.env.CONFIG || 'local')))
    localenv.inject_env(path.join(basedir, '.env'))
  }
}
