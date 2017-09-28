/* eslint-env mocha */
// eslint-disable-next-line
var should = require('should')
var rewire = require('rewire')
var cache = rewire('../lib/cache')

describe('cache:getCacheDir', function () {
  it('should always return an object when get documents from cache.', function () {
    var documents = cache.getCachedDocuments()

    documents.should.be.an.Object()
  })
})

describe('cache[private]:fetchDocuments', function () {
  it('should always succeed when fetch latest documents from upstream', function (done) {
    var fetchDocuments = cache.__get__('fetchDocuments')
    var result = fetchDocuments()

    result.should.be.Promise()

    result.then(function (response) {
      response.should.be.String()

      try {
        JSON.parse(response)
        done()
      } catch (err) {
        done(err)
      }
    }).catch(done)
  })
})
