'use strict'
const getConfig = require('hjs-webpack')

let config = getConfig({
  in: 'src/index.js',
  out: 'dist',
  clearBeforeBuild: true,
  html: function (context) {
    return {
      'index.html': context.defaultTemplate({
        publicPath: context.isDev ? '/' : ''
      })
    }
  }
})

config.target = require('webpack-target-electron-renderer')(config)

module.exports = config
