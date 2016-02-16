import { combineReducers } from 'redux'
import { ADD_INSTANCE } from '../actions'

let instancesList = function (state = {
  instances: []
}, action) {
  switch (action.type) {
    case ADD_INSTANCE:
      return {
        ...state,
        instances: [...state.instances, action.instance]
      }
    default:
      return state
  }
}

let rootReducer = combineReducers({
  instancesList
})

export default rootReducer
