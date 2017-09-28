var logger = require('./logger')

var timer = null

var padString = function padString (raw, length, fix) {
  var str = ''

  while (length--) {
    str += fix
  }

  return raw + str
}

exports.start = function start (message) {
  var progress = 0
  var text = padString(message, progress, '.')

  clearInterval(timer)

  logger.text(text)

  timer = setInterval(function () {
    progress += 1

    if (progress >= 4) {
      progress = 1
    }

    text = padString(message, progress, '.')

    logger.clearLine(process.stdout)
    logger.text(text)
  }, 400)
}

exports.stop = function stop () {
  clearInterval(timer)

  process.stdout.write('\n')
}
