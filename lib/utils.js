const path = require('path')

exports.cwd = function (...args) {
  return path.resolve(...args)
}

exports.ownDir = function (...args) {
  return path.join(__dirname, '../', ...args)
}

exports.getConfigFile = function (config) {
  if (!config) {
    return
  }
  if (config === true) {
    return exports.cwd('vbuild.config.js')
  }
  return exports.cwd(config)
}

exports.getPublicPath = function (homepage) {
  if (homepage) {
    return /\/$/.test(homepage) ? homepage : (homepage + '/')
  }
  return '/'
}

exports.ensureEntry = function (obj) {
  for (const key in obj) {
    if (!Array.isArray(obj[key])) {
      obj[key] = [obj[key]]
    }
  }
  return obj
}
