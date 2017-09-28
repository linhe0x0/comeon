var _ = require('lodash')
var defaultDocuments = require('./database.json')
var cache = require('./cache')

var cachedDocuments = cache.getCachedDocuments()

var docs = _.assign({}, defaultDocuments, cachedDocuments)

module.exports = docs
