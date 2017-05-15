import { typeDecrement, typeIncrement, typeRandom, typeReset } from '../constants/action-constants'

export function decrement () {
  return {
    type: typeDecrement
  }
}

export function increment () {
  return {
    type: typeIncrement
  }
}

export function random () {
  return {
    type: typeRandom
  }
}

export function reset () {
  return {
    type: typeReset
  }
}
