import { typeDeleteCharacter, typeLoadCharacters, typePutCharacter } from '../constants/action-constants'

export function deleteCharacter (id) {
  return {
    type: typeDeleteCharacter,
    id
  }
}

export function loadCharacters () {
  return {
    type: typeLoadCharacters
  }
}

export function putCharacter (character) {
  return {
    type: typePutCharacter,
    character
  }
}
