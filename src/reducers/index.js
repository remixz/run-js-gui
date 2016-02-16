import { combineReducers } from 'redux'
import { ADD_INSTANCE, START_INSTANCE, STOP_INSTANCE, DELETE_INSTANCE } from '../actions'

let instancesList = function (state = {
  instances: []
}, action) {
  switch (action.type) {
    case ADD_INSTANCE:
      return {
        ...state,
        instances: [...state.instances, action.instance]
      }
      break
    case START_INSTANCE:
      let instanceIndex = state.instances.findIndex(i => i.dir === action.dir)
      state.instances[instanceIndex].running = true
      return {
        ...state,
        instances: [...state.instances]
      }
      break
    case STOP_INSTANCE:
      instanceIndex = state.instances.findIndex(i => i.dir === action.dir)
      state.instances[instanceIndex].running = false
      return {
        ...state,
        instances: [...state.instances]
      }
      break
    case DELETE_INSTANCE:
      instanceIndex = state.instances.findIndex(i => i.dir === action.dir)
      state.instances.splice(instanceIndex, 1)
      return {
        ...state,
        instances: [...state.instances]
      }
      break
    default:
      return state
  }
}

let rootReducer = combineReducers({
  instancesList
})

export default rootReducer
