var path = require('path')
var os = require('os')
var fs = require('fs')
var request = require('request')
var config = require('../lib/config')
var logger = require('../lib/logger')
var loading = require('../lib/loading')

var home = os.homedir()

var isExists = function isExists (pathName) {
  return new Promise(function (resolve, reject) {
    fs.stat(pathName, function (err, stat) {
      if (err) {
        if (err.code === 'ENOENT') return resolve(false)

        return reject(err)
      }

      return resolve(true)
    })
  })
}

var mkdir = function mkdir (dir) {
  return new Promise(function (resolve, reject) {
    fs.mkdir(dir, function (err) {
      if (err) return reject(err)

      return resolve(dir)
    })
  })
}

var writeCache = function writeCache (data) {
  var cacheDocumentsFile = path.resolve(home, config.dir, config.cache)

  return new Promise(function (resolve, reject) {
    fs.writeFile(cacheDocumentsFile, data, 'utf8', function (err) {
      if (err) return reject(err)

      return resolve()
    })
  })
}

var fetchDocuments = function fetchDocuments () {
  var upstreamDatabaseURL = config.upstreamDatabase

  loading.start(':mag:  Fetching data')

  return new Promise(function (resolve, reject) {
    request({
      url: upstreamDatabaseURL,
      headers: {
        'User-Agent': 'comeon'
      }
    }, function (err, response, body) {
      if (err) return reject(err)

      if (response.statusCode >= 400) {
        return reject(new Error(response.body))
      }

      return resolve(body)
    })
  })
}

exports.getCacheDir = function getCacheDir () {
  return path.resolve(home, config.dir)
}

exports.getCacheFilePath = function getCacheFilePath () {
  return path.resolve(home, config.dir, config.cache)
}

exports.getCachedDocuments = function getCachedDocuments () {
  var cacheDocumentsFile = exports.getCacheFilePath()

  var cachedDocuments

  try {
    cachedDocuments = require(cacheDocumentsFile)
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      cachedDocuments = {}
    } else {
      throw err
    }
  }

  return cachedDocuments
}

exports.update = function update () {
  var cacheDir = exports.getCacheDir()
  var latestDocuments = ''

  return fetchDocuments().then(function (body) {
    latestDocuments = body

    loading.stop()

    logger.info(':truck:  Updating local cache.')

    return isExists(cacheDir)
  }).then(function (exists) {
    if (!exists) return mkdir(cacheDir)

    return Promise.resolve()
  }).then(function () {
    return writeCache(latestDocuments)
  })
}
