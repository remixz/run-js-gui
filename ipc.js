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
      properties: ['openDirectory', 'createDirectory']
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

  ipc.on('start-instance', (event, dir) => {
    let instance = instances.find(i => i.opts.dir === dir)

    instance.start(err => {
      event.sender.send('start-instance', dir)
    })
  })

  ipc.on('stop-instance', (event, dir) => {
    console.log('stop called')
    let instance = instances.find(i => i.opts.dir === dir)

    instance.stop(err => {
      console.log('fully stopped')
      event.sender.send('stop-instance', dir)
    })
  })

  ipc.on('delete-instance', (event, dir) => {
    let instanceIndex = instances.find(i => i.opts.dir === dir)

    instances.splice(instanceIndex, 1)
    event.sender.send('delete-instance', dir)
  })
}
