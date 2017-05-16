import { typeDecrement, typeIncrement, typeLoadDomains, typeRandom, typeReset, typeSetDomains } from '../constants/action-constants'

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

export function loadDomains () {
  return {
    type: typeLoadDomains
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

export function setDomains (domains) {
  return {
    type: typeSetDomains,
    domains: domains
  }
}
