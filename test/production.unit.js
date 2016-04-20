var test = require('ava').test
var chai = require('chai')
chai.should()

process.env.NODE_ENV = 'production'
process.env.TEST_PROCESS = 'process'
require('..')(__dirname)

test('environment variables should not be loaded in production', function () {
  process.env.should.not.have.property('TEST_ENV')
})
