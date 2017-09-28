var readline = require('readline')
var emoji = require('node-emoji')

var CLEAR_WHOLE_LINE = 0
var startTime = Date.now()

var handleMissingEmoji = function hanleMissingEmoji (name) {
  return name
}

var getTotalTime = function getTotalTime () {
  return Date.now() - startTime
}

var printf = function printf (message, isError) {
  if (process.env.NODE_ENV === 'testing') {
    return message
  }

  var emojifiedMessage = emoji.emojify(message, handleMissingEmoji)

  if (isError) {
    process.stderr.write(emojifiedMessage + '\n')
  } else {
    process.stdout.write(emojifiedMessage + '\n')
  }

  return emojifiedMessage + '\n'
}

exports.printf = printf

exports.text = function text (message) {
  if (process.env.NODE_ENV === 'testing') {
    return message
  }

  var emojifiedMessage = emoji.emojify(message, handleMissingEmoji)

  process.stdout.write(emojifiedMessage)
}

exports.clearLine = function clearLine (stdout) {
  stdout = stdout || process.stdout

  readline.clearLine(stdout, CLEAR_WHOLE_LINE)
  readline.cursorTo(stdout, -1)
}

exports.info = function info (message) {
  return printf(message)
}

exports.success = function success (message) {
  message = ':white_check_mark:  ' + message

  return printf(message)
}

exports.warning = function warning (message) {
  message = ':rotating_light:  ' + message

  return printf(message)
}

exports.error = function error (message) {
  message = ':x:  ' + message

  return printf(message)
}

exports.footer = function footer () {
  var totalTime = (getTotalTime() / 1000).toFixed(2)

  if (process.env.NODE_ENV === 'testing') {
    totalTime = 0
  }

  var message = ':sparkles:  Done in ' + totalTime + 's.'

  return printf(message)
}

exports.contribute = function contribute () {
  printf()
  printf(':pill:  Your favourite document isn\'t covered? Visit the following link to help us improve it together.')
  printf(':link:    https://github.com/sqrthree/comeon/blob/master/lib/database.json')
}
