var test = require('ava').test
var chai = require('chai')
chai.should()

delete process.env.CONFIG
require('..')(__dirname)

test('environment variables defined in .env.local should load if CONFIG not specified', function () {
  process.env.TEST_LOCAL.should.equal('local')
})

test('environment variables defined other local files should be loaded', function () {
  process.env.TEST_TEST.should.equal('env')
})
