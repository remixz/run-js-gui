import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'
import { shell } from 'electron'

let store = configureStore()

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))

document.body.addEventListener('click', ev => {
  if (ev.target.href) {
    ev.preventDefault()
    shell.openExternal(ev.target.href)
  }
})
