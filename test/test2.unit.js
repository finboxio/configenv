var test = require('ava').test
var chai = require('chai')
chai.should()

process.env.CONFIG = 'test2'
process.env.TEST_PROCESS = 'process'
require('..')(__dirname)

test('environment variables defined in .env.test should take precedence over .env', function () {
  process.env.TEST_TEST.should.equal('test2')
})
