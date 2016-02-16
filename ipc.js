'use strict'

const electron = require('electron')
const RunJs = require('run-js')
const getPort = require('get-port')
const dialog = electron.dialog
const ipc = electron.ipcMain

let instances = []

module.exports = function registerIpc () {
  ipc.on('add-instance', event => {
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }, dir => {
      getPort().then(port => {
        let app = new RunJs({
          dir: dir[0],
          watch: true,
          port,
          transforms: require('run-js/lib/default-transforms'),
          handlers: require('run-js/lib/default-handlers')
        })

        instances.push(app)
        event.sender.send('add-instance', {
          dir: dir[0],
          port,
          running: false
        })
      })
    })
  })
}
