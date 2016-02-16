import { ipcRenderer as ipc } from 'electron'

export const ADD_INSTANCE = 'ADD_INSTANCE'
export const START_INSTANCE = 'START_INSTANCE'
export const STOP_INSTANCE = 'STOP_INSTANCE'
export const DELETE_INSTANCE = 'DELETE_INSTANCE'

export function addInstance (opts) {
  return function (dispatch) {
    ipc.send('add-instance')
    ipc.once('add-instance', (event, instance) => {
      dispatch({
        type: ADD_INSTANCE,
        instance
      })
    })
  }
}

export function startInstance (instance) {
  return function (dispatch) {
    ipc.send('start-instance', instance)
    ipc.once('start-instance', (event, dir) => {
      dispatch({
        type: START_INSTANCE,
        dir
      })
    })
  }
}

export function stopInstance (instance) {
  return function (dispatch) {
    ipc.send('stop-instance', instance)
    ipc.once('stop-instance', (event, dir) => {
      dispatch({
        type: STOP_INSTANCE,
        dir
      })
    })
  }
}

export function deleteInstance (instance) {
  return function (dispatch) {
    ipc.send('delete-instance', instance)
    ipc.once('delete-instance', (event, dir) => {
      dispatch({
        type: DELETE_INSTANCE,
        dir
      })
    })
  }
}
