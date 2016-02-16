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
  return {
    type: START_INSTANCE,
    instance
  }
}

export function stopInstance (instance) {
  return {
    type: STOP_INSTANCE,
    instance
  }
}

export function deleteInstance (instance) {
  return {
    type: DELETE_INSTANCE,
    instance
  }
}
