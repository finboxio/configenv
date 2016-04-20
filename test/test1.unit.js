var test = require('ava').test
var chai = require('chai')
chai.should()

process.env.CONFIG = 'test1'
process.env.TEST_PROCESS = 'process'
require('..')(__dirname)

test('environment variables defined in process should take precedence over all', function () {
  process.env.TEST_PROCESS.should.equal('process')
})

test('environment variables defined in .env.test should take precedence over .env', function () {
  process.env.TEST_TEST.should.equal('test1')
})

test('environment variables defined in .env should be loaded', function () {
  process.env.TEST_ENV.should.equal('env')
})
