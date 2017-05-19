import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import domain from '../reducers/domain-reducer'
import characters from '../reducers/characters-reducer'

export default combineReducers({
  routing: routerReducer,
  characters,
  domain
})
