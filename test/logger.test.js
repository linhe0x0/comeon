/* eslint-env mocha */
// eslint-disable-next-line
var should = require('should')
var logger = require('../lib/logger')

describe('logger:printf', function () {
  it('should always return "Hello, World" when print "Hello, World"', function () {
    var result = logger.printf('Hello, World')

    result.should.be.equal('Hello, World')
  })
})

describe('logger:text', function () {
  it('should always return "Hello, World" when print "Hello, World" with text method', function () {
    var result = logger.text('Hello, World')

    result.should.be.equal('Hello, World')
  })
})

describe('logger:info', function () {
  it('should always return "Hello, World" when print "Hello, World" with info method', function () {
    var result = logger.info('Hello, World')

    result.should.be.equal('Hello, World')
  })
})

describe('logger:success', function () {
  it('should always return "✅  Hello, World" when print "Hello, World" with success method', function () {
    var result = logger.success('Hello, World')

    result.should.be.equal(':white_check_mark:  Hello, World')
  })
})

describe('logger:warning', function () {
  it('should always return "🚨  Hello, World" when print "Hello, World" with waring method', function () {
    var result = logger.warning('Hello, World')

    result.should.be.equal(':rotating_light:  Hello, World')
  })
})

describe('logger:error', function () {
  it('should always return "❌  Hello, World" when print "Hello, World" with error method', function () {
    var result = logger.error('Hello, World')

    result.should.be.equal(':x:  Hello, World')
  })
})

describe('logger:footer', function () {
  it('should always return "✨  Done in 0s." when run footer method', function () {
    var result = logger.footer()

    result.should.be.equal(':sparkles:  Done in 0s.')
  })
})
