import { typeSetCharacters } from '../constants/action-constants'

const initialState = {
  characters: []
}

const setCharacters = (state, characters) => Object.assign({}, state, {characters})

export default function (state = initialState, action) {
  switch (action.type) {
    case typeSetCharacters:
      return setCharacters(state, action.characters)
    default:
      return state
  }
}
