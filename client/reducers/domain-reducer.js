import { typeDecrement, typeIncrement, typeReset } from '../constants/action-constants'

const INITIAL_VALUE = 0

const initialState = {
  value: INITIAL_VALUE
}

const decrement = state => Object.assign({}, state, {value: state.value - 1})
const increment = state => Object.assign({}, state, {value: state.value + 1})
const reset = state => Object.assign({}, state, {value: INITIAL_VALUE})
export default function (state = initialState, action) {
  switch (action.type) {
    case typeDecrement:
      return decrement(state)
    case typeIncrement:
      return increment(state)
    case typeReset:
      return reset(state)
    default:
      return state
  }
}
