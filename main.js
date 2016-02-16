'use strict'
const electron = require('electron')
const path = require('path')
const registerIpc = require('./ipc')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function loadDevPage () {
  mainWindow.loadURL('http://localhost:3000')
}

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools({
      detach: true
    })
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('Webpack dev server is loading... (may take a few seconds)')
    mainWindow.webContents.on('did-fail-load', loadDevPage)
    loadDevPage()
  } else {
    mainWindow.loadURL('file://' + path.join(__dirname, 'dist/index.html'))
  }

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

registerIpc()
